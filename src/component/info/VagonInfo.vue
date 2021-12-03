<template>
    <v-col>

        <v-card>
            <v-card-title>
                Зона: {{ citem.zone }} - Вагон: №{{ citem.number }} Поставщик: {{ citem.company }}
                <v-row justify="end">
                    <v-col>
                        <v-row justify="end">
                            <v-btn
                                class="mx-0"
                                color="red"
                                style="color: white"
                            >

                                <v-icon>mdi-stop-circle-outline</v-icon>
                                Остановить погрузку
                            </v-btn>
                        </v-row>
                    </v-col>
                </v-row>
            </v-card-title>
            <v-card-actions>
                <v-container>
                    <v-row dense>
                        <v-col lg="6">
                            <v-container>
                                <v-row dense class="mb-5">
                                    <v-col lg="11">
                                        <v-progress-linear
                                            class="mt-2"
                                            color="green"
                                            buffer-value="50"
                                            stream
                                            height="15"
                                        >
                                        </v-progress-linear>
                                    </v-col>
                                    <v-col lg="1">
                                        <v-chip color="green" style="color: white">
                                            23:55
                                        </v-chip>
                                    </v-col>
                                </v-row>
                                <v-timeline
                                    dense
                                    clipped
                                >
                                    <v-timeline-item

                                        v-for="action in citem.actions" class="mb-4"
                                        :color="getColor(action)"
                                        icon-color="grey lighten-2" small>
                                        <v-row justify="space-between" class="row-action"
                                               @click="clickCurrentAction(action)"
                                        >
                                            <v-col cols="7">
                                                <v-chip v-if="Number(action.brack)>=15" class="white--text ml-0"
                                                        color="warning" label small>
                                                    ВНИМАНИЕ
                                                </v-chip>
                                                <div v-if="Number(action.brack)>0">
                                                    Процент брака: {{ action.brack }}%
                                                </div>
                                                <div v-if="Number(action.brack)<0">
                                                    {{ action.text }}
                                                </div>
                                            </v-col>
                                            <v-col class="text-right" cols="5">
                                                {{ action.date }}
                                            </v-col>
                                        </v-row>
                                    </v-timeline-item>
                                    <v-timeline-item
                                        class="mb-4"
                                        hide-dot
                                        v-if="isCritical"
                                    >
                                        <v-btn
                                            class="mx-0 ml-1"
                                            color="red"
                                            style="color: white"
                                        >
                                            <v-icon>mdi-clipboard-alert</v-icon>
                                            Оформить претензию
                                        </v-btn>
                                    </v-timeline-item>

                                </v-timeline>
                            </v-container>
                        </v-col>
                        <v-col lg="3">
                            <v-card max-height="600px">
                                <v-card-title>
                                    Камера на груз

                                    <v-switch
                                        class="ml-5"
                                        v-model="isCvVagon"
                                        flat
                                        label="CV"
                                    ></v-switch>
                                </v-card-title>
                                <v-card-text>
                                    <v-container>
                                        <img v-if="isCvVagon" v-img style="width: 400px" height="400px"
                                             :src="citem.currentAction.imageCvVagon">

                                        <img v-else v-img style="width: 400px" height="400px"
                                             :src="citem.currentAction.imageVagon">
                                    </v-container>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col lg="3">
                            <v-card max-height="600px">
                                <v-card-title>
                                    Камера на номер
                                    <v-switch
                                        class="ml-5"
                                        v-model="isCvNumber"
                                        flat
                                        label="CV"
                                    ></v-switch>
                                </v-card-title>

                                <v-card-text>
                                    <v-container>
                                        <img v-if="isCvNumber" v-img style="width: 400px" height="400px"
                                             :src="citem.currentAction.imageCvNumber">

                                        <img v-else v-img style="width: 400px" height="400px"
                                             :src="citem.currentAction.imageNumber">
                                    </v-container>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-actions>
        </v-card>
    </v-col>
</template>

<script>

import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
    name: "VagonInfo",
    components: {},

    data: () => ({
        isCvNumber: false,
        isCvVagon: false,
    }),

    computed: {
        ...mapGetters(['citem']),


        isCritical: function () {

            if (this.citem.currentAction.brack >= 15) {
                return true;
            } else {
                return false;
            }
        }
    },

    methods: {

        ...mapActions(['setCurrentAction']),

        clickCurrentAction(action) {
            this.setCurrentAction(action);
        },

        getColor(action) {

            if (action.brack >= 15) {
                return 'error'
            }

            return 'success';
        }

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

.row-action {
    cursor: pointer;
}

.row-action:hover {
    background-color: #f7f7f7;
    border-radius: 15px;

}

</style>
