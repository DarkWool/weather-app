import { getWeatherData, currWeatherCoords } from "./weather-api.js";

let unitSystem = "metric";
const dropdownBtns = document.getElementsByClassName("dropdown-btn");
const changeUnitsBtn = dropdownBtns[0];
const changeUnitsDropdown = document.getElementsByClassName("dropdown")[0];


// Init
for (let drop of dropdownBtns) {
    drop.addEventListener("click", e => {
        const currDropdown = e.currentTarget.closest(".dropdown-container");
        if (currDropdown.classList.contains("active")) {
            closeDropdown(currDropdown);
        } else {
            e.currentTarget.setAttribute("aria-expanded", "true");
            currDropdown.classList.add("active");
            document.addEventListener("click", detectClickOutsideDropdown);
            closeOtherDropdowns(currDropdown);
        } 
    });
}

changeUnitsDropdown.addEventListener("click", e => {
    try {
        const target = e.target.closest("[data-units]");
        const units = target.dataset.units;
        if (!units || units === unitSystem) return;

        if (units === "imperial") {
            unitSystem = "imperial";
            changeUnitsBtn.firstElementChild.textContent = "°F";
        } else {
            unitSystem = "metric";
            changeUnitsBtn.firstElementChild.textContent = "°C";
        }
    
        getWeatherData(currWeatherCoords);
    } catch (err) {
        console.log(err);
        return;
    } finally {
        closeDropdown(e.currentTarget.closest(".dropdown-container"));
    }
});


function detectClickOutsideDropdown(e) {
    // If you click inside the dropdown then do nothing
    const target = e.target;
    const isDropdownBtn = target.closest(".dropdown-btn");
    if (target.closest(".dropdown") || isDropdownBtn != null) return;
    
    closeAllDropdowns();
}

// Helpers
function closeDropdown(dropdown) {
    dropdown.classList.remove("active");
    document.removeEventListener("click", detectClickOutsideDropdown);

    const button = dropdown.getElementsByClassName("dropdown-btn")[0];
    button.setAttribute("aria-expanded", "false");
}

function closeOtherDropdowns(currDropdown) {
    const activeDropdowns = document.querySelectorAll(".dropdown-container.active");
    for (const dropdown of activeDropdowns) {
        if (dropdown === currDropdown) return;

        dropdown.classList.remove("active");

        const button = dropdown.getElementsByClassName("dropdown-btn")[0];
        button.setAttribute("aria-expanded", "false");
    }
}

function closeAllDropdowns() {
    const activeDropdowns = document.querySelectorAll(".dropdown-container.active");
    for (const dropdown of activeDropdowns) {
        dropdown.classList.remove("active");

        const button = dropdown.getElementsByClassName("dropdown-btn")[0];
        button.setAttribute("aria-expanded", "false");
    }
}


export {
    unitSystem,
}