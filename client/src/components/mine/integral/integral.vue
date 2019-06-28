<template>
  <div class="mall-all mall-integral">
    <!--head-->
    <van-nav-bar
            title="积分兑换"
            left-arrow
            class="mall-head"
            @click-left="goBack"
    />

    <div class="mall-integral-con">
      <div class="mall-card integral-item">
        <div>
          <p style="font-size: 18px">￥10</p>
          <p style="font-size: 12px">满30元可用</p>
          <p style="font-size: 14px;padding-top: 5px;margin-bottom: 0;border-top:1px dashed #fff">10元优惠卷</p>
        </div>
        <p><span style="color: #FF6161;margin-right: 3px;">100</span>积分</p>
        <van-tag color="#FFD7D7" text-color="#FF6161">兑换</van-tag>
      </div>

      <div class="mall-card integral-item">
        <div>
          <p style="font-size: 18px">￥10</p>
          <p style="font-size: 12px">满30元可用</p>
          <p style="font-size: 14px;padding-top: 5px;margin-bottom: 0;border-top:1px dashed #fff">10元优惠卷</p>
        </div>
        <p><span style="color: #FF6161;margin-right: 3px;">100</span>积分</p>
        <van-tag color="#FFD7D7" text-color="#FF6161">兑换</van-tag>
      </div>

      <div class="mall-card integral-item">
        <div>
          <p style="font-size: 18px">￥10</p>
          <p style="font-size: 12px">满30元可用</p>
          <p style="font-size: 14px;padding-top: 5px;margin-bottom: 0;border-top:1px dashed #fff">10元优惠卷</p>
        </div>
        <p><span style="color: #FF6161;margin-right: 3px;">100</span>积分</p>
        <van-tag color="#FFD7D7" text-color="#FF6161">兑换</van-tag>
      </div>

      <div class="mall-card integral-item">
        <div>
          <p style="font-size: 18px">￥10</p>
          <p style="font-size: 12px">满30元可用</p>
          <p style="font-size: 14px;padding-top: 5px;margin-bottom: 0;border-top:1px dashed #fff">10元优惠卷</p>
        </div>
        <p><span style="color: #FF6161;margin-right: 3px;">100</span>积分</p>
        <van-tag color="#FFD7D7" text-color="#FF6161">兑换</van-tag>
      </div>

      <div class="mall-card integral-item">
        <div>
          <p style="font-size: 18px">￥10</p>
          <p style="font-size: 12px">满30元可用</p>
          <p style="font-size: 14px;padding-top: 5px;margin-bottom: 0;border-top:1px dashed #fff">10元优惠卷</p>
        </div>
        <p><span style="color: #FF6161;margin-right: 3px;">100</span>积分</p>
        <van-tag color="#FFD7D7" text-color="#FF6161">兑换</van-tag>
      </div>

      <div class="mall-card integral-item">
        <div>
          <p style="font-size: 18px">￥10</p>
          <p style="font-size: 12px">满30元可用</p>
          <p style="font-size: 14px;padding-top: 5px;margin-bottom: 0;border-top:1px dashed #fff">10元优惠卷</p>
        </div>
        <p><span style="color: #FF6161;margin-right: 3px;">100</span>积分</p>
        <van-tag color="#FFD7D7" text-color="#FF6161">兑换</van-tag>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

/**
 * @author hui
 * @date 2019/5/21
 * @Description: 积分
*/
@Component({})
export default class Integral extends Vue {

    private data:object = [
        {

        }
    ]

    goBack(){
        // 返回
        // this.$router.push('/mine');
        this.$router.go(-1)
    }
}
</script>

<style scoped lang="scss"></style>
