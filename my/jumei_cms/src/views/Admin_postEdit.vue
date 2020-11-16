<template>
  <div id="postEdit">
    <el-breadcrumb id="breadcrumb" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table id="edit_tab" :data="tableData" stripe style="width: 100%">
      <el-table-column prop="goodsName" label="商品名称"></el-table-column>
      <el-table-column prop="goodsShop" label="店铺名称"></el-table-column>
      <el-table-column prop="imageUrl" label="商品图片">
         <template slot-scope="scope">            
            <img :src="scope.row.imageUrl"  min-width="70" height="70" />
          </template>   
      </el-table-column>
      <el-table-column prop="goodsType" label="商品类型"></el-table-column>
      <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="primary" size="small" @click="handleToUpdate(scope)">编辑</el-button>
              <el-button type="danger" size="small" @click="handleToRemove(scope)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <el-pagination id="pagination" background layout="prev, pager, next" :total="total" :page-size="10" @current-change="handleChange"></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      total : 0,
    }
  },
  methods : {
    handleChange(nowpage){
      this.nowpage = nowpage
      this.$axios.get('/api/post/cmsList' , {
        params : {page : nowpage}
      }).then((res) => {
        if(res.data.code == 0){
        this.tableData = res.data.info
        }
      })
    },
    handleToUpdate(scope){
      var postId = scope.row.postId
      this.$router.push('/admin/postUpdate/' + postId)
    },
    handleToRemove(scope){
      var postId = scope.row.postId
      var index = scope.$index
      console.log(index , postId , scope);
      this.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$axios.get('/api/post/cmsRemove' , {
            params : {postId}
          }).then((res) => {
            if(res.data.code == 0){
              // console.log(res.data);
              this.$message({
                type: 'success',
                message: '删除成功!'
             });
             location.reload();
            }else{
              this.$message({
                type: 'success',
                message: '删除失败!'
             });
            }
          }).catch(() => {

          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    }
  },
  mounted(){
    this.$axios.get('/api/post/cmsList' , {
      params : {page : 1}
    }).then((res) => {
      if(res){
        this.tableData = res.data.info
        this.total = res.data.total
      }
    })
  }

}
</script>

<style scoped>
#edit_tab{
  margin-top: 20px;
}
#postEdit .el-table_1_column_1{
  height: 30px;
}
#pagination{
  margin-top: 20px;
}
</style>