import Vue from 'vue';
import Router from 'vue-router';
<<<<<<< HEAD
import Home from './views/Home.vue';
import Detail from "./components/detail/detail.vue";
=======
>>>>>>> 1a7a25798b66d03f542860d77e5686fefcae0c45

Vue.use(Router);

export default new Router({
    // 选中路由时添加类名
    linkActiveClass: 'active',
    mode: 'history',
    routes: [
        {
            path: '/',
            // 页面加载自动导航到home页面，即重定向到home组件
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('./views/Home.vue'),
        },
        {
            path: '/classification',
            name: 'classification',
            component: () => import('./views/classification.vue'),
        },
        {
            path: '/cart',
            name: 'cart',
            component: () => import('./views/Cart.vue'),
        },
        {
            path: '/mine',
            name: 'mine',
            component: () => import('./views/Mine.vue'),
        },
        {
            path: '/detail',
            name: 'detail',
            component: () => import('./components/detail/detail.vue'),
        },
    ],
});
