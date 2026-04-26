const fs = require('fs');
const pages = [
  {file: 'apropos.html', id: 'about', hash: '#about'},
  {file: 'projets.html', id: 'work', hash: '#work'},
  {file: 'capacites.html', id: 'capacites', hash: '#capacites'},
  {file: 'portfolio.html', id: 'portfolioApprentissage', hash: '#portfolioApprentissage'},
  {file: 'contact.html', id: 'contact', hash: '#contact'}
];
const indexContent = fs.readFileSync('index.html', 'utf8');
const updatedNav = '<nav><ul><li><a href="apropos.html#about">A propos</a></li><li><a href="projets.html#work">Projets</a></li><li><a href="capacites.html#capacites">Capacités</a></li><li><a href="portfolio.html#portfolioApprentissage">Portfolio d�apprentissage</a></li><li><a href="contact.html#contact">Contact</a></li></ul></nav>';
let baseTemplate = indexContent.replace(/<nav>[\s\S]*?<\/nav>/, updatedNav);
const mainRegex = /<div id="main">([\s\S]*?)<\/div>\s*<footer id="footer">/;
const match = indexContent.match(mainRegex);
const allArticles = match[1];
function getArticle(id) {
    const articleRegex = new RegExp('<article id="' + id + '">[\\s\\S]*?</article>');
    const m = allArticles.match(articleRegex);
    return m ? m[0] : '';
}
const newIndex = baseTemplate.replace(mainRegex, '<div id="main">\n\t\t<!-- Les articles sont maintenant dans des fichiers s�par�s -->\n\t</div>\n\n\t<footer id="footer">');
fs.writeFileSync('index.html', newIndex);
pages.forEach(p => {
    const articleHtml = getArticle(p.id);
    let pageContent = baseTemplate.replace(mainRegex, '<div id="main">\n\t\t' + articleHtml + '\n\t</div>\n\n\t<footer id="footer">');
    fs.writeFileSync(p.file, pageContent);
});
console.log('Pages generated successfully!');
