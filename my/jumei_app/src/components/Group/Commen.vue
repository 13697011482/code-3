<template>
    <ul id="group">
        <li v-for="item in list" :key="item.postId">
            <router-link :to="'/group_detail/'+item.postId">
                <div class="comment" v-if="type != 'next'">{{ parseInt(item.buyNumber/2) }}条评论</div>
                <div class="good-img">
                    <img :src="item.imageUrl.replace('localhost' , '58.87.121.209')" alt="">
                </div>
                <div class="good-info">
                    <span>[2人团]</span>
                    {{ item.goodsName }}
                </div>
                <div class="good-price clear">
                    <div class="left">
                        <span class="group-price">￥{{ item.goodsNewPrice }}</span>
                        <span class="single-price">单买价￥{{ item.goodsOldPrice }}</span>
                    </div>
                    <div class="right">
                        <span class="group-btn" v-if="type != 'next'">
                            去开团
                        </span>
                        <span class="group-btn" v-else>
                            每天早上十点开团
                        </span>
                    </div>
                </div>
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['type','list'],
    data() {
        return {

        }
    },
    created() {
    }
}
</script>

<style lang="scss">
    #group {
        background: #f5f5f5;
        color: #424242;

        >li {
            margin-bottom: 8px;
            background: #fff;

            >a {
                width: 100%;
                display: block;
                overflow: hidden;
                position: relative;

                .comment {
                    position: absolute;
                    left: 0;
                    top: 1.1rem;
                    font-size: 0.12rem;
                    padding: .04rem .07rem;
                    z-index: 1;
                    border: 1px solid #eee;
                    border-left: 0;
                    border-top-right-radius: 0.28rem;
                    border-bottom-right-radius: 0.28rem;
                    color: #666;
                    background: rgba(251,251,251,.8);
                }

                .good-img {
                    overflow: hidden;
                    text-align: center;

                    img {
                        margin: 0;
                        height: 1.5rem;
                    }
                }

                .good-info {
                    font-size: 0.14rem;
                    max-height: 0.34rem;
                    line-height: 0.18rem;
                    padding: 0 0.12rem;
                    margin-top: 0.1rem;

                    span {
                        color: #fe4070;
                        display: inline-block;
                        margin-left: 0.02rem;
                    }
                }

                .good-price {
                    padding: 0.12rem;
                    overflow: hidden;

                    .left {
                        float: left;

                        .group-price {
                            display: block;
                            font-size: .18rem;
                            color: #fe4070;
                        }

                        .single-price {
                            color: #999;
                        }
                    }

                    .right {
                        float: right;
                        border: 1px solid #fe4070;
                        margin-top: .04rem;
                        background: #fe4070;
                        border-radius: .25rem;

                        .group-btn {
                            display: block;
                            height: 0.26rem;
                            padding: 0 .05rem;
                            line-height: 0.26rem;
                            font-size: 0.14rem;
                            text-align: center;
                            color: #fff;
                        }
                    }
                }
            }
        }
    }
</style>