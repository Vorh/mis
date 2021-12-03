<template>
    <v-col>
        <v-row>
            <v-col lg="4">
                <Case1 :zone="'Зона А'"
                       :status="'Ожидает состав'"
                       :time="'23:00'"
                       :vagonCount="16"/>
            </v-col>

            <v-col lg="4">
                <Case2/>
            </v-col>
            <v-col lg="4">
                <Case3 />
            </v-col>
        </v-row>
    </v-col>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import Case1 from "./cases/Case1";
import Case2 from "./cases/Case2";
import Case3 from "./cases/Case3";

export default {
    name: "Control",
    components: {Case3, Case2, Case1}
}
</script>

<style scoped>

</style>
