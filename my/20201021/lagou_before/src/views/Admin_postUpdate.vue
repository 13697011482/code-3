<template>
  <div id="update">
     <el-breadcrumb id="breadcrumb" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/admin/postEdit' }">职位管理</el-breadcrumb-item>
      <el-breadcrumb-item>职位更新</el-breadcrumb-item>
     </el-breadcrumb>
     <el-form id="form_add" ref="form" :model="form" label-width="80px">
      <el-form-item label="职位名称">
        <el-input v-model="form.postName"></el-input>
      </el-form-item>
      <el-form-item label="工作地点">
        <el-input v-model="form.postCity"></el-input>
      </el-form-item>
      <el-form-item label="公司名称">
        <el-input v-model="form.postCompany"></el-input>
      </el-form-item>
      <el-form-item label="招聘人数">
        <el-input v-model="form.postNumber"></el-input>
      </el-form-item>
      <el-form-item label="薪资范围">
        <el-select v-model="form.postMoney" placeholder="请选择">
          <el-option value="5k以下">5k以下</el-option>
          <el-option value="5k-10k">5k-10k</el-option>
          <el-option value="10k-15k">10k-15k</el-option>
          <el-option value="15k-20k">15k-20k</el-option>
          <el-option value="25k以上">25k以上</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="工作经历">
        <el-select v-model="form.postYear" placeholder="请选择">
          <el-option value="不限">不限</el-option>
          <el-option value="1年以下">1年以下</el-option>
          <el-option value="1-3年">1-3年</el-option>
          <el-option value="3-5年">3-5年</el-option>
          <el-option value="5年以上">5年以上</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="最高学历">
        <el-select v-model="form.postEdu" placeholder="请选择">
          <el-option value="不限">不限</el-option>
          <el-option value="专科">专科</el-option>
          <el-option value="本科">本科</el-option>
          <el-option value="硕士研究生">硕士研究生</el-option>
          <el-option value="博士研究生">博士研究生</el-option>
        </el-select>
      </el-form-item>
      
      <el-form-item>
        <el-button type="primary" @click="onUpdate">更新</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props : ['postId'],
  data(){
    return {
      form : {
        postName : '',
        postCity : '',
        postCompany : '',
        postNumber : '',
        postMoney : '',
        postYear : '',
        postEdu : ''
      }
    }
  },
  methods : {
    onUpdate(){
      this.$axios.post('/api/post/update' , {
        postName : this.form.postName,
        postCity : this.form.postCity,
        postCompany : this.form.postCompany,
        postNumber : this.form.postNumber,
        postMoney : this.form.postMoney,
        postYear : this.form.postYear,
        postEdu : this.form.postEdu,
      } , {
        params : {postId : this.postId}
      }).then((res) => {
        if(res.data.code == 0){
          this.$message({
            message: '更新成功',
            type: 'success'
          });
        }
      }).catch((err) => {
        this.$message({
          message: '更新失败，请重新操作',
          type: 'error'
        });
      })
    } 
  },
  mounted(){
    this.$axios.get('/api/post/find' , {
      params : {postId : this.postId}
    }).then((res) => {
      if(res.data.code == 0){
        this.form = res.data.info
      }
    }).catch((err) => {
       this.$message({
        message: '更新失败，请重新操作',
        type: 'error'
      });
    })
  }
}
</script>

<style>
#breadcrumb{
  padding: 0 20px ;
  font-size: 18px;
}
#form_add{
  width:500px; 
  margin-top:30px;
}
#form_add .el-form-item__content{
  text-align: left;
}
</style>