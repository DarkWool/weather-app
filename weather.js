const key = "e0a910cf9f2a35b506f136dacc4f145f";

// Dom cache
const searchForm = document.getElementsByName("searchWeather")[0];
const currTemp = document.getElementsByClassName("weather_temp")[0];
const currTempDesc = document.getElementsByClassName("weather_temp-desc")[0];
const currCity = document.getElementsByClassName("weather_city")[0];
const sunrise = document.getElementById("sunriseValue");
const sunset = document.getElementById("sunsetValue");
const weatherExtras = document.getElementsByClassName("weather_extra-val");
const hourlyForecastContainer = document.getElementsByClassName("hourly_items")[0];


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

    const hourlyForecast = data.hourly.slice(1, 25);
    const newArr = [];
    hourlyForecast.forEach((el, index) => {
        let hour = new Date(el.dt * 1000);
        hour = `${hour.getHours()}:${hour.getMinutes()}`;

        newArr[index] = {
            hour,
            "temp": `${Math.round(el.temp)}°C`,
            "pop": Math.round(el.pop * 100),
        };
    });

    let tempDesc = data.current.weather[0].description[0].toUpperCase() + data.current.weather[0].description.slice(1);

    return {
        "current": {
            "temp": `${Math.round(data.current.temp)}°C`,
            tempDesc,
            "feelsLike": `${Math.round(data.current.feels_like)}°C`,
            "humidity": `${data.current.humidity} %`,
            "pressure": `${data.current.pressure} hpa`,
            "windSpeed": `${data.current["wind_speed"]}m/s`,
            "visibility": `${data.current.visibility / 1000}km`,
            "uvi": `${Math.round(data.current.uvi)}`,
            sunrise,
            sunset,
            location,
        },
        "hourly": newArr,
    }
}

// To get the hour of the place you are currently fetching...
//  new Date((1665979638 + (timezone*1000)) * 1000) 

function updateWeatherData(data) {
    currTemp.textContent = data.current.temp;
    currTempDesc.textContent = data.current.tempDesc;
    currCity.textContent = data.current.location;
    sunrise.textContent = data.current.sunrise;
    sunset.textContent = data.current.sunset;

    weatherExtras[0].textContent = data.current.feelsLike;
    weatherExtras[1].textContent = data.current.humidity;
    weatherExtras[2].textContent = data.current.pressure;
    weatherExtras[3].textContent = data.current.windSpeed;
    weatherExtras[4].textContent = data.current.visibility;
    weatherExtras[5].textContent = data.current.uvi;

    const fragment = document.createDocumentFragment();
    for (const item of data.hourly) {
        fragment.append(createHourlyForecastItems(item));
    }

    hourlyForecastContainer.innerHTML = "";
    hourlyForecastContainer.append(fragment);
}

function createHourlyForecastItems(data) {
    const container = document.createElement("li");
    const iconContainer = document.createElement("span");
    const temp = iconContainer.cloneNode();
    const hour = iconContainer.cloneNode();
    
    container.classList.add("hourly_item");
    iconContainer.classList.add("icon-container");
    temp.classList.add("hourly_temp");
    hour.classList.add("hourly_time");
    
    temp.textContent = data.temp;
    hour.textContent = data.hour;
    iconContainer.innerHTML = `<svg width="36" height="36" viewBox="0 0 24 24">
    <path d="M9.417 0h6.958l-3.375 8h7l-13 16 4.375-11h-7.375z" /></svg>`;
    
    container.append(iconContainer, temp, hour);

    if (data.pop >= 20) {
        const pop = document.createElement("span");
        pop.textContent = data.pop + "%";
        temp.after(pop);
    }

    return container;
}
