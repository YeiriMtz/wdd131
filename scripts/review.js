// Helper to get query parameters as an object
function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  const data = {};
  for (const [key, value] of params.entries()) {
    if (data[key]) {
      // Handle multiple checkboxes (array values)
      if (Array.isArray(data[key])) {
        data[key].push(value);
      } else {
        data[key] = [data[key], value];
      }
    } else {
      data[key] = value;
    }
  }
  return data;
}

// Display the submitted data
function displayReviewDetails(data) {
  const reviewList = document.getElementById("reviewDetails");
  const labels = {
    product: "Product Name",
    rating: "Rating",
    installDate: "Installation Date",
    features: "Useful Features",
    review: "Written Review",
    username: "Your Name"
  };

  for (const key in labels) {
    if (data[key]) {
      const li = document.createElement("li");
      let value = data[key];
      if (Array.isArray(value)) {
        value = value.join(", ");
      }
      li.innerHTML = `<strong>${labels[key]}:</strong> ${value}`;
      reviewList.appendChild(li);
    }
  }
}

// Update review count using localStorage
function updateReviewCount() {
  let count = localStorage.getItem("reviewCount") || 0;
  count = parseInt(count) + 1;
  localStorage.setItem("reviewCount", count);
  document.getElementById("reviewCount").textContent = count;
}

// Update footer info
function updateFooter() {
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
}

// Init
document.addEventListener("DOMContentLoaded", () => {
  const data = getQueryParams();
  displayReviewDetails(data);
  updateReviewCount();
  updateFooter();
});
