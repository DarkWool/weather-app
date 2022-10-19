import { format } from "date-fns";
import { updateWeatherData } from "./ui.js";

const key = "e0a910cf9f2a35b506f136dacc4f145f";


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

    sunrise = format(sunrise, "h:mm aaaa");
    sunset = format(sunset, "h:mm aaaa");

    const hourlyForecast = data.hourly.slice(1, 25);
    const newArr = [];
    hourlyForecast.forEach((el, index) => {
        let hour = format(new Date(el.dt * 1000), "h:mm aaaa");

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


export {
    fetchWeatherData,
}