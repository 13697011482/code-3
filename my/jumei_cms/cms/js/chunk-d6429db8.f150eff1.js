(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d6429db8"],{"1ca1":function(e,t,o){var n=o("a719"),r=o("74e7"),a=o("90fb"),s=a("species");e.exports=function(e,t){var o;return r(e)&&(o=e.constructor,"function"!=typeof o||o!==Array&&!r(o.prototype)?n(o)&&(o=o[s],null===o&&(o=void 0)):o=void 0),new(void 0===o?Array:o)(0===t?0:t)}},"1ea7":function(e,t,o){var n=o("efe2"),r=o("90fb"),a=o("f594"),s=r("species");e.exports=function(e){return a>=51||!n((function(){var t=[],o=t.constructor={};return o[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"2e05":function(e,t,o){"use strict";o("435e")},"435e":function(e,t,o){},"74e7":function(e,t,o){var n=o("2118");e.exports=Array.isArray||function(e){return"Array"==n(e)}},"8e94":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[o("el-breadcrumb-item",{attrs:{to:{path:"/admin"}}},[e._v("首页")]),o("el-breadcrumb-item",[e._v("商品添加")])],1),o("el-form",{ref:"form",attrs:{id:"postaddForm",model:e.form,"label-width":"80px"}},[o("el-form-item",{attrs:{label:"商品名称"}},[o("el-input",{model:{value:e.form.goodsName,callback:function(t){e.$set(e.form,"goodsName",t)},expression:"form.goodsName"}})],1),o("el-form-item",{attrs:{label:"新价格"}},[o("el-input",{model:{value:e.form.goodsNewPrice,callback:function(t){e.$set(e.form,"goodsNewPrice",t)},expression:"form.goodsNewPrice"}})],1),o("el-form-item",{attrs:{label:"原价"}},[o("el-input",{model:{value:e.form.goodsOldPrice,callback:function(t){e.$set(e.form,"goodsOldPrice",t)},expression:"form.goodsOldPrice"}})],1),o("el-form-item",{attrs:{label:"店铺名称"}},[o("el-input",{model:{value:e.form.goodsShop,callback:function(t){e.$set(e.form,"goodsShop",t)},expression:"form.goodsShop"}})],1),o("el-form-item",{attrs:{label:"商品类型"}},[o("el-input",{model:{value:e.form.goodsType,callback:function(t){e.$set(e.form,"goodsType",t)},expression:"form.goodsType"}})],1),o("el-form-item",{attrs:{label:"小图标"}},[o("el-input",{model:{value:e.form.smIcon,callback:function(t){e.$set(e.form,"smIcon",t)},expression:"form.smIcon"}})],1),o("el-form-item",{attrs:{label:"店铺图标"}},[o("el-input",{model:{value:e.form.shopIcon,callback:function(t){e.$set(e.form,"shopIcon",t)},expression:"form.shopIcon"}})],1),o("el-form-item",{attrs:{label:"购买人数"}},[o("el-input",{model:{value:e.form.buyNumber,callback:function(t){e.$set(e.form,"buyNumber",t)},expression:"form.buyNumber"}})],1),o("el-form-item",{attrs:{label:"商品图片"}},[o("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://www.mocky.io/v2/5185415ba171ea3a00704eed/posts/","show-file-list":!1,"on-success":e.handleAvatarSuccess}},[e.imageUrl?o("img",{staticClass:"avatar",attrs:{src:e.imageUrl}}):o("i",{staticClass:"el-icon-plus avatar-uploader-icon"}),o("input",{attrs:{type:"hidden"}})])],1),o("el-form-item",{attrs:{label:"轮播图"}},[e._l(e.banner,(function(t){return o("el-tag",{key:t,attrs:{closable:"","disable-transitions":!1},on:{close:function(o){return e.handleClose(t)}}},[e._v(" "+e._s(t)+" ")])})),e.inputVisible?o("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:e.handleInputConfirm},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleInputConfirm(t)}},model:{value:e.inputValue,callback:function(t){e.inputValue=t},expression:"inputValue"}}):o("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:e.showInput}},[e._v("+ New Tag")])],2),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("添加")])],1)],1)],1)},r=[],a=(o("ecb4"),o("ea69"),o("e18c"),o("96db"),o("af86"),o("f1a9"),{data:function(){return{inputVisible:!1,inputValue:"",form:{goodsImage:"",goodsName:"",goodsNewPrice:"",goodsOldPrice:"",goodsShop:"",goodsType:"",smIcon:"",buyNumber:"",shopIcon:""},imageUrl:"",file:{},banner:[]}},methods:{handleAvatarSuccess:function(e,t){this.file=t.raw,this.imageUrl=URL.createObjectURL(t.raw)},handleClose:function(e){this.banner.splice(this.banner.indexOf(e),1)},showInput:function(){var e=this;this.inputVisible=!0,this.$nextTick((function(t){e.$refs.saveTagInput.$refs.input.focus()}))},handleInputConfirm:function(){var e=this.inputValue;e&&this.banner.push(e),this.inputVisible=!1,this.inputValue=""},onSubmit:function(){var e=this;console.log(this.banner);var t=this.file,o=new FormData;o.append("filename",t),o.append("imageUrl",this.imageUrl),o.append("goodsName",this.form.goodsName),o.append("goodsNewPrice",this.form.goodsNewPrice),o.append("goodsOldPrice",this.form.goodsOldPrice),o.append("goodsShop",this.form.goodsShop),o.append("goodsType",this.form.goodsType),o.append("smIcon",this.form.smIcon),o.append("buyNumber",this.form.buyNumber),o.append("shopIcon",this.form.shopIcon),o.append("banner",this.banner),this.$axios.post("/api/post/add",o,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){0==t.data.code?e.$message({message:"恭喜你，添加商品成功",type:"success"}):e.$message({message:"C添加失败，请重新添加",type:"error"})})).catch((function(){e.$message({message:"添加失败，请重新添加",type:"error"})}))}}}),s=a,i=(o("2e05"),o("2c07")),l=Object(i["a"])(s,n,r,!1,null,null,null);t["default"]=l.exports},d7e1:function(e,t,o){"use strict";var n=o("efe2");e.exports=function(e,t){var o=[][e];return!!o&&n((function(){o.call(null,t||function(){throw 1},1)}))}},ea69:function(e,t,o){"use strict";var n=o("1c8b"),r=o("e1d6"),a=o("3da3"),s=o("d88d"),i=o("3553"),l=o("1ca1"),c=o("1bbd"),u=o("1ea7"),f=o("ff9c"),p=u("splice"),m=f("splice",{ACCESSORS:!0,0:0,1:2}),d=Math.max,b=Math.min,h=9007199254740991,g="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!p||!m},{splice:function(e,t){var o,n,u,f,p,m,v=i(this),y=s(v.length),w=r(e,y),x=arguments.length;if(0===x?o=n=0:1===x?(o=0,n=y-w):(o=x-2,n=b(d(a(t),0),y-w)),y+o-n>h)throw TypeError(g);for(u=l(v,n),f=0;f<n;f++)p=w+f,p in v&&c(u,f,v[p]);if(u.length=n,o<n){for(f=w;f<y-n;f++)p=f+n,m=f+o,p in v?v[m]=v[p]:delete v[m];for(f=y;f>y-n+o;f--)delete v[f-1]}else if(o>n)for(f=y-n;f>w;f--)p=f+n-1,m=f+o-1,p in v?v[m]=v[p]:delete v[m];for(f=0;f<o;f++)v[f+w]=arguments[f+2];return v.length=y-n+o,u}})},ecb4:function(e,t,o){"use strict";var n=o("1c8b"),r=o("45af").indexOf,a=o("d7e1"),s=o("ff9c"),i=[].indexOf,l=!!i&&1/[1].indexOf(1,-0)<0,c=a("indexOf"),u=s("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:l||!c||!u},{indexOf:function(e){return l?i.apply(this,arguments)||0:r(this,e,arguments.length>1?arguments[1]:void 0)}})},ff9c:function(e,t,o){var n=o("1e2c"),r=o("efe2"),a=o("faa8"),s=Object.defineProperty,i={},l=function(e){throw e};e.exports=function(e,t){if(a(i,e))return i[e];t||(t={});var o=[][e],c=!!a(t,"ACCESSORS")&&t.ACCESSORS,u=a(t,0)?t[0]:l,f=a(t,1)?t[1]:void 0;return i[e]=!!o&&!r((function(){if(c&&!n)return!0;var e={length:-1};c?s(e,1,{enumerable:!0,get:l}):e[1]=1,o.call(e,u,f)}))}}}]);
//# sourceMappingURL=chunk-d6429db8.f150eff1.js.map