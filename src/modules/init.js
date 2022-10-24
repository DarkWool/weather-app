import { getWeatherData, getCoordsByLocation, getLocationByCoords } from "./weather-api";

async function init() {
    try {
        // Load "default" location
        await getWeatherData("Detroit", getCoordsByLocation);

        // Ask if you can use user's location
        let coords = await getUserCoords();
        await getWeatherData(coords, getLocationByCoords);  // Update weather
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