
let keyApi = "fae5ec7c13f7b6313c8e5d92b6989182"


let formInput = document.querySelector(".form input")

let search = document.querySelector(".search")

let mainImage = document.querySelector(".clouds")
search.onclick = function () {
    checkWeather(formInput.value)
}
//Call Api 



async function checkWeather(city) {
    let apiCall  = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fae5ec7c13f7b6313c8e5d92b6989182`;
    const response = await fetch(apiCall).then((response) =>{
        let myData = response.json()
        return myData
    }).then((response) => {
        console.log(response)
        document.querySelector(".country").innerHTML = response.name;
        document.querySelector(".temp").innerHTML = Math.round(+response.main.temp) + "°F";
        document.querySelector(".two").innerHTML = response.wind.speed + " km/h"
        document.querySelector(".one").innerHTML = response.main.humidity + "%";

        if(response.weather[0].main == "Clouds") {
            mainImage.src = "./images/clouds.png"
        }else if (response.weather[0].main == "Clear") {
            mainImage.src = "./images/clear.png"
        }else if(response.weather[0].main == "Fog") {
            mainImage.src = "./images/snow.png"
        }else if(response.weather[0].main == "Rain") {
            mainImage.src = "./images/rain.png"
        }else if(response.weather[0].main == "Mist") {
            mainImage.src = "./images/mist.png"
        }else if(response.weather[0].main == "Drizzle") {
            mainImage.src = "./images/drizzle.png"
        }else if(response.weather[0].main == "Snow") {
            mainImage.src = "./images/snow.png"
        }
  
    }).catch(() => {
        mainImage.src = "./images/lightning_thunder_storm_thunderstorm_forecast_weather_stormy_cloud_weat_icon_253963.png";
        document.querySelector(".temp").innerHTML = "Can’t found"
        if(document.querySelector(".country").innerHTML == "undefined") {
             document.querySelector(".country").innerHTML = "Invalid Country";
             document.querySelector(".country").style.fontSize = "20px"
        }
    })
}
