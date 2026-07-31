var fs = require('fs');
var f1 = fs.readFileSync('C:\\Users\\Yu\\.openclaw\\workspace\\金融\\finance-daily\\fetch.js', 'utf-8');
var f2 = fs.readFileSync('C:\\Users\\Yu\\.openclaw\\workspace\\金融\\finance-daily\\index.html', 'utf-8');

// Check for syntax issues
try { new Function(f1); console.log('fetch.js: SYNTAX OK'); } catch(e) { console.log('fetch.js ERROR:', e.message); }

// Check parseHfLine indices
console.log('parseHfLine high uses parts[4]:', f1.includes('high: parseFloat(parts[4])'));
console.log('parseHfLine low uses parts[5]:', f1.includes('low: parseFloat(parts[5])'));
console.log('parseHfLine prevClose uses parts[7]:', f1.includes('prevClose: parseFloat(parts[7])'));
console.log('parseHfLine time uses parts[6]:', f1.includes('time: parts[6]'));
console.log('parseHfLine length check >= 14:', f1.includes('parts.length < 14'));

// Check key features
console.log('\n--- Key features ---');
console.log('fetches hf_XAU:', f1.includes("hf_XAU"));
console.log('fetches hf_XAG:', f1.includes("hf_XAG"));
console.log('uses spotGold:', f1.includes('spotGold'));
console.log('uses spotSilver:', f1.includes('spotSilver'));
console.log('renderGoldSilver with data param:', f1.includes('function renderGoldSilver(data)'));
console.log('no COMEX formula:', !f1.includes('31.1') && !f1.includes('7.25'));
console.log('518800 labeled as gold:', f1.includes("黄金ETF国泰") || f1.includes('etf518800') && !f1.includes('白银'));
console.log('no individual stock prices in recommendations:', f1.includes('板块策略') && !f1.includes('stk[j].code'));

console.log('\n--- File sizes ---');
console.log('index.html:', f2.length, 'bytes');
console.log('fetch.js:', f1.length, 'bytes');
