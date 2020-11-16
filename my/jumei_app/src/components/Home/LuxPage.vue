<template>
  <div id="entry-lux">
      <h2 class="text">
        <span class="icon">
          <img src="//f0.jmstatic.com/btstatic/h5/common/icon_title.png" alt="">
        </span>
        <span>精选活动</span>
      </h2>
      <ul class="list">
          <li v-for="item in list" :key="item.postId">
              <a href="javascript:void(0)" class="clear">
                  <div class="list-img">
                      <img :src="item.activeImage && item.activeImage.replace('localhost' , '58.87.121.209')" alt="">
                      <div class="discount">
                          <p>{{ item.disCount }}</p>
                      </div>
                  </div>
                  <div class="list-info">
                      <p class="title">{{ item.activeName }}</p>
                      <p class="time">剩余<span>01天</span><span>09时</span></p>
                  </div>
                  <div class="list-logo">
                      <img :src="item.smIcon" alt="">
                  </div>
              </a>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list : 5,
    }
  },
  created() {
    this.$axios.get('/api/active/list',{ params : {
      activeType : '轻奢'
    } }).then(res => {
      this.list = res.data.info;
    }).catch(err => {
      console.log(err);
    })
  }
}
</script>

<style lang="scss">
  #entry-lux {
    .text {
      text-align: center;
      font-weight: 400;

      span {
        color: #333;
        font-size: 14px;
        vertical-align: middle;
      }

      .icon {
        display: inline-block;
        width: .155rem;
        height: .4rem;
        margin-right: .07rem;
        line-height: .4rem;
        position: relative;
        top: .035rem;

        img {
          width: 100%;
        }
      }
    }

    .list {
      >li {
        >a {
          .list-img {
            position: relative;
            overflow: hidden;
            height: 1.84rem;

            img {
              width: 100%;
            }

            .discount {
              position: absolute;
              left: 0;
              bottom: .12rem;
              display: block;
              background: #000;
              height: .14rem;
              line-height: .14rem;

              p {
                color: #fff;
                font-size: .12rem;
                padding: 0 .025rem;
              }
            }
          }

          .list-info {
            float: left;
            padding: .15rem;
            max-width: 2.4rem;

            .title {
              font-size: .14rem;
              color: #333;
              line-height: .14rem;
            }

            .time {
              margin-top: .05rem;
              color: #999;
              font-size: .12rem;
              line-height: .12rem;
              height: .12rem;
            }
          }

          .list-logo {
            float: right;
            padding-right: .18rem;
            padding-top: .12rem;
            width: .73rem;
            height: .36rem;
            overflow: hidden;

            img {
              width: 100%;
            }
          }
        }
      }
    }
  }
</style>