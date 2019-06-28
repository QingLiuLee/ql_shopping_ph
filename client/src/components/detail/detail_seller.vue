<template>
  <div class="d-seller">
    <div class="d-seller-t">
      <img :src="require('../../assets/images/banner_01.jpg')" alt="">
      <div>
        <p>某某某商家</p>
        <p></p>
      </div>
      <van-button plan type="default">进店</van-button>
    </div>
    <p>
      <span>宝贝描述 <em>4.9 高</em></span>
      <span>卖家服务 <em>4.9 高</em></span>
      <span>物流服务 <em>4.9 高</em></span>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class DetailSeller extends Vue {
    /*prop*/

    /*data*/

}
</script>

<style scoped lang="scss"></style>
