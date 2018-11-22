(function controller(){
    var dataModule = getDataModule();
    var showModule = showDataModule();

    function start(){
        showModule.onEvent(findWeather);
    }

    function findWeather(cityName){
        dataModule.getData(cityName)
            .then((data) => {
                showModule.showData(data);
            })
    }
    start();
})()
