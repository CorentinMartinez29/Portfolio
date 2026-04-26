const fs = require('fs');
const files = ['index.html', 'apropos.html', 'projets.html', 'capacites.html', 'portfolio.html'];
files.forEach(f => {
    if(fs.existsSync(f)){
        let c = fs.readFileSync(f, 'utf8');
        c = c.replace(/https:\/\/github\.com\/Cocodingo297\?tab=repositories/g, "https://github.com/CorentinMartinez29");
        fs.writeFileSync(f, c);
    }
});
console.log('Fixed github links');
