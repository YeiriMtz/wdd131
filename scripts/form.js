const products = ["Camera", "Tripod", "Lighting Kit", "Backdrop", "Lens Filter"];
const selectElement = document.getElementById("product");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product;
  option.textContent = product;
  selectElement.appendChild(option);
});

// current year
document.getElementById("currentyear").textContent = new Date().getFullYear();
// last modified
const modified = new Date(document.lastModified);
const formatted = modified.toLocaleString();
document.getElementById("lastModified").textContent = formatted;