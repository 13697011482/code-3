<template>
  <div id="app">
    <van-nav-bar title="拉勾网"> </van-nav-bar>

    <router-view />

    <van-tabbar route>
      <van-tabbar-item replace to="/list" icon="home-o">
        职位
      </van-tabbar-item>
      <van-tabbar-item replace to="/search" icon="search">
        搜索
      </van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="friends-o">
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "list",
    };
  },
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app .van-nav-bar {
  background-color: #00b38a;
}
#app .van-nav-bar__title {
  color: #fff;
  font-size: 18px;
}
.van-tabbar .van-tabbar-item {
  font-size: 16px;
}
.van-tabbar .van-tabbar-item--active {
  color: #00b38a;
  background-color: #e7f3fa;
}
</style>
