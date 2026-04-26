const fs = require('fs');
const menuHtml = '<nav class="article-nav" style="display:flex; justify-content:center; gap:15px; flex-wrap:wrap; border-bottom:1px solid rgba(255,255,255,0.2); padding-bottom:15px; margin-bottom:20px;">' +
    '<a href="apropos.html#about" style="border-bottom:none">A propos</a>' +
    '<a href="projets.html#work" style="border-bottom:none">Projets</a>' +
    '<a href="capacites.html#capacites" style="border-bottom:none">Capacités</a>' +
    '<a href="portfolio.html#portfolioApprentissage" style="border-bottom:none">Portfolio</a>' +
    '<a href="contact.html#contact" style="border-bottom:none">Contact</a>' +
'</nav>';
const files = ['apropos.html', 'projets.html', 'capacites.html', 'portfolio.html', 'contact.html'];
files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    // Restore missing article tags manually for each file since we know their names
    if (f === 'apropos.html' && !content.includes('<article id="about">')) { content = content.replace('<div id="main">', '<div id="main">\n\t\t<article id="about">'); }
    if (f === 'projets.html' && !content.includes('<article id="work">')) { content = content.replace('<div id="main">', '<div id="main">\n\t\t<article id="work">'); }
    if (f === 'capacites.html' && !content.includes('<article id="capacites">')) { content = content.replace('<div id="main">', '<div id="main">\n\t\t<article id="capacites">'); }
    if (f === 'portfolio.html' && !content.includes('<article id="portfolioApprentissage">')) { content = content.replace('<div id="main">', '<div id="main">\n\t\t<article id="portfolioApprentissage">'); }
    if (f === 'contact.html' && !content.includes('<article id="contact">')) { content = content.replace('<div id="main">', '<div id="main">\n\t\t<article id="contact">'); }
    // Remove old broken nav injections
    content = content.replace(/\\n/g, '');
    content = content.replace(/<nav class="article-nav".*?<\/nav>/, '');
    // Now safely insert using split/join to avoid regex  issues
    const parts = content.split(/<article id="[^"]+">/);
    if (parts.length === 2) {
        const articleLine = content.match(/<article id="([^"]+)">/)[0];
        content = parts[0] + articleLine + '\n\t\t\t\t\t' + menuHtml + parts[1];
    }
    fs.writeFileSync(f, content);
});
console.log('Restored article tags and added menus safely.');
