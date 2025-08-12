// déclencher la fonction "resized" à chaque changement de taillde la div "A"

function resized() {
    // récupération des éléments
    const divA = document.querySelector('.A');
    const img = document.getElementById('imgA');
    
    // pour récupérer le ratio (hauteur et largeur de l'écran) on divise
    const ratio = divA.clientWidth / divA.clientHeight;
    
    // Changement d'image selon le ratio
    // ration 1 c'est largeur === à ahuteur
    if (ratio > 1) {
        // si le ratio est supperieur à 1 (on passe en paysage)
        img.src = 'paysage.png'; // format paysage
    } else {
        // sinon on passe en portrait
        img.src = 'portrait.png'; // format portrait
    }
}

// déclenchement automatique lors du redimensionnement
window.addEventListener('DOMContentLoaded', function() {
    const divA = document.querySelector('.A');
    
    // observer les changements de taille
    // ResizeObserver => c'est un élément du dom qui permet de surveiller automatiquement les changes de dimensions
    new ResizeObserver(resized).observe(divA);
    // le .observe c'est la methode de ResizeObserver
    
    // appel initial
    resized();
});