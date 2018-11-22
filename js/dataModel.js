function getDataModule(){

    var cityInput = document.querySelector(".cityname-input"); 
    var res;

    function getData(cityName){
        url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=ef5ffdb295f9241df26ba3b904510af5'
        return fetch(url)
            .then(function (response) {
                return response.json();
            })
    }

    var dataModule = {
        getData: getData
    }

    return dataModule;
}