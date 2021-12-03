<template>
    <v-card height="550px">
        <v-card-title>
            <v-badge
                    inline
                    color="warning"
                    dot
            ></v-badge>
            <span class=" font-weight-light"> {{zone}}</span>
        </v-card-title>

        <v-card-text class="font-weight-light">
            <v-row justify="center" class="text-center status-title mb-1">
                Статус
            </v-row>
            <v-row justify="center" class="text-center status">
                {{status}}
            </v-row>
            <v-row justify="center" class="text-center mt-15">
                <v-col>
                    Время прибытия: <strong style="font-weight: bold">{{time}}</strong>
                </v-col>
            </v-row>
            <v-row justify="center" class="text-center mt-0 pt-0">
                <v-spacer></v-spacer>
                <v-col>
                    Количество вагонов:  <strong style="font-weight: bold">{{vagonCount}}</strong>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
        </v-card-text>

        <v-card-actions>
            <v-row></v-row>
            <v-row justify="center">
                    <v-btn
                    color="primary"
                    @click="startUploadingAction"
                    >Начать разгрузку&nbsp;
                    <v-icon>mdi-chevron-right-box</v-icon>
                    </v-btn>
            </v-row>
            <v-row></v-row>
        </v-card-actions>
    </v-card>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
    name: "Case1",

    props: {
        vagonCount: Number,
        time: String,
        zone: String,
        status: String
    },


    methods:{


        ...mapActions(['nextStage']),

        startUploadingAction(){
            this.nextStage();
            this.$router.push({name: 'Control'})
        }
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
