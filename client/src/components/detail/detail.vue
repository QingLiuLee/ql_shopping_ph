<template>
  <div class="mall-detail">
    <!--head-->
    <div class="mall-head mall-head2">
      <span><van-icon name="arrow-left" @click="goHome()" /></span>
      <span class="mall-head-title">商品详情</span>
      <span><van-icon name="chat-o" /></span>
    </div>

    <!--轮播图-->
    <div class="d-carousel">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in images">
          <img :src="item" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>

    <!--DetailChoose-->
    <DetailChoose />

    <div class="d-con-item d-con-msg">
      <p>
        <span style="color: #FF6161">￥{{detail.price}}</span>
        <van-tag color="#FFECEC" text-color="#FF6161">{{detail.tag}}</van-tag>
      </p>
      <p class="d-con-msg-name">{{detail.name}}</p>
      <p style="height: 20px">
        <span class="d-con-msg-zan"><van-icon name="thumb-circle-o" />{{detail.zan}}</span>
        <span class="d-con-msg-look">{{detail.look}}人浏览过</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import DetailChoose from "./detail_choose.vue";
import {Swipe, SwipeItem} from "vant";
Vue.use(Swipe).use(SwipeItem);

@Component({
    components: {
        DetailChoose
    }
})
export default class Detail extends Vue {
    /*prop*/

    /*data*/
    images: any[] = [
        require('../../assets/images/banner_01.jpg'),
        require('../../assets/images/banner_02.png'),
        require('../../assets/images/banner_03.jpg')
    ];
    detail:object = {
        name:' 日系潮牌短袖t恤男夏季新款学生简约印花纯棉宽松体恤白色打底衫',
        tag:'限时3小时',
        price:'356',
        zan:'122',
        look:'2309'
    }

    goHome(){
        this.$router.push({name:'home'});
    }
}
</script>

<style scoped lang="scss"></style>
