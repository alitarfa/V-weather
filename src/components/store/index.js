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
            let url = ListData.urlBuilder(payload);
            let result = await axios.get(url);
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