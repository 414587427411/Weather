const apiKey = "ec02f9d3e182fc494db2fb9ffaf52b46";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "clouds") {
      weatherIcon.src =
        "https://i.pinimg.com/originals/19/8d/ae/198daeda14097d45e417e62ff283f10e.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src =
        "https://www.freeiconspng.com/thumbs/weather-icon-png/weather-icon-png-22.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src =
        "https://w7.pngwing.com/pngs/49/967/png-transparent-rain-rain-blue-cloud-drop-thumbnail.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src =
        "https://w1.pngwing.com/pngs/26/155/png-transparent-rain-cloud-weather-drizzle-storm-collage-blue-text-aqua-thumbnail.png";
    } else if (data.weather[0].main == "sunny") {
      weatherIcon.src =
        "https://w7.pngwing.com/pngs/933/836/png-transparent-sunny-cloud-computer-wallpaper-cartoon-thumbnail.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
