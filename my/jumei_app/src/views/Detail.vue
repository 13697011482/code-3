<template>
  <div id="detail" class="single-page">
    <header>
      <div class="left">
        <a href="javascript:history.go(-1);">&nbsp;</a>
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
            <van-swipe-item v-for="(item , index) in goodInfo.banner" :key="index"><div class="goodImg"><img :src="item" alt=""></div></van-swipe-item>
        </van-swipe>
    </div>

    <div class="price-info clear">
        <span class="cur-price">￥{{ goodInfo.goodsNewPrice }}</span>
        <span class="del-price">￥{{ goodInfo.goodsOldPrice }}</span>
        <span class="desc">已含税</span>
        <span class="person">{{ goodInfo.buyNumber }}人已购买</span>
    </div>

    <div class="good-name">
        <span>聚美自营</span>
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
            <div class="btn-enter">
                <p class="shop-btn">
                    进入店铺
                </p>
            </div>
        </a>
    </div>

    <div class="operation">
        <div class="add" @click="changeShow">加入购物车</div>
        <div class="buy" @click="changeShow">立即购买</div>
    </div>

    <van-action-sheet v-model="show">
        <div class="model">
            <div class="title clear">
                <div class="good-img">
                    <img :src="goodInfo.banner[0]" alt="">
                </div>
                <div class="good-info">
                    <h2 class="good-price">￥{{ goodInfo.goodsNewPrice }}</h2>
                </div>
            </div>
            <div class="buy-num clear">
                <span class="title-name">购买数量</span>
                <div class="sub-add clear">
                    <button class="sub" @click="subAction"></button>
                    <span>{{ num }}</span>
                    <button class="add" @click="addAction"></button>
                </div>
            </div>
            <div class="operation">
                <div class="add" @click="changeShow">加入购物车</div>
                <div class="buy" @click="changeShow">立即购买</div>
            </div>
        </div>
    </van-action-sheet>
  </div>
</template>

