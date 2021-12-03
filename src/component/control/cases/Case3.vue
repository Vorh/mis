<template>
    <v-card>
        <v-card-title>
            <v-badge
                    inline
                    color="error"
                    dot
            ></v-badge>
            <span class="text-h6 font-weight-light">Название: {{zone}}</span>
        </v-card-title>


        <v-card-text class="text-h5 font-weight-bold">


            <v-row>
                <v-col>Статус: {{status}}</v-col>
            </v-row>

            <v-row>
                <v-progress-linear
                        v-model="progress"
                        color="blue-grey"
                        height="25"
                >
                    <template v-slot:default="{ value }">
                        <strong>{{ Math.ceil(value) }}%</strong>
                    </template>
                </v-progress-linear>

            </v-row>

            <v-row>
                <v-col>{{vagonbrak}}</v-col>
            </v-row>




            <v-row>
                <v-spacer></v-spacer>
                <v-btn>Завершить разгрузку</v-btn>
                <v-spacer></v-spacer>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";


export default {
    name: "Case3",

    props: {
        progress: Number,
        zone: String,
        status: String,
        vagonbrak: String
    },
}
</script>

<style scoped>

</style>
