// ═══════════════════════════════════════════════
// 小龙财经日报 · fetch.js — 市场行情 + 板块分析 + 多源新闻
// ═══════════════════════════════════════════════

let lastData = null;
let autoTimer = null;
let volumeHistory = [];
let spotPm = { gold: null, silver: null };

// ─── Parse Tencent ───
function parseTencentLine(line, expectedFields) {
  const m = line.match(/v_[^=]+="([^"]+)"/);
  if (!m) return null;
  const parts = m[1].split('~');
  const item = {};
  for (const [key, idx] of Object.entries(expectedFields)) {
    item[key] = parts[idx] || '';
  }
  return item;
}

// ─── Parse Tencent hf_ (international forex/commodity) format ───
// Format: price,%change,open,high,low,time,prevClose,?,0,0,0,date,name
function parseHfLine(line) {
  const m = line.match(/v_[^=]+="([^"]+)"/);
  if (!m) return null;
  const parts = m[1].split(',');
  if (parts.length < 14) return null;
  return {
    price: parseFloat(parts[0]) || 0,
    changePct: parseFloat(parts[1]) || 0,
    open: parseFloat(parts[2]) || 0,
    high: parseFloat(parts[4]) || 0,
    low: parseFloat(parts[5]) || 0,
    time: parts[6],
    prevClose: parseFloat(parts[7]) || 0,
    date: parts[12] || '',
    name: parts[13] || '',
  };
}

// ─── Fetch from Tencent ───
async function fetchTencent(qry) {
  const resp = await fetch('https://qt.gtimg.cn/q=' + qry);
  const buf = await resp.arrayBuffer();
  const decoder = new TextDecoder('gbk');
  return decoder.decode(buf);
}

// ─── Fetch All Data ───
async function fetchAll() {
  try {
    const [indicesRaw, etfsRaw, stocksRaw, goldEtfRaw, spotRaw] = await Promise.all([
      fetchTencent('sh000001,sh000688,sh000016,sz399001,sz399006,sz399005'),
      fetchTencent('sz159995,sh512480,sh512760,sz159813,sz159997,sh512100,sz159841,sh512010,sh512660,sh512880,sh588000,sh515700'),
      fetchTencent('sh688981,sh688012,sh688008,sh688126,sh603986,sh600703,sh600171,sh688019,sh688200,sh688018,sh688072,sh688041,sh688256,sh600460'),
      fetchTencent('sh518880,sh518800'),
      fetchTencent('hf_XAU,hf_XAG'),
    ]);

    // Try news cache
    let newsData = null;
    try {
      const newsResp = await fetch('./news-cache.json?v=' + Date.now());
      if (newsResp.ok) newsData = await newsResp.json();
    } catch(e) { /* ignore */ }

    // Try industry news cache (12赛道 108源 + 翻译)
    let industryData = null;
    try {
      const indResp = await fetch('./industry-news.json?v=' + Date.now());
      if (indResp.ok) industryData = await indResp.json();
    } catch(e) { /* ignore */ }

    // Try static dashboard sections (fed / strategy / tomorrow) — data-driven
    let dashboardStatic = null;
    try {
      const dsResp = await fetch('./dashboard-static.json?v=' + Date.now());
      if (dsResp.ok) dashboardStatic = await dsResp.json();
    } catch(e) { /* ignore */ }

    // Parse indices
    const indices = indicesRaw.split('\n').filter(Boolean).map(line => {
      const p = parseTencentLine(line, { name: 1, code: 2, price: 3, change: 31, changePct: 32, high: 33, low: 34, open: 5, volume: 6, turnover: 7 });
      return p ? {
        name: p.name, code: p.code,
        price: parseFloat(p.price) || 0,
        change: parseFloat(p.change) || 0,
        changePct: parseFloat(p.changePct) || 0,
        high: parseFloat(p.high) || 0,
        low: parseFloat(p.low) || 0,
        open: parseFloat(p.open) || 0,
        volume: parseFloat(p.volume) || 0,
        turnover: parseFloat(p.turnover) || 0,
      } : null;
    }).filter(Boolean);

    // Volume history
    const shIdx = indices.find(i => i.code === '000001');
    if (shIdx && shIdx.volume > 0) {
      volumeHistory.push({ time: Date.now(), volume: shIdx.volume, turnover: shIdx.turnover });
      if (volumeHistory.length > 20) volumeHistory.shift();
    }

    // Parse ETFs
    const etfs = etfsRaw.split('\n').filter(Boolean).map(line => {
      const p = parseTencentLine(line, { name: 1, code: 2, price: 3, change: 31, changePct: 32, volume: 6 });
      return p ? {
        name: p.name, code: p.code,
        price: parseFloat(p.price) || 0,
        change: parseFloat(p.change) || 0,
        changePct: parseFloat(p.changePct) || 0,
        volume: parseFloat(p.volume) || 0,
      } : null;
    }).filter(Boolean);

    // Parse stocks
    const stocks = stocksRaw.split('\n').filter(Boolean).map(line => {
      const p = parseTencentLine(line, { name: 1, code: 2, price: 3, change: 31, changePct: 32, high: 33, low: 34, open: 5 });
      return p ? {
        name: p.name, code: p.code,
        price: parseFloat(p.price) || 0,
        changePct: parseFloat(p.changePct) || 0,
        change: parseFloat(p.change) || 0,
        high: parseFloat(p.high) || 0,
        low: parseFloat(p.low) || 0,
        open: parseFloat(p.open) || 0,
      } : null;
    }).filter(Boolean);

    // Parse gold ETFs (中国国内黄金ETF)
    const goldEtfs = goldEtfRaw.split('\n').filter(Boolean).map(line => {
      const p = parseTencentLine(line, { name: 1, code: 2, price: 3, change: 31, changePct: 32 });
      return p ? {
        name: p.name, code: p.code,
        price: parseFloat(p.price) || 0,
        change: parseFloat(p.change) || 0,
        changePct: parseFloat(p.changePct) || 0,
      } : null;
    }).filter(Boolean);

    // Parse international spot gold/silver from hf_XAU, hf_XAG
    const spotLines = spotRaw.split('\n').filter(Boolean);
    const spotGold = parseHfLine(spotLines.find(l => l.includes('hf_XAU')) || '');
    const spotSilver = parseHfLine(spotLines.find(l => l.includes('hf_XAG')) || '');
    spotPm = { gold: spotGold, silver: spotSilver };

    // Parse news
    let news = [], fedEvents = [];
    if (newsData && newsData.items) {
      for (const item of newsData.items) {
        if (item.source === 'FED') fedEvents.push(item);
        else news.push(item);
      }
    }

    const data = { indices, stocks, etfs, goldEtfs, news, fedEvents, spotGold, spotSilver, industryData, dashboardStatic };
    lastData = data;
    render(data);

    document.getElementById('updateTime').textContent =
      '🕐 更新于 ' + new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' });
    document.getElementById('loading').style.display = 'none';
    document.getElementById('content').style.display = 'block';
  } catch (e) {
    console.error(e);
    document.getElementById('loading').innerHTML =
      '<div style="color:var(--up);">⚠️ 数据获取失败: ' + e.message + '</div>';
  }
}

