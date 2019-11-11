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
        currentCityInfo : ListData.defaultData,
        listInfoWeather : ListData.defaultListWeather,
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
            log('getCurrentCityInfo')
            Vue.set(state, 'listInfoWeather', payload);
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
            log('getCityInfoByNameAction')
            // call axios
            let url = ListData.urlBuilder(payload);
            // this result will be an object this a list 
            let result = await axios.get(url);
            let data = result.data;
             
            if(data.cod==200) {
                // all rights 
                // log(data.list);
                //     let obj = {
                //         ...data.list[0],
                //         temp: Math.round(data.list[0].main.temp - 273.15),
                //         img: ListData.listImages[data.list[0].weather[0].main]
                //     }
                // context.commit('getCurrentCityInfo', obj)
               
                context.commit('getCurrentCityInfo', data);

            }else {
                // handle the Exception in this case 
                // display notification for the user 
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
            log('getCurrentCityInfo getters');
            return state.listInfoWeather;
        }

    }



});