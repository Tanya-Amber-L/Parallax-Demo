// AU MOUVEMENT DE LA SOURIS, APELLE LA FONCTION PARALLAX
document.addEventListener("mousemove", parallax);

// DÉFINIR MON ÉLÉMENT AVEC MA CLASSE PARALLAX
const element = document.querySelector(".parallax");

//DES QUE LA SOURIS BOUGE:
function parallax(e) {

    //DIMENSIONS DE L'ÉCRAN
    // DIVISÉ PAR 2 POUR AVOIR LE CENTRE DE L'ÉCRAN
    const width = window.innerWidth/2;
    const height = window.innerHeight/2;

    // DÉFINIR LES COORDONNÉES DE LA SOURIS
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    //SELON LA POSITION DE LA SOURIS, ON REDÉFINIT LA POSITION DE CHAQUE FOND 
    //CHIFFRE NÉGATIF POUR 
    const depth1 = `${50 - (mouseX - width) * 0.01}% ${50 - (mouseY - height) * 0.01}%`;
    const depth2 = `${50 - (mouseX - width) * 0.02}% ${50 - (mouseY - height) * 0.02}%`;
    const depth3 = `${50 - (mouseX - width) * 0.03}% ${50 - (mouseY - height) * 0.03}%`;

    //ON REGROUPE NOS DONNÉES 
    const x = `${depth3}, ${depth2}, ${depth1}`;
    
    element.style.backgroundPosition = x;
}
