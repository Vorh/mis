<template>
    <v-app id="app">
        <Header/>
        <NavBar :items="items" :drawer="drawer"/>

        <v-main>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-main>
        <Footer/>
    </v-app>
</template>

<script>


import Footer from "./component/common/Footer";
import NavBar from "./component/common/NavBar";
import {mapGetters} from "vuex";
import Header from "./component/common/Header";

export default {
    name: 'app',
    components: {
        Header,
        Footer,
        NavBar,
    },

    data() {
        return {

            drawer: true,

            items: [
                {title: 'Контроль', icon: 'mdi-train', link: '/', badge: true},
                {title: 'Претензии', icon: 'mdi-sim-alert-outline', link: '/claims', badge: false},
                {title: 'Поставщики', icon: 'mdi-tray-full', link: '/suppliers', badge: false},
                {title: 'Аналитика', icon: 'mdi-chart-arc', link: '/analytics', badge: false},
            ],
        }
    },

    methods: {},

    computed: {
        ...mapGetters([]),
    },
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap');

html {
    overflow-y: auto !important;
}

#app {
    font-family: 'Roboto Light', sans-serif !important;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #151C24 !important;
}
</style>
