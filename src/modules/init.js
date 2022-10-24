import { getWeatherByLocation, getWeatherByCoords } from "./weather-api";

async function init() {
    try {
        // Load "default" location
        await getWeatherByLocation("Detroit");

        // Ask if you can use user's location
        let coords = await getUserCoords();
        await getWeatherByCoords(coords);  // Update weather
    } catch (err) {
        console.error(err);
    }
}

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


init();


export {
    init
}