<template>
    <v-row class="fill-height" style="margin-top: 10px">
        <v-spacer></v-spacer>
        <v-col cols="8">
            <v-spacer></v-spacer>
            lol
        </v-col>
    </v-row>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";


export default {
    name: "Control",


    data: () => ({}),

    computed: {
        ...mapGetters(['username', 'usertype']),
    },

    methods: {

    }
}
</script>

<style scoped>

</style>