// ═══════════════════════════════════════════════
// 小龙财经日报 · central-banks-fetch.js
// 全球央行黄金持仓（世界官方黄金储备）
// 数据来源：World Gold Council (gold.org) Central Bank Data API
//          —— 由 WGC 依据 IMF IFS 统计整理
// 输出：central-banks.json（前端渲染用）
// 由 GitHub Actions 每日运行
//
// 单位换算：1 吨 = 32,150.7466 金衡盎司 = 3.21507466 万盎司
// ═══════════════════════════════════════════════

const fs = require('fs');
const path = require('path');

const T_TO_WAN_OZ = 3.21507466;            // 吨 → 万盎司
const HOSTS = [
  'https://fsapi.gold.org',
  'https://fsapi-china.gold.org',
];
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36';
const REFERER = 'https://www.gold.org/goldhub/data/gold-reserves-by-country';

const HISTORY_QUARTERS = 10;   // 趋势保留最近 N 个季度
const TOP_N = 10;              // 增持/减持榜各取前 N

// ISO3 → 中文名
const ZH = {
  USA:'美国',DEU:'德国',ITA:'意大利',FRA:'法国',RUS:'俄罗斯',CHN:'中国',CHE:'瑞士',JPN:'日本',
  IND:'印度',NLD:'荷兰',TUR:'土耳其',TWN:'中国台湾',PRT:'葡萄牙',POL:'波兰',UZB:'乌兹别克斯坦',
  SAU:'沙特',KAZ:'哈萨克斯坦',GBR:'英国',LBN:'黎巴嫩',ESP:'西班牙',AUT:'奥地利',SGP:'新加坡',
  THA:'泰国',BEL:'比利时',DZA:'阿尔及利亚',LBY:'利比亚',PHL:'菲律宾',IRQ:'伊拉克',BRA:'巴西',
  EGY:'埃及',SWE:'瑞典',ZAF:'南非',MEX:'墨西哥',GRC:'希腊',KOR:'韩国',ROU:'罗马尼亚',QAT:'卡塔尔',
  HUN:'匈牙利',AUS:'澳大利亚',KWT:'科威特',IDN:'印尼',ARE:'阿联酋',JOR:'约旦',DNK:'丹麦',PAK:'巴基斯坦',
  ARG:'阿根廷',BLR:'白俄罗斯',FIN:'芬兰',KHM:'柬埔寨',BGR:'保加利亚',SRB:'塞尔维亚',MYS:'马来西亚',
  CZE:'捷克',PER:'秘鲁',SVK:'斯洛伐克',UKR:'乌克兰',ECU:'厄瓜多尔',KGZ:'吉尔吉斯斯坦',MAR:'摩洛哥',
  NGA:'尼日利亚',BGD:'孟加拉',CYP:'塞浦路斯',MUS:'毛里求斯',IRL:'爱尔兰',PRY:'巴拉圭',NPL:'尼泊尔',
  MNG:'蒙古',MKD:'北马其顿',GTM:'危地马拉',TUN:'突尼斯',OMN:'阿曼',LVA:'拉脱维亚',LTU:'立陶宛',
  COL:'哥伦比亚',BHR:'巴林',MOZ:'莫桑比克',ALB:'阿尔巴尼亚',SVN:'斯洛文尼亚',ABW:'阿鲁巴',
  LUX:'卢森堡',HKG:'中国香港',ISL:'冰岛',PNG:'巴布亚新几内亚',TTO:'特立尼达和多巴哥',HTI:'海地',
  BIH:'波黑',SLV:'萨尔瓦多',SUR:'苏里南',HND:'洪都拉斯',DOM:'多米尼加',LKA:'斯里兰卡',EST:'爱沙尼亚',
  CHL:'智利',MLT:'马耳他',URY:'乌拉圭',FJI:'斐济',BDI:'布隆迪',COM:'科摩罗',KEN:'肯尼亚',AZE:'阿塞拜疆',
  NOR:'挪威',CAN:'加拿大',HRV:'克罗地亚',ARM:'亚美尼亚',NIC:'尼加拉瓜',CRI:'哥斯达黎加',VEN:'委内瑞拉',
  BOL:'玻利维亚',AFG:'阿富汗',SYR:'叙利亚',TJK:'塔吉克斯坦',GHA:'加纳',LAO:'老挝',YEM:'也门',
  MRT:'毛里塔尼亚',CMR:'喀麦隆',ERI:'厄立特里亚',MWI:'马拉维',GAB:'加蓬',TCD:'乍得',COG:'刚果',
  TKM:'土库曼斯坦',MMR:'缅甸',
};

function zhName(iso3, en) { return ZH[iso3] || en || iso3; }

