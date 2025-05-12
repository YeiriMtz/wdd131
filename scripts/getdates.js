// current year
document.getElementById("currentyear").textContent = new Date().getFullYear();
// last modified
const modified = new Date(document.lastModified);
const formatted = modified.toLocaleString();
document.getElementById("lastModified").textContent = formatted;
