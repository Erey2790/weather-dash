var apiKey = "3eb18e0a949449fa503ddba9cdea5c69";
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=3eb18e0a949449fa503ddba9cdea5c69"
var selectedCity = null
var weatherForm = document.getElementById('weather-form');
var cityInput = document.getElementById('city-input')
weatherForm.addEventListener('submit', getWeatherByCity)
var recentSearches = localStorage.getItem("storedSearches") ? JSON.parse(localStorage.getItem("storedSearches")) : []

var cityEl = document.querySelector('.cities');
var cityTempEl = document.querySelector('.temp');
var cityIconEl = document.querySelector('.icon');
var cityWindEl = document.querySelector('.wind');
var cityHumidityEl = document.querySelector('.humidity');
var cityIndexEl = document.querySelector('.index');
var dateEl = document.querySelector('.date');

var dayOneEl = document.querySelector('#dayOne');
var tempDayOneEl = document.querySelector('#tempDayOne');
var windDayOneEl = document.querySelector('#windDayOne');
var humidityDayOneEl = document.querySelector('#humidityDayOne');

var dayTwoEl = document.querySelector('#dayTwo');
var tempDayTwoEl = document.querySelector('#tempDayTwo');
var windDayTwoEl = document.querySelector('#windDayTwo');
var humidityDayTwoEl = document.querySelector('#humidityDayTwo');

var dayThreeEl = document.querySelector('#dayThree');
var tempDayThreeEl = document.querySelector('#tempDayThree');
var windDayThreeEl = document.querySelector('#windDayThree');
var humidityDayThreeEl = document.querySelector('#humidityDayThree');

var dayFourEl = document.querySelector('#dayFour');
var tempDayFourEl = document.querySelector('#tempDayFour');
var windDayFourEl = document.querySelector('#windDayFour');
var humidityDayFourEl = document.querySelector('#humidityDayFour');

var dayFiveEl = document.querySelector('#dayFive');
var tempDayFiveEl = document.querySelector('#tempDayFive');
var windDayFiveEl = document.querySelector('#windDayFive');
var humidityDayFiveEl = document.querySelector('#humidityDayFive');

var iconDayOneEl = document.querySelector('#iconDayOne');
var iconDayTwoEl = document.querySelector('#iconDayTwo');
var iconDayThreeEl = document.querySelector('#iconDayThree');
var iconDayFourEl = document.querySelector('#iconDayFour');
var iconDayFiveEl = document.querySelector('#iconDayFive');


console.log(recentSearches)
var recentContainer = document.getElementById(`recent-container`);
initRecentSearches();
//var getUserRepos = function(city)
function getWeatherByCity(e) {
    e.preventDefault()
    var city = cityInput.value
    console.log(city);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=3eb18e0a949449fa503ddba9cdea5c69`).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            oneCall(data.coord.lat, data.coord.lon, city)
            selectedCity = data;
            recentSearches.push(city)
            addToRecentSearchList(city)
            localStorage.setItem("storedSearches", JSON.stringify(recentSearches))
        });
    });
}

function oneCall(lat, lon, city) {

    var oneCallAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`
    fetch(oneCallAPI)
        .then(function (response) {
            response.json().then(function (data2) {
                console.log(data2)
                cityEl.textContent = city
                cityTempEl.textContent = `Temp: ${data2.current.temp} degrees F`;
                cityWindEl.textContent = `Wind: ${data2.current.wind_speed} MPH`;
                cityHumidityEl.textContent = `Humidity: ${data2.current.humidity} %`;
                cityIndexEl.textContent = `UV Index: ${data2.current.uvi}`;
                cityIconEl.setAttribute('src', `http://openweathermap.org/img/wn/${data2.current.weather[0].icon}.png`);
                dateEl.textContent = moment().format('l');

                dayOneEl.textContent = moment().add(1, 'days').format('l');
                tempDayOneEl.textContent = `Temp: ${data2.daily[0].temp.day} F`;
                windDayOneEl.textContent = `Wind: ${data2.daily[0].wind_speed} MPH`;
                humidityDayOneEl.textContent = `Humidity: ${data2.daily[0].humidity} %`;

                dayTwoEl.textContent = moment().add(2, 'days').format('l');
                tempDayTwoEl.textContent = `Temp: ${data2.daily[1].temp.day} F`;
                windDayTwoEl.textContent = `Wind: ${data2.daily[1].wind_speed} MPH`;
                humidityDayTwoEl.textContent = `Humidity: ${data2.daily[1].humidity} %`;

                dayThreeEl.textContent = moment().add(3, 'days').format('l');
                tempDayThreeEl.textContent = `Temp: ${data2.daily[2].temp.day} F`;
                windDayThreeEl.textContent = `Wind: ${data2.daily[2].wind_speed} MPH`;
                humidityDayThreeEl.textContent = `Humidity: ${data2.daily[2].humidity} %`;

                dayFourEl.textContent = moment().add(4, 'days').format('l');
                tempDayFourEl.textContent = `Temp: ${data2.daily[3].temp.day} F`;
                windDayFourEl.textContent = `Wind: ${data2.daily[3].wind_speed} MPH`;
                humidityDayFourEl.textContent = `Humidity: ${data2.daily[3].humidity} %`;

                dayFiveEl.textContent = moment().add(5, 'days').format('l');
                tempDayFiveEl.textContent = `Temp: ${data2.daily[4].temp.day} F`;
                windDayFiveEl.textContent = `Wind: ${data2.daily[4].wind_speed} MPH`;
                humidityDayFiveEl.textContent = `Humidity: ${data2.daily[4].humidity} %`;

                iconDayOneEl.setAttribute('src', `http://openweathermap.org/img/wn/${data2.daily[0].weather[0].icon}.png`);











            })
        })


}

function initRecentSearches() {
    for (var i = 0; i < recentSearches.length; i++) {
        addToRecentSearchList(recentSearches[i])
    }

}

function addToRecentSearchList(text) {
    var node = document.createElement("li");                 // Create a <li> node
    node.classList.add(`recent-search-item`);
    var textnode = document.createTextNode(text);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    recentContainer.appendChild(node);     // Append <li> to <ul> with id="myList"
}

function displayWeather() {

}