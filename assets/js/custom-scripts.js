/* Google Translate */
function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        { pageLanguage: 'fr' }, // Langue source
        'google_translate_element'
    );
}
// Charger dynamiquement le script Google si besoin, ou le laisser dans le <head> HTML

/* Copie Email */
document.addEventListener('DOMContentLoaded', () => {
    const copyEmailButtons = document.querySelectorAll('.copy-email');
    copyEmailButtons.forEach(button => {
        button.addEventListener('click', () => {
            const email = button.getAttribute('data-email');
            if (email) {
                navigator.clipboard.writeText(email)
                    .then(() => {
                        alert('Email copié dans le presse-papier : ' + email);
                    })
                    .catch(err => {
                        alert('Impossible de copier l\'email : ' + err);
                    });
            }
        });
    });

    /* Gestion de l'affichage des contextes (Toggle) */

    // Fonction générique
    function setupToggle(buttonId, contextId, textHidden, textShown) {
        const btn = document.getElementById(buttonId);
        const ctx = document.getElementById(contextId);

        if(btn && ctx) {
            btn.addEventListener("click", function() {
                if (ctx.style.display === "none") {
                    ctx.style.display = "block";
                    this.textContent = textShown;
                } else {
                    ctx.style.display = "none";
                    this.textContent = textHidden;
                }
            });
        }
    }

    // Application aux boutons existants (vérification d'existence pour éviter les erreurs sur les pages où ils sont absents)
    setupToggle("toggleButton1", "contexte1", "Afficher Contexte du Projet", "Cacher Contenu du Projet");
    setupToggle("toggleButton2", "contexte2", "Afficher Contexte du Projet", "Cacher Contenu du Projet");
    setupToggle("toggleButton3", "contexte3", "Afficher Contexte du Projet", "Cacher Contenu du Projet");

    setupToggle("toggleButton4", "contexte4", "Afficher détail Compétence", "Cacher détail Compétence");
    setupToggle("toggleButton5", "contexte5", "Afficher détail Compétence", "Cacher détail Compétence");
    setupToggle("toggleButton6", "contexte6", "Afficher détail Compétence", "Cacher détail Compétence");
});