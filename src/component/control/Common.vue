<template>
    <v-row>
    <v-col>
        <v-card>
            <v-card-title>
                <v-card @click.stop="redirect()" flat>
                    <v-card-title>
                        <v-badge
                                inline
                                color="error"
                                dot
                        ></v-badge>
                        <span class="text-h6 font-weight-light">Зона A</span>
                    </v-card-title>

                    <v-card-text class="text-h5 font-weight-bold">
                        Тут написана информация про то что сейчас происходит в зоне A.
                    </v-card-text>
                </v-card>
            </v-card-title>

            <v-card-text>
                <v-row>
                    <v-col>
                        <img v-img src="../../assets/lom.jpg" style="width: 250px">
                    </v-col>
                    <v-col>
                        <img v-img src="../../assets/nomer.png" style="width: 250px">
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-col>

    <v-col>
        <v-card>
            <v-card-title>
            <v-card @click.stop="redirect()" flat>
            <v-card-title>
                <v-badge
                        inline
                        color="error"
                        dot
                ></v-badge>
                <span class="text-h6 font-weight-light">Зона Б</span>
            </v-card-title>

            <v-card-text class="text-h5 font-weight-bold">
                Тут написана информация про то что сейчас происходит в зоне Б.
            </v-card-text>
            </v-card>
            </v-card-title>

            <v-card-text>
            <v-row>
                <v-col>
                    <img v-img src="../../assets/lom.jpg" style="width: 250px">
                </v-col>
                <v-col>
                    <img v-img src="../../assets/nomer.png" style="width: 250px">
                </v-col>
            </v-row>
            </v-card-text>
        </v-card>
    </v-col>

    <v-col>
        <v-card>
            <v-card-title>
                <v-card @click.stop="redirect()" flat>
                    <v-card-title>
                        <v-badge
                                inline
                                color="success"
                                dot
                        ></v-badge>
                        <span class="text-h6 font-weight-light">Зона C</span>
                    </v-card-title>

                    <v-card-text class="text-h5 font-weight-bold">
                        Зона C ожидает.
                    </v-card-text>
                </v-card>
            </v-card-title>

            <v-card-text>
                <v-row>
                    <v-col>
                        <img style="border: 1px solid #151C24;" v-img src="../../assets/shum2.png" width="250px">
                    </v-col>
                    <v-col>
                        <img style="border: 1px solid #151C24;" v-img src="../../assets/shum2.png" width="250px">
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-col>
    </v-row>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";


export default {
    name: "Control",


    data: () => ({

        page: 1,
        headers: [
            {text: "№ вагона", value: 'number'},
            {text: "Компания", value: 'company'},
            {text: "Статус", value: 'status'},
            {text: "Средний процент брака", value: 'brack', align: 'center'},
            {text: "Действия", value: 'buttons'},
        ],


    }),

    computed: {
        ...mapGetters(['cars']),
    },

    methods: {
        getModeColor(mode) {
            switch (mode) {
                case 'Разгрузка началась':
                    return 'light-green';
                case 'Первичный осмотр':
                    return 'grey';
                case 'Разгрузка приостановлена':
                    return 'grey';
                case 'Черный список':
                    return 'black';
                case 'Разгружен':
                    return 'green';
                case 'Бракованный':
                    return 'red';
                case 'Претензия':
                    return 'warning';
            }
        },

        getBrackColor(brack) {
            if (Number(brack)>=15)
                return 'red';
            return '';
        },

        processAction(item) {
            this.$router.push({name: 'VagonInfo', params: {id: item.id}})
        },

        redirect() {
            this.$router.push({name: 'Control'})
        }
    }
}
</script>

<style scoped>

</style>
