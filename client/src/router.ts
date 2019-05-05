import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Detail from "./views/detail.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('./views/Shop.vue'),
    },
    {
        path: '/emm',
        name: 'emm',
        component: () => import('./views/About.vue'),
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
