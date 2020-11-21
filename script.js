const apiBase = "https://api.openweathermap.org/data/2.5/weather"
const apiKey = "b29fda26da7a5b236dfc4a717c587383"

const getWeatherData = city => {
    const url = `${apiBase}?q=${city}&units=metric&lang=en&appid=${apiKey}`;
    fetch(url)
        .then(res => res.json())
        .then(data => updateUi(data))
}


document.getElementById("submit").addEventListener("click", function(){
    const input = document.getElementById("input").value;
    getWeatherData(input);
})


const updateUi = data =>{
    document.getElementById("city").innerText = data.name || "Unknown Location";
    document.getElementById("temp").innerText = data.main.temp || "Unknown";
    document.getElementById("weather").innerText = data.weather[0].main || "Unknown";
    document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    document.getElementById("feelsLike").innerText = data.main.feels_like;
    document.getElementById('input').value = "";
}

getWeatherData("Dhaka");