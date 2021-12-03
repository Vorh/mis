
const state = {

    cars: [],

    citem: {
    },
};

const getters = {

    cars(state) {
        return state.cars;
    },

    citem(state){
      return state.citem;
    },
};

const actions = {




};

const mutations = {

    setCars(state, data) {
        state.cars = data;
    },

    setCitem(state, data){
        state.citem = data;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};


