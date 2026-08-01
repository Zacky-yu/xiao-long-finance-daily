// ═══════════════════════════════════════════════
// 小龙财经日报 · industry-news-fetch.js
// 抓取 12 赛道 108 个 RSS 源 → 标题翻译(中英对照) → industry-news.json
// 由 GitHub Actions 每30分钟自动运行
// ═══════════════════════════════════════════════

const fs = require('fs');
const path = require('path');

const SRC_FILE = path.join(__dirname, 'sources.json');

// ─── 翻译配置 ───
const TRANSLATE_API = 'https://translate.googleapis.com/translate_a/single';
const TRANS_CONCURRENCY = 6;        // 并发翻译数
const TRANS_RETRY = 3;              // 失败重试次数
const CACHE_FILE = path.join(__dirname, 'translate-cache.json'); // 标题→中文 缓存
const SKIP_TRANSLATE = process.env.SKIP_TRANSLATE === '1';       // 本地调试用

// ─── 读取翻译缓存 ───
function loadCache() {
  try { return JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8')); }
  catch (e) { return {}; }
}
function saveCache(cache) {
  // 只保留最近 2000 条，防止无限膨胀
  const keys = Object.keys(cache);
  if (keys.length > 2000) {
    const sorted = keys.sort((a, b) => cache[b].ts - cache[a].ts);
    for (const k of sorted.slice(0, keys.length - 2000)) delete cache[k];
  }
  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache), 'utf8');
}

// ─── 判断是否含中文（中文源跳过翻译）───
function hasChinese(s) { return /[\u4e00-\u9fff]/.test(s); }

// ─── 单条翻译（带重试）───
async function translateOne(text, cache) {
  if (!text || hasChinese(text)) return text;           // 中文源不需要翻译
  if (cache[text]) { cache[text].ts = Date.now(); return cache[text].zh; } // 命中缓存
  const q = encodeURIComponent(text.slice(0, 500));
  const url = `${TRANSLATE_API}?client=gtx&sl=auto&tl=zh-CN&dt=t&q=${q}`;
  for (let attempt = 1; attempt <= TRANS_RETRY; attempt++) {
    try {
      const resp = await fetch(url);
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      const data = await resp.json();
      let zh = '';
      if (Array.isArray(data) && Array.isArray(data[0])) {
        for (const seg of data[0]) if (seg && seg[0]) zh += seg[0];
      }
      zh = zh.trim();
      if (!zh) throw new Error('empty result');
      cache[text] = { zh, ts: Date.now() };
      return zh;
    } catch (e) {
      if (attempt === TRANS_RETRY) return text; // 失败返回原文
      await new Promise(r => setTimeout(r, 600 * attempt));
    }
  }
  return text;
}

// ─── 并发翻译一批 ───
async function translateAll(items, cache) {
  if (SKIP_TRANSLATE) {
    for (const it of items) it.zh = it.title;
    console.log('SKIP_TRANSLATE=1, 跳过翻译');
    return;
  }
  const todo = items.filter(it => !hasChinese(it.title) && !cache[it.title]);
  console.log(`需要翻译 ${todo.length} 条...`);
  let idx = 0;
  async function worker() {
    while (idx < todo.length) {
      const it = todo[idx++];
      it.zh = await translateOne(it.title, cache);
      await new Promise(r => setTimeout(r, 120)); // 限速防 429
    }
  }
  await Promise.all(Array.from({ length: TRANS_CONCURRENCY }, worker));
  // 已缓存的直接取
  for (const it of items) {
    if (!it.zh && !hasChinese(it.title) && cache[it.title]) it.zh = cache[it.title].zh;
    if (!it.zh) it.zh = it.title;
  }
}

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
        .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
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

// ─── 抓取单源 ───
async function pull(s, cfg) {
  const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36';
  const timeout = (cfg.timeout || 15) * 1000;
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), timeout);
    const resp = await fetch(s.url, { headers: { 'User-Agent': ua }, signal: ctrl.signal });
    clearTimeout(timer);
    if (!resp.ok) throw new Error('HTTP ' + resp.status);
    const xml = await resp.text();
    const all = parseRss(xml);
    const cutoff = Date.now() - (cfg.recent_days || 7) * 86400000;
    const items = all
      .filter(it => { const t = new Date(it.pubDate).getTime(); return t && t >= cutoff; })
      .slice(0, cfg.per_source || 6)
      .map(it => ({ title: it.title, link: it.link, pubDate: it.pubDate, summary: it.description.slice(0, 300), source: s.name }));
    return { name: s.name, items };
  } catch (e) {
    return { name: s.name, items: [], error: e.message };
  }
}

// ─── 主流程 ───
async function main() {
  const src = JSON.parse(fs.readFileSync(SRC_FILE, 'utf8'));
  const cfg = src.fetch || {};
  const cache = loadCache();

  console.log(`📡 行业资讯抓取: ${src.sources.length} 个源, ${src.industries.length} 个赛道`);

  // 分批并发抓取（15 并发）
  const results = [];
  const batchSize = 15;
  for (let i = 0; i < src.sources.length; i += batchSize) {
    const batch = src.sources.slice(i, i + batchSize);
    const outs = await Promise.all(batch.map(s => pull(s, cfg)));
    for (const o of outs) {
      if (o.error) console.log('  ✗ FAIL ' + o.name + ': ' + o.error);
      else if (o.items.length) console.log('  ✓ ' + o.items.length + ' ' + o.name);
      results.push(...o.items);
    }
  }

  // 去重（按标题前 60 字符）
  const seen = new Set();
  const uniq = results.filter(i => {
    const k = (i.title || '').slice(0, 60);
    if (seen.has(k)) return false;
    seen.add(k); return true;
  });
  uniq.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
  console.log(`\n共 ${results.length} 条, 去重后 ${uniq.length} 条`);

  // 翻译（只翻译将要展示的，每赛道最多 30 条）
  const srcMap = {};
  src.sources.forEach(s => { srcMap[s.name] = s.hint; });
  const indData = src.industries.map(ind => ({
    key: ind.key, name: ind.name, accent: ind.accent,
    total: src.sources.filter(s => s.hint === ind.key).length,
    items: uniq.filter(i => srcMap[i.source] === ind.key).slice(0, 30),
  }));
  const toTranslate = indData.flatMap(ind => ind.items);
  await translateAll(toTranslate, cache);
  saveCache(cache);

  const out = {
    generated_at: new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' }),
    recent_days: cfg.recent_days || 7,
    industries: indData,
  };

  // 输出 JSON（前端用）
  fs.writeFileSync(path.join(__dirname, 'industry-news.json'), JSON.stringify(out, null, 1), 'utf8');
  // 同时输出 data.js 兼容格式（可选，供直接复用 investment-news 页面）
  fs.writeFileSync(path.join(__dirname, 'industry-data.js'),
    '// industry-data.js - auto-generated\nwindow.INDUSTRY_DATA = ' + JSON.stringify(out, null, 1) + ';\n', 'utf8');

  const withZh = out.industries.reduce((n, ind) => n + ind.items.filter(i => i.zh && i.zh !== i.title).length, 0);
  console.log(`✅ industry-news.json 已生成 (${uniq.length} 条, 其中 ${withZh} 条已翻译)`);
}

main().catch(e => { console.error('FATAL:', e); process.exit(1); });
