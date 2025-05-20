// current year
document.getElementById("currentyear").textContent = new Date().getFullYear();
// last modified
const modified = new Date(document.lastModified);
const formatted = modified.toLocaleString();
document.getElementById("lastModified").textContent = formatted;

function updateStylesheet() {
  const width = window.innerWidth;
  const link = document.getElementById('responsive-style');

  if (width >= 900) {
    link.href = 'styles/temples-large.css';
  } else {
    link.href = 'styles/';
  }
}

// Call on load
window.addEventListener('load', updateStylesheet);

// Call on resize
window.addEventListener('resize', updateStylesheet)