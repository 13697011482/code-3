<template>
  <div id="group">
    <van-tabs v-model="activeName" sticky @change="toRouter">
      <van-tab :name="item.id" v-for="item in tabList" :key="item.id" :title="item.title">
        <common :type="item.id" :list="list" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import common from '../components/Group/Commen'
export default {
  components : {
    common
  },
  data() {
    return {
      tabList : [
        { id : 'rec', title : '推荐' },
        { id : 'infant', title : '母婴健康' },
        { id : 'makeup', title : '美妆' },
        { id : 'women', title : '女装' },
        { id : 'underwear', title : '内衣' },
        { id : 'next', title : '下期预告' },
      ],
      list : [],
      activeName: this.$route.params.active,
    }
  },
  created() {
    var type = this.tabList.filter(item => {
      return item.id == this.$route.params.active
    })[0].title;
    this.$axios.get('/api/post/list',{ params : { goodsType: type } }).then(res => {
      this.list = res.data.info
    }).catch(err => {
      console.log(err);
    });
    this.$parent.active = this.$route.path.split('/')[1];
  },
  methods: {
    toRouter(name,title) {
      this.$router.push('/group/' + name)
      this.$axios.get('/api/post/list',{ params : {goodsType: title } }).then(res => {
        this.list = res.data.info
      }).catch(err => {
        console.log(err);
      });
    }
  }
}
</script>

<style >
  a {
    text-decoration: none;
    color: #000;
  }
</style>