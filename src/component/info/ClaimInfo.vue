<template>
    <v-col>
        <v-row>
            Зона: {{citem.zone}} - Вагон: №{{citem.number}}
        </v-row>
        <v-row>
            <v-col>
                Текущий процент брака: {{citem.brack[citem.brack.length-1]}}
            </v-col>
            <v-col>
                Время/Дата: {{citem.date[citem.date.length-1]}}
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                <v-container style="max-width: 600px;">
                    <v-timeline
                            dense
                            clipped
                    >
                        <v-timeline-item v-for="idx in (citem.text.length-1)" class="mb-4" :color="citem.brack[idx]>=15 ? 'error' : 'grey'" icon-color="grey lighten-2" small>
                            <v-row justify="space-between">
                                <v-col cols="7">
                                    <v-chip v-if="Number(citem.brack[idx])>=15" class="white--text ml-0" color="warning" label small>
                                        ВНИМАНИЕ
                                    </v-chip>
                                    <div v-if="Number(citem.brack[idx])>0">
                                        Процент брака: {{citem.brack[idx]}}%
                                    </div>
                                    <div v-if="Number(citem.brack[idx])<0">
                                        {{citem.text[idx]}}
                                    </div>
                                </v-col>
                                <v-col class="text-right" cols="5">
                                    {{citem.date[idx]}}
                                </v-col>
                            </v-row>
                        </v-timeline-item>

                        <v-timeline-item
                                class="mb-4"
                                hide-dot
                        >
                            <v-btn
                                    class="mx-0"
                                    disabled
                            >
                                Претензия оформлена
                            </v-btn>
                        </v-timeline-item>

                    </v-timeline>
                </v-container>
            </v-col>
            <v-col cols="6">
                <v-row justify="center">
                    <v-card>
                        <v-card-title>
                            Камера на груз
                        </v-card-title>

                        <v-card-text>
                            <v-container>

                                <img style="width: 600px"
                                     src="../../assets/lom.jpg">
                            </v-container>
                        </v-card-text>
                    </v-card>
                </v-row>

                <v-row justify="center">
                    <v-card>
                        <v-card-title>
                            Камера на номер
                        </v-card-title>

                        <v-card-text>
                            <v-container>
                                <img style="width: 600px" src="../../assets/nomer.png">
                            </v-container>
                        </v-card-text>
                    </v-card>
                </v-row>
            </v-col>
        </v-row>
    </v-col>
</template>

<script>

import {mapGetters, mapMutations} from "vuex";
// {{this.$route.params.id}}

export default {
    name: "ClaimInfo",
    components: {
    },

    data: () => ({
        items: [
            {
                number: 100006,
                id: '0x1bbe067bb0fc732188f5bc487a195a3b7d94e743fb0011834a73a38d662f583f4',
                zone: 'A',
                text: ['Вагон 1000043 прибыл на разгрузку в зоне А.', 'Разгрузка началась.', '', '', '', ''],
                brack: [-1, -1, 5, 10, 15, 18],
                date: ['22:30, 2 dec 2021', '22:35, 2 dec 2021', '22:40, 2 dec 2021', '22:45, 2 dec 2021', '22:50, 2 dec 2021' , '22:55, 2 dec 2021'],

            }],


    }),

    computed: {
        ...mapGetters(['order']),

        citem: function () {
            console.log(this.items.filter(value => value.id === this.$route.params.id));
            return this.items.filter(value => value.id === this.$route.params.id)[0]
        }

    },

    methods: {
    },
}
</script>

<style scoped>

.next-step-row {
    margin-bottom: 10px;
}

.main-title {
    font-size: 50px;
    line-height: 90px;
    font-weight: bold;
}

.sub-title {
    font-size: 25px;
}

.file-input-container {
    width: 100%;
    min-width: 100%;
}

.file-input-container:hover {
    border-radius: 10px;
    background-color: rgba(232, 232, 232, 0.35);
}

a.file-container {
    overflow: hidden;
    cursor: pointer;
}

a.file-container > input[type=file] {
    cursor: inherit;
    filter: alpha(opacity=0);
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    text-align: right;
    width: 100%;
    height: 100%;
}

</style>