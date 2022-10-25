import { getWeatherData, getCoordsByLocation, getLocationByCoords } from "./weather-api";

async function init() {
    // Try to load user's location from localStorage
    const isWeatherLoaded = await loadStoredLocation();
    if (isWeatherLoaded === true) return;

    try {
        // Load a "sample" location
        await getWeatherData("Detroit", getCoordsByLocation);
    
        // Ask if you can use user's location so you can replace current weather data
        let userCoords = await getUserCoords();
        await getWeatherData(userCoords, getLocationByCoords);

        // Save the user coords to localStorage
        localStorage.setItem("userCoords", JSON.stringify(userCoords));
    } catch (err) {
        console.error(err);
    }
}

async function loadStoredLocation() {
    const userCoords = JSON.parse(localStorage.getItem("userCoords"));
    try {
        if (userCoords) {
            // If NO error is returned from getWeatherData return true;
            await getWeatherData(userCoords, getLocationByCoords);
            return true;
        }
    } catch {
        return false;
    }
}

// Use geolocation to get the coords
async function getUserCoords() {
    let result;

    if (navigator.geolocation) {
        result = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((position) => {
                const coords = {
                    "lat": position.coords.latitude,
                    "lon": position.coords.longitude
                };

                resolve(coords);
            }, (err) => {
                reject(err);
            });
        });
    }

    return result;
}


export {
    init
}