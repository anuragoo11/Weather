const apiKey = "YOUR_API_KEY";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
//stores a reference to the search input field.
const searchBtn = document.querySelector(".search button");
//stores a reference to the search button.
const weatherIcon = document.querySelector(".weather-icon");
//stores a reference to the weather icon image.

//asynchronous function 
async function checkWheather(city)
 {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp) + "*C";  
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    console.log(data.weather[0].main);
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "img/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "img/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "img/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "img/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "img/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

//When the button is clicked, it calls the checkWheather function with the value of the search input field
searchBtn.addEventListener("click", () => {
  checkWheather(searchBox.value);
});

checkWheather(city='');
