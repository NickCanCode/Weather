
const apiKey = "803ee69d53c2388cb33e85d90cec2088";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const forcastApiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";
async function checkWeather() {
  let city = document.getElementById("cityLocal").value;
  console.log(city);
  let response = await fetch(apiUrl + city + `&appid=${apiKey}` + "&units=imperial");
  let data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  let roundTemp = Math.round(data.main.temp) + "°F";
  document.getElementById("temp").innerHTML = roundTemp;
  document.getElementById("weatherType").innerHTML = data.weather[0].main;
  document.getElementById("windSpeed").innerHTML = Math.round(data.wind.speed) + "MPH Wind";
  document.getElementById("title").innerHTML = "";

}

function newLocPrep() {
  document.getElementById("cityLocal").innerHTML = "scituate";
  checkWeather();
}
function newLoc() {
  let town = prompt("Name of your town: ");
  alert(town);
  let element = document.createElement("a");
  element.innerHTML = town;
  element.href = "javascript:newLocPrep();";

  // Append the element to the parent element
  document.getElementById("quickLinks").append(element);
}