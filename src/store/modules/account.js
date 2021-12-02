
const state = {
    lol: 0
};

const getters = {

    lol(state) {
        return state.lol;
    },
};

const actions = {
};

const mutations = {

    setLol(state, lol) {
        state.lol = lol;
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};


