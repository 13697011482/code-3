<template>
  <div id="detail" class="single-page">
    <header>
      <div class="left">
        <a href="javascript:void(0)" @click="back">&nbsp;</a>
      </div>
      <div class="center">{{ goodInfo.goodsName }}</div>
      <div class="right">
        <router-link to="/home"></router-link>
      </div>
    </header>

    <div class="swipper">
        <div class="logo">
            <img :src="goodInfo.smIcon" alt="">
        </div>
        <van-swipe>
            <van-swipe-item v-for="item in goodInfo.banner" :key="item"><div class="goodImg"><img :src="item" alt=""></div></van-swipe-item>
        </van-swipe>
    </div>

    <div class="price-info clear">
        <span class="cur-price">￥{{ goodInfo.goodsNewPrice }}</span>
        <span class="desc">单买价</span>
        <span class="del-price">￥{{ goodInfo.goodsOldPrice }}</span>
        <span class="person">已有{{ goodInfo.buyNumber }}人参与</span>
    </div>

    <div class="good-name">
        <span>【2人团】</span>
        {{ goodInfo.goodsName }}
    </div>

    <div class="extra-info">
        <a href="http://h5.jumei.com/pages/2280">
            <div class="post-fare">运费</div>
            <div class="post-detail">
                <span class="tip">
                    本商品满299元或2件包邮（新疆部分区域除外）
                </span>
                <span class="icon-arrow-right"></span>
            </div>
        </a>

        <div class="introduction-wrap" @click="isExtend">
            <div class="simple" v-if="!showExtend">
                <div class="explain">
                    说明
                </div>
                <div class="content">
                    <p class="item">
                        <span class="icon"></span>
                        <span class="text">自营保税仓发货</span>
                    </p>
                    <p class="item">
                        <span class="icon"></span>
                        <span class="text">24小时内发货</span>
                    </p>
                    <p class="item">
                        <span class="icon"></span>
                        <span class="text">7天拆封无条件退货</span>
                    </p>
                    <p class="item">
                        <span class="icon"></span>
                        <span class="text">支持分期</span>
                    </p>
                </div>
            </div>
            <div class="extend" v-else>
                <div class="title">
                    <div class="type">说明</div>
                    <div class="tip">可详细阅读以下商品说明</div>
                </div>
                <div class="detail">
                    <a href="#none">
                        <p class="item">
                            <span class="icon"></span>
                            <span class="text">自营保税仓发货</span>
                            <span class="introduction">本商品由聚美自营保税仓发货</span>
                        </p>
                    </a>
                    <a href="#none">
                        <p class="item">
                            <span class="icon"></span>
                            <span class="text">24小时内发货</span>
                            <span class="introduction">24小时内发货，平均3天送达（偏远区域除外）</span>
                        </p>
                    </a>
                    <a href="#none">
                        <p class="item">
                            <span class="icon"></span>
                            <span class="text">7天拆封无条件退货</span>
                            <span class="introduction">在保证商品完好的前提下7天拆封无条件退货</span>
                        </p>
                    </a>
                    <a href="#none">
                        <p class="item">
                            <span class="icon"></span>
                            <span class="text">支持分期</span>
                            <span class="introduction">实际结算金额满150及以上支持分期购买</span>
                        </p>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div class="shop">
        <a href="">
            <div class="shop-info clear">
                <div class="shop-logo">
                    <img :src="goodInfo.shopIcon">
                </div>
                <div class="shop-name">
                    <p class="name">{{ goodInfo.goodsShop }}</p>
                    <span class="icon">官方授权</span>
                </div>
            </div>
            <!-- <div class="btn-enter">
                <p class="shop-btn">
                    进入店铺
                </p>
            </div> -->
        </a>
    </div>

    <div class="operation">
        <div class="add">单独购买 ￥<span>{{ goodInfo.goodsOldPrice }}</span></div>
        <div class="buy">参团购买 ￥<span>{{ goodInfo.goodsNewPrice }}</span></div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['postId'],
    data() {
        return {
            goodInfo: [],
            showExtend: false,
        }
    },
    created() {
        this.$axios.get('/api/post/detail',{ params:{
            postId : this.postId
        } }).then(res => {
            this.goodInfo = res.data.info;
            if(this.goodInfo.banner[0].indexOf(',') > -1) {
                this.goodInfo.banner = this.goodInfo.banner[0].split(',');
            }
        }).catch(err => {
            console.log(err);
        })
    },
    watch : {
        postId(newValue) {
            this.$axios.get('/api/post/detail',{ params:{
                postId : newValue
            } }).then(res => {
                this.goodInfo = res.data.info;
                if(this.goodInfo.banner[0].indexOf(',') > -1) {
                    this.goodInfo.banner = this.goodInfo.banner[0].split(',');
                }
            }).catch(err => {
                console.log(err);
            })
        }
    },
    methods: {
        isExtend() {
            this.showExtend = !this.showExtend;
        },
        back() {
            this.$router.go(-1);
        }
    }
}
</script>

