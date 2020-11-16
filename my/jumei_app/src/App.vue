<template>
  <div id="app">
    <router-view/>
    
    <van-tabbar v-model="active" active-color="rgb(254, 64, 112)" v-if="$route.path !=='/login' && $route.path !=='/register'">
      <van-tabbar-item to="/home" name="home" icon="home-o">
        首页
      </van-tabbar-item>
      <van-tabbar-item to="/group" name="group" icon="friends-o">
        团购
      </van-tabbar-item>
      <van-tabbar-item to="/shopcart" name="shopcart" icon="shopping-cart-o">
        购物车
      </van-tabbar-item>
      <van-tabbar-item to="/mine" name="mine" icon="manager-o">
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active : 'home'
    }
  },
  created() {
    this.$parent.active = this.$route.path.split('/')[1];
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html {
  font-size: 26.666667vw;
}

body {
  font-size: 0.12rem;
}

.clear:after, .clearfloat:after {
  display: block;
  clear: both;
  content: "";
  visibility: hidden;
  height: 0;
}

#app >div:first-child {
  position: absolute;
  top: 0;
  bottom: 50px;
  left: 0;
  right: 0;
  overflow: auto;
}

#app >div:first-child::-webkit-scrollbar {
  display: none;
}

#app .single-page {
  bottom: 0!important;
  z-index: 9;
  background: #f5f5f5;
}
</style>
