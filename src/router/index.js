import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [



    {
        path: '/',
        name: 'Control',
        component: () => import('../component/control/Control.vue'),
    },

    {
        path: '/suppliers',
        name: 'Suppliers',
        component: () => import('../component/suppliers/Suppliers.vue'),
    },

    {
        path: '/claims',
        name: 'Stats',
        component: () => import('../component/claims/Claims.vue'),
    },

    {
        path: '/analytics',
        name: 'Analytics',
        component: () => import('../component/analytics/Analytics.vue'),
    },

    {
        path: '/vagoninfo/:id',
        name: 'VagonInfo',
        component: () => import('../component/vagonInfo/VagonInfo.vue'),
    },


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});


export default router;
