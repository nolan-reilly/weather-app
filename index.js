const form = document.getElementById("form");
const temp = document.getElementById("temp");
// Need a better name for this DOM value as location interferes with the other portions of the code
const text = document.getElementById("text");

// Needed to make the function async to get it from sending undefined to the display Temperature
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const location = form.location.value.toLowerCase();

    const weatherData = await getWeatherData(location);
    displayTemperature(weatherData);
})

async function getWeatherData(location) {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=2da47cb85ffe464f9e0210135240506&q=${location}`, {mode: "cors"});
        const data = await response.json();
        return data;
    } catch {
        console.error("Error:", error);
    }
}

function displayTemperature(weatherData) {
    temp.textContent = weatherData.current.temp_f;
}

