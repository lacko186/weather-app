const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const weatherResult = document.getElementById('weatherResult');

getWeatherBtn.addEventListener('click', async () => {
    const city = cityInput.value;
    if (!city) return;

    try {
        const response = await fetch(`http://localhost:5000/api/weather/${city}`);
        const data = await response.json();

        if (data.cod === 200) {
            weatherResult.innerHTML = `
                <h5> ${data.name}</h5>
                <p id="celsius">Hőmérséklet: ${data.main.temp} °C</p>`
        } else {
            weatherResult.innerHTML = `<p>Város nem található</p>`;
        }
    } catch (error) {
        weatherResult.innerHTML = `<p>Hiba történt</p>`;
    }
});