function refreshNow() {
  const btn = document.getElementById('refreshBtn');
  btn.disabled = true; btn.textContent = '⏳ 更新中..';
  fetchAll().finally(() => { btn.disabled = false; btn.textContent = '🔄 刷新数据'; });
}

// ═══════════════════════════════════════════════
// Render
// ═══════════════════════════════════════════════
function render(data) {
  renderIndices(data.indices);
  renderSentiment(data);
  renderRateCutExpectation(data);
  renderETFs(data.etfs);
  renderStocks(data.stocks);
  renderGoldSilver(data);
  renderNewsAnalysis(data);
  renderIndustryNews(data.industryData);
  renderForeignPreview(data);
  renderTomorrowFocus(data);
  renderMarketTrend();
  renderBloggers();
  renderRecommendations(data);
  renderFedTracking(data);
  renderCentralBanks();
  applyFreshness(data);
}

// ─── Market Sentiment ───
function renderSentiment(data) {
  const el = document.getElementById('sentimentPanel');
  if (!el) return;
  const { indices, etfs } = data;

  let score = 0, count = 0;
  for (const idx of indices) {
    if (idx.changePct !== undefined) { score += idx.changePct; count++; }
  }
  const avgPct = count > 0 ? score / count : 0;

  const shIdx = indices.find(i => i.code === '000001');
  const volumeInfo = shIdx && shIdx.volume > 0
    ? '📊 ' + (shIdx.turnover > 1e11 ? (shIdx.turnover / 1e11).toFixed(2) + '千亿' : (shIdx.turnover / 1e8).toFixed(0) + '亿') + ' 成交'
    : '';

  let sentLabel, sentColor;
  if (avgPct > 1.0)   { sentLabel = '🔥 强烈看多'; sentColor = '#ef4444'; }
  else if (avgPct > 0.3) { sentLabel = '📈 偏多'; sentColor = '#f97316'; }
  else if (avgPct > -0.3){ sentLabel = '⚖️ 中性'; sentColor = '#ffc107'; }
  else if (avgPct > -1.0){ sentLabel = '📉 偏空'; sentColor = '#22c55e'; }
  else                     { sentLabel = '🧊 强烈看空'; sentColor = '#22c55e'; }

  const sectorMap = [
    { name: '半导体',     etf: etfs.find(e => e.code === '159995'), color: '#f472b6' },
    { name: '医药',       etf: etfs.find(e => e.code === '512010'), color: '#42a5f5' },
    { name: '新能源',     etf: etfs.find(e => e.code === '515700'), color: '#4fd1c5' },
    { name: '军工',       etf: etfs.find(e => e.code === '512660'), color: '#ff9800' },
    { name: '证券',       etf: etfs.find(e => e.code === '512880'), color: '#ef4444' },
    { name: '科创50',     etf: etfs.find(e => e.code === '588000'), color: '#ab47bc' },
  ];

  let sectorHtml = '';
  for (const s of sectorMap) {
    if (s.etf) {
      const pct = s.etf.changePct;
      const cls = pct >= 0 ? 'up' : 'down';
      sectorHtml += '<span class="card" style="display:inline-flex;align-items:center;gap:4px;padding:4px 8px;margin:2px;font-size:0.78em;">';
      sectorHtml += '<span style="color:' + s.color + ';">' + s.name + '</span>';
      sectorHtml += '<span class="' + cls + '">' + (pct >= 0 ? '+' : '') + pct.toFixed(2) + '%</span></span>';
    }
  }

  // Spot gold/silver snapshot in sentiment
  let spotHtml = '';
  if (spotPm.gold) {
    const gc = spotPm.gold.changePct >= 0 ? 'up' : 'down';
    spotHtml += '<span class="card" style="display:inline-flex;align-items:center;gap:4px;padding:4px 8px;margin:2px;font-size:0.78em;">';
    spotHtml += '<span style="color:var(--gold-light);">🏆 黄金</span>';
    spotHtml += '<span class="' + gc + '">$' + spotPm.gold.price.toFixed(2) + ' (' + (spotPm.gold.changePct >= 0 ? '+' : '') + spotPm.gold.changePct.toFixed(2) + '%)</span></span>';
  }
  if (spotPm.silver) {
    const sc = spotPm.silver.changePct >= 0 ? 'up' : 'down';
    spotHtml += '<span class="card" style="display:inline-flex;align-items:center;gap:4px;padding:4px 8px;margin:2px;font-size:0.78em;">';
    spotHtml += '<span style="color:var(--teal);">🥈 白银</span>';
    spotHtml += '<span class="' + sc + '">$' + spotPm.silver.price.toFixed(2) + ' (' + (spotPm.silver.changePct >= 0 ? '+' : '') + spotPm.silver.changePct.toFixed(2) + '%)</span></span>';
  }

  let html = '<div class="grid-4" style="margin-bottom:0;">';
  html += '<div class="card" style="grid-column:span 2;">';
  html += '  <div class="label">市场情绪</div>';
  html += '  <div style="font-size:1.5em;font-weight:700;color:' + sentColor + ';">' + sentLabel + '</div>';
  html += '  <div class="sub" style="color:var(--text-dim);">综合指数: ' + (avgPct >= 0 ? '+' : '') + avgPct.toFixed(2) + '%</div>';
  if (volumeInfo) html += '  <div class="sub" style="color:var(--text-muted);font-size:0.78em;">' + volumeInfo + '</div>';
  html += '</div>';
  html += '<div class="card" style="grid-column:span 2;">';
  html += '  <div class="label">板块热度</div>';
  html += '  <div style="margin-top:4px;line-height:1.8;">' + sectorHtml + '</div>';
  if (spotHtml) html += '  <div class="label" style="margin-top:8px;">国际贵金属</div><div style="line-height:1.8;">' + spotHtml + '</div>';
  html += '</div></div>';
  el.innerHTML = html;
}

// ─── Indices ───
function renderIndices(indices) {
  const grid = document.getElementById('indexGrid');
  if (!grid) return;
  let html = '';
  for (const idx of indices) {
    const cls = idx.changePct >= 0 ? 'up' : idx.changePct < 0 ? 'down' : 'flat';
    html += '<div class="card"><div class="label">' + idx.name + '</div>';
    html += '<div class="value ' + cls + '">' + idx.price.toFixed(2) + '</div>';
    html += '<div class="sub ' + cls + '">' + (idx.changePct >= 0 ? '+' : '') + idx.changePct.toFixed(2) + '%</div></div>';
  }
  grid.innerHTML = html;
}

