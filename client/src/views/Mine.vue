<template>
  <div class="mall-mine">
    <!--head-->
    <van-nav-bar title="我的" left-arrow class="mall-head" style="z-index: 100 !important;">
      <van-icon name="setting-o" slot="right" />
    </van-nav-bar>

    <!--个人详情-->
    <div class="mi-detail">
      <div class="mi-detail-l">
        <img :src="adminUrl" alt="">
        <van-tag color="#FFECEC" text-color="#FF6161">lv.19</van-tag>
      </div>
      <div class="mi-detail-c">
        <h3>慧慧</h3>
        <p>要长高高！！！</p>
      </div>

      <van-tag color="#fff" text-color="#FF6161" class="mi-detail-qd">
        <van-icon name="edit"/>签到
      </van-tag>
    </div>

    <!--订单-->
    <Order />

    <div class="mi-opera">
      <!--收藏，关注店铺-->
      <div class="mall-card mi-opera-collect">
        <div>
          <p><van-icon name="goods-collect"/></p>
          <p>我的收藏</p>
        </div>
        <div>
          <p><van-icon name="shop-collect"/></p>
          <p>关注店铺</p>
        </div>
      </div>

      <!--积分-->
      <div class="mall-card mi-opera-integral" @click="goIntegral">
        <p>已有积分：190</p>
        <p>兑换积分</p>
      </div>
    </div>

    <!--列表-->
    <div class="mall-card mi-list">
      <div class="mi-list-item" v-for="item in data">
        <div class="mi-list-item-l">
          <i :class="item.icon"/>
          <span>{{item.name}}</span>
        </div>
        <div class="mi-list-item-r" @click="item.click">
          <span class="mi-list-item-r-shief">
            {{item.shief}}
          </span>
          <van-icon name="arrow" v-if="item.isArrow"/>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Order from '@/components/mine/order.vue';
import AddressEditData from "@/components/mine/address/address_edit.vue";
import { CouponCell, CouponList } from 'vant';
Vue.use(CouponCell).use(CouponList);

/**
 * @author hui
 * @date 2019/5/21
 * @Description: 我的
*/
@Component({
  components: {
      Order,
      AddressEditData
  },
})
export default class Mine extends Vue {
    private adminUrl = require('../assets/images/admin.jpg');

    data: object = [
        {
            icon:'icon-mi-dz',
            name:'收货地址',
            shief:'新增',
            isArrow:true,
            click: this.goAddress
        },
        {
            icon:'icon-mi-zl4',
            name:'完善资料',
            shief:'',
            isArrow:true,
            click: this.goAddress
        },
        {
            icon:'icon-mi-kj2',
            name:'我的卡卷',
            shief:'',
            isArrow:true,
            click: this.goAddress
        },
        {
            icon:'icon-mi-tc',
            name:'退出登录',
            shief:'',
            isArrow:false,
            click: this.goAddress
        }
    ];

    goIntegral(){
        // 跳转积分
        this.$router.push('/integral')
    }

    goAddress(){
        // 跳转收货地址
        this.$router.push('/address')
    }
}
</script>
