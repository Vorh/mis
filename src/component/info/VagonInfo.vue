<template>
    <v-col>
        <v-row>
            Зона: {{citem.zone}} - Вагон: №{{citem.number}}
        </v-row>
        <v-row>
            <v-col>
                Текущий процент брака: {{citem.currentAction.brack}}
            </v-col>
            <v-col>
                Время/Дата: {{citem.currentAction.date}}
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                <v-container style="max-width: 600px;">
                    <v-timeline
                            dense
                            clipped
                    >
                        <v-timeline-item v-for="action in citem.actions" class="mb-4" :color="citem.currentAction.brack>=15 ? 'error' : 'grey'" icon-color="grey lighten-2" small>
                            <v-row justify="space-between" class="row-action">
                                <v-col cols="7">
                                    <v-chip v-if="Number(action.brack)>=15" class="white--text ml-0" color="warning" label small>
                                        ВНИМАНИЕ
                                    </v-chip>
                                    <div v-if="Number(action.brack)>0">
                                        Процент брака: {{action.brack}}%
                                    </div>
                                    <div v-if="Number(action.brack)<0">
                                        {{action.text}}
                                    </div>
                                </v-col>
                                <v-col class="text-right" cols="5">
                                    {{action.date}}
                                </v-col>
                            </v-row>
                        </v-timeline-item>

                        <v-timeline-item
                                class="mb-4"
                                hide-dot
                        >
                            <v-btn
                                    class="mx-0"
                            >
                                Оформить претензию
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

export default {
    name: "VagonInfo",
    components: {
    },

    data: () => ({

    }),

    computed: {
        ...mapGetters([ 'citem']),

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

.row-action{
    cursor: pointer;
}
.row-action:hover{
    background-color: #f7f7f7;
    border-radius: 15px;

}

</style>