// ─── Rate Cut Expectation ───
function renderRateCutExpectation(data) {
  const grid = document.getElementById('rateCutGrid');
  if (!grid) return;
  const fed = (data && data.dashboardStatic && data.dashboardStatic.fed) || null;
  const rate = (fed && fed.currentRate) || data.currentRate || '4.25%-4.50%';
  const schedule = (fed && fed.schedule) || data.fomcSchedule || [];
  const rateNote = (fed && fed.rateNote) || '';
  const doneCount = schedule.filter(function(s){return s.status!=='待召开';}).length;
  let html = '<div class="fed-header-card">';
  html += '<div class="fed-rate"><span class="fed-rate-label">当前联邦基金利率</span>';
  html += '<span class="fed-rate-value">' + rate + '</span>';
  html += '<span class="fed-rate-sub">2026年 · 已历' + doneCount + '次会议' + (rateNote ? ' · ' + escHtml(rateNote) : '') + '</span></div>';
  const upcoming = schedule.find(function(s){return s.status==='待召开';}) || null;
  html += '<div class="fed-next"><span class="fed-next-label">下次 FOMC</span>';
  if (upcoming) {
    const d = new Date(upcoming.date);
    const diff = Math.ceil((d - new Date()) / (1000*60*60*24));
    html += '<div class="fed-next-date">' + upcoming.label + '</div>';
    html += '<div class="fed-next-days">距离会议还有 ' + diff + ' 天</div>';
  } else {
    html += '<div class="fed-next-date" style="color:#7C8AAA;">暂无</div>';
  }
  html += '</div></div><div class="fomc-grid">';
  for (let i=0;i<schedule.length;i++) {
    const m=schedule[i], up=m.status==='待召开';
    const cls=up?'fomc-card fomc-upcoming':'fomc-card fomc-past';
    html+='<div class="'+cls+'"><div class="fomc-date">'+m.date+'</div>';
    html+='<div class="fomc-label">'+m.label+'</div>';
    html+='<div class="fomc-type">'+m.type+'</div>';
    html+='<span class="fomc-status status-'+(up?'waiting':'done')+'">'+m.status+'</span>';
    if (up) {
      const p=m.cutProb||'--', pv=parseInt((String(p).match(/\d+/)||['0'])[0],10)||0;
      const pc=pv>50?'#2EC4B6':pv>30?'#E8D48B':'#7C8AAA';
      html+='<div class="fomc-prob"><div class="fomc-prob-value" style="color:'+pc+'">'+p+'</div>';
      html+='<div class="fomc-prob-label">降息概率(隐含)</div></div>';
    }
    html+='</div>';
  }
  html+='</div>';
  const analysis = (fed && fed.analysis && fed.analysis.length) ? fed.analysis : [
    '9月FOMC是首次降息最可能的窗口，概率约45%',
    '若CPI持续回落+就业降温，11月概率有望升至70%+',
    '2Y/10Y美债深度倒挂，反映衰退担忧',
    '关注：9月CPI(9/13) → FOMC(9/16) → 非农(10/3)'
  ];
  html+='<div class="analysis-box" style="border-left-color:#F5A623;">';
  html+='<div style="color:#F5A623;font-weight:600;margin-bottom:6px;">利率路径分析</div>';
  html+=analysis.map(function(x){return escHtml(String(x).replace(/^•\s*/,''));}).join('<br>');
  html+='</div>';
  grid.innerHTML = html;
}

// ─── ETFs ───
function renderETFs(etfs) {
  const grid = document.getElementById('etfGrid');
  if (!grid) return;
  let html='';
  for(let i=0;i<etfs.length;i++){const e=etfs[i],cls=e.changePct>=0?'up':'down',arrow=e.changePct>=0?'▲':'▼';
    const vs=e.volume>0?(e.volume/10000).toFixed(0)+'万':'--';
    html+='<div class="semi-etf-card"><div class="sec-top"><span class="sec-name">'+e.name+'</span><span class="sec-code">'+e.code+'</span></div>';
    html+='<div class="sec-price-row"><span class="sec-price '+cls+'">'+e.price.toFixed(3)+'</span>';
    html+='<span class="sec-change '+cls+'">'+arrow+' '+(e.changePct>=0?'+':'')+e.changePct.toFixed(2)+'%</span></div>';
    html+='<div class="sec-vol">成交量 '+vs+'</div></div>';}
  grid.innerHTML=html;
}

// ─── Semiconductor Stocks ───
function renderStocks(stocks) {
  const el=document.getElementById('stockList');if(!el)return;
  let html='<div class="semi-stock-table"><div class="semi-stock-row ss-header"><span>名称</span><span>现价</span><span>涨跌幅</span><span>标签</span></div>';
  const tags={'688981':'芯片巨头','688012':'刻蚀设备','688008':'存储接口','688126':'封装测试','603986':'存储芯片','600703':'显示芯片','600171':'制造代工','688019':'材料龙头','688200':'测试设备','688018':'设备精兵','688072':'检测设备','688041':'设计精英','688256':'算力芯片','600460':'模拟芯片'};
  const tcs={'芯片巨头':'tag-leader','刻蚀设备':'tag-equip','存储接口':'tag-interface','封装测试':'tag-test','存储芯片':'tag-interface','显示芯片':'tag-leader','制造代工':'tag-equip','材料龙头':'tag-test','测试设备':'tag-test','设备精兵':'tag-equip','检测设备':'tag-test','设计精英':'tag-leader','算力芯片':'tag-leader','模拟芯片':'tag-interface'};
  for(let i=0;i<stocks.length;i++){const s=stocks[i],cls=s.changePct>=0?'up':'down',arrow=s.changePct>=0?'▲':'▼';
    const tag=tags[s.code]||'半导体',tc=tcs[tag]||'tag-leader';
    html+='<div class="semi-stock-row"><div class="ss-name">'+s.name+' <span class="ss-sub">'+s.code+'</span></div>';
    html+='<span class="ss-price '+cls+'">'+s.price.toFixed(2)+'</span>';
    html+='<span class="ss-change '+cls+'">'+arrow+' '+(s.changePct>=0?'+':'')+s.changePct.toFixed(2)+'%</span>';
    html+='<span class="ss-tag '+tc+'">'+tag+'</span></div>';}
  html+='</div>';el.innerHTML=html;
}

