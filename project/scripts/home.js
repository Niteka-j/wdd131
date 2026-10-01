// Données des services dynamiques
const servicesData = [
    {
        id: 1,
        category: "coaching",
        title: "Business Coaching",
        description: "I help entrepreneurs clarify their ideas, improve their business models, make informed decisions, and develop strategies for sustainable growth."
    },
    {
        id: 2,
        category: "agri",
        title: "Agripreneurship",
        description: "I support farmers and agricultural entrepreneurs in developing market-oriented and sustainable businesses across agricultural value chains."
    },
    {
        id: 3,
        category: "training",
        title: "Training & Mentorship",
        description: "I deliver practical training and mentorship that strengthen entrepreneurship, financial management, marketing, leadership, and business-management skills."
    },
    {
        id: 4,
        category: "coaching",
        title: "Social Entrepreneurship",
        description: "I support initiatives that use entrepreneurship to create economic opportunities and positive social impact, particularly for young people and communities."
    }
];

// Fonction d'affichage des services utilisant exclusivement des template literals
function displayServices(services) {
    const container = document.getElementById("servicesContainer");
    if (!container) return;

    // Utilisation de la méthode .map() et de template literals exclusifs
    container.innerHTML = services.map(service => `
        <div class="service-card">
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <a href="services.html" class="btn btn-secondary" style="margin-top: 1rem; color: var(--deep-green); border-color: var(--deep-green);">read more</a>
        </div>
    `).join("");
}

// Gestion interactive du filtrage avec écouteurs d'événements et conditions
function setupFiltering() {
    const buttons = document.querySelectorAll(".filter-btn");
    
    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            // Modification de la classe active
            buttons.forEach(btn => btn.classList.remove("active"));
            event.target.classList.add("active");

            const filterValue = event.target.getAttribute("data-filter");
            
            // Utilisation de branches conditionnelles
            if (filterValue === "all") {
                displayServices(servicesData);
            } else {
                const filtered = servicesData.filter(s => s.category === filterValue);
                displayServices(filtered);
            }

            // Sauvegarde de la dernière préférence utilisateur dans localStorage
            localStorage.setItem("preferredServiceFilter", filterValue);
        });
    });
}

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

// Fonction déclenchée lors du clic sur le menu personnalisé pour changer la langue
function changeLanguage(langCode) {
    const langDisplay = document.getElementById('currentLang');
    if (langDisplay) {
        if (langCode === 'en') {
            langDisplay.innerHTML = 'EN ▾';
        } else if (langCode === 'fr') {
            langDisplay.innerHTML = 'FR ▾';
        } else if (langCode === 'rn') {
            langDisplay.innerHTML = 'BI ▾';
        }
    }

    // Piloter le widget Google Translate caché
    const googleCombo = document.querySelector('.goog-te-combo');
    if (googleCombo) {
        googleCombo.value = langCode;
        googleCombo.dispatchEvent(new Event('change'));
    }

    // Sauvegarde de la préférence de langue dans localStorage
    localStorage.setItem("preferredLanguage", langCode);
}

// Charger dynamiquement le script de l'API Google Translate dans la page
function loadGoogleTranslateScript() {
    if (!document.getElementById("google-translate-script")) {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        document.body.appendChild(script);
    }
}

// Initialisation au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
    setupMobileMenu();
    loadGoogleTranslateScript();
    
    // Restauration de la langue préférée depuis localStorage si elle existe
    const savedLang = localStorage.getItem("preferredLanguage");
    if (savedLang) {
        changeLanguage(savedLang);
    }

    // Récupération de la préférence de filtre depuis localStorage si elle existe
    const savedFilter = localStorage.getItem("preferredServiceFilter");
    
    if (savedFilter && savedFilter !== "all") {
        const targetBtn = document.querySelector(`[data-filter="${savedFilter}"]`);
        if (targetBtn) {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            targetBtn.classList.add("active");
            const filtered = servicesData.filter(s => s.category === savedFilter);
            displayServices(filtered);
        } else {
            displayServices(servicesData);
        }
    } else {
        displayServices(servicesData);
    }
    
    setupFiltering();
});