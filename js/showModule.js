function BaseView(){};

BaseView.prototype.getElement = function(selector){
    return document.querySelector(selector);
}
BaseView.prototype.render = function(element, content){
    element.innerHTML = content;
}

function AppView() {
    this.table = this.getElement('.table');
    this.searchInput = this.getElement('.cityname-input');
    this.searchButton = this.getElement('.input-button');
    this.valueCity = this.getElement('.cityName');
    this.imgWeather = this.getElement('.weatherimg');
    this.valueTemp = this.getElement('.temperature');
    this.valuePress = this.getElement('.pressure');
    this.valueHum = this.getElement('.humidity');
    this.valueWind = this.getElement('.windspeed');
    
    this.error = this.getElement('.error');  
};

    AppView.prototype = Object.create(BaseView.prototype);
    AppView.prototype.constructor = AppView;

    AppView.prototype.enterKeyCode = 13;
    AppView.prototype.onSearchWeather = function(callback) {
        this.searchButton.addEventListener('click', () => {
            const searchStr = this.searchInput.value.trim();
            callback(searchStr);
        });

        this.searchInput.addEventListener('keyup', (event) => {
            if (event.keyCode === this.enterKeyCode) { 
                const searchStr = this.searchInput.value.trim();
                callback(searchStr);
            }
        });
    };
    AppView.prototype.renderWeather = function(data) {
        if (data.name) {
            this.table.style.visibility = 'visible';
            this.render(this.error, '');
                
            this.render(this.valueCity, data.name);
            this.render(this.valueTemp, data.main.temp);
            this.render(this.valuePress, data.main.pressure);
            this.render(this.valueHum, data.main.humidity);
            this.render(this.valueWind, data.wind.speed);
            this.imgWeather.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    
        } else {
            this.render(this.error, 'Error =(');
        }
    };
