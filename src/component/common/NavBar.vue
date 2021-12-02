<template>
    <v-navigation-drawer
            app
            height="100vh - 60px"
            permanent
            expand-on-hover
            class="sidebar-navigation-drawer">
        <v-list nav dense>
            <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    link :to="item.link"
                    class="menu-border">
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content :disabled="item.disable">
                    <v-list-item-title class="subtitle-2 ml-1" :disabled="item.disable">
                        {{ item.title }}
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import {mapGetters} from "vuex";
export default {
    props: {
        drawer: Boolean,
        items: Array,
    },
    name: 'NavBar',
    data: () => ({
        mini: true,
    }),
    methods: {
    },
    computed: {
        ...mapGetters([
        ]),
    },
};
</script>

<style>
.sidebar-navigation-drawer {
    height: calc(100vh - 60px);
}
.v-list-group.pl-0.v-list-group--active.v-list-group--no-action.v-list-group--sub-group.primary--text .v-list-group__items {
    padding-left: 40px;
}
body .v-application--is-ltr .v-list-group--sub-group .v-list-group__items .v-list-item {
    padding-left: 0px !important;
}
.v-application--is-ltr .v-list-item__action:first-child, .v-application--is-ltr .v-list-item__icon:first-child {
    margin-right: 0 !important;
}
.w-100 {
    width: 100%;
}
.v-application--is-ltr .v-list-group--sub-group .v-list-group__header {
    padding-left: 16px;
}
.v-application--is-ltr .v-list-item__action:last-of-type:not(:only-child), .v-application--is-ltr .v-list-item__avatar:last-of-type:not(:only-child), .v-application--is-ltr .v-list-item__icon:last-of-type:not(:only-child) {
    margin-left: 0px;
}
.m-bottom {
    align-content: space-between;
}
.v-list-item--link:before {
    background-color: aliceblue;
}
.delete-icon i {
    display: none !important;
}
.v-list-group__items div div.li:first-child .delete-block {
    display: none !important;
}
.sidebar-pos .v-btn__content {
    display: flex;
    justify-content: end;
}
.menu-border {
    border-bottom: 2px solid rgba(0, 0, 0, 0.2)
}
.theme--dark .menu-border {
    border-bottom: 2px solid rgba(255, 255, 255, 0.72)
}
</style>