
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
                status: 'Разгрузка началась',
                brack: '4',
            },
            {
                number: 44738495,
                id: '0x1bbe067bb0fc732188f5bc487a195a3b7d94e743fb0011834a73a38d662f581f',
                company: 'Кирпич',
                status: 'Первичный осмотр',
                brack: '0',
            },
            {
                number: 70049039,
                id: '0x1bbe067bb0fc732188f5bc487a195a3b7d94e743fb0011834a73a38d662f581d1',
                company: 'ЧерГор',
                status: 'Первичный осмотр',
                brack: '4',
            },
            {
                number: 54910398,
                id: '0x1bbe067bb0fc732188f5bc487a195a3b7d94e743fb0011834a73a38d662f582f2',
                company: 'ЛомРжавМедь',
                status: 'Первичный осмотр',
                brack: '3',
            },
            {
                number: 55070010,
                id: '0x1bbe067bb0fc732188f5bc487a195a3b7d94e743fb0011834a73a38d662f583f3',
                company: 'МетаПром',
                status: 'Первичный осмотр',
                brack: '2',
            },
        ];

        commit('setCars', cars);



        let item = {
            number: 100006,
            id: '0x1bbe067bb0fc732188f5bc487a195a3b7d94e743fb0011834a73a38d662f583f4',
            zone: 'A',
            currentAction: {
                text: '',
                brack: 4,
                date:'22:40, 2 dec 2021'
            },
            actions: [
                {
                    text: 'Вагон 1000043 прибыл на разгрузку в зоне А.',
                    brack: -1,
                    date:'22:30, 2 dec 2021'
                },

                {
                    text: 'Разгрузка началась.',
                    brack: -1,
                    date:'22:35, 2 dec 2021'
                },

                {
                    text: '',
                    brack: 4,
                    date:'22:40, 2 dec 2021'
                },
            ]
        };

        commit('setCitem', item);
    },


    middleStage({commit, dispatch, getters}) { // Вагоны разгружаются

    },

    criticalDefect({commit, dispatch, getters}) { // Найден критический процент брака


        let item = {
            number: 100006,
            id: '0x1bbe067bb0fc732188f5bc487a195a3b7d94e743fb0011834a73a38d662f583f4',
            zone: 'A',
            currentAction: {
                text: '',
                brack: 16,
                date:'22:50, 2 dec 2021'
            },
            actions: [
                {
                    text: 'Вагон 1000043 прибыл на разгрузку в зоне А.',
                    brack: -1,
                    date:'22:30, 2 dec 2021'
                },

                {
                    text: 'Разгрузка началась.',
                    brack: -1,
                    date:'22:35, 2 dec 2021'
                },

                {
                    text: '',
                    brack: 4,
                    date:'22:40, 2 dec 2021'
                },

                {
                    text: '',
                    brack: 5,
                    date:'22:42, 2 dec 2021'
                },

                {
                    text: '',
                    brack: 7,
                    date:'22:44, 2 dec 2021'
                },


                {
                    text: '',
                    brack: 8,
                    date:'22:46, 2 dec 2021'
                },

                {
                    text: '',
                    brack: 9,
                    date:'22:49, 2 dec 2021'
                },

                {
                    text: '',
                    brack: 16,
                    date:'22:50, 2 dec 2021'
                },
            ]
        };

        commit('setCitem', item)
    },

    createClaim({commit, dispatch, getters}){ // Создать претензию

    },

    findBlockCard({commit, dispatch, getters}){ // Найден вагон из черного списка

    },


    lastStageUnloading({commit, dispatch, getters}){ // Все вагоны разгружены

        let cars=[
            {
                number: 43629840,
                id: '0x1bbe067bb0fc732188f5bc487a195a3b7d94e743fb0011834a73a38d662f583f4',
                company: 'СтройСпецПрод',
                status: 'Претензия',
                brack: '35',
            },
            {
                number: 44738495,
                id: '0x1bbe067bb0fc732188f5bc487a195a3b7d94e743fb0011834a73a38d662f581f',
                company: 'Кирпич',
                status: 'Разгружен',
                brack: '0',
            },
            {
                number: 70049039,
                id: '0x1bbe067bb0fc732188f5bc487a195a3b7d94e743fb0011834a73a38d662f581d1',
                company: 'ЧерГор',
                status: 'Черный список',
                brack: '0',
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
                status: 'Разгружен',
                brack: '15',
            },
        ];

        commit('setCars', cars);

    },


    endEmpty({commit, dispatch, getters}){ // Зона готова к новому составу

        commit('setCars', []);
        commit('setStageIndex', 1)

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


