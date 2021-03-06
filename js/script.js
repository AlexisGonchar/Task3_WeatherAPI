var cityInput       = document.querySelector(".cityname-input"); 
var button          = document.querySelector(".input-button");
var cityNameShow    = document.querySelector('.cityName'); 
var temperatureShow = document.querySelector('.temperature'); 
var pressureShow    = document.querySelector('.pressure');
var humidityShow    = document.querySelector('.humidity');
var windSpeedShow   = document.querySelector('.windspeed');
var img             = document.querySelector('.weatherimg'); 
var error           = document.querySelector('.error');
var table           = document.querySelector('.table');

var ENTER_KEY_CODE = 13

button.addEventListener('click', () => {
    var data = {};
    data = getWeatherData();
});

cityInput.addEventListener('keypress', (e) => {    
    if (e.keyCode == ENTER_KEY_CODE) {
        var data = {};
        data = getWeatherData();
    }
});

async function getWeatherData(){
    var query = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityInput.value + '&appid=ef5ffdb295f9241df26ba3b904510af5');
    var res = await query.json();
    showInfo(res);
}

function showInfo(wdata){
    if(wdata.name==undefined){
        error.innerHTML='error';
    }else{
        table.style.visibility = 'visible';
        error.innerHTML='';
        img.src = 'http://openweathermap.org/img/w/' + wdata.weather[0].icon + '.png';
        cityNameShow.innerHTML = wdata.name;
        temperatureShow.innerHTML = Math.round(wdata.main.temp - 273.15) + 'C°';
        pressureShow.innerHTML = wdata.main.pressure + ' hPa';
        humidityShow.innerHTML = wdata.main.humidity + ' %';
        windSpeedShow.innerHTML = wdata.wind.speed + ' km/h';
    }
}