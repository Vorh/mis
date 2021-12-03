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
            Статус: {{status}}

            <v-row>
                <v-spacer></v-spacer>
                <v-col>
                    Время прибытия: {{time}}
                </v-col>
                <v-spacer></v-spacer>
            </v-row>

            <v-row>
                <v-spacer></v-spacer>
                <v-col>
                    Количество вагонов: {{vagonCount}}
                </v-col>
                <v-spacer></v-spacer>
            </v-row>

            <v-row>
                <v-spacer></v-spacer>
                <v-col>
                    <v-btn>Начать разгрузку</v-btn>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";


export default {
    name: "Case2",

    props: {
        vagonCount: Number,
        time: String,
        zone: String,
        status: String
    },
}
</script>

<style scoped>

</style>
