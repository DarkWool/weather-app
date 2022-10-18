const key = "e0a910cf9f2a35b506f136dacc4f145f";

// Dom cache
const searchForm = document.getElementsByName("searchWeather")[0];
const currTemp = document.getElementsByClassName("weather_temp")[0];
const currCity = document.getElementsByClassName("weather_city")[0];
const sunrise = document.getElementById("sunriseValue");
const sunset = document.getElementById("sunsetValue");
const weatherExtras = document.getElementsByClassName("weather_extra-val");


searchForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchValue = e.target.elements["weatherLocation"].value;
    fetchWeatherData(searchValue);
});


// Functions
async function fetchWeatherData(location) {
    // Get latitude, longitude for location
    const coords = await getCoordinates(location);
    
    // Get weather data
    const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=minutely,alerts&units=metric&appid=${key}`);
    const data = await response.json();
    
    console.log(coords);
    console.log(data);

    const formattedData = formatWeatherData(data, coords.locationName);
    updateWeatherData(formattedData);
}

async function getCoordinates(location) {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${key}`);
    const data = await response.json();
    console.log(data);

    return {
        locationName: `${data[0].name}, ${data[0].country}`,
        lat: data[0].lat,
        lon: data[0].lon,
    }
}

function formatWeatherData(data, location) {
    let sunrise = new Date(data.current.sunrise * 1000);
    let sunset = new Date(data.current.sunset * 1000);

    sunrise = `${sunrise.getHours()}:${sunrise.getMinutes()}`; 
    sunset = `${sunset.getHours()}:${sunset.getMinutes()}`; 

    return {
        "temp": `${Math.round(data.current.temp)}°C`,
        "feelsLike": `${Math.round(data.current.feels_like)}°C`,
        "humidity": `${data.current.humidity} %`,
        "pressure": `${data.current.pressure} hpa`,
        "windSpeed": `${data.current["wind_speed"]}m/s`,
        "visibility": `${data.current.visibility / 1000}km`,
        "uvi": `${Math.round(data.current.uvi)}`,
        sunrise,
        sunset,
        location,
    }
}

function updateWeatherData(data) {
    currTemp.textContent = data.temp;
    currCity.textContent = data.location;
    sunrise.textContent = data.sunrise;
    sunset.textContent = data.sunset;

    weatherExtras[0].textContent = data.feelsLike;
    weatherExtras[1].textContent = data.humidity;
    weatherExtras[2].textContent = data.pressure;
    weatherExtras[3].textContent = data.windSpeed;
    weatherExtras[4].textContent = data.visibility;
    weatherExtras[5].textContent = data.uvi;
}
