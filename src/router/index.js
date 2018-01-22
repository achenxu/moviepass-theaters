import Vue from "vue";
import Router from "vue-router";

const Home = () => import(/* webpackChunkName: "home" */ "@/components/Home");
const FourOhFour = () => import(/* webpackChunkName: "fourohfour" */ "@/components/404");

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/404",
            name: "FourOhFour",
            component: FourOhFour
        },
        {
            path: "*",
            redirect: "/404"
        }
    ]
});
