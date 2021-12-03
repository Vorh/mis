<template>
    <div>
        <v-tabs fixed-tabs color="black" slider-color="grey">
            <v-tab>
                <v-badge
                        inline
                        color="error"
                        dot
                ></v-badge>
                &nbsp;Зона&nbsp;<b>A</b>
            </v-tab>
            <v-tab>
                <v-badge
                        inline
                        color="error"
                        dot
                ></v-badge>
                &nbsp;Зона&nbsp;<b>B</b>
            </v-tab>
            <v-tab>
                Зона&nbsp;<b>C</b>
            </v-tab>

            <v-tab-item>
            </v-tab-item>

            <v-tab-item>
            </v-tab-item>

            <v-tab-item>
            </v-tab-item>
        </v-tabs>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";


export default {
    name: "Control",


    data: () => ({

    }),

    computed: {
        ...mapGetters([]),
    },

    methods: {

    }
}
</script>

<style scoped>

</style>