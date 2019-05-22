import Vue from 'vue';
import Router from 'vue-router';

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
            path: '/detail',
            name: 'detail',
            component: () => import('./components/detail/detail.vue'),
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
            path: '/integral',
            name: 'integral',
            component: () => import('./components/mine/integral/integral.vue'),
        },
        {
            path: '/address',
            name: 'address',
            component: () => import('./components/mine/address/address.vue'),
        }
    ],
});