// ─── Gold & Silver (国际现货 + 国内ETF) ───
function renderGoldSilver(data) {
  const grid = document.getElementById('goldGrid');
  if (!grid) return;

  // International spot prices (实时国际现货)
  const sg = data.spotGold;
  const ss = data.spotSilver;

  // Chinese gold ETFs (国内黄金ETF，非交易时段显示昨收)
  const ge = data.goldEtfs || [];
  const etf518880 = ge.find(e => e.code === '518880');
  const etf518800 = ge.find(e => e.code === '518800');

  let html = '';

  // Card 1: 国际现货黄金
  if (sg) {
    const cls = sg.changePct >= 0 ? 'up' : 'down';
    const arrow = sg.changePct >= 0 ? '▲' : '▼';
    html += '<div class="pm-card pm-gold">';
    html += '<div class="pm-icon">🏆</div>';
    html += '<div class="pm-metal"><strong>国际现货黄金</strong> <span style="color:#5E6A8A;">XAU/USD · 实时</span></div>';
    html += '<div class="pm-price-row"><span class="pm-price">$' + sg.price.toFixed(2) + '</span>';
    html += '<span class="pm-change ' + cls + '">' + arrow + ' ' + (sg.changePct >= 0 ? '+' : '') + sg.changePct.toFixed(2) + '%</span></div>';
    html += '<div class="pm-details"><span>💰 昨收 $' + sg.prevClose.toFixed(2) + '</span><span>📈 高 $' + sg.high.toFixed(2) + '</span><span>📉 低 $' + sg.low.toFixed(2) + '</span></div>';
    html += '</div>';
  }

  // Card 2: 国际现货白银
  if (ss) {
    const cls = ss.changePct >= 0 ? 'up' : 'down';
    const arrow = ss.changePct >= 0 ? '▲' : '▼';
    html += '<div class="pm-card pm-silver">';
    html += '<div class="pm-icon">🥈</div>';
    html += '<div class="pm-metal"><strong>国际现货白银</strong> <span style="color:#5E6A8A;">XAG/USD · 实时</span></div>';
    html += '<div class="pm-price-row"><span class="pm-price">$' + ss.price.toFixed(2) + '</span>';
    html += '<span class="pm-change ' + cls + '">' + arrow + ' ' + (ss.changePct >= 0 ? '+' : '') + ss.changePct.toFixed(2) + '%</span></div>';
    html += '<div class="pm-details"><span>💰 昨收 $' + ss.prevClose.toFixed(2) + '</span><span>📈 高 $' + ss.high.toFixed(2) + '</span><span>📉 低 $' + ss.low.toFixed(2) + '</span></div>';
    html += '</div>';
  }

  // Card 3: 国内黄金ETF
  if (etf518880) {
    const cls = etf518880.changePct >= 0 ? 'up' : 'down';
    const arrow = etf518880.changePct >= 0 ? '▲' : '▼';
    html += '<div class="pm-card" style="border-color:rgba(201,168,76,0.15);border-left:3px solid var(--gold);">';
    html += '<div class="pm-icon">🏛️</div>';
    html += '<div class="pm-metal"><strong>' + etf518880.name + '</strong> <span style="color:#5E6A8A;">' + etf518880.code + ' · 国内</span></div>';
    html += '<div class="pm-price-row"><span class="pm-price" style="color:var(--gold-light);">¥' + etf518880.price.toFixed(3) + '</span>';
    html += '<span class="pm-change ' + cls + '">' + arrow + ' ' + (etf518880.changePct >= 0 ? '+' : '') + etf518880.changePct.toFixed(2) + '%</span></div>';
    // Estimate CNY/g from ETF: each share = 0.01g
    const cnyPerGram = (etf518880.price / 0.01);
    html += '<div class="pm-details"><span>≈ ¥' + cnyPerGram.toFixed(1) + '/g</span><span>🏪 沪市ETF</span></div>';
    html += '</div>';
  }

  // Card 4: 国内黄金ETF (518800 - was mislabeled as silver before)
  if (etf518800) {
    const cls = etf518800.changePct >= 0 ? 'up' : 'down';
    const arrow = etf518800.changePct >= 0 ? '▲' : '▼';
    html += '<div class="pm-card" style="border-color:rgba(201,168,76,0.15);border-left:3px solid var(--gold-dark);">';
    html += '<div class="pm-icon">🏛️</div>';
    html += '<div class="pm-metal"><strong>' + etf518800.name + '</strong> <span style="color:#5E6A8A;">' + etf518800.code + ' · 国内</span></div>';
    html += '<div class="pm-price-row"><span class="pm-price" style="color:var(--gold-light);">¥' + etf518800.price.toFixed(3) + '</span>';
    html += '<span class="pm-change ' + cls + '">' + arrow + ' ' + (etf518800.changePct >= 0 ? '+' : '') + etf518800.changePct.toFixed(2) + '%</span></div>';
    const cnyPerGram2 = (etf518800.price / 0.01);
    html += '<div class="pm-details"><span>≈ ¥' + cnyPerGram2.toFixed(1) + '/g</span><span>🏪 沪市ETF</span></div>';
    html += '</div>';
  }

  // If no data at all
  if (!sg && !ss && !etf518880) {
    html += '<div class="card" style="grid-column:1/-1;text-align:center;padding:30px;">';
    html += '<span style="color:var(--text-muted);">暂无贵金属数据</span></div>';
  }

  grid.innerHTML = html;
}

