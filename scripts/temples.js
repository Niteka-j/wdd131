// Dynamically set the current year in the footer copyright
document.querySelector("#currentyear").textContent = new Date().getFullYear();

// Dynamically set the last modified date of the document
let LastModif = new Date(document.lastModified);
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

// ===============================
// HAMBURGER MENU
// ===============================

const menuBtn = document.querySelector("menu-btn");
const navMenu = document.querySelector("nav-menu");

menuBtn.addEventListener("click", () => {
 
    navMenu.classList.toggle("show");

    // Change hamburger to X
    if(navMenu.classList.contains("show")){
        menuBtn.textContent = "✖️";
    } else {
        menuBtn.textContent = "☰";
    }

});