
const state = {

    cars: [],
};

const getters = {

    cars(state) {
        return state.cars;
    },
};

const actions = {




};

const mutations = {

    setCars(state, data) {
        state.cars = data;
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};


