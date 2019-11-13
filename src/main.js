import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueGeolocation from 'vue-browser-geolocation';
// import the store 
import {store} from './components/store';

// to use the UI element 
Vue.use(VueGeolocation);
Vue.use(ElementUI);
Vue.use(Vuex);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
