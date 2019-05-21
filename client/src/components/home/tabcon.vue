<template>
  <div class="h-tab-all">
    <!--<h2 @click="sendChildMsg('这是子组件的值')">{{msg}}</h2>-->
    <van-tabs v-model="active" sticky animated swipeable @click="checkTab">
      <van-tab :title="item.name" v-for="(item, index) in tabList" :key="index">
        <div class="h-tab-item-all">
          <div class="mall-card h-tab-item" v-for="(itemF, indexF) in data" :key="indexF">
            <img :src="itemF.img" alt="">
            <p class="h-tab-item-name">{{itemF.name}}</p>
            <p>
              <span class="h-tab-item-price">￥{{itemF.price}}</span>
              <span class="h-tab-item-payment">{{itemF.payment}}人付款</span>
              <span class="h-tab-item-more"><van-icon name="ellipsis" /></span>
            </p>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);

@Component({})
export default class TabCon extends Vue {
    /*prop*/
    @Prop() msg!: string;
    @Prop() tabList!: any;

    /*data*/
    active:number = 0;
    data:any = [
        {
            img: require('../../assets/images/sp_01.jpg'),
            name: '可爱女童动漫卡通T恤',
            price: '88.88',
            payment:'1200'
        },
        {
            img: require('../../assets/images/sp_02.jpg'),
            name: '可爱女童动漫卡通T恤',
            price: '88.88',
            payment:'1200'
        },
        {
            img: require('../../assets/images/sp_03.jpg'),
            name: '可爱女童动漫卡通T恤',
            price: '88.88',
            payment:'1200'
        },
        {
            img: require('../../assets/images/sp_04.jpg'),
            name: '可爱女童动漫卡通T恤',
            price: '88.88',
            payment:'1200'
        },
        {
            img: require('../../assets/images/sp_05.jpg'),
            name: '可爱女童动漫卡通T恤可爱女童动漫卡通T恤',
            price: '88.88',
            payment:'1200'
        },
        {
            img: require('../../assets/images/sp_06.jpg'),
            name: '可爱女童动漫卡通T恤可爱女童动漫卡通T恤可爱女童动漫卡通T恤',
            price: '88.88',
            payment:'1200'
        },
    ];

    /*methods*/
    @Emit('sendMsg')
    sendMsgs(message:string){
        console.log(message);
    }

    //通过触发此方法，传值给父组件
    sendChildMsg(message:string){
        this.sendMsgs(message);
    }

    checkTab(index:number, title:string) {
        this.$toast(title);
    }
}
</script>

<style scoped lang="scss"></style>
