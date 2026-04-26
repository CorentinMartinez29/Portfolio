const fs = require('fs');
let css = fs.readFileSync('assets/css/main.css', 'utf8');
css = css.replace(/a:hover\s*\{\s*background-color:\s*black;\s*color:\s*black;/g, 'a:hover {\n\tbackground-color: rgba(255, 255, 255, 0.05);\n\tcolor: #ffffff;');
// Add specific styling for .article-nav to make it look nice
const extraCss = 
.article-nav a {
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
}
.article-nav a:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: scale(1.05);
    color: #ffffff;
}
;
css += extraCss;
fs.writeFileSync('assets/css/main.css', css);
console.log('Fixed hover css!');
