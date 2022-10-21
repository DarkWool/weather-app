import { format, isToday, isTomorrow } from "date-fns";
import { updateCurrWeather, updateHourlyWeather, updateDailyWeather } from "./ui.js";

const key = "e0a910cf9f2a35b506f136dacc4f145f";


async function fetchWeatherData(location) {
    // Get latitude, longitude for location
    const coords = await getCoordinates(location);
    
    // Get weather data
    const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=minutely,alerts&units=metric&appid=${key}`);
    const data = await response.json();
    
    console.log(coords);
    console.log(data);
    
    formatWeatherData(data, coords.locationName);
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
        "temp": `${Math.round(data.temp)}°C`,
        weatherDesc,
        "feelsLike": `${Math.round(data.feels_like)}°C`,
        "humidity": `${data.humidity} %`,
        "pressure": `${data.pressure} hpa`,
        "windSpeed": `${data["wind_speed"]}m/s`,
        "visibility": `${data.visibility / 1000}km`,
        "uvi": `${Math.round(data.uvi)}`,
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
            "temp": `${Math.round(el.temp)}°C`,
            "pop": Math.round(el.pop * 100),
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
            "maxTemp": `${Math.round(data[i].temp.max)}°C`,
            "minTemp": `${Math.round(data[i].temp.min)}°C`,
            "pop": Math.round(data[i].pop * 100),
            "humidity": data[i].humidity,
            "pressure": data[i].pressure,
            "uvi": data[i].uvi,
            "windSpeed": data[i].wind_speed
        });
    }

    return dailyFcData;
}


// Helpers
function formatWeatherDesc(desc) {
    return desc[0].toUpperCase() + desc.slice(1);
}

function getTimezoneDate(datetime, timezone) {
    let newDate = new Date(datetime * 1000);
    newDate = new Date(newDate.toLocaleString('en-US', { timeZone: timezone }));

    return newDate;
}


export {
    fetchWeatherData,
}