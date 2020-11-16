<template>
  <div id="postAdd">
    <el-breadcrumb id="breadcrumb" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>职位添加</el-breadcrumb-item>
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
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          >
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i> 
          <input type="hidden">
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
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
      },
      imageUrl : "",
      file : {}
    }
  },
  methods : {

    handleAvatarSuccess(res, file) {
      this.file = file.raw;  //上传的对象
      this.imageUrl = URL.createObjectURL(file.raw);
    },

    onSubmit(){
      var file = this.file;
      var params = new FormData();
      params.append('filename' , file);
      params.append('postName' , this.form.postName);
      params.append('postCity' , this.form.postCity);
      params.append('postCompany' , this.form.postCompany);
      params.append('postNumber' , this.form.postNumber);
      params.append('postMoney' , this.form.postMoney);
      params.append('postYear' , this.form.postYear);
      params.append('postEdu' , this.form.postEdu);

      this.$axios.post('/api/post/add' , params , {
        headers : {'Content-Type': 'multipart/form-data'}
      }).then((res) => {
        if(res){
          // console.log(res.data);
          if(res.data.code == 0){
            this.$message({
              showClose: true,
              message: '恭喜你，添加成功！',
              type: 'success'
            });
          }else{
            this.$message({
              showClose: true,
              message: '添加失败！',
              type: 'error'
            });
            return false;
          }
        }
        })
      }
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
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>