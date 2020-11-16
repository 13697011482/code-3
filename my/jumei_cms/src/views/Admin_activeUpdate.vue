<template>
  <div id="update">
     <el-breadcrumb id="breadcrumb" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/admin/activeEdit' }">活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动更新</el-breadcrumb-item>
     </el-breadcrumb>
     <el-form id="form_add" ref="form" :model="form" label-width="80px">
            
          <el-form-item label="活动名称">
            <el-input v-model="form.activeName"></el-input>
          </el-form-item>
          <el-form-item label="活动类型">
            <el-input v-model="form.activeType"></el-input>
          </el-form-item>
          <el-form-item label="优惠">
            <el-input v-model="form.disCount"></el-input>
          </el-form-item>
          <el-form-item label="小图">
            <el-input v-model="form.smIcon"></el-input>
          </el-form-item>
          <el-form-item label="活动图片">
            <el-upload
              class="avatar-uploader"
              action="https://www.mocky.io/v2/5185415ba171ea3a00704eed/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
            >
              <img v-if="activeImage" :src="activeImage" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              <input type="hidden" :value="OldimageUrl"/>
            </el-upload>
          </el-form-item>
          <input type="hidden" :value="OldimageUrl">
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
        activeName : '',
        activeType : '',
        smIcon : '',
        disCount : ''
      },
      activeImage : '',
      OldimageUrl : '',
      file : {}
    }
  },
  methods : {
    handleAvatarSuccess(res, file) {
      this.file = file.raw;  //上传的对象
      this.activeImage = URL.createObjectURL(file.raw);
    },
    onUpdate(){
      var file = this.file;
          var params = new FormData();
          params.append('filename',file);
          params.append('activeName',this.form.activeName);
          params.append('activeType',this.form.activeType);
          params.append('smIcon',this.form.smIcon);
          params.append('disCount',this.form.disCount);
          params.append('activeImage',this.activeImage);
          params.append('OldimageUrl',this.OldimageUrl);
          params.append('postId',this.postId);
          

      this.$axios.post('/api/active/activeUpdate' , params , {
        headers : {'Content-Type': 'multipart/form-data'}
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
    this.$axios.get('/api/active/activeFind' , {
    params : {postId : this.postId}
    }).then((res) => {
      if(res.data.code == 0){
        this.form = res.data.info
        this.activeImage = res.data.info.activeImage
        this.OldimageUrl = this.activeImage
      }
    }).catch((err) => {
       this.$message({
        message: '更新失败，请重新操作',
        type: 'error'
      });
    })
  },
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
  float: left;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
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
  width: 376px;
  height: 130px;
  display: block;
}
.el-form-item__content{
  text-align: left;
}
</style>