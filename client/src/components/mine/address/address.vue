<template>
  <div class="mall-all mall-address">
    <!--head-->
    <van-nav-bar
      title="收货地址"
      left-arrow
      class="mall-head"
      @click-left="goBack"
    />

    <div class="mall-address-con">
      <van-address-list
        v-show="!isEdit"
        v-model="chosenAddressId"
        :list="list"
        :disabled-list="disabledList"
        disabled-text="以下地址超出配送范围"
        @add="onAdd"
        @edit="onEdit"
      />

      <AddressEditData
        v-show="isEdit"
        :editData="editData"
        @closeEdit="closeEdit"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AddressEditData from "./address_edit.vue";
import { AddressList } from 'vant';
Vue.use(AddressList);

/**
 * @author hui
 * @date 2019/5/21
 * @Description: 收货地址
*/
@Component({
    components: {AddressEditData}
})
export default class Address extends Vue {
    // data
    // 选中的地址数据
    chosenAddressId:string = '1';
    // 地址数据
    list: Array<any> = [
        {
            id: '1',
            name: '张三',
            tel: '13000000000',
            address: '浙江省/杭州市/西湖区/文三路 138 号东方通信大厦 7 楼 501 室',
            areaCode: '330106',
        },
        {
            id: '2',
            name: '李四',
            tel: '1310000000',
            address: '浙江省/杭州市/拱墅区/莫干山路 50 号',
            areaCode: '330105',
        }
    ];
    // 超出配送范围地址
    disabledList: Array<any> = [
        {
            id: '3',
            name: '王五',
            tel: '1320000000',
            address: '浙江省/杭州市/滨江区/江南大道 15 号',
            areaCode: '330108',
        }
    ];
    // 是否显示编辑
    isEdit:boolean = false;
    // 编辑的数据
    editData:object = {};

    // methods
    goBack(){
        // 返回我的
        this.$router.push('/mine');
    }
    closeEdit(){
        // 关闭编辑
        this.isEdit = false;
    }
    onAdd() {
        this.$toast('Add');
        this.isEdit = true;
        this.editData = {};
    }
    onEdit(item:any, index:number) {
        this.$toast('Edit:' + index);
        this.isEdit = true;
        this.editData = {
          id: item.id,
          name: item.name,
          tel: item.tel,
          province: item.address.split('/')[0],
          city: item.address.split('/')[1],
          county: item.address.split('/')[2],
          addressDetail: item.address.split('/')[3],
          areaCode: item.areaCode,
          postalCode: '310012',
          isDefault: true
        };
    }


}
</script>