// ─── 全球央行黄金持仓 (WGC / IMF IFS) ───
async function renderCentralBanks() {
  const el = document.getElementById('cbPanel');
  if (!el) return;

  let d = null;
  try {
    const resp = await fetch('./central-banks.json?v=' + Date.now());
    if (resp.ok) d = await resp.json();
  } catch (e) { /* ignore */ }

  if (!d || !d.world) {
    el.innerHTML = '<div style="font-size:0.82em;color:var(--text-dim);padding:12px;">暂无央行黄金数据（等待 Actions 生成 central-banks.json）</div>';
    setFresh('freshCb', '无数据', 'stale');
    return;
  }
  setFresh('freshCb', (d.as_of_label ? '数据 ' + d.as_of_label + ' · ' : '') + (d.generated_at ? '更新于 ' + d.generated_at : ''), 'live');

  const w = d.world;
  const num = (n, dp) => Number(n).toLocaleString('zh-CN', { minimumFractionDigits: dp || 0, maximumFractionDigits: dp || 0 });
  const plus = (n, dp) => (n >= 0 ? '+' : '') + num(n, dp);
  const buy = w.direction === 'buy';
  const dirCls = buy ? 'buy' : 'sell';
  const meterPct = { 'strong-buy': 100, 'buy': 72, 'mild-buy': 42, 'flat': 12, 'mild-sell': 42, 'sell': 72, 'strong-sell': 100 }[w.strength.level] || 12;
  const hist = d.history || [];
  const maxAbs = Math.max(1, ...hist.map(h => Math.abs(h.net_wan_oz)));
  const cov = d.coverage || {};

  let html = '';

  // ── 顶部统计卡 ──
  html += '<div class="cb-stats">';

  html += '<div class="cb-stat">';
  html += '<div class="cb-label">🏦 全球央行黄金储备合计</div>';
  html += '<div class="cb-value" style="color:var(--gold-light);">' + num(w.total_tns, 0) + ' <span style="font-size:0.55em;color:var(--text-muted);">吨</span></div>';
  html += '<div class="cb-sub">≈ ' + num(w.total_wan_oz, 0) + ' 万盎司 · 覆盖 ' + (cov.universe || 0) + ' 家央行（各国最新可得）</div>';
  html += '</div>';

  html += '<div class="cb-stat cb-' + dirCls + '">';
  html += '<div class="cb-label">📊 本季净增减 · ' + escHtml(d.as_of_label || '') + '</div>';
  html += '<div class="cb-value ' + dirCls + '">' + plus(w.net_wan_oz, 1) + ' <span style="font-size:0.5em;color:var(--text-muted);">万盎司</span></div>';
  html += '<div class="cb-sub">' + plus(w.net_tns, 1) + ' 吨 · ' + plus(w.net_pct, 2) + '% · ' + (w.reporters || 0) + ' 家可比口径</div>';
  html += '</div>';

  html += '<div class="cb-stat cb-' + dirCls + '">';
  html += '<div class="cb-label">⚖️ 增持 / 减持力度</div>';
  html += '<div class="cb-value ' + dirCls + '" style="font-size:1.15em;">' + escHtml(w.strength.text) + '</div>';
  html += '<div class="cb-meter"><div class="cb-meter-fill ' + dirCls + '" style="width:' + meterPct + '%;"></div></div>';
  html += '<div class="cb-sub" style="margin-top:6px;">环比净持变化 ' + plus(w.net_pct, 2) + '%（' + escHtml((d.prev_label || '') + ' → ' + (d.as_of_label || '')) + '）</div>';
  html += '</div>';

  html += '</div>';

  // ── 趋势条 ──
  if (hist.length) {
    html += '<div class="cb-trend"><div class="cb-trend-title">📈 近 ' + hist.length + ' 季世界央行黄金净增减（万盎司）</div>';
    for (const h of hist) {
      const cls = h.net_wan_oz >= 0 ? 'buy' : 'sell';
      const width = Math.max(2, Math.round(Math.abs(h.net_wan_oz) / maxAbs * 100));
      html += '<div class="cb-bar-row">';
      html += '<span class="cb-bar-label">' + escHtml(h.label) + '</span>';
      html += '<span class="cb-bar-wrap"><span class="cb-bar ' + cls + '" style="width:' + width + '%;"></span></span>';
      html += '<span class="cb-bar-val ' + cls + '">' + plus(h.net_wan_oz, 0) + '</span>';
      html += '</div>';
    }
    html += '</div>';
  }

  // ── 增持 / 减持榜 ──
  const buyers = d.buyers || [], sellers = d.sellers || [];
  html += '<div class="cb-rank-grid">';

  html += '<div class="cb-rank"><h4><span style="color:var(--down);">🟢 增持榜</span><span style="font-size:0.8em;color:var(--text-dim);font-weight:400;">' + escHtml(d.as_of_label || '') + ' 环比</span></h4>';
  if (!buyers.length) html += '<div class="cb-empty">本季无增持记录</div>';
  buyers.forEach((b, i) => {
    html += '<div class="cb-rank-row"><span class="cb-rk">' + (i + 1) + '</span>';
    html += '<span class="cb-cty">' + escHtml(b.name) + '<span class="cb-en">' + escHtml(b.en || '') + '</span></span>';
    html += '<span class="cb-chg buy">+' + num(b.change_wan_oz, 1) + '<span class="cb-tns">+' + num(b.change_tns, 2) + ' 吨</span></span></div>';
  });
  html += '</div>';

  html += '<div class="cb-rank"><h4><span style="color:var(--up);">🔴 减持榜</span><span style="font-size:0.8em;color:var(--text-dim);font-weight:400;">' + escHtml(d.as_of_label || '') + ' 环比</span></h4>';
  if (!sellers.length) html += '<div class="cb-empty">本季无减持记录</div>';
  sellers.forEach((b, i) => {
    html += '<div class="cb-rank-row"><span class="cb-rk">' + (i + 1) + '</span>';
    html += '<span class="cb-cty">' + escHtml(b.name) + '<span class="cb-en">' + escHtml(b.en || '') + '</span></span>';
    html += '<span class="cb-chg sell">' + num(b.change_wan_oz, 1) + '<span class="cb-tns">' + num(b.change_tns, 2) + ' 吨</span></span></div>';
  });
  html += '</div>';

  html += '</div>';

  // ── 前十大持有国 ──
  const holders = d.top_holders || [];
  if (holders.length) {
    html += '<div class="cb-holders"><div class="cb-trend-title" style="margin-bottom:8px;">🏆 全球前十大持有国（万盎司）</div><div class="cb-holder-grid">';
    holders.forEach((h, i) => {
      html += '<div class="cb-holder"><span class="cb-hk">' + (i + 1) + '</span><span class="cb-hn">' + escHtml(h.name) + '</span><span class="cb-hv">' + num(h.wan_oz, 0) + '</span></div>';
    });
    html += '</div></div>';
  }

  // ── 数据说明 ──
  html += '<div class="cb-note">数据来源：' + escHtml(d.source || 'World Gold Council') + ' · 截至 ' + escHtml(d.as_of_label || '') + ' · 净增减口径：本季与上季均已上报央行之和 · 更新于 ' + escHtml(d.generated_at || '') + '</div>';

  el.innerHTML = html;
}

// ─── News Analysis ───
function renderNewsAnalysis(data) {
  const el = document.getElementById('newsAnalysis');
  if (!el) return;
  const { news, indices } = data;
  if (!news || news.length === 0) return;
  const bullish = ['rally', 'surge', 'gain', 'up', 'bullish', 'upgrade', 'growth', 'rebound', 'rise', '突破', '上涨', '利好', '反弹'];
  const bearish = ['drop', 'fall', 'decline', 'loss', 'downgrade', 'sell-off', 'crash', 'slump', '下跌', '利空', '回落', '风险', '担忧'];
  let bullCount = 0, bearCount = 0;
  for (const item of news) {
    const title = (item.title || '').toLowerCase();
    for (const w of bullish) { if (title.includes(w)) { bullCount++; break; } }
    for (const w of bearish) { if (title.includes(w)) { bearCount++; break; } }
  }
  const total = bullCount + bearCount || 1;
  const ratio = (bullCount / total * 100).toFixed(0);
  let summary = '';
  if (ratio > 60) summary = '📰 消息面偏积极，利好新闻占比 ' + ratio + '%';
  else if (ratio > 40) summary = '📰 消息面中性，多空交织';
  else summary = '📰 消息面偏谨慎，利空新闻占比 ' + (100 - parseInt(ratio)) + '%';
  const sh = indices.find(i => i.code === '000001');
  if (sh && Math.abs(sh.changePct) > 1) {
    summary += ' · 大盘' + (sh.changePct > 0 ? '强势' : '弱势') + ' (涨跌幅 ' + (sh.changePct >= 0 ? '+' : '') + sh.changePct.toFixed(2) + '%)';
  }
  el.innerHTML = '<div style="font-size:0.85em;color:var(--text-muted);padding:8px 0;">' + summary + '</div>';
}