// 季度标签: "Q2 26" -> {label:'2026 Q2', date:'2026-06-30'}
function parsePeriod(raw) {
  const m = /^Q([1-4])\s*(\d{2})$/.exec(raw.trim());
  if (!m) return { label: raw, date: null };
  const q = parseInt(m[1], 10);
  const yy = parseInt(m[2], 10);
  const year = 2000 + yy;
  const endMonth = q * 3;
  const day = endMonth === 3 || endMonth === 12 ? 31 : 30;
  const mm = String(endMonth).padStart(2, '0');
  return { label: `${year} Q${q}`, date: `${year}-${mm}-${day}` };
}

function qToNum(raw) {
  const m = /^Q([1-4])\s*(\d{2})$/.exec(raw.trim());
  if (!m) return 0;
  return (2000 + parseInt(m[2], 10)) * 4 + parseInt(m[1], 10);
}

async function fetchJson(url) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 25000);
  try {
    const resp = await fetch(url, {
      headers: { 'User-Agent': UA, 'Referer': REFERER, 'Accept': 'application/json' },
      signal: ctrl.signal,
    });
    if (!resp.ok) throw new Error('HTTP ' + resp.status);
    return await resp.json();
  } finally { clearTimeout(timer); }
}

async function loadRawTable() {
  const qs = 'page=date_range&periodicity=QTD_FULL&startDate=2015-01-01&endDate=2030-12-31';
  let lastErr = null;
  for (const host of HOSTS) {
    try {
      const data = await fetchJson(`${host}/api/cbd/v11/charts/getPage?${qs}`);
      const t = data && data.chartData && data.chartData.table && data.chartData.table.QTD_FULL
        && data.chartData.table.QTD_FULL.gold_reserves_tns;
      if (t && t.headers && t.rows && t.rows.length) return t;
      throw new Error('表格结构异常');
    } catch (e) { lastErr = e; console.log('  ✗ ' + host + ' -> ' + e.message); }
  }
  throw lastErr || new Error('无法获取数据');
}

// 根据净增减吨数给出"力度"标签
function strengthLabel(netTns, panelTns) {
  if (!panelTns) return { level: 'neutral', text: '数据不足' };
  const pct = (netTns / panelTns) * 100;
  if (pct >= 0.5)  return { level: 'strong-buy',  text: '大幅增持', pct };
  if (pct >= 0.2)  return { level: 'buy',         text: '明显增持', pct };
  if (pct >= 0.05) return { level: 'mild-buy',    text: '温和增持', pct };
  if (pct > -0.05) return { level: 'flat',        text: '基本持平', pct };
  if (pct > -0.2)  return { level: 'mild-sell',   text: '小幅减持', pct };
  if (pct > -0.5)  return { level: 'sell',        text: '明显减持', pct };
  return { level: 'strong-sell', text: '大幅减持', pct };
}

