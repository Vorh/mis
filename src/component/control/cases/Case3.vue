<template>
    <v-card height="550px">
        <v-card-title>
            <v-badge
                inline
                color="primary"
                dot
            ></v-badge>
            <span class=" font-weight-light"> Зона В</span>
        </v-card-title>

        <v-card-text class="font-weight-light">
            <v-row justify="center" class="text-center status-title mb-1">
                Статус
            </v-row>
            <v-row justify="center" class="text-center status">
                Разгрузка окончена
            </v-row>

            <v-row justify="center " class="mt-5 text-center">
                <v-col>
                    Окончания разгрузки в <strong style="font-weight: bold">22:12</strong>
                </v-col>
            </v-row>
            <v-row justify="center" class="text-center mt-0 pt-0">
                <v-col lg="11">
                    <v-progress-linear
                        class="mt-2"
                        color="primary"
                        buffer-value="100"
                        height="15"
                    >
                        100%
                    </v-progress-linear>
                </v-col>
            </v-row>
            <v-row justify="center" class="text-center mt-0 pt-0">
                <v-spacer></v-spacer>
                <v-col>
                    Разгружено вагонов: <strong style="font-weight: bold">18</strong>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>

            <v-row justify="center" class="text-center mt-0 pt-0">
                <v-spacer></v-spacer>
                <v-col>
                    Вагонов c браком:<strong style="font-weight: bold">1</strong>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
            <v-row justify="center" class="text-center mt-0 pt-0">
                <v-spacer></v-spacer>
                <v-col>
                    Процент брака:  <v-chip color="primary" style="color: white">1.43%</v-chip>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
        </v-card-text>

        <v-card-actions>
            <v-row justify="center">
                <v-btn
                    color="primary"
                >Отчёт
                    <v-icon>mdi-chart-timeline</v-icon>
                </v-btn>
            </v-row>
        </v-card-actions>
    </v-card>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
    name: "ZoneB",


    computed: {
        ...mapGetters(['zoneB'])
    }
}
</script>

<style scoped>


.status-title{
    font-size: 20px;
}

.status {
    font-size: 30px;
    font-weight: normal;
    color: #686868;
}
</style>
