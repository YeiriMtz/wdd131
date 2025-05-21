// current year
document.getElementById("currentyear").textContent = new Date().getFullYear();
// last modified
const modified = new Date(document.lastModified);
const formatted = modified.toLocaleString();
document.getElementById("lastModified").textContent = formatted;

// Toggle menu button
const menuToggle = document.getElementById("menuToggle");
const menuItems = document.getElementById("menuItems");

menuToggle.addEventListener("click", () => {
  menuItems.classList.toggle("show");
});