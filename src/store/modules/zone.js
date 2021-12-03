
const state = {

    zoneA: null,
    zoneB: {
        name: 'Зона Б',
        status: 'Разгрузка',
        progress: 20,
        currentVagon: '66254228',
        bracK: 0
    },
    zoneV: {
        name: 'Зона В',
        status: 'Разгрузка',
        progress: 60,
        currentVagon: '67864207',
        brack: 4,
    },
};

const getters = {

    zoneB(state){
        return state.zoneB;
    },
    zoneA(state){
        return state.zoneA;
    },
    zoneV(state){
        return state.zoneV;
    }
};

const actions = {
};

const mutations = {

};

export default {
    state,
    getters,
    actions,
    mutations
};


