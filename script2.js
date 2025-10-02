
let currentLang = "fr"; // Langue par défaut (français)  
  // Fonction pour charger les traductions depuis le fichier JSON
  

  // Initialisation du widget Google Translate
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "fr",        // langue de base de ta page
      includedLanguages: "en,fr",
      autoDisplay: false
    },
    'google_translate_element'
  );
}

// Fonction pour changer la langue
function translateTo(lang) {
  const select = document.querySelector("#google_translate_element select");
  if (select) {
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].value.indexOf(lang) > -1) {
        select.selectedIndex = i;
        select.dispatchEvent(new Event("change"));
        break;
      }
    }
  }
}

// Gestion du bouton unique
const btn = document.getElementById("btn-switch");

function changeLanguage(){
  const lien = document.getElementById("lienCV");
  if (currentLang === "en") {
    translateTo("fr");
    currentLang = "fr";
    lien.setAttribute("href", "CVFr.pdf");
  } else {
    translateTo("en");
    currentLang = "en";
    lien.setAttribute("href", "CVEng.pdf");
    
  }
      console.log("on change");

}


  
  // Charger les traductions dès que la page est prête
