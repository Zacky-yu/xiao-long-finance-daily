// Check Tencent hf_ format field mapping
const raw1 = 'v_hf_XAU="4016.36,1.01,4016.36,4017.06,4023.62,3959.56,04:55:00,3976.26,3976.87,0,0,0,2026-07-18,\u4F26\u6566\u91D1\uFF08\u73B0\u8D27\u9EC4\u91D1\uFF09"';
const raw2 = 'v_hf_XAG="55.89,0.72,55.89,55.96,56.18,54.74,04:54:00,55.49,55.58,0,0,0,2026-07-18,\u4F26\u6566\u94F6\uFF08\u73B0\u8D27\u767D\u94F6\uFF09"';

function check(raw, label) {
  const m = raw.match(/v_[^=]+="([^"]+)"/);
  const parts = m[1].split(',');
  console.log('\n=== ' + label + ' ===');
  parts.forEach((v, i) => console.log('  [' + i + '] = ' + v));
  const prev = parseFloat(parts[7]);
  const pct = parseFloat(parts[1]);
  const price = parseFloat(parts[0]);
  console.log('  price=' + price + ' prev=' + prev + ' pct=' + pct + '%');
  console.log('  expected=' + (prev * (1 + pct/100)).toFixed(2));
  console.log('  match=' + (Math.abs(price - prev * (1 + pct/100)) < 0.1));
}

check(raw1, 'XAU Gold');
check(raw2, 'XAG Silver');
