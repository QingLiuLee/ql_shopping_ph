<template>
    <!--订单-->
    <div class="mall-card mi-order">
      <div class="mi-order-t">
        <div>
          <p><i class="icon-mi-o-dfk"></i></p>
          <p><span>待付款</span></p>
        </div>
        <div>
          <p><i class="icon-mi-o-dfh"></i></p>
          <p><span>待发货</span></p>
        </div>
        <div>
          <p><i class="icon-mi-o-dsh"></i></p>
          <p><span>待收货</span></p>
        </div>
        <div>
          <p><i class="icon-mi-o-pj"></i></p>
          <p><span>评价</span></p>
        </div>
        <div>
          <p><i class="icon-mi-o-tui"></i></p>
          <p><span>退款</span></p>
        </div>
      </div>

      <div class="mi-order-msg">
        <p>
          <span>最新物流</span>
          <span style="float: right">04/18</span>
        </p>

        <img :src="adminUrl" alt="">
        <div class="mi-order-msg-img">
          <p style="color: #FF6161">待签收</p>
          <p>快递配送中，请注意查收</p>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
// declare function require(string: any): string;
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {},
})
export default class Order extends Vue {
    private adminUrl = require('../../assets/images/admin.jpg');
}
</script>
