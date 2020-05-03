import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
    {
        path: '/',
        // 页面加载自动导航到home页面，即重定向到home组件
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home.vue'),
    },
    {
        path: '/detail',
        name: 'detail',
        component: () => import('@/components/detail/detail.vue'),
    },
    {
        path: '/classification',
        name: 'classification',
        component: () => import('@/views/classification.vue'),
    },
    {
        path: '/cart',
        name: 'cart',
        component: () => import('@/views/Cart.vue'),
    },
    {
        path: '/mine',
        name: 'mine',
        component: () => import('@/views/Mine.vue'),
    },
    {
        path: '/integral',
        name: 'integral',
        component: () => import('@/components/mine/integral/integral.vue'),
    },
    {
        path: '/address',
        name: 'address',
        component: () => import('@/components/mine/address/address.vue'),
    }
];

const router = new VueRouter({
  routes,
});

export default router;
