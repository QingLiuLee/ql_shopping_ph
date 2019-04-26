<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">首页</router-link>
      <router-link to="/shop">店铺</router-link>
      <router-link to="/emm">Emm</router-link>
      <router-link to="/mine">我的</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "assets/css/app.scss";
</style>
