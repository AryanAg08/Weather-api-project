
 const apiKey = '75f66dda1a95538b10a3cd687025ff3e';

const searchButton = document.getElementById('search-button');


searchButton.addEventListener('click', function() {

  const cityInput = document.getElementById('city-input');
  const city = cityInput.value;


  fetchWeatherData(city);
});


const cityList = document.getElementsByClassName('city');


for (let i = 0; i < cityList.length; i++) {
  cityList[i].addEventListener('click', function() {
    const city = this.textContent;
    fetchWeatherData(city);
  });
}


function fetchWeatherData(city) {
 
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('City not found!');
      }
      return response.json();
    })
    .then(data => {
                    console.log(data);
        const temperature = Math.round(data.main.temp - 273.15);
        const description = data.weather[0].description;
        const maxtemp = Math.round(data.main.temp_max - 273.15);
        const mintemp = Math.round(data.main.temp_min - 273.15);
        const location = `Latitude =` + data.coord.lat + `\nLongitude =` + data.coord.lon;
        const pressure = data.main.pressure;
        const sunrise = data.sys.sunrise;
        const sunset = data.sys.sunset;
        const wind = data.wind.speed;
      



      document.getElementById('city').textContent = city;
      document.getElementById('temperature').textContent = temperature + '°C';
      document.getElementById('description').textContent = description;
      document.getElementById('maxtemp').textContent = maxtemp;
      document.getElementById('mintemp').textContent = mintemp;
      document.getElementById('location').textContent = location;
      document.getElementById('Pressure').textContent = pressure;
      document.getElementById('sunrise').textContent = sunrise;
      document.getElementById('sunset').textContent = sunset;
      document.getElementById('wind').textContent = wind;
    })
    .catch(error => {
      console.log(error);
      
      document.getElementById('city').textContent = 'Error';
      document.getElementById('temperature').textContent = '';
      document.getElementById('description').textContent = error.message;
    });
}
