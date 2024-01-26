const apiKey = "b79f6d51436806032ebfe5a94bc45735";
const apiURL = "https://api.openweathermap.org/data/2.5/weather&units=metric&q=lahore";

async function checkWeather() {
    const response = await fetch(apiURL + '&appid=${apiKey}');
    var data = await response.json();

    console.log(data);
}
checkWeather();