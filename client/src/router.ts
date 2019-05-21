import Vue from 'vue';
import Router from 'vue-router';
import Detail from './components/detail/detail.vue';

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
            path: '/shop',
            name: 'shop',
            component: () => import('./views/Shop.vue'),
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
            component: Detail,
        },
    ],
});
