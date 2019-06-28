<template>
    <div class="mall-home">
        <!--head-->
        <div class="mall-head mall-home-head">
            <span><van-icon name="scan" /></span>
            <van-search
                    placeholder="请输入搜索关键词"
                    v-model="searchVal"
                    shape="round"
            />
            <span><van-icon name="chat-o" /></span>
        </div>

        <!--轮播图-->
        <div class="h-carousel">
            <van-swipe :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(item, index) in images" :key="index">
                    <img :src="item" alt="">
                </van-swipe-item>
            </van-swipe>
        </div>

        <!--圆形操作块-->
        <div class="h-cricle">
            <div><span style="background: #FF6161;"><i class="icon-f-shop"/></span></div>
            <div><span style="background: #F7A0A0;"><i class="icon-f-shop"/></span></div>
            <div><span style="background: #D8BDF2;"><i class="icon-f-shop"/></span></div>
            <div><span style="background: #BCE2EF;"><i class="icon-f-shop"/></span></div>
        </div>

        <!--今日特价，9块9 包邮-->
        <div class="mall-card h-tj">
            <div class="h-tj-item">
                <img :src="tj_url" alt="">
                <div class="h-tj-item-title">
                    <h4>天天特价</h4>
                    <p>天天特价,日日新</p>
                </div>
                <van-tag round color="#FF6161" text-color="#fff">立即购买</van-tag>
            </div>
            <div class="h-tj-item">
                <img :src="tj_url2" alt="">
                <div class="h-tj-item-title h-tj-item-title2">
                    <h4>9块9包邮</h4>
                    <p>全网最低,超实惠</p>
                </div>
                <van-tag round color="#FF6161" text-color="#fff">立即购买</van-tag>
            </div>
        </div>

        <!--活动-->
        <div class="mall-card h-hd">
            <span class="h-hd-title">活动</span>
            <van-notice-bar>
                <van-tag color="#FFECEC" text-color="#FF6161">店铺周年庆</van-tag>
                diro香水周年庆，199带回家！！！
            </van-notice-bar>
        </div>

        <!--产品促销，居家必备...-->
        <div class="mall-card h-cx">
            <div class="h-cx-l">
                <span class="h-cx-title">今日促销</span>
                <span style="margin-left: 10px">
                    <van-tag color="#FF6161" text-color="#fff">08</van-tag>
                    <span style="margin: 0 2px;font-weight: bold;color: #FF6161">:</span>
                    <van-tag color="#FF6161" text-color="#fff">11</van-tag>
                    <span style="margin: 0 2px;font-weight: bold;color: #FF6161">:</span>
                    <van-tag color="#FF6161" text-color="#fff">21</van-tag>
                </span>
                <div>
                    <p><img :src="hd_images[0]" alt=""></p>
                    <p><img :src="hd_images[2]" alt=""></p>
                    <p><img :src="hd_images[1]" alt=""></p>
                    <p><img :src="hd_images[3]" alt=""></p>
                </div>
            </div>

            <div class="h-cx-r">
                <div class="h-cx-r-item">
                    <span class="h-cx-title">居家必备</span>
                    <div>
                        <p><img :src="hd_images[0]" alt=""></p>
                        <p><img :src="hd_images[5]" alt=""></p>
                    </div>
                </div>
                <div class="h-cx-r-item">
                    <span class="h-cx-title">节日好礼</span>
                    <div>
                        <p><img :src="hd_images[2]" alt=""></p>
                        <p><img :src="hd_images[4]" alt=""></p>
                    </div>
                </div>
            </div>
        </div>

        <!--商品-->
        <div class="h-tab">
            <TabCon
                    :tabList="tabList"
                    :msg="msg"
                    @sendMsg="getChildMsg"
            />
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import TabCon from "@/components/home/tabcon.vue";
    import {Swipe, SwipeItem, NoticeBar, Search} from "vant";

    Vue.use(Swipe).use(SwipeItem).use(NoticeBar).use(Search);

    @Component({
        components: {
            TabCon
        }
    })
    export default class Home extends Vue {
        /*data*/
        searchVal: string = '';
        images: any[] = [
            require('../assets/images/banner_01.jpg'),
            require('../assets/images/banner_02.png'),
            require('../assets/images/banner_03.jpg')
        ];
        hd_images: any[] = [
            require('../assets/images/sp_01.jpg'),
            require('../assets/images/sp_02.jpg'),
            require('../assets/images/sp_03.jpg'),
            require('../assets/images/sp_04.jpg'),
            require('../assets/images/sp_05.jpg'),
            require('../assets/images/sp_06.jpg')
        ];
        msg: string = 'hello';
        message: string = 'message';
        tabList:any = [
            { name: '全部'},
            { name: '女装上衣'},
            { name: '美妆'},
            { name: '酒水'},
            { name: '娱乐'},
            { name: '家具'},
        ];

        private tj_url = require('../assets/images/sp_01.jpg');
        private tj_url2 = require('../assets/images/sp_03.jpg');

        /*methods*/
        getChildMsg(message:string){
            this.message = message;
        }
    }
</script>


<style lang="scss">
    .van-swipe-item{

    }
</style>