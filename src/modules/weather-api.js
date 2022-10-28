import { format, isToday, isTomorrow } from "date-fns";
import { updateCurrWeather, updateHourlyWeather, updateDailyWeather, toggleLoaderVisibility } from "./ui.js";
import { unitSystem } from "./dropdown.js";


const key = "e0a910cf9f2a35b506f136dacc4f145f";
let currWeatherCoords;
const appUnits = {
    "pressure": "hPa",
    "humidity": "%",
    "visibility": "km",
    "pop": "%",
    "metric": {
        "temp": "°C",
        "windSpeed": "m/s"
    },
    "imperial": {
        "temp": "°F",
        "windSpeed": "mph"
    }
};


// High order function
async function getWeatherData(position, callback) {
    // Show loader
    toggleLoaderVisibility();
    
    try {
        let coords;
        if (callback) {
            coords = await callback(position);
        } else {
            coords = position;
        }
        
        const data = await fetchUrl(`https://api.openweathermap.org/data/3.0/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=minutely,alerts&units=${unitSystem}&appid=${key}`);

        formatWeatherData(data, coords.locationName);
    } catch (err) {
        return Promise.reject(err);
    } finally {
        // Always hide the loader!
        toggleLoaderVisibility();
    }
}


// Functions to fetch only coords or location information
async function getLocationByCoords(coord) {
    const location = await fetchUrl(`http://api.openweathermap.org/geo/1.0/reverse?lat=${coord.lat}&lon=${coord.lon}&limit=1&appid=${key}`);

    return currWeatherCoords = {
        lat: coord.lat,
        lon: coord.lon, 
        locationName: `${location[0].name}, ${location[0].country}`,
    }
}

async function getCoordsByLocation(location) {
    const data = await fetchUrl(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`);

    return currWeatherCoords = {
        lat: data.coord.lat,
        lon: data.coord.lon,
        locationName: `${data.name}, ${data.sys.country}`,
    }
}

async function fetchUrl(url) {
    try {
        const response = await fetch(url);

        if (response.ok) {            
            const data = await response.json();
            return data;
        } else {
            throw new Error("Unable to find the location");
        }

    } catch (err) {
        return Promise.reject(err);
    }
}


// Functions to format data
function formatWeatherData(data, location) {
    const timezone = data.timezone;

    const curr = formatCurrWeather(data.current, location, timezone);
    const hourly = formatHourlyForecast(data.hourly, timezone);
    const daily = formatDailyForecast(data.daily, timezone);

    updateCurrWeather(curr);
    updateHourlyWeather(hourly);
    updateDailyWeather(daily);
}

function formatCurrWeather(data, location, timezone) {
    const weatherDesc = formatWeatherDesc(data.weather[0].description);
    const currTime = format(getTimezoneDate(data.dt, timezone), "MMMM do, h:mm aaaa");
    const sunrise = format(getTimezoneDate(data.sunrise, timezone), "h:mm aaaa");
    const sunset = format(getTimezoneDate(data.sunset, timezone), "h:mm aaaa");

    return {
        "dt": currTime,
        "temp": `${Math.round(data.temp)}${appUnits[unitSystem].temp}`,
        weatherDesc,
        "feelsLike": `${Math.round(data.feels_like)}${appUnits[unitSystem].temp}`,
        "humidity": `${data.humidity} ${appUnits.humidity}`,
        "pressure": `${data.pressure} ${appUnits.pressure}`,
        "windSpeed": data["wind_speed"] + appUnits[unitSystem].windSpeed,
        "visibility": `${data.visibility / 1000}${appUnits.visibility}`,
        "uvi": Math.round(data.uvi),
        sunrise,
        sunset,
        location,
        "icon": data.weather[0].icon,
    }
}

function formatHourlyForecast(data, timezone) {
    let i = 0;
    const data24Hours = data.slice(1, 25);
    const hourlyFcData = [];

    for (const el of data24Hours) {
        const date = format(getTimezoneDate(el.dt, timezone), "h:mm aaaa");
        hourlyFcData.push({
            "hour": date,
            "temp": `${Math.round(el.temp)}${appUnits[unitSystem].temp}`,
            "pop": formatWeatherPop(el.pop),
            "icon": el.weather[0].icon
        });

        i++;
    }

    return hourlyFcData;
}

function formatDailyForecast(data, timezone) {
    const dailyFcData = [];

    for (let i = 0; i < 8; i++) {
        const weatherDesc = formatWeatherDesc(data[i].weather[0].description);
        let date = getTimezoneDate(data[i].dt, timezone);

        if (isToday(date)) {
            date = "Today";
        } else if (isTomorrow(date)) {
            date = "Tomorrow";
        } else {
            date = format(date, "EEEE");
        }

        dailyFcData.push({
            "day": date,
            weatherDesc,
            "maxTemp": `${Math.round(data[i].temp.max)}${appUnits[unitSystem].temp}`,
            "minTemp": `${Math.round(data[i].temp.min)}${appUnits[unitSystem].temp}`,
            "pop": formatWeatherPop(data[i].pop),
            "humidity": `${data[i].humidity}${appUnits.humidity}`,
            "pressure": `${data[i].pressure} ${appUnits.pressure}`,
            "uvi": Math.round(data[i].uvi),
            "windSpeed": data[i]["wind_speed"] + appUnits[unitSystem].windSpeed,
            "icon": data[i].weather[0].icon
        });
    }

    return dailyFcData;
}


// Format helpers
function formatWeatherDesc(desc) {
    return desc[0].toUpperCase() + desc.slice(1);
}

function formatWeatherPop(pop) {
    return `${Math.round(pop * 100)}${appUnits.pop}`;
}

function getTimezoneDate(datetime, timezone) {
    let newDate = new Date(datetime * 1000);
    newDate = new Date(newDate.toLocaleString('en-US', { timeZone: timezone }));

    return newDate;
}


export {
    currWeatherCoords,
    getWeatherData,
    getLocationByCoords,
    getCoordsByLocation
}