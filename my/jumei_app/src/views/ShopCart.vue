<template>
  <div>
    <div class="shopCar" v-if="isShow">
        <div class="count-down">
            <div class="clock-icon"></div>
            <div class="time-text">00:59</div>
            <div class="clock-msg">结算时间结束后，商品可能被抢空，请尽快结算</div>
        </div>
        <div class="groups">
            <div v-for="(item ,index)
            in goodList" :key="index">
                <div class="group">
                    <div class="group-header">
                        <span class="check-box-checked"></span>
                        <div class="group-title" >
                            <!-- LM-聚美郑州1仓发货 -->
                            <!-- {{item}} -->
                            {{item.sendAddress}}
                        </div>
                    </div>
                    <div class="group-info">

                    </div>
                    <div class="group-content">
                        <div v-for="item2  in item.goodInfo" :key="item2.goodType">
                            <div class="item">
                                <span class="check-box-checked"></span>
                                <div class="item-content">
                                    <div class="img-title">
                                        <div class="img-wrap">
                                            <img :src="item2.goodImg" alt="">
                                        </div>
                                        <div class="text-wrap">
                                            <span class="title">{{item2.goodTitle}}</span>
                                            <div class="sub-title-1">
                                                <span>{{item2.goodType}}</span>
                                                <span>x {{item2.goodNum}}</span>
                                            </div>
                                            <div class="price-edit">
                                                <span class="price">¥{{item2.goodPrice}}</span>
                                                <span class="edit">编辑</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="discount-detail" v-if="item2.zekouType!=''">
                                        <div class="discount-item">
                                            <span>{{item2.zekouType}}</span>
                                            <div class="promo-rule">
                                                <span>{{item2.zekouMessage}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                    <div class="group-tail red">
                        <div class="icon">免</div>
                        <span>{{item.isBaoyou}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="tip" v-else>
      <p>登录后查看</p>
      <router-link to="/login">点击登录</router-link>
    </div>
  </div>
  
</template>

<script>
export default {
    data(){
        return{
            goodList:[
                {
                    shopName:'伊夺魅色官方旗舰店',
                    isBaoyou:'已享新用户满66元包邮',
                    sendAddress:'上海佐莹发货',
                    goodInfo:[
                        {
                        goodImg:'https://p0.jmstatic.com//product/199/087/df5242898199087018_std/s_df5242898199087018_200_200.jpg',
                        goodTitle:'爆款裤子秋季新款高腰西装裤休闲裤女1春秋宽松哈伦裤长裤ins潮',
                        goodType:'黑色 M 建议90-105斤',
                        goodPrice:99,
                        goodNum:1,
                        zekouType:"满减",
                        zekouMessage:'满109元减10元,满199元减20元'
                        },
                         {
                        goodImg:'https://p0.jmstatic.com//product/199/086/df5243020199086970_std/s_df5243020199086970_200_200.jpg',
                        goodTitle:'宽松慵懒风套头毛衣女1新款秋装潮韩版学生连帽针织卫衣女外套',
                        goodType:'黑色 M建议90-100斤',
                        goodPrice:59,
                        goodNum:1,
                        zekouType:"满减",
                        zekouMessage:'满109元减10元,满199元减20元'
                        },
                    ],
                    
                },
                 {
                    shopName:'伊夺魅色官方旗舰店',
                    isBaoyou:'已享新用户满66元包邮',
                    sendAddress:'聚美优品发货',
                    goodInfo:[
                        {
                        goodImg:'https://p1.jmstatic.com//product/001/348/1348480_spu_normal/1348480_200_200.jpg',
                        goodTitle:'【效期至2021年5月】欧蕙保湿遮瑕限量气垫套盒#02自然色',
                        goodType:'#02 气垫15g*2+口红13g',
                        goodPrice:99,
                        goodNum:2,
                        zekouType:"",
                        zekouMessage:''
                        },  
                    ],
                    
                },
                {
                    shopName:'伊夺魅色官方旗舰店',
                    isBaoyou:'已享商家满69元包邮',
                    sendAddress:'聚美香港仓发货',
                    goodInfo:[
                        {
                        goodImg:'https://p0.jmstatic.com//product/002/281/2281120_spu_normal/2281120_200_200.jpg',
                        goodTitle:'【官方授权 低至83元】MAC魅可小辣椒口红子弹头唇膏3g （全色系）',
                        goodType:'811# M-A-C RED 正红',
                        goodPrice:98,
                        goodNum:1,
                        zekouType:"",
                        zekouMessage:''
                        },  
                    ],
                    
                },
                 
            ],
            isShow : !!localStorage.username,        
        }
    },
    created() {
      this.$parent.active = this.$route.path.split('/')[1];
      if(localStorage.username) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
      
    }
}
</script>

<style scope>
.tip {
  margin-top: 49%;
  text-align: center;
  vertical-align: middle;
  font-weight: bold;
  font-size: .25rem;
}

.tip a {
  color: blue;
}

body{
    color: #333;
    font-size: 0.12rem;
    line-height: 1;
    height: 100%;
    box-sizing: border-box;
    overflow-y: auto;
}
.shopCar{
    width: 100%;
    height: 100%;
    overflow: auto;
    padding-bottom: 50px;
    background: #f5f5f5;
}
.clock-msg{
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.time-text{
    width: 0.55rem;
    margin-left: 0.025rem;
    font-size: 0.14rem;
    color: #fe4070;
}
.clock-icon{
    width: 0.15rem;
    height: 0.15rem;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAwlJREFUSA3FVzGLE1EQnnmXwkYRixMP1C7+gHRiYXJooYUBBbGzVpAkgoVYbCEphLsEQWs7ETy4FFooJhZiZX7AXadCBAtPFEXhbsdv5t0uu7mYXcLt3UCyb3dn5pv33ryZb5lyiASBo3c/T1MY1imUCjEvkMiCmTKPMB6R4yE5t0pnDr7nIAiz3PI0BbkeHKCP328R8W0RmZ+mG71j5q9EskQnDz/kJ8Gf6Pn49b/AUm1dxkw6QnJcjeBwHf+rNCevSfgTHTk0MmfffiwQywna4nMArCPAsukTf4ZRkwfLK6Y39rcDGIZMtdZ9XO+aA8YSstzhfrc/ZjvxVmqNGgJ7APvKtn2b+sv3ELgkDVLAHrT5VISuMvEmZtCgQefxuFHSwaSx+ak2b2CFulixEjM9o37nWtKPSxnaTA10g+b4PL/tPkoqp3Sn3KiN2poP4g2diK5i0iSese6pSPjcZqqgb5YHScVZx7LYqtKWvPIzd1eiPbcZW/YikbxzaeQBlWrzhf6yAvK+sGUqmqx6UiB+qXFkNHuxREPdU32RJdjHC/rL0rP3Pk+GdkLseALYigPOqSlo9o5lXy7HGUrmE769GmoCCpJVJEQ+j8xby3tkMnAmvlbfCGBdsbQKOiuDpup6Ey129SEKkApKL4D9QbeKtKsgE5xp1VMBprOCrzdaBouWCANNxsVdJqq9RYJHGOhspRjn7++4mMTPcgzCs41UDU6aIJle8qBzMX4WY7DoUvsu82vzWKyQYwCnaH+Zkg4qwmD6UrImTlS21kaE1pdPMJOj+TQTWto+VUAcnDEHvbF+qoMCJcZwHwAMumISXioQctu11G1Q4p4zjoT9Qus6ZU28IHT1japVttwAL3OemIEjqXjmMFN2T4sXgKy+vY4sKabvTkrMwJGgUCFjDtPczPBusXVTfSuGkkD1EM9uX4iARQA2iPVvK1MAY1gx5jDD5JIm2+xjxbMPbkfsw/BSisYw94bsxUsdBWCJsNf0NgLX605CT2sgLL3CCH0KfD8+YVIBFPDR9g8XKbh4Mp47hQAAAABJRU5ErkJggg==);
    background-size: 100% 100%;
}
.groups .group {
    margin-bottom: 0.08rem;
    background: #fff;
}
.count-down{
    padding: 0 0.08rem;
    height: 0.3rem;
    color: #999;
    background: #fff;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
}
.group{
    margin-top: 0.08rem;
}
.group .group-header{
    position: relative;
    background: #fff;
    height: 0.4rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    padding-left: 0.08rem;
    border-bottom: 0.01rem #eee solid;
}
.group-header .check-box-checked,.group-content .check-box-checked
{
    display: block;
    background: url('data:image/png;base64,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') no-repeat;
    background-size: 100% 100%;
    width: 0.2rem;
    height: 0.2rem;
}
.group-header .group-title{
    margin-left: 0.08rem;
    max-width: 47%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.group .group-info{
    padding: 0.12rem 0.12rem 0 0.36rem;
    font-size: 0.12rem;
    color: #666;
    line-height: 0.18rem;
}
.group-content .item{
    overflow: hidden;
    min-height: 0.84rem;
    display: -ms-flexbox;
    display: flex;
    padding: 0 0.12rem 0 0.08rem;
}
.group-content .item .check-box-checked{
        margin-top: 0.45rem;
}
.group-content .item .item-content{
        flex: 1;
}
.item-content .img-title{
    display: flex;
    margin-left: 0.08rem;
    padding-bottom: 0.1rem;
}
.img-title .img-wrap{
    width: 0.84rem;
    height: 0.84rem;
    position: relative;
    margin-top: 0.1rem;
}
.img-title .img-wrap img{
    width: 100%;
    height: 100%;
}
.img-title .text-wrap{
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    margin-left: 0.1rem;
    margin-top: 0.08rem;
    flex: 1;
}
.img-title .img-title .text-wrap .title {
    display: -webkit-box;
    width: 2.33rem;
    max-height: 0.4rem;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #333;
    line-height: 0.2rem;
    text-align: left;
    -webkit-line-clamp: 2;
    word-break: break-all;
}
.text-wrap .sub-title-1 {
    margin-top: 0.03rem;
    line-height: 0.12rem;
    height: 0.12rem;
    color: #999;
    display: flex;
    justify-content: space-between;
}
.text-wrap .sub-title-1 span:first-child {
    display: block;
    max-width: 1.95rem;
    font-size: 0.11rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.text-wrap .price-edit {
    margin-top: 0.05rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.22rem;
}
.text-wrap .price-edit .price {
    width: 2.01rem;
    display: block;
    font-size: 0.15rem;
    color: #fe4070;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.text-wrap .price-edit .edit {
    display: block;
}
.item-content .discount-detail{
    display: flex;
    flex-direction: column;
    margin-left: 0.08rem;
    position: relative;
}
.group .group-content .item .item-content .discount-detail .discount-item {
    margin-bottom: 0.1rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
}

.item-content .discount-detail .discount-item>span{
    height: 0.16rem;
    border-radius: 0.2rem;
    font-size: 0.1rem;
    color: #fe4070;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 0.05rem;
    border: 0.01rem solid #fe4070;
} 
.discount-detail  .promo-rule {
    font-size: 0.11rem;
    max-width: 2.195rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 0.16rem;
}
.discount-detail .promo-rule>span{
    margin-left: 0.025rem;
}
.group .group-tail {
    height: 0.36rem;
    display: -ms-flexbox;
    display: flex;
    padding-left: 0.08rem;
    background: #fff;
    -ms-flex-align: center;
    align-items: center;
    border-top: 0.01rem #eee solid;
}
.group  .group-tail .icon {
    width: 0.16rem;
    height: 0.16rem;
    display: flex;
    border-radius: 100%;
    border: 0.01rem solid #333;
    justify-content: center;
    align-items: center;
    font-size: 0.1rem;
}
.group  .red .icon {
    border: 0.01rem solid #fe4070;
}
.red{
    color: #fe4070;
}
.group  .group-tail span {
    margin-left: 0.08rem;
}
.group .group-tail{
    height: 0.36rem;
    display: -ms-flexbox;
    display: flex;
    padding-left: 0.08rem;
    background: #fff;
    -ms-flex-align: center;
    align-items: center;
    border-top: 0.01rem #eee solid;
}

</style>