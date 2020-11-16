<template>
  <div id="home-page">
    <div class="tab-title">
      <span>
        今日十点上新
      </span>
    </div>
    <a class="link-item" href="javascript:void(0)" v-for="item in linkList" :key="item.postId">
      <div class="pic-wrapper">
        <img :src="item.activeImage.replace('localhost' , '58.87.121.209')" alt="">
      </div>
    </a>
    <router-link class="link-item good-item" :to="'/detail/'+item.postId" v-for="item in goodList" :key="item.id">
      <div class="pic-wrapper">
        <img :src="item.imageUrl" alt="">
      </div>
      <div class="item-detail">
        <div class="product-title">{{ item.goodsName }}</div>
        <div class="price">
          <span class="now-price">￥<span>{{ item.goodsNewPrice }}</span></span>
          <span class="del-price">￥{{ item.goodsOldPrice }}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
    props : ['linkList','goodList'],
    data() {
        return {

        }
    },
    // created() {
    //   console.log();
    // }
}
</script>

<style lang="scss" scoped>
  #home-page {
    position: relative;
    background: #f5f5f5;

    .tab-title{
      height: 0.44rem;
      line-height: 0.44rem;
      background: #fff;
      color: #fe4070;
      text-align: center;
    }

    .link-item {
      display: block;
      margin-bottom: 0.08rem;
      background: #fff;

      .pic-wrapper {
        height: 1.3rem;
        // background: skyblue;

        img {
          height: 100%;
        }
      }
    }

    .good-item {
      position: relative;
      
      .item-detail {
        position: absolute;
        top: 0;
        left: 0;
        margin-right: 0.12rem;
        margin-left: 1.6rem;
        height: 100%;
        min-width: 1.96rem;

        .product-title {
          margin-top: .12rem;
          color: #333;
          font-size: .14rem;
          line-height: .17rem;
          max-height: .51rem;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          margin-bottom: .05rem;
        }

        .price {
          position: absolute;
          bottom: .12rem;

          .now-price {
            color: #fe4070;
            font-size: .12rem;
            
            span {
              font-size: .2rem;
              margin: 0 .02rem;
            }
          }

          .del-price {
            color: #999;
            font-size: 12px;
            text-decoration: line-through;
          }
        }
      }
    }
  } 
</style>