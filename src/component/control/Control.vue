<template>
    <div>
        <v-tabs fixed-tabs color="black" slider-color="grey">
            <v-tab>
                <v-badge
                        inline
                        color="error"
                        dot
                ></v-badge>
                &nbsp;Зона&nbsp;<b>A</b>
            </v-tab>
            <v-tab>
                <v-badge
                        inline
                        color="error"
                        dot
                ></v-badge>
                &nbsp;Зона&nbsp;<b>B</b>
            </v-tab>
            <v-tab>
                Зона&nbsp;<b>C</b>
            </v-tab>

            <v-tab-item>
                <v-row class="fill-height" style="margin-top: 10px">
                    <v-spacer></v-spacer>
                    <v-col cols="8">
                        <v-data-table
                                :items="items"
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
            </v-tab-item>

            <v-tab-item>
            </v-tab-item>

            <v-tab-item>
            </v-tab-item>
        </v-tabs>
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

        items: [
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
        ]
    }),

    computed: {
        ...mapGetters([]),
    },

    methods: {
        getModeColor(mode) {
            switch (mode) {
                case 'Разгрузка началась':
                    return 'light-green';
                case 'Разгрузка приостановлена':
                    return 'grey';
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