import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import VueHead from 'vue-head';

Vue.use(VueHead, {
    separator: '-',
    complement: 'Exchangerate.host',
    head: {
        title: 'Exchangerate.host'
    }
});
Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: '*',
        component: Home
    },
];

const router = new VueRouter({
    mode: "hash",
    base: process.env.BASE_URL,
    routes
});

export default router;