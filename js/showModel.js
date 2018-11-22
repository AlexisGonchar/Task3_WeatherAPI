function showDataModule(){
    var error           = document.querySelector('.error');
    var table           = document.querySelector('.table');
    
    var ENTER_KEY_CODE = 13;
    var button    = document.querySelector(".input-button");
    var cityInput = document.querySelector(".cityname-input"); 


    function onEvent(callback){
        button.addEventListener('click', () => {
            var cityName = cityInput.value.trim();
            callback(cityName);
        });
        
        cityInput.addEventListener('keypress', (e) => {   
            if (e.keyCode == ENTER_KEY_CODE) {
                var cityName = cityInput.value.trim();
                callback(cityName);
            }
        });
    }
    function showInfo(wdata){
        if(wdata.name==undefined){
            error.innerHTML='error';
        }else{
            table.style.visibility = 'visible';
            error.innerHTML='';
            srcimg='http://openweathermap.org/img/w/' + wdata.weather[0].icon + '.png';
            var showText = '<tr> <td colspan="2"><center><img src="' + srcimg + '"></center></td></tr>';
            showText += '<tr><td>Name:</td><td><p>'+wdata.name+'</p></td></tr>';
            showText += '<tr><td>Temperature:</td><td><p>' + Math.round(wdata.main.temp - 273.15) + 'C°</p></td></tr>';
            showText += '<tr><td>Pressure:</td><td><p>'+ wdata.main.pressure + ' hPa</p></td></tr>';
            showText += '<tr><td>Humidity:</td> <td><p>' + wdata.main.humidity + ' %</p></td></tr>';
            showText += '<tr><td>Speed of Wind:</td><td><p>' + wdata.wind.speed + ' m/s</p></td></tr>';
            table.innerHTML = showText;
        }
    }

    var showModule = {
        showData: showInfo,
        onEvent: onEvent
    }

    return showModule;
}
