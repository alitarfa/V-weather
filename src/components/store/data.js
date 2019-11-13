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

    defaultListWeather : {
        "code": "200",
        "message": 0,
        "cnt": 40,
        "list": [
                    {
                    "dt": 1573430400,
                    "main": {
                    "temp": 278.13,
                    "temp_min": 278.13,
                    "temp_max": 278.71,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 1004,
                    "humidity": 87,
                    "temp_kf": -0.58
                    },
                    "weather": [
                    {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                    }
                    ],
                    "clouds": {
                    "all": 48
                    },
                    "wind": {
                    "speed": 2.41,
                    "deg": 202
                    },
                    "sys": {
                    "pod": "n"
                    },
                    "dt_txt": "2019-11-11 00:00:00"
                    } 
                ],
                
                "city": {
                    "id": 2988507,
                    "name": "Paris",
                    "coord": {
                    "lat": 48.8566,
                    "lon": 2.3515
                    },
                    "country": "FR",
                    "population": 2138551,
                    "timezone": 3600,
                    "sunrise": 1573368669,
                    "sunset": 1573402674
                    }
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

   urlBuilderGPS: (lat, log) => {
       return "https://api.opencagedata.com/geocode/v1/json?q="+lat+"%2C%20"+log+"&key=b99316e0e86a47e5bdcb8e29e5b6d3aa&language=fr&pretty=1";
   }
}
