let inputValue = document.getElementById("search");
let search = document.getElementById("btn");
let cityName = document.getElementById("cityname");
let temperature_value = document.getElementById("temperature_value");
let humidity_value = document.getElementById("humidity_value");
let wind_value = document.getElementById("wind_value");

let getInfo = async (e) => {
  e.preventDefault();
  let cityValue = inputValue.value;
  if (cityValue == "") {
    alert("fuck you.... I will fuck your ass...");
  } else {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`;
      let response = await fetch(url);
      let data = await response.json();
      cityName.textContent = `${data.name}/${data.sys.country}`;
      temperature_value.textContent = data.main.temp;
      humidity_value.textContent = data.main.humidity;
      wind_value.textContent = data.wind.speed;
    } catch {
      alert("please enter a valid city name ");
    }
  }
};
search.addEventListener("click", getInfo);
