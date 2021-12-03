
const state = {
    stageIndex: 0,
};

const getters = {

    stageIndex(state) {
        return state.stageIndex;
    },
};

const actions = {


    nextStage({commit, dispatch, getters}){

        let stageIndex = getters.stageIndex;
        stageIndex++;
        commit('setStageIndex', stageIndex);

        switch (stageIndex){
            case 1:
                dispatch('startEmpty');
                return;
            case 2:
                dispatch('startUnloading');
                return;
            case 3:
                dispatch('middleStage');
                return;
            case 4:
                dispatch('criticalDefect');
                return;
            case 5:
                dispatch('createClaim')
                return;
            case 6:
                dispatch('findBlockCard');
                return;
            case 7:
                dispatch('lastStageUnloading');
                return;
            case 8:
                dispatch('endEmpty');
                return;
        }
    },


    startEmpty({commit, dispatch, getters}){ // Свободная зона


    },

    startUnloading({commit, dispatch, getters}) { // Начать разгрузку

        let cars=[
            {
                number: 43629840,
                id: '0x1bbe067bb0fc732188f5bc487a195a3b7d94e743fb0011834a73a38d662f583f4',
                company: 'СтройСпецПрод',
                status: 'Претензия',
                brack: '15',
            },
            {
                number: 44738495,
                id: '0x1bbe067bb0fc732188f5bc487a195a3b7d94e743fb0011834a73a38d662f581f',
                company: 'Кирпич',
                status: 'Разгрузка началась',
                brack: '0',
            },
            {
                number: 70049039,
                id: '0x1bbe067bb0fc732188f5bc487a195a3b7d94e743fb0011834a73a38d662f581d1',
                company: 'ЧерГор',
                status: 'Разгрузка приостановлена',
                brack: '5',
            },
            {
                number: 54910398,
                id: '0x1bbe067bb0fc732188f5bc487a195a3b7d94e743fb0011834a73a38d662f582f2',
                company: 'ЛомРжавМедь',
                status: 'Разгружен',
                brack: '7',
            },
            {
                number: 55070010,
                id: '0x1bbe067bb0fc732188f5bc487a195a3b7d94e743fb0011834a73a38d662f583f3',
                company: 'МетаПром',
                status: 'Бракованный',
                brack: '15',
            },
        ];

        commit('setCars', cars);
    },


    middleStage({commit, dispatch, getters}) { // Вагоны разгружаются

    },

    criticalDefect({commit, dispatch, getters}) { // Найден критический процент брака

    },

    createClaim({commit, dispatch, getters}){ // Создать претензию

    },

    findBlockCard({commit, dispatch, getters}){ // Найден вагон из черного списка

    },


    lastStageUnloading({commit, dispatch, getters}){ // Все вагоны разгружены

    },


    endEmpty({commit, dispatch, getters}){ // Зона готова к новому составу

    }

};

const mutations = {

    setStageIndex(state, data) {
        state.stageIndex = data;
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};


