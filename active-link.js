const fs = require('fs');
// 1. Ajouter le CSS pour la classe active-page-link
let css = fs.readFileSync('assets/css/main.css', 'utf8');
if (!css.includes('active-page-link')) {
    css += \n#header nav ul li a.active-page-link,\n.article-nav a.active-page-link {\n    background-color: rgba(255, 255, 255, 0.8) !important;\n    color: #000000 !important;\n    font-weight: bold !important;\n}\n;
    fs.writeFileSync('assets/css/main.css', css);
}
// 2. Ajouter la classe HTML 'active-page-link' correspondante sur la bonne page
const files = ['apropos.html', 'projets.html', 'capacites.html', 'portfolio.html', 'contact.html'];
files.forEach(f => {
    if(fs.existsSync(f)){
        let c = fs.readFileSync(f, 'utf8');
        // Nettoyage au cas où il y aurait déjà des classes
        c = c.replace(/\s*class="active-page-link"/g, '');
        // Expressions régulières pour trouver le lien de la page courante
        let regex = new RegExp(href="#[^"]+", 'g');
        c = c.replace(regex, $& class="active-page-link");
        fs.writeFileSync(f, c);
    }
});
console.log('Ajout de la mise en surbrillance de la page active effectue !');
