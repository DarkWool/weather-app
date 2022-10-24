import { getWeatherByLocation, fetchWeatherData, locationCoords } from "./weather-api.js";

let selectedUnits = "metric";

// Dom cache
const searchForm = document.getElementsByName("searchWeather")[0];
const changeUnitsBtn = document.querySelector("[data-units]");

const currTemp = document.getElementsByClassName("weather_temp")[0];
const currWeatherDesc = document.getElementsByClassName("weather_temp-desc")[0];
const currCity = document.getElementsByClassName("weather_city")[0];
const currDateTime = document.getElementsByClassName("weather_dt")[0];
const currSunrise = document.getElementById("sunriseValue");
const currSunset = document.getElementById("sunsetValue");
const weatherExtras = document.getElementsByClassName("weather_extra-val");

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

    getWeatherByLocation(searchValue).then(() => {
        form.reset();
        hideInvalidMessage(searchInput);
    }).catch(() => {  
        showInvalidMessage(searchInput);
    });
});

changeUnitsBtn.addEventListener("click", (e) => {
    const target = e.target;
    if (target.dataset.units === "metric") {
        target.textContent = "Change to °C";
        target.dataset.units = "imperial";
        selectedUnits = "imperial";
    } else {
        target.textContent = "Change to °F";
        target.dataset.units = "metric";
        selectedUnits = "metric";
    }

    toggleLoaderVisibility();
    fetchWeatherData(locationCoords);
});


function updateCurrWeather(data) {
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
    const iconContainer = document.createElement("span");
    const temp = iconContainer.cloneNode();
    const hour = iconContainer.cloneNode();
    const pop = document.createElement("span");
    
    container.classList.add("hourly_item");
    iconContainer.classList.add("icon-container");
    temp.classList.add("hourly_temp");
    hour.classList.add("hourly_time");
    
    temp.textContent = data.temp;
    hour.textContent = data.hour;
    pop.textContent = data.pop;
    iconContainer.innerHTML = `<svg width="36" height="36" viewBox="0 0 24 24">
    <path d="M9.417 0h6.958l-3.375 8h7l-13 16 4.375-11h-7.375z" /></svg>`;
    
    container.append(iconContainer, temp, pop, hour);

    return container;
}

