#!/usr/bin/env node
// ═══════════════════════════════════════════════
// 小龙财经日报 · daily-update.js
// 交互式更新：市场动向 + 基金博主操作
// 用法: node daily-update.js
// ═══════════════════════════════════════════════

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const today = new Date().toISOString().split('T')[0];
const BASE_DIR = __dirname;

function ask(q) {
  return new Promise(resolve => rl.question(q, resolve));
}

function loadJson(file) {
  const p = path.join(BASE_DIR, file);
  if (fs.existsSync(p)) {
    try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return null; }
  }
  return null;
}

function saveJson(file, data) {
  fs.writeFileSync(path.join(BASE_DIR, file), JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log(`✅ 已保存: ${file}\n`);
}

// ─── 市场动向更新 ───
async function updateMarketTrend() {
  console.log('\n═══════════════════════════════════════════════');
  console.log('📊 市场动向更新');
  console.log('═══════════════════════════════════════════════\n');

  let data = loadJson('market-trend.json');
  if (!data) {
    data = { date: today, trends: [] };
  }
  data.date = today;

  const categories = [
    { name: '大盘指数', market: 'A股' },
    { name: '半导体', market: 'A股' },
    { name: '黄金', market: '国际' },
    { name: '白银', market: '国际' },
    { name: '新能源', market: 'A股' },
    { name: '消费', market: 'A股' },
    { name: '医药', market: 'A股' },
    { name: '军工', market: 'A股' },
  ];

  for (const cat of categories) {
    const hasExisting = data.trends.find(t => t.category === cat.name);
    const skip = hasExisting ? await ask(`[${cat.name}] 已有数据，跳过? (y/n，默认y): `) : 'n';
    if (skip.toLowerCase() === 'y' || skip === '') continue;

    console.log(`\n── ${cat.name} ──`);
    const trend = await ask('  趋势 (上行/下行/震荡/企稳/突破/回调): ');
    if (!trend.trim()) { console.log('  跳过'); continue; }

    const desc = await ask('  描述: ');
    const factors = [];
    while (true) {
      const fText = await ask('  影响因素 (回车结束): ');
      if (!fText.trim()) break;
      const fImpact = await ask('    影响方向 (positive/negative/neutral): ');
      factors.push({ text: fText.trim(), impact: fImpact.trim() || 'neutral' });
    }

    const idx = data.trends.findIndex(t => t.category === cat.name);
    const entry = {
      category: cat.name,
      market: cat.market,
      trend: trend.trim(),
      description: desc.trim(),
      factors,
    };
    if (idx >= 0) data.trends[idx] = entry;
    else data.trends.push(entry);
  }

  saveJson('market-trend.json', data);
}

// ─── 基金博主更新 ───
async function updateBloggers() {
  console.log('\n═══════════════════════════════════════════════');
  console.log('👥 基金博主今日操作更新');
  console.log('═══════════════════════════════════════════════\n');

  let data = loadJson('fund-bloggers.json');
  if (!data) {
    data = { date: today, bloggers: [] };
  }
  data.date = today;

  const defaultBloggers = [
    { name: '龙行天下虎', platform: '天天基金', avatar: '🐉', followerTag: '百万实盘', sentiment: '偏多' },
    { name: '大叔百万养基', platform: '天天基金', avatar: '🧔', followerTag: '稳健型', sentiment: '中性' },
    { name: '天天理财日记', platform: '天天基金', avatar: '📓', followerTag: '成长型', sentiment: '偏多' },
  ];

  // Ensure all default bloggers exist
  for (const db of defaultBloggers) {
    if (!data.bloggers.find(b => b.name === db.name)) {
      data.bloggers.push({ ...db, operations: [], summary: '' });
    }
  }

  for (const blogger of data.bloggers) {
    console.log(`\n── ${blogger.avatar} ${blogger.name} ──`);
    const skip = await ask('  跳过此博主? (y/n，默认n): ');
    if (skip.toLowerCase() === 'y') continue;

    blogger.operations = [];
    while (true) {
      const fund = await ask('  基金名称 (回车结束): ');
      if (!fund.trim()) break;
      const action = await ask('    操作 (加仓/减仓/持有/观望/定投): ');
      const amount = await ask('    金额/数量 (可选，回车跳过): ');
      const reason = await ask('    理由: ');
      blogger.operations.push({
        fund: fund.trim(),
        action: action.trim(),
        amount: amount.trim(),
        reason: reason.trim(),
      });
    }

    const summary = await ask('  今日总结一句话: ');
    if (summary.trim()) blogger.summary = summary.trim();

    const sentiment = await ask('  情绪 (偏多/中性/偏空): ');
    if (sentiment.trim()) blogger.sentiment = sentiment.trim();
  }

  saveJson('fund-bloggers.json', data);
}

// ─── 批量快速更新模式 ───
async function quickUpdate() {
  console.log('\n═══════════════════════════════════════════════');
  console.log('⚡ 快速更新模式');
  console.log('═══════════════════════════════════════════════\n');

  // Market trends quick fill
  let mt = loadJson('market-trend.json') || { date: today, trends: [] };
  mt.date = today;

  const quickTrends = [
    { cat: '大盘指数', market: 'A股' },
    { cat: '半导体', market: 'A股' },
    { cat: '黄金', market: '国际' },
    { cat: '新能源', market: 'A股' },
    { cat: '消费', market: 'A股' },
  ];

  for (const qt of quickTrends) {
    const trend = await ask(`[${qt.cat}] 趋势 (上行/下行/震荡/企稳/突破/回调，回车跳过): `);
    if (!trend.trim()) continue;
    const desc = await ask(`  描述: `);
    const idx = mt.trends.findIndex(t => t.category === qt.cat);
    const entry = {
      category: qt.cat,
      market: qt.market,
      trend: trend.trim(),
      description: desc.trim(),
      factors: [],
    };
    if (idx >= 0) mt.trends[idx] = entry;
    else mt.trends.push(entry);
  }
  saveJson('market-trend.json', mt);

  // Bloggers quick fill
  let bg = loadJson('fund-bloggers.json') || { date: today, bloggers: [] };
  bg.date = today;

  const names = ['龙行天下虎', '大叔百万养基', '天天理财日记'];
  for (const name of names) {
    let blogger = bg.bloggers.find(b => b.name === name);
    if (!blogger) {
      const defaults = {
        '龙行天下虎': { avatar: '🐉', followerTag: '百万实盘' },
        '大叔百万养基': { avatar: '🧔', followerTag: '稳健型' },
        '天天理财日记': { avatar: '📓', followerTag: '成长型' },
      };
      blogger = { name, platform: '天天基金', ...defaults[name], sentiment: '中性', operations: [], summary: '' };
      bg.bloggers.push(blogger);
    }

    const ops = await ask(`\n[${name}] 今日操作 (例: 半导体ETF+加仓+2000元+回调布局; 回车跳过): `);
    if (ops.trim()) {
      blogger.operations = [];
      const parts = ops.split(';').filter(Boolean);
      for (const part of parts) {
        const [fund, action, amount, reason] = part.split('+').map(s => s.trim());
        if (fund && action) {
          blogger.operations.push({ fund, action, amount: amount || '', reason: reason || '' });
        }
      }
    }

    const summary = await ask(`  总结: `);
    if (summary.trim()) blogger.summary = summary.trim();

    const sentiment = await ask(`  情绪 (偏多/中性/偏空): `);
    if (sentiment.trim()) blogger.sentiment = sentiment.trim();
  }
  saveJson('fund-bloggers.json', bg);
}

// ─── Main ───
async function main() {
  console.log('\n🐉 小龙财经日报 — 每日数据维护');
  console.log('═══════════════════════════════════════════════');
  console.log('1. 完整更新市场动向');
  console.log('2. 完整更新基金博主操作');
  console.log('3. 全部完整更新 (1+2)');
  console.log('4. ⚡ 快速更新模式 (推荐)');
  console.log('0. 退出');
  console.log('═══════════════════════════════════════════════');

  const choice = await ask('\n选择: ');

  switch (choice.trim()) {
    case '1':
      await updateMarketTrend();
      break;
    case '2':
      await updateBloggers();
      break;
    case '3':
      await updateMarketTrend();
      await updateBloggers();
      break;
    case '4':
      await quickUpdate();
      break;
    case '0':
      console.log('再见 👋');
      break;
    default:
      console.log('无效选择');
  }

  rl.close();
}

main().catch(console.error);