// ─── Foreign Preview ───
function renderForeignPreview(data) {
  const el = document.getElementById('foreignPreview');
  if (!el) return;
  const usNews = (data.news || []).filter(n => n.source === 'US').slice(0, 3);
  let html = '';
  if (usNews.length > 0) {
    html += '<div style="font-size:0.85em;"><div style="color:var(--text-muted);margin-bottom:6px;">🇺🇸 隔夜市场关注</div>';
    for (const item of usNews) {
      html += '<div class="news-item" style="padding:8px 10px;"><div class="news-title" style="font-size:0.82em;"><a href="' + escHtml(item.link) + '" target="_blank">' + escHtml(item.title) + '</a></div>';
      html += '<div class="news-meta" style="font-size:0.72em;">' + formatDate(item.pubDate) + '</div></div>';
    }
    html += '</div>';
  } else {
    html = '<div style="font-size:0.82em;color:var(--text-dim);">暂无隔夜市场数据</div>';
  }
  el.innerHTML = html;
}

// ─── Tomorrow Focus ───
function renderTomorrowFocus(data) {
  const el = document.getElementById('tomorrowFocus');
  if (!el) return;
  const t = data.dashboardStatic && data.dashboardStatic.tomorrow;
  if (t && t.items && t.items.length) {
    let h = '';
    if (t.headline) h += '<div style="font-size:0.82em;color:var(--accent-light);font-weight:600;margin-bottom:6px;">🎯 ' + escHtml(t.headline) + '</div>';
    h += '<ul style="list-style:none;font-size:0.85em;padding:0;color:var(--text-muted);">';
    for (const it of t.items) {
      const txt = (typeof it === 'string') ? it : (it.text || '');
      if (txt) h += '  <li style="padding:4px 0;">• ' + escHtml(txt) + '</li>';
    }
    h += '</ul>';
    el.innerHTML = h;
    return;
  }
  const { indices } = data;
  const sh = indices.find(i => i.code === '000001');
  const isUp = sh && sh.changePct > 0;
  let html = '<ul style="list-style:none;font-size:0.85em;padding:0;color:var(--text-muted);">';
  if (isUp) {
    html += '  <li style="padding:4px 0;">• 今日市场反弹，关注明日量能能否继续放大</li>';
    html += '  <li style="padding:4px 0;">• 北向资金是否连续净买入为关键信号</li>';
  } else {
    html += '  <li style="padding:4px 0;">• 今日市场回调，关注支撑位能否有效抵御</li>';
    html += '  <li style="padding:4px 0;">• 隔夜美股期货走势对明日情绪影响重大</li>';
  }
  html += '  <li style="padding:4px 0;">• 集合竞价观察情绪延续性</li>';
  html += '  <li style="padding:4px 0;">• 重点关注半导体/黄金等核心赛道表现</li>';
  html += '</ul>';
  el.innerHTML = html;
}

// ─── 市场动向 ───
async function renderMarketTrend() {
  const el = document.getElementById('marketTrend');
  if (!el) return;

  let data = null;
  try {
    const resp = await fetch('./market-trend.json?v=' + Date.now());
    if (resp.ok) data = await resp.json();
  } catch(e) { /* ignore */ }

  if (!data || !data.trends || data.trends.length === 0) {
    el.innerHTML = '<div style="font-size:0.82em;color:var(--text-dim);padding:12px;">暂无市场动向数据，请更新 market-trend.json</div>';
    setFresh('freshTrend', '无数据', 'stale');
    return;
  }
  freshByDate('freshTrend', data.date, '数据 ');

  const trendIcon = {
    '上行': '📈',
    '下行': '📉',
    '震荡': '〰️',
    '企稳': '📊',
    '突破': '🚀',
    '回调': '⬇️',
  };

  const trendClass = {
    '上行': 'up',
    '下行': 'down',
    '震荡': 'flat',
    '企稳': 'flat',
    '突破': 'up',
    '回调': 'down',
  };

  let html = '<div class="trend-grid">';
  for (const t of data.trends) {
    const icon = trendIcon[t.trend] || '📊';
    const cls = trendClass[t.trend] || 'flat';

    html += '<div class="trend-card">';
    html += '<div class="tc-category"><strong>' + escHtml(t.category) + '</strong> · ' + escHtml(t.market || 'A股') + '</div>';
    html += '<div class="tc-trend">';
    html += '<span class="tc-trend-icon">' + icon + '</span>';
    html += '<span class="tc-trend-text ' + cls + '">' + escHtml(t.trend) + '</span>';
    html += '</div>';
    html += '<div class="tc-desc">' + escHtml(t.description) + '</div>';

    if (t.factors && t.factors.length > 0) {
      html += '<div class="tc-factors">';
      html += '<div class="tc-factors-label">关键影响因素</div>';
      for (const f of t.factors) {
        const dotCls = f.impact === 'positive' ? 'positive' : f.impact === 'negative' ? 'negative' : 'neutral';
        html += '<div class="tc-factor-item"><span class="dot ' + dotCls + '"></span><span>' + escHtml(f.text) + '</span></div>';
      }
      html += '</div>';
    }

    html += '<div class="tc-update">更新于 ' + escHtml(data.date) + '</div>';
    html += '</div>';
  }
  html += '</div>';
  el.innerHTML = html;
}

