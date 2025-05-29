const apiKey = "694f3d563d3489dfbfc9bcb22b0cc292";
const city = "Rio de Janeiro";
const country = "BR";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKey}`;

function calculateWindChill(tempC, speedKmh) {
  if (tempC <= 10 && speedKmh > 4.8) {
    const chill = 13.12 + 0.6215 * tempC - 11.37 * Math.pow(speedKmh, 0.16) + 0.3965 * tempC * Math.pow(speedKmh, 0.16);
    return chill.toFixed(1) + " °C";
  } else {
    return "N/A";
  }
}

function updateFooterInfo() {
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
}

function updateWeatherUI(temp, conditions, windSpeed, windChill) {
  const weatherSection = document.querySelector(".weather");
  const paragraphs = weatherSection.querySelectorAll("p");

  paragraphs[0].innerHTML = `<strong>Temperature:</strong> ${temp} °C`;
  paragraphs[1].innerHTML = `<strong>Conditions:</strong> ${conditions}`;
  paragraphs[2].innerHTML = `<strong>Wind:</strong> ${windSpeed} km/h`;
  paragraphs[3].innerHTML = `<strong>Wind Chill:</strong> ${windChill}`;
}

async function fetchWeather() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Weather data not available");

    const data = await response.json();

    const temp = data.main.temp;
    const windSpeed = data.wind.speed * 3.6; // Convert m/s to km/h
    const conditions = data.weather[0].main;
    const windChill = calculateWindChill(temp, windSpeed);

    updateWeatherUI(temp.toFixed(1), conditions, windSpeed.toFixed(1), windChill);
  } catch (error) {
    console.error("Error fetching weather:", error);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  updateFooterInfo();
  fetchWeather();
});
