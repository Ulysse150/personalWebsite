
  document.addEventListener("DOMContentLoaded", function () {
    let tabCounter = 0;
    document.querySelectorAll("a").forEach(function (link) {
       
        link.addEventListener("click", function (event) {
            event.preventDefault();
            
            const href = this.getAttribute('href');
            
            // Vérifie si c'est un lien d'ancrage
            if (href.startsWith('#')) {
               
            }
            // Vérifie si c'est un lien externe
            else if (href.startsWith('http') || href.startsWith('www')) {
                tabCounter++;
                window.open(href, "_blank" + tabCounter, "noopener,noreferrer");
            }
            // Pour les liens relatifs internes
           
        });
    });
});
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext('2d');

// Définir le style de texte
ctx.font = '20px Arial'; // Taille et police
ctx.fillStyle = 'blue'; // Couleur de remplissage

// Dessiner le texte
ctx.fillText('Ma tete ici', 10, 20);




const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show');
    }
    
  });
})

const animatedelements = document.querySelectorAll('.animated');

animatedelements.forEach((el) => observer.observe(el));




let currentLang = 'fr'; // Langue par défaut (français)
let translations = {}; // Variable pour stocker les traductions JSON

// Fonction pour charger les traductions depuis le fichier JSON
function loadTranslations() {
    fetch('text.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur de chargement du fichier JSON');
            }
            return response.json(); // Convertir la réponse en JSON
        })
        .then(data => {
            translations = data; // Stocker les traductions dans la variable globale
            updateText(); // Mettre à jour le texte avec la langue actuelle
        })
        .catch(error => {
            console.error('Erreur lors du chargement des traductions:', error);
        });
}

// Fonction pour mettre à jour le texte sur la page
function updateText() {
    // Pour chaque élément ayant un attribut "idLangue", on met à jour le texte en fonction de la langue
    var cpt = 0;
    document.querySelectorAll("[idLangue]").forEach(element => {
        const key = element.getAttribute("idLangue");
        if (translations[key]) {
            element.innerText = translations[cpt][currentLang]; 
            cpt = cpt + 1;// Change le texte en fonction de la langue
        }
    });
}

// Fonction pour changer la langue
function changerLangue(langue) {
    if (langue !== currentLang) {
        currentLang = langue; // Met à jour la langue courante
        updateText(); // Met à jour le texte avec la nouvelle langue
    }
}
function changerLangue(langue) {
  currentLang = (currentLang === "fr") ? "eng" : "fr";
  updateText()
}


// Charger les traductions dès que la page est prête
window.onload = loadTranslations;