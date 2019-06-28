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
          1111111
      </div>

      <div class="mall-card integral-item">
        1111111
      </div>

      <div class="mall-card integral-item">
        1111111
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
        // 返回我的
        // this.$router.push('/mine');
        this.$router.go(-1)
    }
}
</script>

<style scoped lang="scss"></style>
