import Vue from 'vue';
import Vuex from 'vuex';
import { log } from 'util';
import axios from 'axios';
import ListData from './data';

Vue.use(Vuex);


export const store = new Vuex.Store({
 
    // state 
    state : {
        modelOpened : false,
        cityModels : new Array(),

        // this just as a default value
        currentCityInfo : {
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
        
    },

    // Mutation 

    mutations: {
        openModel(state, payload) {
            Vue.set(state, 'modelOpened', payload);
            log('inside mutation'+ payload);
        },

        addCity(state, payload) {
            state.cityModels.push(payload)
        },

        getCurrentCityInfo(state, payload) {
            Vue.set(state, 'currentCityInfo', payload);
        }
        
    },

    actions: {

        openModelAction(context, payload) {
            log('inside action'+ payload);
            context.commit('openModel', payload);
        },

        addCityAction(context, payload) {
            log('inside city action'+ payload);
            context.commit('addCity', payload);
        },
        
        async getCityInfoByNameAction (context, payload){
            // call axios
            let result = await axios.get('https://api.openweathermap.org/data/2.5/weather?q='+payload+'&appid=0ada432b59deb9716c357092c5f79be6');
            let data = result.data;
            log(payload);
            log(data);
            if(data != null) {
                let obj = {
                    ...data,
                    temp: Math.round(data.main.temp - 273.15),
                    img: ListData.listImages[data.weather[0].main]
                }

                context.commit('getCurrentCityInfo', obj)

            }
        } 

    },

    getters: {
        getModelOpenedState(state) {
            return state.modelOpened;
        },

        getCityModelList(state) {
            return state.cityModels;
        },

        getCurrentCityInfoGetter(state) {
            log('inside Getters')
            return state.currentCityInfo;
        }

    }



});