<style lang='scss'>
    #detail {
        padding-bottom: 0.5rem;

        header {
            width: 100%;
            background: #fff;
            text-align: center;
            position: relative;
            height: .45rem;
            line-height: .45rem;
            z-index: 9;
            border-bottom: 1px solid #eee;

            .left {
                position: absolute;
                top: 0;
                left: 0;
                width: .3rem;
                height: .45rem;

                a {
                    display: block;
                    height: 0.45rem;
                    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAgBAMAAAAGZY7BAAAAFVBMVEUAAACenp6ampqampqampqioqKZmZkqMn9dAAAABnRSTlMAFdTEtRaUUOCdAAAALElEQVQY02OAAmEHKINRzQDKEkoSgAkp0lmIwQwohGAhZGE6BlbQACYY7AAA4FEM29fcwlcAAAAASUVORK5CYII=') center no-repeat;
                    background-size: 0.08rem 0.16rem;
                    padding-left: 0.2rem;
                }
            }

            .center {
                margin: 0 .4rem;
                font-size: .14rem;
                color: #333;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .right {
                position: absolute;
                top: 0;
                right: 0;
                width: 0.3rem;

                a {
                display: block;
                height: 0.45rem;
                background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAQlBMVEUAAACcnJyampqZmZmampqZmZmZmZmampqcnJyampqampqampqhoaGampqampqbm5ubm5uampqampqampqampqZmZltVD3vAAAAFXRSTlMAH1/ws3Dleja8j2kNq6NEK8Wbg1AbiYnwAAAAvUlEQVQ4y+3TWw6DMAxE0XFt0kCh79n/VissBKJgvAHujyVyEAERbKqmahVpDb0mc1eyE+nIa+ou47wksnE3y9y5jPd5c5dJX7kBoYyv+52BC/ey9N19y2YjH+Qn+K7fP9dhtw/5wFxVvhHUkRVTT+UdYW9qnd2Agwbqc5xSaDjMWMRdi6R2lMZXn8H+xQGFgjRhgdGLET2DtJpDbQXeMfRxwhMGa4Vy9M8u3Wl9cApsdZRFGaayeoBpwGxyP+1/EvyNg9nzAAAAAElFTkSuQmCC') left center no-repeat;
                background-size: 0.22rem 0.22rem;
                }
            }
        }

        .swipper {
            .logo {
                position: absolute;
                width: 0.6rem;
                height: 0.5rem;
                z-index: 1;

                img {
                    width: 100%;
                }
            }

            .van-swipe {
                position: relative;

                .van-swipe-item {
                    
                    .goodImg {
                        width: 100%;
                        height: 3.75rem;

                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
        }

        .price-info {
            background: #fff;
            padding: .15rem .12rem;

            .cur-price {
                float: left;
                font-size: 0.27rem;
                line-height: .27rem;
                margin-right: .05rem;
                color: #F33873;
            }

            .del-price {
                float: left;
                color: #666666;
                font-size: .14rem;
                line-height: .14rem;
                margin-top: .1rem;
            }

            .desc {
                float: left;
                margin-left: .04rem;
                margin-top: .1rem;
                font-size: .14rem;
                line-height: .14rem;
                color: #666666;
            }

            .person {
                float: right;
                text-align: right;
                color: #666;
                font-size: .14rem;
                margin-top: .0675rem;
            }
        }

        .good-name {
            background: #fff;
            padding: .1rem .12rem;
            font-size: .14rem;
            line-height: .225rem;


            span {
                font-size: .1rem;
                margin-right: .04rem;
                padding: .01rem .04rem;
                background: #fe4070;
                color: #fff;
                border-radius: .04rem;
            }
        }

        .extra-info {
            margin-bottom: 0.08rem;
            background: #fff;

            >a {
                display: block;
                margin: 0 .12rem;
                border-bottom: 1px solid #eee;

                .post-fare {
                    width: 22%;
                    color: #999;
                    display: inline-block;
                    font-size: .13rem;
                    line-height: .13rem;
                    vertical-align: top;
                    padding: .12rem 0;
                }

                .post-detail {
                    color: #333;
                    display: inline-block;
                    width: 78%;
                    overflow: hidden;
                    position: relative;
                    font-size: .13rem;
                    line-height: .13rem;
                    padding-top: .12rem;
                    padding-bottom: 0.095rem;

                    .tip {
                        display: inline-block;
                        width: 96%;
                    }

                    .icon-arrow-right {
                        width: 0.06rem;
                        height: 0.12rem;
                        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAaBAMAAAB1IXBvAAAAElBMVEUAAACenp6ampqampqampqZmZko0meuAAAABXRSTlMAFdTEtTuxabkAAAAmSURBVAjXY3AWYAADU0UILRQEEWBUpaZAMIyGicPUUcZFuBvmDwDUOwlrl6IFYQAAAABJRU5ErkJggg==') no-repeat;
                        background-size: contain;
                        position: absolute;
                        top: 0.13rem;
                        right: 0.08rem;
                    }
                }            
            }

            .introduction-wrap {
                background: #fff;
                margin: 0 .12rem;

                .icon {
                    width: .12rem;
                    height: .12rem;
                    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAABVxJREFUWAnVmU1sVFUUx899MzTtBssGpMQ4LuoCF04iatGolC5MrNCGxPhVgUajbkwoKLLCCYnxCygudWMlTWMkUVErcdG0fsSWCIkm6sJuNIZq48LSRWnqvHf8n/Pem7nT+XjPzpuW3mQ6d96995xf78e555xnKKHCuZxDk3NbaCnVpiKb3Bna2TprcjkvCRVmpUL4oZdupEV3DzH3EnEWcrYwU8qWZwy5+D1LZH4gYz6h5tRn5ou3/rL7xK3/b1DuPLKP2H0RCjoYBBAwTeR8RQ5dAfQMOWZGlXvchtY28mgbkfcA+rajL75oikzqpBk/9VFcSOkXG5S7Bu7D/LzJxB3GmF8wdBhQ583YKdSjC3cd2U4e94C1j5m3GzJTmP+jZmzwm+jRMUD5YK6Zfp97B8u6H8L/ANxxun/j2ZXuPd3LX8/vB/QJ/NM3YUnO0s2tz5mh3GIt4Jozyg8e2kpL2FtEO7CsJyjT+kaUwFrK7DadgN/mXsb2OI7nl6iJe82XZ/60+9j1qqDcefh2LNModtVGSpknzNjpz+2BSdW56/DD5PIINuE8FrjbjJ/+sZLsiqDBTH6PAXl8MHjw50qDk3rGnQO3QdYoPmnM7J2VZtZZrkyXRJZbZnIVIEV/MBHdqhO6lWEZWBmoHBz02aHL3eCZtFkUFltMdfsMdjOsn1XEBMnploPTqD1pqSurqk7oFgY1h1aPElCxk2qCcLqtPqtbFcsiZhAstuICqNw4YszFTiZlgmxFceuqGwzCordgMLAAKtei3jgw5nGFNqyfXChy+/lXtapRUHUwcHfLtbjSGycuNO8e2ANz9C2+j1Ub4zOYYbR3BGzBYbqW3ysOhtzd1QYn8RwH5DEc1I9x198LU/Qqdx/bVFUuWJRJPDSUcOl7YPmn4zoYVYXXaFBIj4dxon1XkPmiGX39n2pDhEWY8I/BjSyAij8JV61BZTkkAH6ilhZ4UlFFmNTXJUe9GTi96k9GjQva+a5nbuE7+u+O070K5G5z4bW/I8eLjysOOaIHDR90OcTpjVEEkpb+naa8N8XZA3D/GBNUudQFKSLBpGwIcZxCjBN65pV1Fp+67mYchGCf0bOU7X+72Fis1Q0pokImxGEOGVfCA6GvOjPaHvwxl9+7CB9yqPiMX+Bsf8lNlgikKAiZwOjQBvKdVaatReURtd7M07BmHxR6sXeUswdz8jsxSBUWMIHR0ZBWokUJxGIWNcibMk9hjHj/fmF+he95fgQhRsEEBac73sEJ5djfYNJIFmG3E9xEs360aPeqXTcTuTy1Zx7FNXFBe+Jc0obmx0M7WTekCNUIljQ3EBh8xN0IaWujlbeac7klajX7sA3GCKDhLk8EUtUJk7CFBh9LiBPVriFtOU/NJ2ZiaJHSTXvJdUfMtYWrJp8/R6mWXbHsZA3JwiJM4fZKa1/JYCx47MfdFCtOt3WYy+8u4PeT9rO668gBYGVYsisiS5c+SLNM4XlfcFPVraceAT4D90HGVJgCCp0SbIXUSclgkCQH1rqAQVnAFKJgdouFdw1M4tc2ytxw61p5+X5i4uqv4LhiJgZ3hnTFGZUnyAVJmoUkg7FWBbqVASw2QsmMSgN3Hnof+6AP92zPakeimjXxGM47D5vxMwds0NIZlRYkrPD3kqRZggyG3b9hddUlqR3R7TOU6CqbUWldFykdAfVzP6Yb1TQs2aQuiTQ0oKhs6IBo2HQkyapk9CrOaMizLtKOBdj1kMgNYeUbfub1nRq3YRX4en/ZUAYsr2+QuMBzeYGAcDvi9Q3ReWpJfxre3cvlRf2ueZiiBtvt/MiHKZr/bnMhWEz4hdh/ShitVNYLLpAAAAAASUVORK5CYII=') no-repeat;
                    background-size: contain;
                    vertical-align: top;
                    position: relative;
                    top: .01rem;
                }

                .simple {
                    .explain {
                        float: left;
                        width: 22%;
                        color: #999;
                        font-size: .13rem;
                        line-height: .13rem;
                        vertical-align: top;
                        padding: .12rem 0;
                    }

                    .content {
                        padding-bottom: 0.155rem;
                        padding-right: 0.12rem;
                        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAOBAMAAADDIxFwAAAAFVBMVEUAAACenp6ampqampqampqioqKZmZkqMn9dAAAABnRSTlMAFdTMxBasZ/mSAAAATElEQVQI12NwFmCAAUYTBjNFOE8omUEoSQAmpaYIxmAAEgcTMCkICZOCUjBBCA0XgzAgQjBJiBRMUhAkBZdUAknBJdOAUnDAagyRAgAImgod62z06gAAAABJRU5ErkJggg==') no-repeat;
                        background-size: 0.12rem 0.06rem;
                        background-position: right .144rem;
                        margin-right: 0.06rem;

                        .item {
                            display: inline-block;
                            padding-top: 0.12rem;
                            padding-right: 0.1rem;
                            color: #333;
                            font-size: .13rem;
                            line-height: .13rem;

                            span {
                                display: inline-block;
                            }

                        }
                    }
                }

                .extend {
                    .title {
                        padding-top: 0.12rem;

                        .type {
                            float: left;
                            width: 22%;
                            color: #999;
                            font-size: .13rem;
                            line-height: .13rem;
                            vertical-align: top;
                        }

                        .tip {
                            padding-right: .225rem;
                            background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAOBAMAAADDIxFwAAAAFVBMVEUAAACampqenp6ampqampqioqKZmZnVykP9AAAABnRSTlMA1BXMxBa247GaAAAAS0lEQVQI12MAAyZjBQYEUEwTQnCYxAQTFRBSiUpiQnApIFMRJgligUTgUhAhmBRUDELBBKEkVBRKwCTBGGGaGcJNgckMzggnsZoAALa6Cl3TO+SkAAAAAElFTkSuQmCC') no-repeat;
                            background-size: 0.12rem 0.06rem;
                            background-position: right 28%;
                            margin-right: .05rem;
                            font-size: .13rem;
                            line-height: .13rem;
                            color: #333;
                        }
                        
                    }

                    .detail {
                        a {
                            color: #333;

                            .item {
                                padding-top: 0.12rem;
                                border-bottom: 1px solid #eee;
                                padding-left: 22%;
                                position: relative;
                                color: #333;
                                font-size: .13rem;
                                line-height: .13rem;

                                span {
                                    display: inline-block;
                                }

                                .text {
                                    width: 2.5rem;
                                }

                                .introduction {
                                    display: block;
                                    padding: .1rem 0 .1rem .13rem;
                                    line-height: .16rem;
                                    font-size: .12rem;
                                    color: #999;
                                }
                            }
                        }
                    }
                }
                
            }
        }

        .operation {
            position: fixed;
            left: 0;
            bottom: 0;
            height: 0.5rem;
            width: 100%;
            background: skyblue;
            text-align: center;

            span {
                font-size: .18rem;
            }

            div {
                display: inline-block;
                line-height: .5rem;
            }

            .add {
                background: linear-gradient(210deg, #ffcfdf 0%, #fff1f6 98%);
                color: #fe4070;
                width: 50%;
            }

            .buy {
                width: 50%;
                background: linear-gradient(142deg, #ff5593 0%, #fe4070 100%);
                color: #fff;
            }
        }

        .shop {
            a {
                display: block;
                padding: .12rem .12rem;
                background: #FFF;
                margin: 10px auto;
                color: #333;

                .shop-info {

                    .shop-logo {
                        float: left;
                        width: .42rem;
                        height: .42rem;
                        border: 1px solid #eee;

                        img {
                            width: 100%;
                        }
                    }

                    .shop-name {
                        float: left;
                        margin-left: .1rem;
                        padding-top: .12rem;
                        line-height: .16rem;
                        font-size: .14rem;
                        color: #333;
                        overflow: hidden;

                        .name {
                            float: left;
                            max-width: 162px;
                            overflow: hidden;
                            -o-text-overflow: ellipsis;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            height: .16rem;
                            line-height: .16rem;
                        }

                        .icon {
                            font-size: 10px;
                            color: #fff;
                            float: left;
                            padding: 1px 4px;
                            background: #FE4070;
                            color: #FFF;
                            border-radius: .04rem;
                            margin-left: .04rem;
                            line-height: .14rem;
                        }
                    }
                }

                .btn-enter {
                    color: #666;
                    font-size: .12rem;
                    position: relative;
                    margin: 0 auto;

                    .shop-btn {
                        width: 1.48rem;
                        height: .38rem;
                        line-height: .38rem;
                        border-radius: .24rem;
                        margin: 0 auto;
                        display: block;
                        text-align: center;
                        margin-top: .12rem;
                        background-size: .06rem .12rem;
                        color: #666;
                        position: relative;
                        border: 1px solid #ddd;
                    }
                }
            }
        }
    }
</style>