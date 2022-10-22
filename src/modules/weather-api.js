import { format, isToday, isTomorrow } from "date-fns";
import { updateCurrWeather, updateHourlyWeather, updateDailyWeather, selectedUnits } from "./ui.js";

const key = "e0a910cf9f2a35b506f136dacc4f145f";
let locationCoords;
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
}

async function getCoordinates(location) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`);
    const data = await response.json();

    locationCoords = {
        lat: data.coord.lat,
        lon: data.coord.lon,
        locationName: `${data.name}, ${data.sys.country}`,
    }

    fetchWeatherData(locationCoords);
}

async function fetchWeatherData(coords) {
    // Get weather data
    const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=minutely,alerts&units=${selectedUnits}&appid=${key}`);
    const data = await response.json();

    console.log(data);

    formatWeatherData(data, coords.locationName);
}


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
        "temp": `${Math.round(data.temp)}${appUnits[selectedUnits].temp}`,
        weatherDesc,
        "feelsLike": `${Math.round(data.feels_like)}${appUnits[selectedUnits].temp}`,
        "humidity": `${data.humidity} ${appUnits.humidity}`,
        "pressure": `${data.pressure} ${appUnits.pressure}`,
        "windSpeed": data["wind_speed"] + appUnits[selectedUnits].windSpeed,
        "visibility": `${data.visibility / 1000}${appUnits.visibility}`,
        "uvi": Math.round(data.uvi),
        sunrise,
        sunset,
        location,
    }
}

function formatHourlyForecast(data, timezone) {
    let i = 0;
    const hourlyFcData = [];

    for (const el of data) {
        const date = format(getTimezoneDate(el.dt, timezone), "h:mm aaaa");
        hourlyFcData.push({
            "hour": date,
            "temp": `${Math.round(el.temp)}${appUnits[selectedUnits].temp}`,
            "pop": formatWeatherPop(el.pop),
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
            "maxTemp": `${Math.round(data[i].temp.max)}${appUnits[selectedUnits].temp}`,
            "minTemp": `${Math.round(data[i].temp.min)}${appUnits[selectedUnits].temp}`,
            "pop": formatWeatherPop(data[i].pop),
            "humidity": `${data[i].humidity} ${appUnits.humidity}`,
            "pressure": `${data[i].pressure} ${appUnits.pressure}`,
            "uvi": Math.round(data[i].uvi),
            "windSpeed": data[i]["wind_speed"] + appUnits[selectedUnits].windSpeed
        });
    }

    return dailyFcData;
}


// Helpers
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
    fetchWeatherData,
    getCoordinates,
    locationCoords,
}