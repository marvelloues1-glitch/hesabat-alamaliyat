const fs = require('fs');
const path = require('path');
const src = path.join(__dirname, 'www');
if (!fs.existsSync(path.join(src, 'index.html'))) {
  console.error('www/index.html is missing');
  process.exit(1);
}
console.log('Web app is already in www/.');
