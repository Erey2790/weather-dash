var apiKey = "3eb18e0a949449fa503ddba9cdea5c69";
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=3eb18e0a949449fa503ddba9cdea5c69"
var selectedCity = null
var weatherForm = document.getElementById('weather-form');
var cityInput = document.getElementById('city-input')
weatherForm.addEventListener('submit', getWeatherByCity)
var recentSearches = localStorage.getItem("storedSearches") ? JSON.parse(localStorage.getItem("storedSearches")) : []


console.log(recentSearches)
var recentContainer = document.getElementById(`recent-container`);
initRecentSearches();
//var getUserRepos = function(city)
function getWeatherByCity(e) {
    e.preventDefault()
    var city = cityInput.value
    console.log(city);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=3eb18e0a949449fa503ddba9cdea5c69`).then(function(response) {
        response.json().then(function (data) {
            console.log(data);
            selectedCity = data;
            recentSearches.push(city)
            addToRecentSearchList(city)
            localStorage.setItem("storedSearches", JSON.stringify(recentSearches))
        });
    });
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