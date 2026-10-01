// Product Array Data Source
const products = [
  {
    id: "fc-1888",
    name: "Flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "Power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "Time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "Low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "Warp equalizer",
    averagerating: 5.0
  }
];

document.addEventListener("DOMContentLoaded", () => {
    // 1. Populate Product Select Options dynamically
    const productSelect = document.getElementById("productName");
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id; // Using product id as the value attribute
            option.textContent = product.name; // Displaying product name
            productSelect.appendChild(option);
        });
    }

    // 2. Populate footer copyright year and last modified date
    const yearSpan = document.getElementById("currentYear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const modifiedSpan = document.getElementById("lastModified");
    if (modifiedSpan) {
        modifiedSpan.textContent = document.lastModified;
    }
});