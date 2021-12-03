import Vue from 'vue';
import Vuex from 'vuex';
import account from "./modules/account";
import demo from "./modules/demo";
import car from "./modules/car";
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        account,
        demo,
        car
    }
});
