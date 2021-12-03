import Vue from 'vue';
import Vuex from 'vuex';
import zone from "./modules/zone";
import demo from "./modules/demo";
import car from "./modules/car";
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        zone,
        demo,
        car
    }
});
