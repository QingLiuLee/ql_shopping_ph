<template>
      <div>
         <van-address-edit
           show-postal
           show-delete
           show-set-default
           show-search-result
           :area-list="areaList"
           :address-info="editData"
           :search-result="searchResult"
           @save="onSave"
           @delete="onDelete"
           @change-detail="onChangeDetail"
         />

         <van-button
           plan type="default"
           style="width: calc(100% - 30px);margin:0 auto"
           @click="close"
         >关闭</van-button>
      </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import {province_list, city_list, county_list} from './area';
import {AddressEdit} from 'vant';
Vue.use(AddressEdit);
/**
 * @author hui
 * @date 2019/5/21
 * @Description: 收货地址 - 编辑
*/
@Component
export default class AddressEditData extends Vue {
    // props
    @Prop() editData!: object;

    // data
    areaList: object = {
        province_list,
        city_list,
        county_list
    }
    searchResult: Array<any> = [];

    // methods
    onSave() {
        // 保存
        this.$toast('save');
    }
    onDelete() {
        // 删除
        this.$toast('delete');
    }
    onChangeDetail(val:string) {
        // 修改
        if (val) {
            this.searchResult = [{
                name: '黄龙万科中心',
                address: '杭州市西湖区'
            }];
        } else {
            this.searchResult = [];
        }
    }

    close(){
        this.$emit('closeEdit');
    }
}
</script>

<style scoped lang="scss"></style>
