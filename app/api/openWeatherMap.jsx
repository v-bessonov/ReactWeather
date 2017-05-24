var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=dfeab9e679ca79e568b2abe2d208f3e2&units=metric';
//dfeab9e679ca79e568b2abe2d208f3e2
module.exports = {
  getTemp : function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else{
        return res.data.main.temp;
      }
    }, function(res){
        //alert(JSON.stringify(res));
        throw new Error(res.response.data.message);
    });
  }
}
