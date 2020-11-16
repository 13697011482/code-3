<template>
  <div id="admin">
    <el-container>
      <el-header>
        <span id="head_left">拉勾网后台管理系统</span>
        <span id="head_right">欢迎：{{$store.state.username}}<a id="postOut" href="/login">退出</a></span>
      </el-header>
      <el-container>
        <el-aside id="aside" width="200px">
          <el-menu
                    :default-active="$route.path"
                    background-color="transparent"
                    class="el-menu-vertical-demo"
                    router>
      
                    <el-menu-item index="/admin/postEdit">
                        <i class="el-icon-menu"></i>
                        <span slot="title">职位管理</span>
                    </el-menu-item>
                    <el-menu-item index="/admin/postAdd">
                        <i class="el-icon-document"></i>
                        <span slot="title">职位添加</span>
                    </el-menu-item>
     
                </el-menu>
        </el-aside>
        <el-main id="main">
          <router-view/> 
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  methods : {
    postOut(){
      localStorage.removeItem('token')
    }
  }
}
</script>

<style scoped>

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /* line-height: 160px;  */
  }
  #head_left{
    float: left;
  }
  #head_right{
    float: right;
  }
  #head_right #postOut{
    margin-left: 10px;
  }
  #aside{
    margin-bottom: -9999px;
    padding-bottom: 9999px;
    overflow: hidden;
  }
  #main{
    margin-bottom: -9999px;
    padding-bottom: 9999px;
    overflow: hidden;
  }
</style>