export default {


    defaultData : {
        "coord": {
         "lon": 0,
         "lat": 0.0
         },
         "img": "https://image.flaticon.com/icons/svg/414/414926.svg",
         "weather": [
         {
         "id": 0,
         "main": "Clear",
         "description": "overcast clouds",
         "icon": "04n"
         }
         ],
         "base": "stations",
         "main": {
         "temp": 0.0,
         "pressure": 0,
         "humidity": 0,
         "temp_min": 0.0,
         "temp_max": 0.0
         },
         "visibility": 0,
         "wind": {
         "speed": 0.0,
         "deg": 0
         },
         "clouds": {
         "all": 0
         },
         "dt": 0,
         "sys": {
         "type": 1,
         "id": 0,
         "country": "FR",
         "sunrise": 0,
         "sunset": 0
         },
         "timezone": 0,
         "id": 0,
         "name": "No Place yet",
         "cod": 0
 },
 

    // default 
    listImages : {
        Rain        : "https://image.flaticon.com/icons/svg/1146/1146858.svg",
        Clouds      : "https://image.flaticon.com/icons/svg/414/414927.svg",
        Clear       : "https://image.flaticon.com/icons/svg/414/414926.svg",
        CLOUDY_SUNY : "https://image.flaticon.com/icons/svg/1146/1146869.svg",
        Snow        : "https://image.flaticon.com/icons/svg/414/414968.svg",
        STORM       : "https://image.flaticon.com/icons/svg/1146/1146860.svg"
   },

   urlBuilder : (payload) => {
       return "http://api.openweathermap.org/data/2.5/forecast?q="+payload+"&appid=0ada432b59deb9716c357092c5f79be6";
   },
}
