import { fetchWeatherData } from "./weather-api.js";

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


export {
    updateWeatherData,
}