<template>
  <div class="mall-all mall-detail">
    <!--head-->
    <van-nav-bar title="商品详情" left-arrow class="mall-head" @click-left="goBack">
      <van-icon name="chat-o" slot="right" />
    </van-nav-bar>

    <!--轮播图-->
    <div class="d-carousel">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in images" :key="index">
          <img :src="item" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>

    <!--简介-->
    <div class="d-intro">
      <h3>
        <span>￥356</span>
        <van-tag color="#FFECEC" text-color="#FF6161">限时3小时</van-tag>
      </h3>
      <p>日系潮牌短袖t恤男夏季新款学生简约印花纯棉宽松体恤白色打底衫</p>
      <div>
        <span><i class="icon-d-zan"></i>122</span>
        <span>2309人浏览过</span>
      </div>
    </div>

    <!--发货及优惠-->
    <div class="d-discount">
      <div class="d-discount-kd">
        <span>
          <span class="block">发货</span>
          <span><i class="icon-mi-dz"></i>广东广州</span>
          <span style="display: inline-block;margin: 0 7px">|</span>
          <span>快递：0.00</span>
        </span>
        <span class="fr">月销345</span>
      </div>
      <div class="d-discount-yh">
        <span class="block">优惠</span>
        <div>
          <p>
            <van-tag style="border-radius: 10px" color="#FFECEC" text-color="#FF6161">店铺优惠券</van-tag>
            <van-tag class="van-tab-d">限时3小时</van-tag>
            <van-tag class="van-tab-d">限时3小时</van-tag>
          </p>
          <p>
            <van-tag style="border-radius: 10px" color="#FFECEC" text-color="#FF6161">积分</van-tag>
            <span>购买可得50积分</span>
          </p>
        </div>
        <span class="fr"><i class="icon-right"></i></span>
      </div>
    </div>

    <!--服务，产品，参数-->
    <div class="d-discount">
      <div class="d-discount-fw">
        <span>
          <span class="block">服务</span>
          <span>订单险. 7天无理由 . 运费险</span>
        </span>
        <span class="fr"><i class="icon-right"></i></span>
      </div>

      <!--选择产品-->
      <DetailChoose
         :images="images"
      />

      <div class="d-discount-cs">
        <span>
          <span class="block">参数</span>
          <span>是否纯棉，颜色参数</span>
        </span>
        <span class="fr"><i class="icon-right"></i></span>
      </div>
    </div>

    <!--商家-->
    <DetailSeller />

    <!--评论 | 详情-->
    <DetailComment />
  </div>
</template>

<script lang="ts">
// declare function require(string: any): string;
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import DetailChoose from '@/components/detail/detail_choose.vue';
import DetailSeller from '@/components/detail/detail_seller.vue';
import DetailComment from '@/components/detail/detail_comment.vue';
import {Swipe, SwipeItem} from 'vant';
Vue.use(Swipe).use(SwipeItem);

@Component({
    components: {
        DetailChoose,
        DetailSeller,
        DetailComment
    }
})
export default class Detail extends Vue {
    /*prop*/

    /*data*/
    private images: any[] = [
        require('../../assets/images/banner_01.jpg'),
        require('../../assets/images/banner_02.png'),
        require('../../assets/images/banner_03.jpg')
    ];

    private goBack() {
        this.$router.go(-1);
    }
}
</script>

<style scoped lang="scss"></style>
