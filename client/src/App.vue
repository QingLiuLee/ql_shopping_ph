<template>
    <div id="app" class="mall">
        <!--路由-->
        <div class="mall-content">
            <router-view/>
        </div>

        <!--footer bar-->
        <footer class="mall-footer">
            <div v-for="item in menuList">
                <router-link :to="item.path">
                    <p><span><i v-bind:class="item.icon"/></span></p>
                    <p>{{item.name}}</p>
                </router-link>
            </div>
        </footer>

    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class App extends Vue {
        private menuList: any = [
            {
                icon: 'icon-f-home2',
                name: '首页',
                path: '/',
            },
            {
                icon: 'icon-f-fl',
                name: '分类',
                path: '/shop',
            },
            {
                icon: 'icon-f-gwc',
                name: '购物车',
                path: '/shoppingCart',
            },
            {
                icon: 'icon-f-my',
                name: '我的',
                path: '/mine',
            },
        ];

    }

</script>

<style lang="scss">
    @import "assets/css/init.scss";
    @import "assets/css/app.scss";
</style>
