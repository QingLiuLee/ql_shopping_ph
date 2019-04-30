<template>
  <div class="mall-home">
    <div class="mall-head">
      <span></span><span>首页</span><span></span>
    </div>

    <div class="h-carousel">
      <van-swipe :autoplay="3000" indicator-color="white">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>
    </div>

    <div class="h-cricle">
      <div><span style="background: #FF6161;"><i class="icon-f-shop" /></span></div>
      <div><span style="background: #F7A0A0;"><i class="icon-f-shop" /></span></div>
      <div><span style="background: #D8BDF2;"><i class="icon-f-shop" /></span></div>
      <div><span style="background: #BCE2EF;"><i class="icon-f-shop" /></span></div>
    </div>

    <div class="h-tab">
      <TabCon />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TabCon from "@/components/home/tabcon.vue"; // @ is an alias to /src
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe).use(SwipeItem);

@Component({
  components: {
    TabCon
  }
})
export default class Home extends Vue {
  private images: any[] = [
    "https://img.yzcdn.cn/1.jpg",
    "https://img.yzcdn.cn/2.jpg"
  ];
}
</script>


<style lang="scss">
.van-swipe-item:nth-child(odd) {
  background-color: #66c6f2;
}
.van-swipe-item:nth-child(even) {
  background-color: #39a9ed;
}
</style>