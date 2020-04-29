import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import StatusPage from "../views/StatusPage.vue";
import SupportUsPage from "../views/SupportUsPage.vue";
import VueHead from 'vue-head';

Vue.use(VueHead, {
    separator: '-',
    complement: 'Exchangerate.host'
});
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/status",
        name: "StatusPage",
        component: StatusPage
    },
    {
        path: "/support-us",
        name: "SupportUsPage",
        component: SupportUsPage
    },
    {
        path: '*',
        component: Home
    },
];

const router = new VueRouter({
    mode: "hash",
    base: process.env.BASE_URL,
    routes,
    scrollBehavior: function (to) { 
        if (to.hash) {
            return { 
                selector: to.hash 
            } 
        } 
    }
});

export default router;