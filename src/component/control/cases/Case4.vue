<template>
    <v-card>
        <v-card-title>
            <v-card @click.stop="redirect()" flat>
                <v-card-title>
                    <v-badge
                            inline
                            color="error"
                            dot
                    ></v-badge>
                    <span class="text-h6 font-weight-light">Название: {{zone}}</span>
                </v-card-title>

                <v-card-text class="text-h5 font-weight-bold">
                    Статус: {{status}}
                </v-card-text>

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

                <v-card-text class="text-h5 font-weight-bold">
                    {{vagonbrak}}
                </v-card-text>
            </v-card>
        </v-card-title>

        <v-card-text>
            <v-row>
                <v-col>
                    <img v-img src="../../../assets/lom.jpg" style="width: 250px">
                </v-col>
                <v-col>
                    <img v-img src="../../../assets/nomer.png" style="width: 250px">
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
    name: "Case4",

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