// ─── 基金博主今日操作 ───
async function renderBloggers() {
  const el = document.getElementById('bloggerOps');
  if (!el) return;

  let data = null;
  try {
    const resp = await fetch('./fund-bloggers.json?v=' + Date.now());
    if (resp.ok) data = await resp.json();
  } catch(e) { /* ignore */ }

  if (!data || !data.bloggers || data.bloggers.length === 0) {
    el.innerHTML = '<div style="font-size:0.82em;color:var(--text-dim);padding:12px;">暂无博主操作数据，请更新 fund-bloggers.json</div>';
    setFresh('freshBloggers', '无数据', 'stale');
    return;
  }
  freshByDate('freshBloggers', data.date, '数据 ');

  const disclaimer = data.disclaimer
    ? '<div class="blogger-disclaimer">🤖 ' + escHtml(data.disclaimer) + '</div>'
    : '';

  const tagMap = {
    '稳健型': 'tag-steady',
    '成长型': 'tag-growth',
    '百万实盘': 'tag-bold',
    '激进型': 'tag-bold',
  };

  const actionMap = {
    '加仓': 'buy',
    '买入': 'buy',
    '减仓': 'sell',
    '卖出': 'sell',
    '持有': 'hold',
    '观望': 'watch',
    '定投': 'invest',
  };

  const sentimentMap = {
    '偏多': 'bullish',
    '看多': 'bullish',
    '中性': 'neutral',
    '偏空': 'bearish',
    '看空': 'bearish',
  };

  const stanceMap = {
    '看多': 'st-bull',
    '偏多': 'st-bull',
    '看空': 'st-bear',
    '偏空': 'st-bear',
    '中性': 'st-neu',
  };

  let html = disclaimer + '<div class="blogger-grid">';
  for (const b of data.bloggers) {
    const tagCls = tagMap[b.followerTag] || 'tag-steady';
    const sentCls = sentimentMap[b.sentiment] || 'neutral';
    const sentLabel = b.sentiment || '中性';

    html += '<div class="blogger-card">';
    html += '<div class="bc-header">';
    html += '<div class="bc-avatar">' + (b.avatar || '👤') + '</div>';
    html += '<div class="bc-info">';
    html += '<div class="bc-name">' + escHtml(b.name) + '</div>';
    html += '<div class="bc-meta">';
    html += '<span class="bc-platform">' + escHtml(b.platform) + '</span>';
    html += '<span class="bc-tag ' + tagCls + '">' + escHtml(b.followerTag) + '</span>';
    html += '</div></div>';
    html += '<span class="bc-sentiment ' + sentCls + '">' + sentLabel + '</span>';
    html += '</div>';

    // Operations — 全部展示
    html += '<div class="bc-ops">';
    if (b.operations && b.operations.length > 0) {
      for (const op of b.operations) {
        const actCls = actionMap[op.action] || 'watch';
        html += '<div class="bc-op-item">';
        html += '<span class="bc-op-action ' + actCls + '">' + escHtml(op.action) + '</span>';
        html += '<span class="bc-op-fund">' + escHtml(op.fund) + '</span>';
        if (op.amount) html += '<span class="bc-op-amount">' + escHtml(op.amount) + '</span>';
        if (op.reason) html += '<span class="bc-op-reason">' + escHtml(op.reason) + '</span>';
        html += '</div>';
      }
    }
    html += '</div>';

    // 各板块见解
    if (b.views && b.views.length > 0) {
      html += '<div class="bc-views">';
      html += '<div class="bc-views-label">板块见解</div>';
      for (const v of b.views) {
        const stCls = stanceMap[v.stance] || 'st-neu';
        html += '<div class="bc-view-item">';
        html += '<span class="bc-view-sector">' + escHtml(v.sector) + '</span>';
        html += '<span class="bc-view-stance ' + stCls + '">' + escHtml(v.stance) + '</span>';
        html += '<span class="bc-view-text">' + escHtml(v.view) + '</span>';
        html += '</div>';
      }
      html += '</div>';
    }

    if (b.summary) {
      html += '<div class="bc-summary">💡 ' + escHtml(b.summary) + '</div>';
    }
    html += '<div class="bc-update">更新于 ' + escHtml(data.date) + '</div>';
    html += '</div>';
  }
  html += '</div>';
  el.innerHTML = html;
}

// ─── Trading Recommendations (无个股价格绑定) ───
function renderRecommendations(data) {
  const list = document.getElementById('recommendList');
  if (!list) return;

  // Sector-level strategy recommendations — no individual stock prices
  const _st = data && data.dashboardStatic && data.dashboardStatic.strategy;
  const strategies = (_st && _st.strategies && _st.strategies.length) ? _st.strategies : [
    {
      sector: '半导体',
      icon: '💾',
      color: '#5B8DEF',
      bg: 'rgba(91,141,239,0.15)',
      signal: '积极关注',
      signalClass: 'buy',
      signalIcon: '⬆️',
      risk: '中等',
      riskPct: 50,
      riskColor: '#F5A623',
      logic: 'AI算力需求持续爆发，存储芯片涨价周期延续。国产替代逻辑不变，逢回调可分批布局半导体ETF及设备龙头。',
      border: 'sector-semi',
    },
    {
      sector: '黄金',
      icon: '🏆',
      color: '#E8D48B',
      bg: 'rgba(201,168,76,0.15)',
      signal: '持有/配置',
      signalClass: 'hold',
      signalIcon: '📍',
      risk: '中等',
      riskPct: 50,
      riskColor: '#F5A623',
      logic: '全球央行购金持续+美元信用弱化趋势。短期回调是配置窗口，中期多头趋势未变。建议逢回调分批建仓黄金ETF。',
      border: 'sector-gold',
    },
    {
      sector: '白银',
      icon: '🥈',
      color: '#2EC4B6',
      bg: 'rgba(46,196,182,0.15)',
      signal: '谨慎关注',
      signalClass: 'watch',
      signalIcon: '👀',
      risk: '较高',
      riskPct: 70,
      riskColor: '#F05A5A',
      logic: '白银工业属性+贵金属双重驱动。光伏用银需求增长+金银比高位，但波动大于黄金，适合风险偏好较高的投资者。',
      border: 'sector-silver',
    },
    {
      sector: '存储芯片',
      icon: '🔲',
      color: '#F05A8A',
      bg: 'rgba(240,90,138,0.15)',
      signal: '买入',
      signalClass: 'buy',
      signalIcon: '⬆️',
      risk: '中等',
      riskPct: 45,
      riskColor: '#E8D48B',
      logic: 'DDR5渗透率提升+AI服务器DRAM需求直接受益。存储接口芯片、NOR Flash龙头业绩硬逻辑，回调是布局机会。',
      border: 'sector-storage',
    },
  ];

  let html = '<div class="trade-signal-grid">';
  for (const st of strategies) {
    html += '<div class="trade-card ' + st.border + '">';
    html += '<div class="tc-top">';
    html += '<span class="tc-sector" style="background:' + st.bg + ';color:' + st.color + '">' + st.icon + ' ' + st.sector + '</span>';
    html += '<span class="tc-signal ' + st.signalClass + '">' + st.signalIcon + ' ' + st.signal + '</span>';
    html += '</div>';
    html += '<div class="tc-name" style="margin-bottom:8px;">' + st.sector + '板块策略</div>';
    html += '<div class="tc-logic">' + st.logic + '</div>';
    html += '<div class="tc-risk" style="margin-top:8px;">';
    html += '<span class="tc-risk-label">⚡ 风险</span>';
    html += '<div class="tc-risk-bar"><div class="tc-risk-bar-fill" style="width:' + st.riskPct + '%;background:' + st.riskColor + '"></div></div>';
    html += '<span class="tc-risk-text" style="color:' + st.riskColor + '">' + st.risk + '</span>';
    html += '</div></div>';
  }
  html += '</div>';
  list.innerHTML = html;
}
function renderFedTracking(data) {
  const el = document.getElementById('fedTracking'); if (!el) return;
  const fedStatic = data && data.dashboardStatic && data.dashboardStatic.fed;
  const events = (fedStatic && fedStatic.events && fedStatic.events.length) ? fedStatic.events : (data.fedEvents || []);
  let html = '<div class="fed-events">';
  if (events.length > 0) {
    html += '<div style="font-size:0.78em;color:var(--text-dim);margin-bottom:6px;">最近美联储动态</div>';
    for (let i = 0; i < Math.min(events.length, 5); i++) {
      const it = events[i];
      html += '<div class="fed-event-item"><div class="fe-title"><a href="' + escHtml(it.link) + '" target="_blank">' + escHtml(it.title) + '</a></div>';
      html += '<div class="fe-meta">' + escHtml(formatDate(it.date || it.pubDate)) + ' · ' + escHtml(it.source || '美联储') + '</div></div>';
    }
  } else {
    html += '<div style="font-size:0.82em;color:#7C8AAA;padding:12px;">暂无最新美联储动态</div>';
  }
  html += '</div>';
  el.innerHTML = html;
}

