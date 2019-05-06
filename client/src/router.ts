import Vue from 'vue';
import Router from 'vue-router';
import Detail from "./components/detail/detail.vue";

Vue.use(Router);

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
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
