  // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
const apiKey = '75f66dda1a95538b10a3cd687025ff3e';

// Get the search button element
const searchButton = document.getElementById('search-button');

// Attach event listener to the search button
searchButton.addEventListener('click', function() {
  // Get the input value
  const cityInput = document.getElementById('city-input');
  const city = cityInput.value;

  // Fetch weather data from OpenWeatherMap API
  fetchWeatherData(city);
});

// Get the city list elements
const cityList = document.getElementsByClassName('city');

// Attach event listeners to the city list items
for (let i = 0; i < cityList.length; i++) {
  cityList[i].addEventListener('click', function() {
    const city = this.textContent;
    fetchWeatherData(city);
  });
}

// Function to fetch weather data from OpenWeatherMap API
function fetchWeatherData(city) {
  // Fetch weather data from OpenWeatherMap API
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      // Extract relevant data from the API response
      const temperature = Math.round(data.main.temp - 273.15);
      const description = data.weather[0].description;

      // Update the HTML elements with the retrieved data
      document.getElementById('city').textContent = city;
      document.getElementById('temperature').textContent = temperature + '°C';
      document.getElementById('description').textContent = description;
    })
    .catch(error => console.log(error));
}
