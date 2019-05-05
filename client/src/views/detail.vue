<template>
  <div class="mall-detail">
    <!--head-->
    <div class="mall-head">
      <span><van-icon name="qr" /></span>
      <span>商品详情</span>
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
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import DetailChoose from "@/components/detail/detail_choose.vue";
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
        require('../assets/images/banner_01.jpg'),
        require('../assets/images/banner_02.png'),
        require('../assets/images/banner_03.jpg')
    ];
}
</script>

<style scoped lang="scss"></style>
