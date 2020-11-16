<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动添加</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form id="activeaddForm" ref="form" :model="form" label-width="80px">
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
          <input type="hidden" />
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
  data() {
    return {
      form: {
        activeName: "",
        activeType: "",
        smIcon : "",
        disCount : ""
      },
      activeImage: "",
      file: {},
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.file = file.raw; //上传的对象
      this.activeImage = URL.createObjectURL(file.raw);
    },
    onSubmit() {
      // 利用elementUI自带的上传控件

      var file = this.file;
      var params = new FormData();
      params.append("filename", file);
      params.append("activeName", this.form.activeName);
      params.append("activeType", this.form.activeType);
      params.append("smIcon", this.form.smIcon);
      params.append("disCount", this.form.disCount);
      params.append("activeImage", this.activeImage);

      this.$axios
        .post("/api/active/activeAdd", params, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          if (res.data.code == 0) {
            this.$message({
              message: "恭喜你，添加活动成功",
              type: "success",
            });
          } else {
            this.$message({
              message: "添加失败，请重新添加",
              type: "error",
            });
          }
        })
        .catch((err) => {
          console.log(err);
          this.$message({
            message: "添加失败，请重新添加",
            type: "error",
          });
        });
    },
  },
};
</script>

<style scoped>
#activeaddForm {
  width: 500px;
  margin-top: 30px;
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
.el-form-item__content {
  text-align: left;
}
</style>
