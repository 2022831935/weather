const apiKey = '742c697911f3a065857308f3bf1f72b0'; // Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap

async function getWeather() {
    const city = document.getElementById('city').value;
    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        if (data.cod === '404') {
            alert('City not found');
            return;
        }

        document.getElementById('weather-location').innerText = `${data.name}, ${data.sys.country}`;
        document.getElementById('weather-description').innerText = data.weather[0].description;
        document.getElementById('weather-temp').innerText = `Temperature: ${data.main.temp} °C`;
    } catch (error) {
        alert('An error occurred while fetching the weather data');
        console.error(error);
    }
}
