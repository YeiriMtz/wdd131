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

// Temples array
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
    templeName: "Rio de Janeiro Brazil",
    location: "Rio de Janeiro, Brazil",
    dedicated: "2022, May, 8",
    area: 29966,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/rio-de-janeiro-brazil-temple/rio-de-janeiro-brazil-temple-8167-main.jpg"
  },
  {
    templeName: "Colonia Juárez Mexico",
    location: "Colonia Juárez, Chihuahua",
    dedicated: "1999, March, 6",
    area: 6800,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/colonia-juarez-chihuahua-mexico-temple/colonia-juarez-chihuahua-mexico-temple-1601-main.jpg"
  },
  {
    templeName: "Provo City Center",
    location: "Provo, Utah",
    dedicated: "2016, March, 20",
    area: 85084,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-11068.jpg"
  },  
];

function clearTempleCards() {
  document.querySelector(".album").innerHTML = "";
}

function renderTempleCard(temple) {
  let card = document.createElement("section");
  card.classList.add("temple-card");

  let name = document.createElement("h3");
  let location = document.createElement("p");
  let dedication = document.createElement("p");
  let area = document.createElement("p");
  let img = document.createElement("img");

  name.textContent = temple.templeName;
  location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
  dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
  area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;

  img.setAttribute("src", temple.imageUrl);
  img.setAttribute("alt", `${temple.templeName} Temple`);
  img.setAttribute("loading", "lazy");

  card.appendChild(name);
  card.appendChild(location);
  card.appendChild(dedication);
  card.appendChild(area);
  card.appendChild(img);

  document.querySelector(".album").appendChild(card);
}

function filterTemples(criteria) {
  clearTempleCards();
  let filtered = [];

  switch (criteria) {
    case "old":
      filtered = temples.filter(t => {
        const year = parseInt(t.dedicated.split(",")[0]);
        return year < 1900;
      });
      break;
    case "new":
      filtered = temples.filter(t => {
        const year = parseInt(t.dedicated.split(",")[0]);
        return year > 2000;
      });
      break;
    case "large":
      filtered = temples.filter(t => t.area > 90000);
      break;
    case "small":
      filtered = temples.filter(t => t.area < 10000);
      break;
    case "home":
    default:
      filtered = temples;
  }

  filtered.forEach(t => renderTempleCard(t));
}

document.querySelectorAll(".menu-items a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); 
    const filter = e.target.getAttribute("data-filter");
    filterTemples(filter);
  });
});

filterTemples("home");
