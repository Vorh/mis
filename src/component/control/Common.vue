<template>
    <v-col>
        <v-row>
            <v-col>
                <Case1 :zone="'Зона Б'"
                       :status="'Ожидает'"
                       :time="'23:00'"
                       :vagonCount="16"/>
            </v-col>

            <v-col>
                <Case2 :zone="'Зона Б'"
                       :status="'Состав прибыл'"
                       :time="'23:05'"
                       :vagonCount="16"/>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <Case3 :zone="'Зона Б'"
                       :status="'Разгрузка окончена 00:05'"
                       :vagonbrak="'Количество брака: 4%'"
                       :progress="100"/>
            </v-col>

            <v-col>
                <Case4 :zone="'Зона A'"
                       :status="'Разгрузка'"
                       :vagonbrak="'Текущий вагон: № 123200 Брак: 4%'"
                       :progress="20"/>
            </v-col>
        </v-row>
    </v-col>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import Case1 from "./cases/Case1";
import Case2 from "./cases/Case2";
import Case3 from "./cases/Case3";
import Case4 from "./cases/Case4";

export default {
    name: "Control",
    components: {Case4, Case3, Case2, Case1},
}
</script>

<style scoped>

</style>
