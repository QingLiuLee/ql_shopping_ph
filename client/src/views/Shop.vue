<template>
  <div class="mall-shop">
    <van-nav-bar title="商品分类" left-arrow class="mall-head">
      <van-icon name="apps-o" slot="right" />
    </van-nav-bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Shop extends Vue {}
</script>
