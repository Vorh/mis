<template>
    <v-app-bar
            height="100%"
            dense
            app
            color="white"
            class="app-bar"
    >

        <v-col cols="4" class="ml-0 pl-0">
            <v-avatar style="width: 100%; height: 100%; border-radius: 0">
                <img :src="require('../../assets/logo_full.png')"
                     @click="clickLogo"
                     style="width: auto; height: 70px"
                />
                <v-spacer></v-spacer>
            </v-avatar>
        </v-col>
        <v-col cols="4" class="ma-0 pa-0">
            <Weather/>
        </v-col>
        <v-col cols="4" class="ma-0 pa-0">
            <v-row justify="end" align="center">
                <div class="account ml-1">
                    Сотрудник ОТК: Иванов И.В.
                </div>
            </v-row>
        </v-col>
    </v-app-bar>
</template>

<script>
import {mapGetters} from "vuex";
import Weather from "../Weather/Weather";

export default {
    name: 'Header',
    components: {
        Weather,
    },
    data: () => ({
        tabId: 1,
        menu: null,
        menus: [
            {
                name: 'Main',
                to: '/',
                id: 1
            },
            {
                name: 'Requests',
                to: '/requests',
                id: 2,
            },
            {
                name: 'Stats',
                to: '/stats',
                id: 3,
            },
        ]
    }),
    computed: {
        ...mapGetters([]),
        activeTabGrant: function () {
            return {
                'active-tab': this.tabId === 1,
                'in-active-tab': this.tabId !== 1,
            }
        },
        activeTabRequests: function () {
            return {
                'active-tab': this.tabId === 2,
                'in-active-tab': this.tabId !== 2,
            }
        },
        activeTabAccount: function () {
            return {
                'active-tab': this.tabId === 3,
                'in-active-tab': this.tabId !== 3,
            }
        },
    },
    created() {
        let path = this.$router.history.current.path;
        let find = this.menus.find(value => value.to === path);
        if (find) {
            this.menu = find;
            this.tabId = find.id;
        }
    },
    methods: {
        goToAction(id) {
            let menu = this.menus.find(value => value.to === id);
            if (menu === this.menu)
                return;
            else {
                this.$router.push(id)
                this.menu = menu;
                this.tabId = menu.id;
            }
        },
        pushUrl(to) {
            this.$router.push(to)
        },
        clickLogo() {
            window.open('http://meta-industrial.space/', '_blank').focus();
        },
    }
    ,
}
;
</script>
<style>
.app-bar {
    box-shadow: 0 2px 4px -1px rgba(255, 255, 255, 0.2), 0 4px 5px 0 rgba(215, 214, 214, 0.14), 0 1px 10px 0 rgba(255, 255, 255, 0.12) !important;
}

.tabs {
    font-size: 25px;
}

.active-tab {
    color: #333333;
    font-size: 25px;
    font-weight: bold;
    border-bottom: 4px solid #171717;
    cursor: pointer;
}

.menu-select {
    width: 150px;
    font-size: 25px;
    color: #171717;
}

.in-active-tab {
    color: #333333;
    font-size: 25px;
    font-weight: bold;
    cursor: pointer;
}

.account {
    cursor: pointer; /* Mouse pointer on hover */
    color: #686868;
    height: 35px;
    font-weight: 600;
    font-size: 14px;
    padding: 5px;
    border: 1px solid #ECECEC;
    border-radius: 10px;
}

.logo {
    width: 400px;
    cursor: pointer;
}
</style>