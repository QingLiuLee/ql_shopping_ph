<template>
  <div class="d-comment">
    <van-tabs v-model="active" sticky animated swipeable @click="checkTab">
      <van-tab :title="item.name" v-for="(item, index) in tabList" :key="index">
        <div class="d-comment-con">
          <!--问答-->
          <div class="d-c-con-wd">
            <p style="margin-bottom: 10px">
              <span>问大家（37）</span>
              <span class="fr"><i class="icon-right"></i></span>
            </p>
            <div>
              <p>
                <span class="w">问</span>
                <span>请问质量怎么样？</span>
                <span class="fr">3个回答</span>
              </p>
              <p>
                <span class="w">问</span>
                <span>请问质量怎么样？</span>
                <span class="fr">3个回答</span>
              </p>
              <p>
                <span class="w">问</span>
                <span>请问质量怎么样？</span>
                <span class="fr">3个回答</span>
              </p>
            </div>
          </div>

          <!--评论-->
          <div class="d-c-con-pl">
            <p style="margin-bottom: 15px">
              <span>评论（123）</span>
              <span class="fr"><i class="icon-down"></i></span>
            </p>

            <ul>
              <li>
                <div>
                  <img :src="admins" alt="">
                  <span>t***5</span>
                  <span class="fr"><i class="icon-d-zan"></i></span>
                </div>
                <p>非常喜欢，很合身，男朋友夸我眼光好,haahh</p>
              </li>

              <li>
                <div>
                  <img :src="admins" alt="">
                  <span>t***5</span>
                  <span class="fr"><i class="icon-d-zan"></i></span>
                </div>
                <p>非常喜欢，很合身，男朋友夸我眼光好,haahh</p>
              </li>

              <li>
                <div>
                  <img :src="admins" alt="">
                  <span>t***5</span>
                  <span class="fr"><i class="icon-d-zan"></i></span>
                </div>
                <p>非常喜欢，很合身，男朋友夸我眼光好,haahh</p>
              </li>
            </ul>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import admin from '../../assets/images/admin.jpg'
import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);

@Component({})
export default class DetailComment extends Vue {
    /*prop*/

    /*data*/
    tabList:any = [
        { name: '评论'},
        { name: '详情'},
        { name: '推荐'}
    ];
    admins:string = admin;
    active:number = 0;

    /*methods*/
    checkTab(index:number, title:string) {
        this.$toast(title);
    }
}
</script>

<style scoped lang="scss"></style>