<script>
export default {
    props: ['postId'],
    data() {
        return {
            goodInfo: {
                banner : [],
            },
            showExtend: false,
            show : false,
            num : 1,

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
        changeShow() {
            this.show = !this.show
        },
        subAction() {
            if(this.num > 1) {
                this.num--
            } else {
                this.$toast('商品数量不能为零')
            }
        },
        addAction() {
            if(this.num < 10) {
                this.num++
            } else {
                this.$toast('限购十件');
            }
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
                color: #F33873;
            }

            .del-price {
                float: left;
                margin-left: .04rem;
                color: #666666;
                font-size: .14rem;
                line-height: .14rem;
                margin-top: .1rem;
                text-decoration: line-through;
            }

            .desc {
                float: left;
                margin-left: .04rem;
                margin-top: .08rem;
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
                        padding-top: .04rem;
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

        .van-popup {
            overflow: visible;
        }

        .model {
            height: 3.35rem;
            padding: 0 .12rem;

            .title {
                position: relative;
                padding-bottom: 0.15rem;

                .good-img {
                    float: left;
                    width: 1rem;
                    height: .8rem;

                    img {
                        width: 1rem;
                        height: 1rem;
                        box-shadow: 1px 4px 5px rgba(0, 0, 0, 0.11);
                        margin-top: -.2rem;
                    }
                }

                .good-info {
                    float: left;
                    width: 2.3rem;
                    margin-left: .13rem;
                    padding-top: .215rem;

                    h2 {
                        font-size: 0.2133rem;
                        line-height: 0.2133rem;
                        font-weight: normal;
                    }
                }
            }

            .buy-num {
                border-top: 1px solid #EEEEEE;
                border-bottom: 1px solid #EEEEEE;
                padding-top: .15rem;
                padding-bottom: .15rem;
                margin-bottom: .175rem;

                .title-name {
                    float: left;
                    color: #999999;
                    text-align: left;
                    font-size: .13rem;
                    margin-top: .03rem;
                    padding: 0;
                    width: auto;
                    max-width: 60%;
                    overflow: hidden;
                    max-height: .17rem;
                }

                .sub-add {
                    text-align: right;

                    button {
                        width: .22rem;
                        height: .22rem;
                        display: inline-block;
                        border: none;
                        vertical-align: middle;
                    }

                    span {
                        display: inline-block;
                        width: .44rem;
                        color: #333333;
                        font-size: .12rem;
                        text-align: center;
                        vertical-align: middle;
                    }

                    .sub {
                        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAAAwxJREFUWAnVmT9v00AYxm2HIckQqRvK6IFPUIlWAiYGpIoOSPRb8CdD+yHKAKXfokgdgioxMFEkQOILwOCxdKuUIcnimOexfKeze7Vzydk5n2Sd7bt773dvnvdiv/a9NUqSJP5sNnuIes/3/RCmhsqR4Pwfjise6BOhz0Wv1/uFmm0rFX+VUfP5/Gkcxy8xdh/HfUMb1+g/7nQ6n7rd7lfDsZ4R8HQ63cEEx/DWY9OJdP3h6UvcP+r3+z917bp7SwHDo+FisXgH0Bc6I+veA/h5EASH8HhUZasSOPv5z2Boq8rYmu03kMlBlUyCskkggVfw7JcGYImxxbk4ZxnTnR7GwA+QwJuywXW1QSIn0PVbnX0tMFcJ2I+6AU3dA/RrQJ8W57sFTM3ypwFwp9i5yWsAxwjEZ0VN54C5G2B//Q2wugNs2bUzELfV3SMXdNy6HILlohiIZJJFehi63YEMfsgWh04gj13x56J6OLcSh3iJItlSYAYavPvIMUiJQzYy8kYKjEA7kK2OnmQPW14Aeur4uaOcKtY+WX2Xg02l5TmDjx7eKza4ek3WANShq4BFLrIy6Pha05YybB3wPbjWyMNRFHmTycTKLzIYDLwwNFJk6uGV32CtUJsZSbit/UH0PTAbt5neCLq/1DDzBm0pV+0DhhwqX61dcT9Z+cdx4QpQFQdZfVAz8Khj05RTlX3b7dd4iB/Sw9zWxrat12BvTFYGncfEXA0TWDUpGNV3um+Qh5Ukn1VSGINnLyGHJ7Sbejib4CirXawkmwTmWylWcu4aLZnEGzPZpCR40bpECjMsTHliVTEXsMlCBrKoWR/ySEkIuCyXNRLXG6xHGUsO4RYwW6GZU6zwJNezwQvOTQbdlDkNFzvgH5DJ5ffY7hrJZGZSHN0FS75SYHZgxgVJjHZ8MiAwdQTxb2P1tW15tM05dJolg1oqPax2ZtIF1/yaZCUPB9DvsHeo7rPqfLpzI2BhIJMJ83FMcZk+5fHD4md49GwZj4o5Rb0SsBjMR9OST7fsln62ZY2+Vj7d/gfn0SvnVp6oMQAAAABJRU5ErkJggg==') center center no-repeat;
                        background-size: 100% 100%;
                    }

                    .add {
                        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAAA6lJREFUWAnVmb9PFEEUx2+Xgh/BWnIlJFZ2FlJooomVRIiF/hWaaKGdCbVoJNG/QkMUDFQmJkihBZ0NBZQnUNAgByRw6/czzLus2ePH7AK3O8nwhtk373323fzamahWICVJEu3u7t6UHIuiaFim6qmcqPxHuUGWzpp05vv7+39J8ixXivK02tvbu3d4ePhIbceVhwJtrEt/rqen51NfX9+3wLa1IOBmszkqB68VrdvmSNFaVXlWclmyIdno7e0lqrX9/f26dF3UJW+oakJyhGck6f6QeDkwMPDTVZzXH0V0WLAzOzs7ic8b6gqvBHQ91AdtaCs7G2YP2/gItdVRn59fhrcwLsPbkpOK0mBH5YBKbGDL2yQQW/gKMJFVlbGnygcedkZOrma1itVgUz7cr4cvfOayqIbTHrRFJGQ4qL+HOMU2PuQTX/yS0yHta7ylb6hik9ngUhK+cOh9ny3S9CO14adpKV8arEUEn973wal9WgrDejs3wCQnzchlS3wTZVhgOta/3sw6PwPswvrssQD+Ab7TLB31pTDKW0luq0Gh2SC5+3ye3NHRGSthgMUzsWC5FFtBcoqyFN9qBdpI1QcXZeM+ObhhqgEMsPgqx0bZAdO59fCW/t/UMvnGK3VdeJZN2GwAOmBtZB5DF8fxe73Z366TegBYxPSBf/1mqxaLnsH1gEo9/IIsUxLTZ88zDmvMflYVQ3qbVe2yfpcJFhaYYIMRViI85iFnvSyjcGywxqJ3E7PkchlJYTI2WBl0bLBJbtN9VCzdX2Ort4FFb5Wlo02x1VkCWdkGNedd0YNTpzS3ihVcFCwi8rcQfX9nY8iqMxI+OOEjwvYF27W9Q4YwW2FsCXvfFdZrrSTXsnr5alp3niXkfK2zrWDze4oVIuz6rsJugy/boss1KbZGG1hMpQVOsTVYONYIoCTnBqVMxgYrC4ftWydKSXsE5dhgjTnrUt266EfyHIxc9EvCBBuMsBJhRvMcjlut1kNkmVKKaQ5WBl2NgzmkHj7R2xQ+1ZHhBTI2iyRYYMKGMbbtaT5eZK5TnmxXdrkAi59/FzMoAj63j9CM8RwVim7Hj9D/TAm6Op/5kGsJrNZBioeuzlGV9Q91jeocBqagq3PcmoKuzoG2QXPiormwGlcGKejSXMrYp4exnShZXKQwpUmdcziXtAQXufZakpEX+p4887VXELBnZL7mYpHzOI648lwsftXe4OOFXywasElF+qSrW9T4/HJZuudydfsPkjSrGlD8xloAAAAASUVORK5CYII=') center center no-repeat;
                        background-size: 100% 100%;
                    }
                }
            }
        }
    }
</style>