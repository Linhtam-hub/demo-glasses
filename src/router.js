import Vue from 'vue'
import Router from 'vue-router'
import product from "./components/product.vue";
Vue.use(Router)

export default new Router({
    routes: [
        { path: "/tryglasses", component: product },
    ],
})