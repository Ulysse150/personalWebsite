/*
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
  */
  



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
  function updateText() {
    const elementsToTranslate = document.querySelectorAll("[data-translate]");
    console.log("changement");
    elementsToTranslate.forEach((element, index) => {
        if (translations[index]) {
            // Conserver les liens
            const links = element.querySelectorAll('a');
            
            // Remplacer le contenu
            element.textContent = translations[index][currentLang];
            
            // Réinsérer les liens
            links.forEach(link => element.appendChild(link));
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