// Gestion du menu mobile responsive
function setupMobileMenu() {
    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", () => {
            mainNav.classList.toggle("active");
        });
    }
}

// --- Intégration Google Translate ---
window.googleTranslateElementInit = function() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,fr,rn',
        autoDisplay: false
    }, 'google_translate_element');
};

// Fonction de changement de langue
function changeLanguage(langCode) {
    const langDisplay = document.getElementById('currentLang');
    if (langDisplay) {
        if (langCode === 'fr') {
            langDisplay.innerHTML = '🇫🇷 FR ▾';
        } else if (langCode === 'en') {
            langDisplay.innerHTML = '🇬🇧 EN ▾';
        } else if (langCode === 'rn') {
            langDisplay.innerHTML = '🇧🇮 RN ▾';
        }
    }

    const googleCombo = document.querySelector('.goog-te-combo');
    if (googleCombo) {
        googleCombo.value = langCode;
        googleCombo.dispatchEvent(new Event('change'));
    }

    localStorage.setItem("preferredLanguage", langCode);
}

// Charger dynamiquement le script Google Translate
function loadGoogleTranslateScript() {
    if (!document.getElementById("google-translate-script")) {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        document.body.appendChild(script);
    }
}

// Initialisation globale au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
    setupMobileMenu();
    loadGoogleTranslateScript();
    
    const savedLang = localStorage.getItem("preferredLanguage");
    if (savedLang) {
        changeLanguage(savedLang);
    }
});