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
                {title: 'Контроль', icon: 'mdi-clock-outline', link: '/', role: 'c'},
                {title: 'Поставщики', icon: 'mdi-chart-box-outline', link: '/suppliers', role: 'c'},
            ],
        }
    },

    methods: {},

    computed: {
        ...mapGetters(['username', 'usertype']),
    },
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

html {
    overflow-y: auto !important;
}

#app {
    font-family: 'Montserrat', sans-serif !important;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #4B544D !important;
}
</style>
