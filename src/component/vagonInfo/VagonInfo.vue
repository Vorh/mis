<template>
    <v-col>
        <v-row>
            Зона: А - Вагон: №100006
        </v-row>
        <v-row>
            <v-col>
                Текущий процент брака:18%
            </v-col>
            <v-col>
                Время/Дата: 22:55, 2 dec 2021
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-container style="max-width: 600px;">
                    <v-timeline
                            dense
                            clipped
                    >

                        <v-timeline-item class="mb-4" color="grey" icon-color="grey lighten-2" small>
                            <v-row justify="space-between">
                                <v-col cols="7">
                                    Вагон 1000043 прибыл на разгрузку в зоне А.
                                </v-col>
                                <v-col class="text-right" cols="5">
                                    22:30, 2 dec 2021
                                </v-col>
                            </v-row>
                        </v-timeline-item>

                        <v-timeline-item class="mb-4" color="grey" icon-color="grey lighten-2" small>
                            <v-row justify="space-between">
                                <v-col cols="7">
                                     Разгрузка началась.
                                </v-col>
                                <v-col class="text-right" cols="5">
                                    22:35, 2 dec 2021
                                </v-col>
                            </v-row>
                        </v-timeline-item>

                        <v-timeline-item class="mb-4" color="grey" icon-color="grey lighten-2" small>
                            <v-row justify="space-between">
                                <v-col cols="7">
                                    Процент брака: 5%.
                                </v-col>
                                <v-col class="text-right" cols="5">
                                    22:40, 2 dec 2021
                                </v-col>
                            </v-row>
                        </v-timeline-item>

                        <v-timeline-item class="mb-4" color="grey" icon-color="grey lighten-2" small>
                            <v-row justify="space-between">
                                <v-col cols="7">
                                    Процент брака: 10%.
                                </v-col>
                                <v-col class="text-right" cols="5">
                                    22:45, 2 dec 2021
                                </v-col>
                            </v-row>
                        </v-timeline-item>


                        <v-timeline-item class="mb-4" small>
                            <v-row justify="space-between">
                                <v-col cols="7">
                                    <v-chip class="white--text ml-0" color="red" label small>
                                        WARN
                                    </v-chip>
                                    Процент брака 15%.
                                </v-col>
                                <v-col class="text-right" cols="5">
                                    22:50, 2 dec 2021
                                </v-col>
                            </v-row>
                        </v-timeline-item>


                        <v-timeline-item class="mb-4" small>
                            <v-row justify="space-between">
                                <v-col cols="7">
                                    <v-chip class="white--text ml-0" color="red" label small>
                                        WARN
                                    </v-chip>
                                    Процент брака 18%.
                                </v-col>
                                <v-col class="text-right" cols="5">
                                    22:55, 2 dec 2021
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
            <v-col>
                <v-row>
                    <img src="../../assets/lom.jpg">
                </v-row>
                <v-row>
                    <img src="../../assets/nomer.png">
                </v-row>
            </v-col>
        </v-row>
    </v-col>
</template>

<script>

import {mapGetters, mapMutations} from "vuex";
// {{this.$route.params.id}}

export default {
    name: "VagonInfo",
    components: {
    },

    data: () => ({
        item: {
            number: 1,
            id: '18c7633b-daef-4cbc-92c5-a5f06a1ef43c',
            date: '14.11.2021г. (21.00-22.00)',
            volunteer: 'Петров А.В',
            partner: "ООО \"Пятерочка\"",
            address: 'ул. Шаболовка, 19',
            time: '21:00-23:00',
            wards: 'Соколова К.А, Иванова В.В',
        },

        wardsHeaders: [
            {text: "№", value: 'id'},
            {text: "ФИО", value: 'fio'},
            {text: "Адрес", value: 'address'},
        ],

        wardsItems: [
            {
                id: 1,
                fio: 'Соколова К.А',
                address: 'ул. Донская, 8, кв. 17',
                coords: "55.723869,37.607108",
                name: "emp", time: "emp"
            },
            {
                id: 2,
                fio: 'Иванова В.В',
                address: 'Мытная ул., 44, кв. 134',
                coords: "55.721070,37.615823",
                name: "emp", time: "emp"
            },
        ],

        files: [],
        filesFirstWard: [],
        filesSecondWard: [],

        headers: [
            {text: "Наименование позиции", value: 'name'},
            {text: "Количество", value: 'count'},
        ],

        items: [],
        itemsFirstWard: [],
        itemsSecondWard: [],
        editedItem: {},
        dialog: false,
        dialogFirstWard: false,
        dialogSecondWard: false,

        cardItems:[
            {
                id: 1,
                fio: 'Соколова К.А',
                address: 'ул. Донская, 8, кв. 17',
                coords: "55.723869,37.607108",
                name: "emp", time: "emp"
            },
            {
                id: 2,
                fio: 'Иванова В.В',
                address: 'Мытная ул., 44, кв. 134',
                coords: "55.721070,37.615823",
                name: "emp", time: "emp"
            },
            {
                id: "+",
                name: "ООО \"Пятерочка\"",
                address: 'ул. Шаболовка, 19',
                time: '21:00-23:00',
                coords: "55.723595,37.611370",
                fio: "emp"
            }
        ]
    }),

    computed: {
        ...mapGetters(['order']),

        filesSize() {
            if (this.files.length > 0) {
                let size = 0;

                this.files.forEach(file => {
                    size += file.size;
                })

                return parseFloat(size / 1024 / 1024).toFixed(2);
            } else {
                return 0;
            }
        },

        filesSizeFirstWard() {
            if (this.filesFirstWard.length > 0) {
                let size = 0;

                this.filesFirstWard.forEach(file => {
                    size += file.size;
                })

                return parseFloat(size / 1024 / 1024).toFixed(2);
            } else {
                return 0;
            }
        },

        filesSizeSecondWard() {
            if (this.filesSecondWard.length > 0) {
                let size = 0;

                this.filesSecondWard.forEach(file => {
                    size += file.size;
                })

                return parseFloat(size / 1024 / 1024).toFixed(2);
            } else {
                return 0;
            }
        }
    },

    methods: {

        ...mapMutations(['setOrder']),

        addItem() {
            this.items.push(this.editedItem);
            this.dialog = false;
            this.editedItem = {};
        },

        addItemFirstWard() {
            this.itemsFirstWard.push(this.editedItem);
            this.dialogFirstWard = false;
            this.editedItem = {};
        },

        addItemSecondWard() {
            this.itemsSecondWard.push(this.editedItem);
            this.dialogSecondWard = false;
            this.editedItem = {};
        },

        addFiles(e) {
            let files = e.target.files;
            if (files.length >= 1) {
                for (let i = 0; i < files.length; i++) {
                    let file = files[i];
                    this.files.push(file);
                }
            }
        },

        addFilesFirstWard(e) {
            let files = e.target.files;
            if (files.length >= 1) {
                for (let i = 0; i < files.length; i++) {
                    let file = files[i];
                    this.filesFirstWard.push(file);
                }
            }
        },

        addFilesSecondWard(e) {
            let files = e.target.files;
            if (files.length >= 1) {
                for (let i = 0; i < files.length; i++) {
                    let file = files[i];
                    this.filesSecondWard.push(file);
                }
            }
        },

        endOrder() {
            this.order.step = 1;
            this.$router.push({name: 'ActiveOrders'})
        },
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