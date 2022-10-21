import { format } from "date-fns";
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
    const curr = formatCurrWeather(data.current, location);
    const hourly = formatHourlyForecast(data.hourly);
    const daily = formatDailyForecast(data.daily);

    updateCurrWeather(curr);
    updateHourlyWeather(hourly);
    updateDailyWeather(daily);
}

function formatCurrWeather(data, location) {
    const weatherDesc = formatWeatherDesc(data.weather[0].description);

    return {
        "dt": format(new Date(data.dt * 1000), "MMMM do, h:mm aaaa"),
        "temp": `${Math.round(data.temp)}°C`,
        weatherDesc,
        "feelsLike": `${Math.round(data.feels_like)}°C`,
        "humidity": `${data.humidity} %`,
        "pressure": `${data.pressure} hpa`,
        "windSpeed": `${data["wind_speed"]}m/s`,
        "visibility": `${data.visibility / 1000}km`,
        "uvi": `${Math.round(data.uvi)}`,
        "sunrise": format(new Date(data.sunrise * 1000), "h:mm aaaa"),
        "sunset": format(new Date(data.sunset * 1000), "h:mm aaaa"),
        location,
    }
}

function formatHourlyForecast(data) {
    let i = 0;
    const hourlyFcData = [];

    for (const el of data) {
        hourlyFcData.push({
            "hour": format(new Date(el.dt * 1000), "h:mm aaaa"),
            "temp": `${Math.round(el.temp)}°C`,
            "pop": Math.round(el.pop * 100),
        });

        i++;
    }

    return hourlyFcData;
}

function formatDailyForecast(data) {
    // let i = 0;
    // const dailyFcData = [];
    // for (const day of data) {
    //     if (i === 0) {
    //         i++;
    //         continue;
    //     }

    //     const weatherDesc = formatWeatherDesc(day.weather[0].description);
    //     dailyFcData.push({
    //         "day": format(new Date(day.dt * 1000), "EEEE"),
    //         weatherDesc,
    //         "maxTemp": `${Math.round(day.temp.max)}°C`,
    //         "minTemp": `${Math.round(day.temp.min)}°C`,
    //         "pop": Math.round(day.pop * 100),
    //         "humidity": day.humidity,
    //         "pressure": day.pressure,
    //         "uvi": day.uvi,
    //         "windSpeed": day.wind_speed
    //     });

    //     i++;
    // }

    const dailyFcData = [];

    // Skip the first iteration since it's today's forecast
    for (let i = 1; i < 8; i++) {
        const weatherDesc = formatWeatherDesc(data[i].weather[0].description);

        dailyFcData.push({
            "day": format(new Date(data[i].dt * 1000), "EEEE"),
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


export {
    fetchWeatherData,
}