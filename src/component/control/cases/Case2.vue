<template>
    <v-card height="550px">
        <v-card-title>
            <v-badge
                inline
                color="success"
                dot
            ></v-badge>
            <span class=" font-weight-light"> {{ zoneB.name }}</span>
            <v-spacer></v-spacer>

            <v-btn
                v-if="uploading"
                @click="showDelete = true"
                title="Остановить разгрузку"
                class="mx-0"
                color="red"
                style="color: white"
            >
                <v-icon>mdi-stop-circle-outline</v-icon>
            </v-btn>

            <v-btn
                v-else
                @click="uploading = true"
                title="Возобновить разгрузку"
                class="mx-0"
                color="green"
                style="color: white"
            >
                <v-icon>mdi-stop-circle-outline</v-icon>
            </v-btn>
        </v-card-title>

        <v-card-text class="font-weight-light" @click.stop="redirect()">
            <v-row justify="center" class="text-center status-title mb-1">
                Статус
            </v-row>
            <v-row  justify="center" class="text-center status">
                <template v-if="uploading">
                    {{ zoneB.status }}
                </template>
                <template v-else>
                    Разгрузка остановлена
                </template>
            </v-row>

            <v-row justify="center " class="mt-5 text-center">
                <v-col>
                    Окончания разгрузки в <strong style="font-weight: bold">23:02</strong>
                </v-col>
            </v-row>
            <v-row justify="center" class="text-center mt-0 pt-0">
                <v-col lg="11">
                    <v-progress-linear v-if="uploading"
                        class="mt-2"
                        color="green"
                        buffer-value="60"
                        stream
                        height="15"
                    >
                        60%
                    </v-progress-linear>
                </v-col>
            </v-row>
            <v-row justify="center" class="text-center mt-0 pt-0">
                <v-spacer></v-spacer>
                <v-col>
                    Осталось вагонов: <strong style="font-weight: bold">7</strong>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
            <v-row justify="center" class="text-center mt-0 pt-0">
                <v-spacer></v-spacer>
                <v-col cols="8">
                    Текущий вагон: <strong style="font-weight: bold">№67864207</strong>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
            <v-row justify="center" class="text-center mt-0 pt-0">
                <v-spacer></v-spacer>
                <v-col cols="8">
                    Процент брака:
                    <v-chip color="green" style="color: white">2.43%</v-chip>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
        </v-card-text>

        <v-card-actions>
            <v-row>
                <v-col>
                    <v-row justify="center">
                        <div class="text-center mb-1">Камера на груз</div>
                        <img v-img src="../../../assets/vagon/1.jpg" style="width: 200px">
                    </v-row>
                </v-col>
                <v-col>
                    <v-row justify="center">
                        <div class="text-center mb-1">Камера на номер</div>
                        <img v-img style="width: 200px" height="200px"
                             src="../../../assets/vagon/n_1.jpg">
                    </v-row>
                </v-col>
            </v-row>
        </v-card-actions>

        <Modal v-model="showDelete">
            <template v-slot:title>Остановить разгрузку?</template>
            <template v-slot:action-primary>
                <v-btn color="red"
                       style="color: white"
                       @click="stopVagon">
                    Остановить
                </v-btn>
            </template>
        </Modal>
    </v-card>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import Modal from "../../common/Modal";

export default {
    name: "ZoneB",
    components: {Modal},

    data: () => ({
        showDelete: false,
        uploading: true,
    }),

    computed: {
        ...mapGetters(['zoneB'])
    },

    methods: {
        redirect() {
            this.$router.push({name: 'Control'})
        },

        stopVagon() {
            this.uploading = false;
        },
    }
}
</script>

<style scoped>


.status-title {
    font-size: 20px;
}

.status {
    font-size: 30px;
    font-weight: normal;
    color: #686868;
}
</style>
