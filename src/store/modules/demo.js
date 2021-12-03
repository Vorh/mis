
const state = {
    stageIndex: 1,
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
                number: 67864207,
                id: '0x1bbe067bb0fc732188f5bc487a195a3b7d94e743fb0011834a73a38d662f583f4',
                company: 'СтройСпецПрод',
                status: 'Разгрузка началась',
                brack: '4',
            },
            {
                number: 67214457,
                id: '0x1bbe067bb0fc732188f5bc487a195a3b7d94e743fb0011834a73a38d662f581f',
                company: 'Кирпич',
                status: 'Первичный осмотр',
                brack: '0',
            },
            {
                number: 62162476,
                id: '0x1bbe067bb0fc732188f5bc487a195a3b7d94e743fb0011834a73a38d662f581d1',
                company: 'ЧерГор',
                status: 'Первичный осмотр',
                brack: '4',
            },
            {
                number: 67453205,
                id: '0x1bbe067bb0fc732188f5bc487a195a3b7d94e743fb0011834a73a38d662f582f2',
                company: 'ЛомРжавМедь',
                status: 'Первичный осмотр',
                brack: '3',
            },
            {
                number: 62257620,
                id: '0x1bbe067bb0fc732188f5bc487a195a3b7d94e743fb0011834a73a38d662f583f3',
                company: 'МетаПром',
                status: 'Первичный осмотр',
                brack: '2',
            },
        ];

        commit('setCars', cars);


        let item = {
            number: 67864207,
            id: '0x1bbe067bb0fc732188f5bc487a195a3b7d94e743fb0011834a73a38d662f583f4',
            zone: 'A',
            company: 'СтройСпецПрод',
            actions: [
                {
                    text: 'Вагон прибыл на разгрузку в зону А.',
                    brack: -1,
                    date:'22:30, 2/11/2021',
                    imageNumber: null,
                    imageVagon: null,

                    imageCvNumber: null,
                    imageCvVagon: null,
                },
                {
                    text: 'Разгрузка началась',
                    brack: -1,
                    date:'22:35, 2/11/2021',
                    imageNumber: require('../../assets/vagon/n_1.jpg'),
                    imageVagon: require('../../assets/vagon/1.jpg'),
                    imageCvNumber: require('../../assets/vagon/cv/n_1.jpg'),
                    imageCvVagon: require('../../assets/vagon/cv/1.jpg'),
                },
                {
                    text: '',
                    brack: 4,
                    date:'22:40, 2/11/2021',
                    imageNumber: require('../../assets/vagon/n_2.jpg'),
                    imageVagon: require('../../assets/vagon/2.jpg'),
                    imageCvNumber: require('../../assets/vagon/cv/n_2.jpg'),
                    imageCvVagon: require('../../assets/vagon/cv/2.jpg'),
                },
            ]
        };
        item.currentAction = item.actions[item.actions.length-1];

        commit('setCitem', item);
    },


    middleStage({commit, dispatch, getters}) { // Вагоны разгружаются
        let citem = getters.citem;

        citem.actions.push(
            {
                text: '',
                brack: 7,
                date:'22:44, 2/11/2021',
                imageNumber: require('../../assets/vagon/n_3.jpg'),
                imageVagon: require('../../assets/vagon/3.jpg'),
                imageCvNumber: require('../../assets/vagon/cv/n_3.jpg'),
                imageCvVagon: require('../../assets/vagon/cv/3.jpg'),
            },

        )

        citem.currentAction = citem.actions[citem.actions.length-1];

        commit('setCitem', citem)
    },

    criticalDefect({commit, dispatch, getters}) { // Найден критический процент брака


        let citem = getters.citem;


        citem.actions.push(

            {
                text: '',
                brack: 9,
                date:'22:49, 2/11/2021',
                imageNumber: require('../../assets/vagon/n_4.jpg'),
                imageVagon: require('../../assets/vagon/4.jpg'),
                imageCvNumber: require('../../assets/vagon/cv/n_4.jpg'),
                imageCvVagon: require('../../assets/vagon/cv/4.jpg'),
            },
            {
                text: '',
                brack: 16,
                date:'22:50, 2/11/2021',
                imageNumber: require('../../assets/vagon/n_5.jpg'),
                imageVagon: require('../../assets/vagon/5.jpg'),
                imageCvNumber: require('../../assets/vagon/cv/n_5.jpg'),
                imageCvVagon: require('../../assets/vagon/cv/5.jpg'),

            },
        )

        citem.currentAction = citem.actions[citem.actions.length-1];

        commit('setCitem', citem)
    },

    createClaim({commit, dispatch, getters}){ // Создать претензию

    },

    findBlockCard({commit, dispatch, getters}){ // Найден вагон из черного списка

    },


    lastStageUnloading({commit, dispatch, getters}){ // Все вагоны разгружены

        let cars=[
            {
                number: 67864207,
                id: '0x1bbe067bb0fc732188f5bc487a195a3b7d94e743fb0011834a73a38d662f583f4',
                company: 'СтройСпецПрод',
                status: 'Претензия',
                brack: '35',
            },
            {
                number: 67214457,
                id: '0x1bbe067bb0fc732188f5bc487a195a3b7d94e743fb0011834a73a38d662f581f',
                company: 'Кирпич',
                status: 'Разгружен',
                brack: '0',
            },
            {
                number: 62162476,
                id: '0x1bbe067bb0fc732188f5bc487a195a3b7d94e743fb0011834a73a38d662f581d1',
                company: 'ЧерГор',
                status: 'Черный список',
                brack: '0',
            },
            {
                number: 67453205,
                id: '0x1bbe067bb0fc732188f5bc487a195a3b7d94e743fb0011834a73a38d662f582f2',
                company: 'ЛомРжавМедь',
                status: 'Разгружен',
                brack: '7',
            },
            {
                number: 62257620,
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


