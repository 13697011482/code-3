<template>
  <div id="mine">
    <header>
      <div class="left">
        <a href="javascript:history.go(-1);">&nbsp;</a>
      </div>
      <div class="center">我的聚美</div>
      <div class="right">
        <router-link to="/home"></router-link>
      </div>
    </header>
    <div class="content">
      <div class="user-unlogin" v-if="!username">
        <div class="head-img"></div>
        <div class="operation">
          <router-link to="/register">注册</router-link>
          <span>|</span>
          <router-link to="/login">登录</router-link>
        </div>
      </div>

      <div class="logged" v-else>
        <img src="http://p0.jmstatic.com/jmstore/user/icon/chook_200_200.png?1603757301" alt="">
        <div class="bg">
          <div class="user-info">
            <span class="name">{{ username }}</span>
            <span class="grade">普通会员</span>
          </div>
        </div>

        <div class="icons">
          <a href="javascript:void(0)">
            <div class="icon"></div>
            <span>心愿单</span>
          </a>
          <a href="javascript:void(0)">
            <div class="icon"></div>
            <span>开售提醒</span>
          </a>
          <a href="javascript:void(0)">
            <div class="icon"></div>
            <span>收藏</span>
          </a>
        </div>
      </div>

      <div class="order">
        <van-cell value="查看我的全部订单" is-link @click="toOrder">
          <template #title>
            <van-icon class="icon" name="balance-list-o" size="0.24rem" />
            <span class="custom-title">我的订单</span>
          </template>
        </van-cell>
        <van-grid>
          <van-grid-item icon="pending-payment" text="待付款" />
          <van-grid-item icon="send-gift-o" text="待收货" />
          <van-grid-item icon="comment-o" text="待评价" />
          <van-grid-item icon="after-sale" text="退款/退货" />
        </van-grid>
      </div>

      <div class="property">
        <van-cell>
          <template #title>
            <van-icon class="icon" name="balance-o" size="0.24rem"/>
            <span class="custom-title">我的资产</span>
          </template>
        </van-cell>
        <van-grid>
          <van-grid-item text="现金券" />
          <van-grid-item text="红包" />
          <van-grid-item text="聚美余额" />
          <van-grid-item text="礼品卡" />
        </van-grid>
      </div>

      <div class="varied">
        <van-cell is-link>
          <template #title>
            <van-icon class="icon" name="service-o" size=".24rem"/>
            <span class="custom-title">售后服务</span>
          </template>
        </van-cell>
        <van-cell is-link>
          <template #title>
            <van-icon class="icon" name="envelop-o" size=".24rem"/>
            <span class="custom-title">意见反馈</span>
          </template>
        </van-cell>
        <van-cell is-link>
          <template #title>
            <van-icon class="icon" name="logistics" size=".24rem"/>
            <span class="custom-title">收货地址</span>
          </template>
        </van-cell>
        <van-cell is-link @click="logout">
          <template #title>
            <van-icon class="icon share" name="share-o" size=".24rem"/>
            <span class="custom-title">退出登录</span>
          </template>
        </van-cell>
        <van-cell is-link>
          <template #title>
            <van-icon class="icon" name="phone-o" size=".24rem"/>
            <span class="custom-title">400-123-8888</span>
          </template>
        </van-cell>
      </div>

      <div id="hint">
        客服热线400-123-8888 (9:00-18:00) <br>
        拨打前请记录您的UID
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username : '',
    }
  },
  created() {
    this.username = localStorage.getItem('username');
    this.$parent.active = this.$route.path.split('/')[1];
  },
  methods: {
    toOrder() {
      console.log("to");
    },
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      this.username = '';
      this.$store.commit('REMOVE_USERNAME');
      this.$router.push('/login');
    }
  }
}
</script>

