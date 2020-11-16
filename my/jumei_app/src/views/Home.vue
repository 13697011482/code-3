<template>
  <div id="home">
    <header>
      <a id="page_top">
        <span><van-icon name="search" size="0.16rem" style="vertical-align:text-top"/>搜索商品  分类  功效</span>
      </a>
      <van-icon class="search" name="points" size="0.26rem" />
    </header>
    <van-tabs v-model="activeName" sticky :ellipsis="false" line-width="50px" @change="routerTo">
      <van-tab title="首页" name="index">
        <div class="content">
          <home-page :linkList="linkList" :goodList="goodList"></home-page>
        </div>
      </van-tab>
      <van-tab title="极速免税店" name="fast">
        <div class="content">
          <fast-page></fast-page>
        </div>
      </van-tab>
      <van-tab title="母婴" name="infant">
        <div class="content">
          <infant-page></infant-page>
        </div>
      </van-tab>
      <van-tab title="轻奢" name="lux">
        <div class="content">
          <lux-page></lux-page>
        </div>
      </van-tab>
      <van-tab title="名品特卖" name="famous">
        <div class="content">
          <famous-page></famous-page>
        </div>
      </van-tab>
    </van-tabs>
    <footer>
      <div class="footer-img">
        <a href="">
          <img src="//s1.jmstatic.com/templates/touch/css/v3/image/footer_bg.jpg" alt="">
        </a>
      </div>
      <div class="tab-change">
        <van-button round type="defalt" class="active">触屏版</van-button>
        <van-button round type="defalt">电脑版</van-button>
      </div>
      <div class="copyright">
        <p>©2017 聚美优品 Jumei.com</p>
        <p>京公网安备 11010102001226 | 京ICP证111033号</p>
      </div>
    </footer>
  </div>
</template>

<script>
import homePage from '../components/Home/HomePage'
import fastPage from '../components/Home/FastPage'
import luxPage from '../components/Home/LuxPage'
import famousPage from '../components/Home/FamousPage'
import infantPage from '../components/Home/InfantPage'

export default {
  components: {
    homePage,
    fastPage,
    luxPage,
    famousPage,
    infantPage
  },
  data() {
    return {
      value: '',
      activeName: this.$route.params.active,
      linkList: [],
      goodList: [],
    }
  },
  created() {
    this.$axios.get('/api/post/list',{ params : {goodsType: '首页' } }).then(res => {
      this.goodList = res.data.info
      this.goodList.forEach((item,index) => {
        if(this.goodList[index].imageUrl) {
          this.goodList[index].imageUrl = item.imageUrl.replace('localhost' , '58.87.121.209')
        }
      })
    }).catch(err => {
      console.log(err);
    });

    this.$axios.get('/api/active/list',{ params : {
      activeType : "首页"
    } }).then(res => {
      this.linkList = res.data.info;
    }).catch(err => {
      console.log(err);
    });
    this.$parent.active = this.$route.path.split('/')[1];
  },
  methods: {
    routerTo(name,title) {
      this.$router.push('/home/'+name);
    }
  }
}
</script>

<style lang="scss">


#home{
  a {
    text-decoration: none;
    color: #000;
  }

  header #page_top {
    color: #999;
    margin: .08rem .52rem .06rem .20rem;
    background: #F5F5F5;
    border-radius: .2rem;
    height: 0.3rem;
    line-height: 0.3rem;
    position: relative;
    display: block;
    font-size: .14rem;
    text-align: center;
  } 

  header .search {
    position: absolute;
    right: 0.1rem;
    top: 0.1rem;
  }

  .van-sticky {
    border-bottom: 1px solid #eee;
  }

  .content {
    >div:first-child::-webkit-scrollbar {
      display: none;
    }
  }

  footer {
    padding: 0 .01rem .1rem;

    img {
      width: 100%;
    }

    .tab-change {
      width: 3rem;
      margin: .1rem auto 0;
      text-align: center;

      button{
        border: 1px solid #e3e3e3;
      }

      .active {
        color:#fe4070;
      }

      button:nth-child(1) {
        margin-right: .5rem;
      }
    }

    .copyright {
      position: relative;
      margin: .2rem auto .1rem;
      color: #999;
      font-size: .12rem;
      width: 100%;
      text-align: center;
    }
  }
} 
</style>