async function main() {
  console.log('📡 抓取 WGC 全球官方黄金储备 (IMF IFS) ...');
  const t = await loadRawTable();

  const rawHeader = t.headers[0].map(h => h.val);
  const periods = rawHeader.slice(1).map(v => ({ raw: v, ...parsePeriod(v) }));
  const N = periods.length;

  // 每国一条时间序列（吨）
  const rows = [];
  for (const r of t.rows) {
    const iso3 = r[0].iso3;
    const en = r[0].val;
    const series = [];
    for (let i = 1; i <= N; i++) {
      const v = parseFloat(r[i] && r[i].val);
      series.push(isNaN(v) ? null : v);
    }
    rows.push({ iso3, en, name: zhName(iso3, en), series });
  }

  // 各季度「环比可比口径」净增减（同季两期皆上报的国家求和）
  const history = [];
  for (let i = 1; i < N; i++) {
    let netTns = 0, reporters = 0;
    for (const c of rows) {
      const a = c.series[i - 1], b = c.series[i];
      if (a !== null && b !== null) { netTns += (b - a); reporters++; }
    }
    history.push({
      label: periods[i].label,
      date: periods[i].date,
      qn: qToNum(periods[i].raw),
      net_tns: +netTns.toFixed(2),
      net_wan_oz: +(netTns * T_TO_WAN_OZ).toFixed(1),
      reporters,
    });
  }

  const latestIdx = N - 1;
  const prevIdx = N - 2;
  const latest = periods[latestIdx];

  // 最新一季可比口径面板
  const panel = rows.filter(c => c.series[prevIdx] !== null && c.series[latestIdx] !== null);
  let panelTns = 0, netTns = 0;
  const changes = [];
  for (const c of panel) {
    panelTns += c.series[latestIdx];
    const d = c.series[latestIdx] - c.series[prevIdx];
    netTns += d;
    changes.push({
      iso3: c.iso3, name: c.name, en: c.en,
      prev_tns: +c.series[prevIdx].toFixed(2),
      now_tns: +c.series[latestIdx].toFixed(2),
      change_tns: +d.toFixed(2),
      change_wan_oz: +(d * T_TO_WAN_OZ).toFixed(1),
      change_pct: c.series[prevIdx] ? +((d / c.series[prevIdx]) * 100).toFixed(2) : 0,
    });
  }
  const strength = strengthLabel(netTns, panelTns);

  const buyers = changes.filter(c => c.change_tns > 0.05).sort((a, b) => b.change_tns - a.change_tns).slice(0, TOP_N);
  const sellers = changes.filter(c => c.change_tns < -0.05).sort((a, b) => a.change_tns - b.change_tns).slice(0, TOP_N);

  // 全球前 N 大持有国（取各国最近一次有数据的值）
  const holders = rows.map(c => {
    let idx = -1;
    for (let i = N - 1; i >= 0; i--) if (c.series[i] !== null) { idx = i; break; }
    return { iso3: c.iso3, name: c.name, en: c.en, tns: idx >= 0 ? c.series[idx] : 0, as_of: idx >= 0 ? periods[idx].label : null };
  }).filter(h => h.tns > 0).sort((a, b) => b.tns - a.tns).slice(0, TOP_N).map(h => ({
    ...h,
    wan_oz: +(h.tns * T_TO_WAN_OZ).toFixed(1),
    tns: +h.tns.toFixed(2),
  }));

  // 已上报央行合计：取每国「最近一次可得」的值加总（避免迟报国家被漏计）
  let totalNow = 0, totalReporters = 0;
  for (const c of rows) {
    let idx = -1;
    for (let i = N - 1; i >= 0; i--) if (c.series[i] !== null) { idx = i; break; }
    if (idx >= 0) { totalNow += c.series[idx]; totalReporters++; }
  }

  const coverMax = rows.length;
  const out = {
    source: 'World Gold Council（依据 IMF IFS 统计）',
    unit_note: '持仓单位：吨；净增减同时给出「万盎司」（1 吨 = 3.21507466 万盎司）',
    method: '净增减采用「环比可比口径」：仅统计本季与上季均已上报的央行之和，避免迟报造成失真',
    as_of: latest.date,
    as_of_label: latest.label,
    prev_label: periods[prevIdx].label,
    coverage: { latest_reporters: totalReporters, comparable: panel.length, universe: coverMax },
    world: {
      total_tns: +totalNow.toFixed(2),
      total_wan_oz: +(totalNow * T_TO_WAN_OZ).toFixed(0),
      panel_tns: +panelTns.toFixed(2),
      panel_wan_oz: +(panelTns * T_TO_WAN_OZ).toFixed(0),
      net_tns: +netTns.toFixed(2),
      net_wan_oz: +(netTns * T_TO_WAN_OZ).toFixed(1),
      net_pct: panelTns ? +((netTns / panelTns) * 100).toFixed(3) : 0,
      reporters: panel.length,
      total_basis: '各国最新可得值加总',
      direction: netTns >= 0 ? 'buy' : 'sell',
      strength,
    },
    history: history.slice(-HISTORY_QUARTERS),
    buyers,
    sellers,
    top_holders: holders,
  };

  const outPath = path.join(__dirname, 'central-banks.json');
  out.generated_at = new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' });
  // 若实质数据未变，则保留旧时间戳，避免每 30 分钟产生无意义提交
  try {
    const prev = JSON.parse(fs.readFileSync(outPath, 'utf8'));
    const a = JSON.parse(JSON.stringify(prev)); delete a.generated_at;
    const b = JSON.parse(JSON.stringify(out)); delete b.generated_at;
    if (JSON.stringify(a) === JSON.stringify(b) && prev.generated_at) out.generated_at = prev.generated_at;
  } catch (e) { /* 首次生成或无旧文件 */ }

  fs.writeFileSync(outPath, JSON.stringify(out, null, 1), 'utf8');
  console.log(`✅ central-banks.json 已生成 · 截至 ${out.as_of_label} · 净增减 ${out.world.net_wan_oz} 万盎司 (${out.world.net_tns} 吨, ${out.world.strength.text})`);
  console.log(`   可比央行 ${panel.length} 家 / 已上报 ${totalReporters} 家 / 覆盖池 ${coverMax}`);
}

main().catch(e => {
  console.error('FATAL:', e && e.message ? e.message : e);
  // 容错：若网络/接口异常但旧数据仍在，保留旧文件，不让工作流失败
  const p = path.join(__dirname, 'central-banks.json');
  if (fs.existsSync(p)) {
    console.warn('⚠️ 抓取失败，保留上一次的 central-banks.json');
    process.exit(0);
  }
  process.exit(1);
});
