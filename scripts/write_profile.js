const fs = require('fs');
const path = require('path');
const out = path.join(__dirname, '..', 'public', 'images', 'profile.jpg');
const base64 = `REPLACE_BASE64`;
const data = Buffer.from(base64, 'base64');
fs.writeFileSync(out, data);
console.log('wrote', out, data.length, 'bytes');