function createDailyItemUI(data) {
    const container = document.createElement("li");
    const dayName = document.createElement("h3");

    const weatherContainer = document.createElement("div");
    const weatherIcon = document.createElement("span");
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
        <li class="daily_extra-item">
            <span class="icon-container">
                <svg width="24" height="24" viewBox="0 0 24 24">
                    <path
                        d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm6.312-10.897c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z" />
                </svg>
            </span>
            <p><span class="fw-600">Rain Prob: </span>${data.pop}</p>
        </li>
        <li class="daily_extra-item">
            <span class="icon-container">
                <svg width="24" height="24" viewBox="0 0 24 24">
                    <path
                        d="M20.422 11.516c-.169-3.073-2.75-5.516-5.922-5.516-1.229 0-2.368.37-3.313.999-1.041-1.79-2.974-2.999-5.19-2.999-.468 0-.947.054-1.434.167 1.347 3.833-.383 6.416-4.563 5.812-.006 3.027 2.197 5.468 5.02 5.935.104 2.271 1.996 4.086 4.334 4.086h10.291c2.406 0 4.355-1.916 4.355-4.278 0-2.101-1.545-3.847-3.578-4.206zm-15.016 2.439c-1.285-.192-2.384-.997-2.964-2.125 2.916-.119 5.063-2.846 4.451-5.729 1.259.29 2.282 1.18 2.778 2.346-.635.875-1.031 1.928-1.094 3.069-1.419.251-2.588 1.186-3.171 2.439z" />
                </svg>
            </span>
            <p><span class="fw-600">Humidity: </span>${data.humidity}</p>
        </li>
        <li class="daily_extra-item">
            <span class="icon-container">
                <svg width="24" height="24" viewBox="0 0 24 24">
                    <path
                        d="M20.422 11.516c-.169-3.073-2.75-5.516-5.922-5.516-1.229 0-2.368.37-3.313.999-1.041-1.79-2.974-2.999-5.19-2.999-.468 0-.947.054-1.434.167 1.347 3.833-.383 6.416-4.563 5.812-.006 3.027 2.197 5.468 5.02 5.935.104 2.271 1.996 4.086 4.334 4.086h10.291c2.406 0 4.355-1.916 4.355-4.278 0-2.101-1.545-3.847-3.578-4.206zm-15.016 2.439c-1.285-.192-2.384-.997-2.964-2.125 2.916-.119 5.063-2.846 4.451-5.729 1.259.29 2.282 1.18 2.778 2.346-.635.875-1.031 1.928-1.094 3.069-1.419.251-2.588 1.186-3.171 2.439z" />
                </svg>
            </span>
            <p><span class="fw-600">Pressure: </span>${data.pressure}</p>
        </li>
        <li class="daily_extra-item">
            <span class="icon-container">
                <svg width="24" height="24" viewBox="0 0 24 24">
                    <path
                        d="M20.422 11.516c-.169-3.073-2.75-5.516-5.922-5.516-1.229 0-2.368.37-3.313.999-1.041-1.79-2.974-2.999-5.19-2.999-.468 0-.947.054-1.434.167 1.347 3.833-.383 6.416-4.563 5.812-.006 3.027 2.197 5.468 5.02 5.935.104 2.271 1.996 4.086 4.334 4.086h10.291c2.406 0 4.355-1.916 4.355-4.278 0-2.101-1.545-3.847-3.578-4.206zm-15.016 2.439c-1.285-.192-2.384-.997-2.964-2.125 2.916-.119 5.063-2.846 4.451-5.729 1.259.29 2.282 1.18 2.778 2.346-.635.875-1.031 1.928-1.094 3.069-1.419.251-2.588 1.186-3.171 2.439z" />
                </svg>
            </span>
            <p><span class="fw-600">Wind Speed: </span>${data.windSpeed}</p>
        </li>
        <li class="daily_extra-item">
            <span class="icon-container">
                <svg width="24" height="24" viewBox="0 0 24 24">
                    <path
                        d="M20.422 11.516c-.169-3.073-2.75-5.516-5.922-5.516-1.229 0-2.368.37-3.313.999-1.041-1.79-2.974-2.999-5.19-2.999-.468 0-.947.054-1.434.167 1.347 3.833-.383 6.416-4.563 5.812-.006 3.027 2.197 5.468 5.02 5.935.104 2.271 1.996 4.086 4.334 4.086h10.291c2.406 0 4.355-1.916 4.355-4.278 0-2.101-1.545-3.847-3.578-4.206zm-15.016 2.439c-1.285-.192-2.384-.997-2.964-2.125 2.916-.119 5.063-2.846 4.451-5.729 1.259.29 2.282 1.18 2.778 2.346-.635.875-1.031 1.928-1.094 3.069-1.419.251-2.588 1.186-3.171 2.439z" />
                </svg>
            </span>
            <p><span class="fw-600">UV Index: </span>${data.uvi}</p>
        </li>
    `);

    container.classList.add("daily_item");
    dayName.classList.add("daily_item-title");
    weatherContainer.classList.add("daily_item-weather");
    weatherIcon.classList.add("icon-container");
    temperatures.classList.add("daily_item-temperatures");

    maxTemp.classList.add("daily_temp");
    minTemp.classList.add("daily_temp");
    maxTempLabel.classList.add("daily_temp-max");
    minTempLabel.classList.add("daily_temp-min");
    

    dayName.textContent = data.day;
    weatherDesc.textContent = data.weatherDesc;
    maxTemp.textContent = data.maxTemp;
    minTemp.textContent = data.minTemp;
    weatherIcon.innerHTML = `<span class="icon-container"><svg width="48" height="48" viewBox="0 0 24 24">
    <path d="M20.422 11.516c-.169-3.073-2.75-5.516-5.922-5.516-1.229 0-2.368.37-3.313.999-1.041-1.79-2.974-2.999-5.19-2.999-.468 0-.947.054-1.434.167 1.347 3.833-.383 6.416-4.563 5.812-.006 3.027 2.197 5.468 5.02 5.935.104 2.271 1.996 4.086 4.334 4.086h10.291c2.406 0 4.355-1.916 4.355-4.278 0-2.101-1.545-3.847-3.578-4.206zm-15.016 2.439c-1.285-.192-2.384-.997-2.964-2.125 2.916-.119 5.063-2.846 4.451-5.729 1.259.29 2.282 1.18 2.778 2.346-.635.875-1.031 1.928-1.094 3.069-1.419.251-2.588 1.186-3.171 2.439z" /></svg></span>`;


    weatherContainer.append(weatherIcon, weatherDesc);
    minTempContainer.append(minTemp, minTempLabel);
    maxTempContainer.append(maxTemp, maxTempLabel);
    temperatures.append(maxTempContainer, minTempContainer);

    container.append(dayName, weatherContainer, temperatures, extraInfoList);

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
    selectedUnits,
    toggleLoaderVisibility
}