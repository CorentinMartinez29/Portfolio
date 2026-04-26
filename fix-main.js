const fs = require('fs');
let mainJs = fs.readFileSync('assets/js/main.js', 'utf8');
// Stop main.js from hiding header and footer
mainJs = mainJs.replace(/\\.hide\(\);/g, '// .hide();');
mainJs = mainJs.replace(/\\.hide\(\);/g, '// .hide();');
// Also stop hiding main and articles when going 'back'
// wait, the 'close' button goes back to '#' and hides article. That's fine for index.html.
// For other pages, we just want the header and footer to stay visible.
fs.writeFileSync('assets/js/main.js', mainJs);
console.log('Modified main.js to keep header/footer visible');
