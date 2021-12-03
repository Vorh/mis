<template>
    <div>
<!--        <v-tabs fixed-tabs color="black" slider-color="grey">-->
<!--            <v-tab>-->
<!--                <v-badge-->
<!--                        inline-->
<!--                        color="error"-->
<!--                        dot-->
<!--                ></v-badge>-->
<!--                &nbsp;Зона&nbsp;<b>A</b>-->
<!--            </v-tab>-->
<!--            <v-tab>-->
<!--                <v-badge-->
<!--                        inline-->
<!--                        color="error"-->
<!--                        dot-->
<!--                ></v-badge>-->
<!--                &nbsp;Зона&nbsp;<b>B</b>-->
<!--            </v-tab>-->
<!--            <v-tab>-->
<!--                Зона&nbsp;<b>C</b>-->
<!--            </v-tab>-->

<!--            <v-tab-item>-->
                <v-row class="fill-height" style="margin-top: 10px">
                    <v-spacer></v-spacer>
                    <v-col cols="8">
                        <v-data-table
                                :items="cars"
                                :headers="headers"
                                hide-default-footer
                        >
                            <template v-slot:item.buttons="{item}">
                                <v-btn

                                        icon
                                        color="green"
                                        @click="processAction(item)">
                                    <v-icon>mdi-chevron-right</v-icon>
                                </v-btn>
                            </template>

                            <template v-slot:item.status={item}>

                                <v-chip outlined
                                        :color="getModeColor(item.status)"
                                >
                                    {{ item.status }}
                                </v-chip>
                            </template>

                            <template v-slot:item.brack={item}>

                                <v-chip outlined
                                        :color="getBrackColor(item.brack)"
                                >
                                    {{ item.brack }}%
                                </v-chip>
                            </template>
                        </v-data-table>

                        <div class="text-center mt-10 mb-4">
                            <v-pagination
                                    v-model="page"
                                    :length="3"
                                    color="black"
                            ></v-pagination>
                        </div>
                    </v-col>
                    <v-spacer></v-spacer>
                </v-row>
<!--            </v-tab-item>-->

<!--            <v-tab-item>-->
<!--            </v-tab-item>-->

<!--            <v-tab-item>-->
<!--            </v-tab-item>-->
<!--        </v-tabs>-->
    </div>
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
        }
    }
}
</script>

<style scoped>

</style>