// ─── 行业资讯 (12赛道 · 中英对照) ───
let industryActiveKey = null;

function renderIndustryNews(industryData) {
  const tabs = document.getElementById('industryTabs');
  const list = document.getElementById('industryList');
  if (!tabs || !list) return;

  if (!industryData || !industryData.industries || industryData.industries.length === 0) {
    tabs.innerHTML = '';
    list.innerHTML = '<div class="news-item"><span style="color:var(--text-muted);">行业资讯暂无数据，GitHub Actions 首次运行后生成</span></div>';
    setFresh('freshIndustry', '无数据', 'stale');
    return;
  }
  if (industryData.generated_at) setFresh('freshIndustry', '更新于 ' + industryData.generated_at, 'live');

  const inds = industryData.industries;
  if (!industryActiveKey || !inds.find(i => i.key === industryActiveKey)) {
    industryActiveKey = inds[0].key;
  }

  // 赛道标签
  let tabHtml = '';
  for (const ind of inds) {
    const on = ind.key === industryActiveKey;
    const total = ind.items ? ind.items.length : 0;
    tabHtml += '<button onclick="window.setIndustryTab(\'' + ind.key + '\')" style="' +
      'padding:5px 14px;border-radius:999px;cursor:pointer;font-size:0.78em;font-weight:600;transition:all .15s;' +
      'border:1px solid ' + (on ? ind.accent : 'var(--border-light)') + ';' +
      'background:' + (on ? 'rgba(46,196,182,0.18)' : 'var(--surface)') + ';' +
      'color:' + (on ? ind.accent : 'var(--text-muted)') + ';">' +
      escHtml(ind.name) + ' <span style="opacity:.7;font-weight:400;">' + total + '</span></button>';
  }
  tabs.innerHTML = tabHtml;

  // 当前赛道新闻
  const ind = inds.find(i => i.key === industryActiveKey);
  const items = (ind && ind.items) || [];
  if (!items.length) {
    list.innerHTML = '<div class="news-item"><span style="color:var(--text-muted);">该赛道暂无条目。</span></div>';
    return;
  }

  const accent = ind.accent || '#2EC4B6';
  let html = '<div style="font-size:0.75em;color:var(--text-dim);margin-bottom:8px;">' +
    '更新 ' + (industryData.generated_at || '—') + ' · 中文标题为自动翻译，点击跳转原文</div>';
  for (const it of items) {
    const hasZh = it.zh && it.zh.trim() && it.zh !== it.title;
    const primary = escHtml(hasZh ? it.zh : it.title);
    const secondary = hasZh ? escHtml(it.title) : escHtml(it.summary || '');
    html += '<div class="news-item" style="padding:12px 16px;">';
    html += '<div class="news-title"><a href="' + escHtml(it.link) + '" target="_blank" rel="noopener">' + primary + '</a></div>';
    if (hasZh && secondary) html += '<div class="news-desc" style="color:var(--text-dim);font-size:0.74em;margin-top:3px;">' + secondary + '</div>';
    html += '<div class="news-meta" style="margin-top:6px;">';
    html += '<span class="card-tag tag-semi" style="background:rgba(46,196,182,0.12);color:' + accent + '">' + escHtml(it.source) + '</span>';
    html += '<span>' + formatDate(it.pubDate) + '</span>';
    html += '</div></div>';
  }
  list.innerHTML = html;
}

window.setIndustryTab = function (key) {
  industryActiveKey = key;
  renderIndustryNews(lastData ? lastData.industryData : null);
};

// ─── Helpers ───
function formatDate(str) {
  if (!str) return '';
  try {
    return new Date(str).toLocaleDateString('zh-CN', {
      month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit',
    });
  } catch { return str; }
}
function escHtml(s) {
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}

// ─── 栏目数据新鲜度角标 ───
function setFresh(id, text, kind) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = text || '';
  el.className = 'sec-fresh' + (kind ? ' ' + kind : '');
}
function hmNow() {
  return new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Shanghai' });
}
function freshByDate(id, dateStr, prefix) {
  if (!dateStr) { setFresh(id, '', ''); return; }
  const t = Date.parse(String(dateStr).replace(/\//g, '-'));
  let kind = '', extra = '';
  if (!isNaN(t)) {
    const days = (Date.now() - t) / 86400000;
    kind = days < 1.5 ? 'live' : (days < 4 ? 'warn' : 'stale');
    if (days >= 1.5) extra = ' · 已滞后' + (days >= 2 ? Math.floor(days) + '天' : '');
  }
  setFresh(id, (prefix || '数据 ') + dateStr + extra, kind);
}
function applyFreshness(data) {
  const h = hmNow();
  setFresh('freshSentiment', '实时 ' + h, 'live');
  setFresh('freshIndices', '实时 ' + h, 'live');
  setFresh('freshSemi', '实时 ' + h, 'live');
  setFresh('freshPm', '实时 ' + h, 'live');
  setFresh('freshForeign', '新闻缓存 ' + h, '');
  const ds = data && data.dashboardStatic;
  if (ds && ds.updated) {
    freshByDate('freshFed', ds.updated, '数据 ');
    freshByDate('freshTomorrow', ds.updated, '数据 ');
    freshByDate('freshStrategy', ds.updated, '策略 ');
  } else {
    setFresh('freshFed', 'FOMC 表为静态 · 新闻实时', 'warn');
    setFresh('freshTomorrow', '每日生成', 'warn');
    setFresh('freshStrategy', '静态策略，需人工更新', 'stale');
  }
}

// ─── Auto-refresh ───
function startAutoRefresh() {
  if (autoTimer) clearInterval(autoTimer);
  autoTimer = setInterval(fetchAll, 5 * 60 * 1000);
}

// ─── Init ───
fetchAll();
startAutoRefresh();
