(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5005301a"],{"01eb":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"postEdit"}},[e("el-breadcrumb",{attrs:{id:"breadcrumb","separator-class":"el-icon-arrow-right"}},[e("el-breadcrumb-item",{attrs:{to:{path:"/admin"}}},[t._v("首页")]),e("el-breadcrumb-item",[t._v("活动管理")])],1),e("el-table",{staticStyle:{width:"100%"},attrs:{id:"edit_tab",data:t.tableData,stripe:""}},[e("el-table-column",{attrs:{prop:"activeName",label:"活动名称"}}),e("el-table-column",{attrs:{prop:"activeType",label:"活动类型"}}),e("el-table-column",{attrs:{prop:"activeImage",label:"活动图片"},scopedSlots:t._u([{key:"default",fn:function(t){return[e("img",{attrs:{src:t.row.activeImage,"min-width":"70",height:"70"}})]}}])}),e("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.handleToUpdate(a)}}},[t._v("编辑")]),e("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(e){return t.handleToRemove(a)}}},[t._v("删除")])]}}])})],1),e("el-pagination",{attrs:{id:"pagination",background:"",layout:"prev, pager, next",total:t.total,"page-size":10},on:{"current-change":t.handleChange}})],1)},i=[],o={data:function(){return{tableData:[],total:0}},methods:{handleChange:function(t){var a=this;this.nowpage=t,this.$axios.get("/api/active/activeList",{params:{page:t}}).then((function(t){0==t.data.code&&(a.tableData=t.data.info)}))},handleToUpdate:function(t){var a=t.row.postId;this.$router.push("/admin/activeUpdate/"+a)},handleToRemove:function(t){var a=this,e=t.row.postId;t.$index;this.$confirm("此操作将永久删除该商品, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){a.$axios.get("/api/active/activeRemove",{params:{postId:e}}).then((function(t){0==t.data.code?(a.$message({type:"success",message:"删除成功!"}),location.reload()):a.$message({type:"success",message:"删除失败!"})})).catch((function(){}))})).catch((function(){a.$message({type:"info",message:"已取消删除"})}))}},mounted:function(){var t=this;this.$axios.get("/api/active/activeList",{params:{page:1}}).then((function(a){a&&(t.tableData=a.data.info,t.total=a.data.total)}))}},s=o,c=(e("6369"),e("2c07")),r=Object(c["a"])(s,n,i,!1,null,"3ddb7e32",null);a["default"]=r.exports},6369:function(t,a,e){"use strict";e("7a42")},"7a42":function(t,a,e){}}]);
//# sourceMappingURL=chunk-5005301a.5d3ec147.js.map