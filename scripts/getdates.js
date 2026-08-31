// Dynamically set the current year in the footer copyright
document.querySelector("#currentyear").textContent = new Date().getFullYear();

// Dynamically set the last modified date of the document
let LastModif = new Date(document.lastModified);
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;