<style lang="scss">
  #mine {
    background: #f5f5f5;

    header {
      width: 100%;
      background: transparent;
      text-align: center;
      position: relative;
      height: .45rem;
      line-height: .45rem;
      z-index: 9;

      .left {
        position: absolute;
        top: 0;
        left: 0;
        width: 1rem;
        height: .45rem;

        a {
          display: block;
          height: 0.45rem;
          background: url('https://f5.jmstatic.com/static_account/dist/v1.0.179196/images/mobile_usercenter/back_white_bg.png') left center no-repeat;
          background-size: 0.28rem 0.28rem;
          padding-left: 0.18rem;
        }
      }

      .center {
        font-size: .16rem;
        color: #fff;
      }

      .right {
        position: absolute;
        top: 0;
        right: 0;
        width: 0.4rem;

        a {
          display: block;
          height: 0.45rem;
          background: url('https://f3.jmstatic.com/static_account/dist/v1.0.179196/images/mobile_usercenter/home_white_bg.png') left center no-repeat;
          background-size: 0.28rem 0.28rem;
        }
      }
    }

    .content {
      position: absolute;
      top: 0;
      width: 100%;

      >div:nth-child(n+2) {
        background: #fff;
        margin-top: .14rem;
      }

      .icon {
        vertical-align: middle;
        margin-right: 0.1rem;
      }

      .user-unlogin {
        height: 1.25rem;
        padding-top: .6rem;
        background-image: linear-gradient(-204deg,#fd465f 0,#fc5e9f 100%);

        .head-img {
          width: 0.7rem;
          height: 0.7rem;
          background: url('https://f5.jmstatic.com/static_account/dist/v1.0.179196/images/mobile_usercenter/myjumei/noportrait.png');
          background-size: .7rem;
          margin: auto;
        }

        .operation {
          padding-top: .1rem;
          text-align: center;

          a {
            line-height: .3rem;
            color: #fff;
            font-weight: 700;
            font-size: .21rem;
            text-decoration: none;
            display: inline-block;
            width: 1.11rem;
          }

          span {
            display: inline-block;
            height: 0.175rem;
            color: #fff;
            font-size: .2rem;
          }
        }
      }

      .logged {
        position: relative;
        width: 100%;
        height: 1.8rem;
        background: #fff;

        img {
          width: 0.7529rem;
          height: 0.7529rem;
          display: block;
          border-radius: 50%;
          position: absolute;
          left: 0.3765rem;
          top: 0.8471rem;
          z-index: 10;
        }

        .bg {
          position: absolute;
          width: 100%;
          height: 1.2471rem;
          background-image: linear-gradient(-204deg,#fd465f 0,#fc5e9f 100%);

          .user-info {
            font-size: 0.1412rem;
            color: #fff;
            position: absolute;
            left: 1.3176rem;
            bottom: 0.0471rem;

            .name {
              display: block;
              font-family: sans-serif;
              line-height: 0.2353rem;
              font-size: 0.1529rem;
            }

            .grade {
              background: rgba(255,255,255,.2);
              border-radius: 1.1765rem;
              letter-spacing: 0.0076rem;
              line-height: 0.2118rem;
              padding: 0.0353rem 0.0588rem;
            }
          }
        }

        .icons {
          width: 2.7059rem;
          height: 0.5882rem;
          position: absolute;
          bottom: 0;
          right: 0;
          font-size: 0.1412rem;
          text-align: center;

          a {
            display: block;
            width: 0.8941rem;
            height: 0.5882rem;
            float: left;
            color: #666;

            .icon {
              width: 0.2118rem;
              height: 0.2118rem;
              background-size: 0.2rem 0.2rem;
              margin: 0.0824rem auto;
              background-repeat: no-repeat;
              background-image: url('https://f2.jmstatic.com/static_account/dist/v1.0.179196/images/mobile_usercenter/myjumei/wishlist.png');
            }

          }

          a:nth-child(2) {

            .icon {
              background-image: url('https://f2.jmstatic.com/static_account/dist/v1.0.179196/images/mobile_usercenter/myjumei/onsale.png');
            }
          }

          a:nth-child(3) {

            .icon {
              background-image: url('https://f2.jmstatic.com/static_account/dist/v1.0.179196/images/mobile_usercenter/myjumei/fav.png');
            }
          }
        }
      }

      .share {
        transform: rotate(180deg);
      }

      #hint {
        background: #f5f5f5;
        margin: 0.18rem;
        font-size: .14rem;
        line-height: .16rem;
        color: #999;
      }
    }
  }
</style>