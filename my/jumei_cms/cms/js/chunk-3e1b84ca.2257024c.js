(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e1b84ca"],{"27b8":function(e,r,s){"use strict";s("d275")},"73cf":function(e,r,s){"use strict";s.r(r);var t=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{attrs:{id:"register"}},[s("el-form",{ref:"ruleForm",attrs:{"status-icon":"","label-width":"100px",model:e.ruleForm,rules:e.rules}},[s("el-form-item",{attrs:{label:"用户名",prop:"username"}},[s("el-input",{attrs:{type:"text",autocomplete:"off"},model:{value:e.ruleForm.username,callback:function(r){e.$set(e.ruleForm,"username",r)},expression:"ruleForm.username"}})],1),s("el-form-item",{attrs:{label:"密码",prop:"pass"}},[s("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.pass,callback:function(r){e.$set(e.ruleForm,"pass",r)},expression:"ruleForm.pass"}})],1),s("el-form-item",{attrs:{label:"确认密码",prop:"checkpass"}},[s("el-input",{attrs:{type:"password"},model:{value:e.ruleForm.checkpass,callback:function(r){e.$set(e.ruleForm,"checkpass",r)},expression:"ruleForm.checkpass"}})],1),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v("注册")]),s("router-link",{attrs:{to:"/login",id:"href"}},[e._v("立即登录")])],1)],1)],1)},o=[],a={data:function(){var e=this,r=function(e,r,s){""===r?s(new Error("用户名不能为空")):s()},s=function(e,r,s){""===r?s(new Error("密码不能为空")):s()},t=function(r,s,t){""===s?t(new Error("密码不能为空")):s!==e.ruleForm.pass?t(new Error("两次输入密码不一致!")):t()};return{ruleForm:{username:"",pass:"",checkpass:""},rules:{username:[{validator:r,trigger:"blur"}],pass:[{validator:s,trigger:"blur"}],checkpass:[{validator:t,trigger:"blur"}]}}},methods:{submitForm:function(e){var r=this;this.$refs[e].validate((function(e){if(!e)return r.$message({showClose:!0,message:"注册失败！",type:"error"}),!1;r.$axios.post("/api/admin/register",{username:r.ruleForm.username,password:r.ruleForm.pass}).then((function(e){0==e.data.code&&r.$message({showClose:!0,message:"恭喜你，注册成功！",type:"success"}),r.$router.push("/login")}))}))}},mounted:function(){}},u=a,l=(s("27b8"),s("2c07")),n=Object(l["a"])(u,t,o,!1,null,"196128f8",null);r["default"]=n.exports},d275:function(e,r,s){}}]);
//# sourceMappingURL=chunk-3e1b84ca.2257024c.js.map