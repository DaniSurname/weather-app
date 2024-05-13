function updateData(response) {
  // Updating temperature corresponding to form input:
  let temperatureElement = document.querySelector("#temperature-display");
  let temperature = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = temperature;

  // Updating header to form input:
  let cityHeader = document.querySelector("#city-header");
  cityHeader.innerHTML = response.data.city;
}

function getData(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let cityName = cityInput.value;

  let key = "384f9t60d2a80f6f159b0a59do1ee44d";
  let url = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${key}`;

  axios.get(url).then(updateData);
}

let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", getData);
