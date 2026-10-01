// Get the current year for the copyright notice
const currentYearSpan = document.querySelector("#currentyear");
const today = new Date();
currentYearSpan.textContent = today.getFullYear();

// Get the last modified date of the document
const lastModifiedParagraph = document.querySelector("#lastModified");
lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;