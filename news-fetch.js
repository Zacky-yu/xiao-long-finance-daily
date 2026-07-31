// ═══════════════════════════════════════════════
// 小龙财经日报 · news-fetch.js
// 抓取市场新闻 RSS → 生成 news-cache.json
// 由 GitHub Actions 每30分钟自动运行
// ═══════════════════════════════════════════════

const fs = require('fs');
const path = require('path');

const SOURCES = [
  {
    name: 'MarketWatch',
    url: 'https://feeds.content.dowjones.io/public/rss/mw_topstories',
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36',
  },
  {
    name: 'MarketWatchMarketPulse',
    url: 'https://feeds.content.dowjones.io/public/rss/mw_marketpulse',
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36',
  },
];

// ─── 分类规则（参考 TOOLS.md 关键词体系）───
const CATEGORIES = [
  {
    key: '半导体',
    score: 3,
    words: ['chip', 'semiconductor', 'nvidia', 'tsmc', 'smic', 'asic', 'hbm', 'memory chip', 'ai server', 'dram', 'nand', 'foundry', 'chipmaker'],
  },
  {
    key: '黄金白银',
    score: 2,
    words: ['gold', 'xau', 'silver', 'xag', 'bullion', 'precious metal', 'gold price', 'silver price'],
  },
  {
    key: '美股市场',
    score: 1,
    words: ['stock', 'stocks', 'market', 'fed', 'fomc', 'oil', 'crude', 'nasdaq', 'dow jones', 's&p 500', 'treasury', 'yield', 'inflation', 'cpi', 'nonfarm', 'jobs report', 'tariff', 'dollar'],
  },
];

const FED_WORDS = ['fed', 'fomc', 'powell', 'rate cut', 'interest rate', 'federal reserve'];

// ─── 解析 RSS ───
function parseRss(xml) {
  const items = [];
  const itemRe = /<item>([\s\S]*?)<\/item>/g;
  let m;
  while ((m = itemRe.exec(xml))) {
    const block = m[1];
    const get = (tag) => {
      const r = new RegExp('<' + tag + '>([\\s\\S]*?)</' + tag + '>');
      const mm = block.match(r);
      if (!mm) return '';
      return mm[1]
        .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
        .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCodePoint(parseInt(h, 16)))
        .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(parseInt(n, 10)))
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .trim();
    };
    const title = get('title');
    const link = get('link');
    const pubDate = get('pubDate');
    const description = get('description').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (title && link) items.push({ title, link, pubDate, description });
  }
  return items;
}

// ─── 分类 ───
function categorize(item) {
  const text = (item.title + ' ' + (item.description || '')).toLowerCase();

  // FED 动态单独标记
  if (FED_WORDS.some(w => text.includes(w))) {
    return { source: 'FED', category: '美联储' };
  }

  let best = { key: '全球综合', score: 0 };
  for (const cat of CATEGORIES) {
    let s = 0;
    for (const w of cat.words) if (text.includes(w)) s += cat.score;
    if (s > best.score) best = { key: cat.key, score: s };
  }
  return { source: 'US', category: best.key };
}

// ─── 去重（按标题）───
function dedupe(items) {
  const seen = new Set();
  return items.filter(it => {
    const k = it.title.toLowerCase().replace(/\s+/g, '');
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

// ─── 主流程 ───
async function main() {
  console.log('📡 开始抓取新闻...');
  const all = [];

  for (const src of SOURCES) {
    try {
      console.log(`  抓取 ${src.name} ...`);
      const resp = await fetch(src.url, {
        headers: { 'User-Agent': src.ua, 'Accept': 'application/rss+xml, application/xml, text/xml, */*' },
      });
      if (!resp.ok) { console.log(`  ✗ HTTP ${resp.status}`); continue; }
      const xml = await resp.text();
      const items = parseRss(xml);
      console.log(`  ✓ ${items.length} 条`);
      for (const it of items) {
        it.sourceName = src.name;
        all.push(it);
      }
    } catch (e) {
      console.log('  ✗ 失败: ' + e.message);
    }
  }

  const deduped = dedupe(all);
  console.log(`\n共 ${all.length} 条，去重后 ${deduped.length} 条`);

  // 分类 + 排序（时间新→旧）
  const items = deduped.map(it => ({
    title: it.title,
    link: it.link,
    pubDate: it.pubDate,
    content: it.description ? it.description.substring(0, 300) : '',
    ...categorize(it),
  })).sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

  const output = {
    generatedAt: new Date().toISOString(),
    count: items.length,
    items: items.slice(0, 30),
  };

  fs.writeFileSync(path.join(__dirname, 'news-cache.json'), JSON.stringify(output, null, 2), 'utf8');
  console.log(`✅ news-cache.json 已生成 (${output.items.length} 条)`);
}

main().catch(e => { console.error('FATAL:', e); process.exit(1); });
