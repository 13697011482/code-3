(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9ce3edbe"],{"0a4e":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"mine"}},[a("header",[t._m(0),a("div",{staticClass:"center"},[t._v("我的聚美")]),a("div",{staticClass:"right"},[a("router-link",{attrs:{to:"/home"}})],1)]),a("div",{staticClass:"content"},[t.username?a("div",{staticClass:"logged"},[a("img",{attrs:{src:"http://p0.jmstatic.com/jmstore/user/icon/chook_200_200.png?1603757301",alt:""}}),a("div",{staticClass:"bg"},[a("div",{staticClass:"user-info"},[a("span",{staticClass:"name"},[t._v(t._s(t.username))]),a("span",{staticClass:"grade"},[t._v("普通会员")])])]),t._m(1)]):a("div",{staticClass:"user-unlogin"},[a("div",{staticClass:"head-img"}),a("div",{staticClass:"operation"},[a("router-link",{attrs:{to:"/register"}},[t._v("注册")]),a("span",[t._v("|")]),a("router-link",{attrs:{to:"/login"}},[t._v("登录")])],1)]),a("div",{staticClass:"order"},[a("van-cell",{attrs:{value:"查看我的全部订单","is-link":""},on:{click:t.toOrder},scopedSlots:t._u([{key:"title",fn:function(){return[a("van-icon",{staticClass:"icon",attrs:{name:"balance-list-o",size:"0.24rem"}}),a("span",{staticClass:"custom-title"},[t._v("我的订单")])]},proxy:!0}])}),a("van-grid",[a("van-grid-item",{attrs:{icon:"pending-payment",text:"待付款"}}),a("van-grid-item",{attrs:{icon:"send-gift-o",text:"待收货"}}),a("van-grid-item",{attrs:{icon:"comment-o",text:"待评价"}}),a("van-grid-item",{attrs:{icon:"after-sale",text:"退款/退货"}})],1)],1),a("div",{staticClass:"property"},[a("van-cell",{scopedSlots:t._u([{key:"title",fn:function(){return[a("van-icon",{staticClass:"icon",attrs:{name:"balance-o",size:"0.24rem"}}),a("span",{staticClass:"custom-title"},[t._v("我的资产")])]},proxy:!0}])}),a("van-grid",[a("van-grid-item",{attrs:{text:"现金券"}}),a("van-grid-item",{attrs:{text:"红包"}}),a("van-grid-item",{attrs:{text:"聚美余额"}}),a("van-grid-item",{attrs:{text:"礼品卡"}})],1)],1),a("div",{staticClass:"varied"},[a("van-cell",{attrs:{"is-link":""},scopedSlots:t._u([{key:"title",fn:function(){return[a("van-icon",{staticClass:"icon",attrs:{name:"service-o",size:".24rem"}}),a("span",{staticClass:"custom-title"},[t._v("售后服务")])]},proxy:!0}])}),a("van-cell",{attrs:{"is-link":""},scopedSlots:t._u([{key:"title",fn:function(){return[a("van-icon",{staticClass:"icon",attrs:{name:"envelop-o",size:".24rem"}}),a("span",{staticClass:"custom-title"},[t._v("意见反馈")])]},proxy:!0}])}),a("van-cell",{attrs:{"is-link":""},scopedSlots:t._u([{key:"title",fn:function(){return[a("van-icon",{staticClass:"icon",attrs:{name:"logistics",size:".24rem"}}),a("span",{staticClass:"custom-title"},[t._v("收货地址")])]},proxy:!0}])}),a("van-cell",{attrs:{"is-link":""},on:{click:t.logout},scopedSlots:t._u([{key:"title",fn:function(){return[a("van-icon",{staticClass:"icon share",attrs:{name:"share-o",size:".24rem"}}),a("span",{staticClass:"custom-title"},[t._v("退出登录")])]},proxy:!0}])}),a("van-cell",{attrs:{"is-link":""},scopedSlots:t._u([{key:"title",fn:function(){return[a("van-icon",{staticClass:"icon",attrs:{name:"phone-o",size:".24rem"}}),a("span",{staticClass:"custom-title"},[t._v("400-123-8888")])]},proxy:!0}])})],1),t._m(2)])])},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"left"},[a("a",{attrs:{href:"javascript:history.go(-1);"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"icons"},[a("a",{attrs:{href:"javascript:void(0)"}},[a("div",{staticClass:"icon"}),a("span",[t._v("心愿单")])]),a("a",{attrs:{href:"javascript:void(0)"}},[a("div",{staticClass:"icon"}),a("span",[t._v("开售提醒")])]),a("a",{attrs:{href:"javascript:void(0)"}},[a("div",{staticClass:"icon"}),a("span",[t._v("收藏")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"hint"}},[t._v(" 客服热线400-123-8888 (9:00-18:00) "),a("br"),t._v(" 拨打前请记录您的UID ")])}],n=(a("e35a"),a("0d7a"),{data:function(){return{username:""}},created:function(){this.username=localStorage.getItem("username"),this.$parent.active=this.$route.path.split("/")[1]},methods:{toOrder:function(){console.log("to")},logout:function(){localStorage.removeItem("token"),localStorage.removeItem("username"),this.username="",this.$store.commit("REMOVE_USERNAME"),this.$router.push("/login")}}}),r=n,o=(a("388a"),a("2c07")),c=Object(o["a"])(r,e,i,!1,null,null,null);s["default"]=c.exports},"388a":function(t,s,a){"use strict";a("81f5")},"81f5":function(t,s,a){}}]);
//# sourceMappingURL=chunk-9ce3edbe.ab914f0b.js.map