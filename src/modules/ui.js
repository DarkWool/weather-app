import { getWeatherData, getCoordsByLocation } from "./weather-api.js";
import * as resources from "./graphic-resources.js";

// Dom cache
const searchForm = document.getElementsByName("searchWeather")[0];

const currWeatherSection = document.getElementsByClassName("weather")[0];
const currWeatherIcon = currWeatherSection.getElementsByClassName("weather_icon")[0];
const currWeatherInfo = currWeatherSection.getElementsByClassName("weather_info")[0];
const currTemp = currWeatherInfo.getElementsByClassName("weather_temp")[0];
const currWeatherDesc = currWeatherInfo.getElementsByClassName("weather_temp-desc")[0];
const currCity = currWeatherInfo.getElementsByClassName("weather_city")[0];
const currDateTime = currWeatherInfo.getElementsByClassName("weather_dt")[0];
const currSunrise = currWeatherInfo.querySelector("[data-curr-sunrise]");
const currSunset = currWeatherInfo.querySelector("[data-curr-sunset]");
const weatherExtras = Array.from(document.getElementsByClassName("weather_extra-val"));

const hourlyFcContainer = document.getElementsByClassName("hourly_items")[0];
const dailyFcContainer = document.getElementsByClassName("daily_items")[0];

// Loader
const loader = document.getElementsByClassName("loader")[0];


searchForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const form = e.target;
    const searchInput = form.elements["weatherLocation"];
    const searchValue = searchInput.value;
    if (searchValue === "") return;

    getWeatherData(searchValue, getCoordsByLocation).then(() => {
        form.reset();
        hideInvalidMessage(searchInput);
    }).catch((err) => {  
        console.error(err)
        showInvalidMessage(searchInput);
    });
});


function updateCurrWeather(data) {
    currWeatherIcon.src = resources.icons[data.icon];

    currTemp.textContent = data.temp;
    currWeatherDesc.textContent = data.weatherDesc;
    currCity.textContent = data.location;
    currDateTime.textContent = data.dt;
    currSunrise.textContent = data.sunrise;
    currSunset.textContent = data.sunset;

    weatherExtras[0].textContent = data.feelsLike;
    weatherExtras[1].textContent = data.humidity;
    weatherExtras[2].textContent = data.pressure;
    weatherExtras[3].textContent = data.windSpeed;
    weatherExtras[4].textContent = data.visibility;
    weatherExtras[5].textContent = data.uvi;
}

function updateHourlyWeather(hourlyData) {
    const hourlyFragment = document.createDocumentFragment();
    for (const item of hourlyData) {
        hourlyFragment.append(createHourlyItemUI(item));
    }

    hourlyFcContainer.innerHTML = "";
    hourlyFcContainer.append(hourlyFragment);
}

function updateDailyWeather(dailyData) {
    const dailyFragment = document.createDocumentFragment();
    for (const dayData of dailyData) {
        dailyFragment.append(createDailyItemUI(dayData));
    }

    dailyFcContainer.innerHTML = "";
    dailyFcContainer.append(dailyFragment);
}


// Functions to create UI elements
function createHourlyItemUI(data) {
    const container = document.createElement("li");
    const icon = document.createElement("img");
    const temp = document.createElement("span");
    const hour = temp.cloneNode();
    const pop = temp.cloneNode();
    const popIcon = temp.cloneNode();
    
    container.classList.add("hourly_item");
    temp.classList.add("hourly_temp");
    hour.classList.add("hourly_time");
    pop.classList.add("hourly_pop");
    popIcon.classList.add("icon-container");
    
    icon.src = resources.icons[data.icon];
    temp.textContent = data.temp;
    hour.textContent = data.hour;
    pop.textContent = data.pop;
    popIcon.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"> <path
    d="M12 0c-4.87 7.197-8 11.699-8 16.075 0 4.378 3.579 7.925 8 7.925s8-3.547 8-7.925c0-4.376-3.13-8.878-8-16.075z" />
    </svg>`;
    pop.setAttribute("aria-label", "Probability of rain");
    pop.setAttribute("title", "Probability of rain");
    
    pop.prepend(popIcon);
    container.append(icon, temp, pop, hour);

    return container;
}

function createDailyItemUI(data) {
    const container = document.createElement("li");
    const dayName = document.createElement("h3");

    const weatherContainer = document.createElement("div");
    const icon = document.createElement("img");
    const weatherDesc = document.createElement("p");
    
    const temperatures = document.createElement("div");
    const maxTempContainer = document.createElement("div");
    const maxTemp = document.createElement("span");
    const maxTempLabel = document.createElement("span");
    
    const minTempContainer = document.createElement("div");
    const minTemp = document.createElement("span");
    const minTempLabel = document.createElement("span");

    const extraInfoList = document.createElement("ul");
    extraInfoList.insertAdjacentHTML("beforeend", `
        <li class="daily_extra-item" aria-label="Probability of rain" title="Probability of rain">
            <span class="icon-container" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24">
                    <path d="M12 0c-4.87 7.197-8 11.699-8 16.075 0 4.378 3.579 7.925 8 7.925s8-3.547 8-7.925c0-4.376-3.13-8.878-8-16.075z" />
                </svg>
            </span>
            <p><span class="fw-600">Rain: &nbsp;</span>${data.pop}</p>
        </li>
        <li class="daily_extra-item">
            <p><span class="fw-600">Humidity: &nbsp;</span>${data.humidity}</p>
        </li>
        <li class="daily_extra-item">
            <p><span class="fw-600">Pressure: &nbsp;</span>${data.pressure}</p>
        </li>
        <li class="daily_extra-item">
            <p><span class="fw-600">Wind Speed: &nbsp;</span>${data.windSpeed}</p>
        </li>
        <li class="daily_extra-item">
            <p><span class="fw-600">UV Index: &nbsp;</span>${data.uvi}</p>
        </li>
    `);

    container.classList.add("daily_item");
    dayName.classList.add("daily_item-title");
    weatherContainer.classList.add("daily_item-weather");
    temperatures.classList.add("daily_item-temperatures");

    maxTemp.classList.add("daily_temp");
    minTemp.classList.add("daily_temp");
    maxTempLabel.classList.add("daily_temp-max");
    minTempLabel.classList.add("daily_temp-min");
    extraInfoList.classList.add("daily_extras")

    dayName.textContent = data.day;
    weatherDesc.textContent = data.weatherDesc;
    maxTemp.textContent = data.maxTemp;
    maxTempLabel.textContent = "Max";
    minTemp.textContent = data.minTemp;
    minTempLabel.textContent = "Min";
    icon.src = resources.icons[data.icon];

    weatherContainer.append(weatherDesc);
    minTempContainer.append(minTemp, minTempLabel);
    maxTempContainer.append(maxTemp, maxTempLabel);
    temperatures.append(maxTempContainer, minTempContainer);

    container.append(dayName, icon, weatherContainer, temperatures, extraInfoList);

    return container;
}


// Form validation
function showInvalidMessage(input) {
	const parentForm = input.closest("form");
	const errorMsg = parentForm.getElementsByClassName("invalid-input")[0];

	if (errorMsg) {
		errorMsg.classList.add("active");
	}
}

function hideInvalidMessage(input) {
	const parentForm = input.closest("form");
	const errorMsg = parentForm.getElementsByClassName("invalid-input")[0];

	if (errorMsg) {
		errorMsg.classList.remove("active");
	}
}


// Loader
function toggleLoaderVisibility() {
    loader.classList.toggle("active");
}


export {
    updateCurrWeather,
    updateHourlyWeather,
    updateDailyWeather,
    toggleLoaderVisibility
}