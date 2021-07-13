let weatherIcon = document.querySelector("#icon");
let tempValue = document.querySelector("#value p");
let tempDescription = document.querySelector("#description p");
let weatherLocation = document.querySelector("#location p");
const errorMessage = document.querySelector("#notification p");
const cityInput = document.querySelector("#city-input");
const cityInputButton = document.querySelector("#input-button");

const weather = {};
let api;
let cityName;

weather.temperature = {
    unit : "celsius"
}

const kelvin = 273;
const apiKey = "e7670503cf337d32209a3264aa00f69c";

if("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    errorMessage.textContent = "Geolocation не поддерживается вашим браузером";
}

function setPosition(position){
    let latitude  = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude);
}

function showError(error){
  errorMessage.textContent = "Невозможно получить ваше местоположение";
}

function getWeather(latitude, longitude){
    api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=ru&appid=${apiKey}`;

fetch(api)
    .then(function(response){
        let data = response.json();
        return data;
    })
    .then(function(data){
        console.log(data);
        weather.temperature.value = Math.floor(data.main.temp - kelvin);
        weather.description = data.weather[0].description;
        weather.city = data.name;
        weather.country = data.sys.country;
        weather.icon = data.weather[0].icon;
    })
    .then(function(){
        displayWeather();
    });
}

function displayWeather(){
    weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather.icon}@2x.png">`;
    tempValue.innerHTML = `${weather.temperature.value}&deg;<span>C</span>`;
    tempDescription.innerHTML = weather.description;
    weatherLocation.innerHTML = `${weather.city}, ${weather.country}`;
}

cityInputButton.addEventListener("click", () =>{
    cityName = cityInput.value;
    api = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=ru&appid=${apiKey}`;
    

    fetch(api)
    
    .then(function(response){
        let data = response.json();
        return data;
    })
    .then(function(data){
        weather.temperature.value = Math.floor(data.main.temp - kelvin);
        weather.description = data.weather[0].description;
        weather.city = data.name;
        weather.country = data.sys.country;
        weather.icon = data.weather[0].icon;
    })
    .then(function(){
        displayWeather();
    })
    .catch(error => cityError());
    
})

tempValue.addEventListener("click", () =>{
    if(weather.temperature.value === undefined) return;

    if(weather.temperature.unit == "celsius"){
        let fahrenheit = weather.temperature.value * 9/5 + 32;
        fahrenheit = Math.floor(fahrenheit);
        tempValue.innerHTML = `${fahrenheit}&deg;<span>F</span>`;
        weather.temperature.unit = "fahrenheit";
    }else{
        tempValue.innerHTML = `${weather.temperature.value}&deg;<span>C</span>`;
        weather.temperature.unit = "celsius"
    }
})

function cityError(){
    errorMessage.textContent = "Такой город не найден";
    cityInput.value = " ";
    tempValue.textContent = "-";
    weatherIcon.innerHTML = "-";
    tempDescription.textContent = "-";
    weatherLocation.textContent = "-";
}




/* <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Neucha&display=swap" rel="stylesheet">*/