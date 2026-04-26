const fs = require('fs');
let mainJs = fs.readFileSync('assets/js/main.js', 'utf8');
mainJs = mainJs.split('$main_articles.hide();').join('// $main_articles.hide();');
mainJs = mainJs.split('$main.hide();').join('// $main.hide();');
mainJs = mainJs.split('<div class="close">Close</div>').join('<div class="close" style="display:none;">Close</div>');
fs.writeFileSync('assets/js/main.js', mainJs);
console.log('Disabled close button logic');
