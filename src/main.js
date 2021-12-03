import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueImg from 'v-img';
import store from "./store/index.js";
import utils from "./plugins/utils";
import vuetify from './plugins/vuetify'
import router from './router/index'
import {axios} from './plugins/http-axios';
import moment from 'moment';
import '@mdi/font/css/materialdesignicons.css'
import YmapPlugin from 'vue-yandex-maps'
import VueWeather from 'vue-weather-widget'

Vue.use(Vuex)
Vue.use(VueImg);
Vue.use(VueWeather)

Vue.prototype.$moment = moment;
Vue.prototype.$utils = utils;
Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
    store,
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app')
