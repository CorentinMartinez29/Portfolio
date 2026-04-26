const fs = require('fs');
const files = ['index.html', 'apropos.html', 'projets.html', 'capacites.html', 'portfolio.html', 'contact.html'];
files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replace(/function toggleProjectDisplay\(buttonId, contextId\) \{\s*document\.getElementById\(buttonId\)\.addEventListener\("click", function\(\) \{/, 
    'function toggleProjectDisplay(buttonId, contextId) {\n\t\tvar btn = document.getElementById(buttonId);\n\t\tif(!btn) return;\n\t\tbtn.addEventListener("click", function() {');
    content = content.replace(/function toggleProjectDisplay2\(buttonId, contextId\) \{\s*document\.getElementById\(buttonId\)\.addEventListener\("click", function\(\) \{/, 
    'function toggleProjectDisplay2(buttonId, contextId) {\n\t\tvar btn = document.getElementById(buttonId);\n\t\tif(!btn) return;\n\t\tbtn.addEventListener("click", function() {');
    fs.writeFileSync(f, content);
});
console.log('Fixed JS event listeners!');
