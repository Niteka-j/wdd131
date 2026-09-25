// Footer Year and Last Modified Date
const currentYearSpan = document.querySelector("#currentyear");
const lastModifiedParagraph = document.querySelector("#lastModified");

if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

if (lastModifiedParagraph) {
    lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;
}

// Hamburger Navigation Menu Toggle
const hamburgerMenu = document.querySelector("#menu");
const navigationUl = document.querySelector(".navigation");

if (hamburgerMenu && navigationUl) {
    hamburgerMenu.addEventListener("click", () => {
        navigationUl.classList.toggle("open");
        hamburgerMenu.classList.toggle("open");
    });
}

// Array of Temple Objects (Updated with Burley Idaho Temple)
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: 
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
];

// Function to Display Temple Cards
const galleryContainer = document.querySelector(".gallery");

function displayTemples(templesArray) {
    if (!galleryContainer) return;
    galleryContainer.innerHTML = ""; // Clear existing content

    templesArray.forEach(temple => {
        const card = document.createElement("section");
        card.classList.add("temple-card");

        const name = document.createElement("h3");
        name.textContent = temple.templeName;

        const detailsList = document.createElement("ul");
        detailsList.classList.add("details");

        const locationLi = document.createElement("li");
        locationLi.innerHTML = `<span class="label">Location:</span> ${temple.location}`;

        const dedicatedLi = document.createElement("li");
        dedicatedLi.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;

        const areaLi = document.createElement("li");
        areaLi.innerHTML = `<span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft`;

        detailsList.appendChild(locationLi);
        detailsList.appendChild(dedicatedLi);
        detailsList.appendChild(areaLi);

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = `${temple.templeName} Temple`;
        image.loading = "lazy"; // Native lazy loading
        image.width = 400;
        image.height = 250;

        card.appendChild(name);
        card.appendChild(detailsList);
        card.appendChild(image);

        galleryContainer.appendChild(card);
    });
}

// Initial render of all temples on page load
displayTemples(temples);

// Filter Functionality Setup
const homeLink = document.querySelector("nav a[href='#']"); // Home
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");
const pageTitle = document.querySelector("main h1");

if (homeLink) {
    homeLink.addEventListener("click", (e) => {
        e.preventDefault();
        pageTitle.textContent = "Home";
        displayTemples(temples);
    });
}

if (oldLink) {
    oldLink.addEventListener("click", (e) => {
        e.preventDefault();
        pageTitle.textContent = "Old Temples";
        const filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
        displayTemples(filtered);
    });
}

if (newLink) {
    newLink.addEventListener("click", (e) => {
        e.preventDefault();
        pageTitle.textContent = "New Temples";
        const filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
        displayTemples(filtered);
    });
}

if (largeLink) {
    largeLink.addEventListener("click", (e) => {
        e.preventDefault();
        pageTitle.textContent = "Large Temples";
        const filtered = temples.filter(t => t.area > 90000);
        displayTemples(filtered);
    });
}

if (smallLink) {
    smallLink.addEventListener("click", (e) => {
        e.preventDefault();
        pageTitle.textContent = "Small Temples";
        const filtered = temples.filter(t => t.area < 10000);
        displayTemples(filtered);
    });
}