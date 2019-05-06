<template>
  <div class="mall-shop">
    <van-nav-bar title="购物车" left-arrow class="mall-head">
      <van-icon name="edit" slot="right" />
    </van-nav-bar>
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({
        components: {
        },
    })
    export default class Cart extends Vue {}
</script>
