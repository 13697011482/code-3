<template>
  <div id="update">
    <el-breadcrumb id="breadcrumb" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/admin/postEdit' }"
        >商品管理</el-breadcrumb-item
      >
      <el-breadcrumb-item>商品更新</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form id="form_add" ref="form" :model="form" label-width="80px">
      <!-- <el-form-item label="商品图片">
              <el-input v-model="form.goodsImage"></el-input>
            </el-form-item> -->
      <el-form-item label="商品名称">
        <el-input v-model="form.goodsName"></el-input>
      </el-form-item>
      <el-form-item label="新价格">
        <el-input v-model="form.goodsNewPrice"></el-input>
      </el-form-item>
      <el-form-item label="原价">
        <el-input v-model="form.goodsOldPrice"></el-input>
      </el-form-item>
      <el-form-item label="店铺名称">
        <el-input v-model="form.goodsShop"></el-input>
      </el-form-item>
      <el-form-item label="商品类型">
        <el-input v-model="form.goodsType"></el-input>
      </el-form-item>
      <el-form-item label="小图标">
        <el-input v-model="form.smIcon"></el-input>
      </el-form-item>
      <el-form-item label="店铺图标">
        <el-input v-model="form.shopIcon"></el-input>
      </el-form-item>
      <el-form-item label="购买人数">
        <el-input v-model="form.buyNumber"></el-input>
      </el-form-item>
      <el-form-item label="商品图片">
        <el-upload
          class="avatar-uploader"
          action="https://www.mocky.io/v2/5185415ba171ea3a00704eed/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          <input type="hidden" :value="OldimageUrl" />
        </el-upload>
      </el-form-item>
      <input type="hidden" :value="OldimageUrl" />
      <el-form-item label="轮播图">
        <el-tag
          :key="tag"
          v-for="tag in banner"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)"
        >
          {{ tag }}
        </el-tag>
        <el-input
          class="input-new-tag"
          v-if="inputVisible"
          v-model="inputValue"
          ref="saveTagInput"
          size="small"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm"
        >
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput"
          >+ New Tag</el-button
        >
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onUpdate">更新</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: ["postId"],
  data() {
    return {
      inputVisible : false,
      inputValue: '',
      form: {
        goodsName: "",
        goodsNewPrice: "",
        goodsOldPrice: "",
        goodsShop: "",
        goodsType: "",
        smIcon: "",
        buyNumber: "",
        shopIcon: "",
      },
      imageUrl: "",
      OldimageUrl: "",
      banner: [],
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.file = file.raw; //上传的对象
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    handleClose(tag){
        this.banner.splice(this.banner.indexOf(tag), 1);
      },
      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },
      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.banner.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },
    onUpdate() {
      this.$axios
        .post(
          "/api/post/cmsUpdate",
          {
            imageUrl: this.imageUrl,
            goodsName: this.form.goodsName,
            goodsNewPrice: this.form.goodsNewPrice,
            goodsOldPrice: this.form.goodsOldPrice,
            goodsShop: this.form.goodsShop,
            goodsType: this.form.goodsType,
            smIcon: this.form.smIcon,
            buyNumber: this.form.buyNumber,
            shopIcon: this.form.shopIcon,
            OldimageUrl: this.OldimageUrl,
            
          },
          {
            params: { postId: this.postId },
          }
        )
        .then((res) => {
          if (res.data.code == 0) {
            this.$message({
              message: "更新成功",
              type: "success",
            });
          }
        })
        .catch((err) => {
          this.$message({
            message: "更新失败，请重新操作",
            type: "error",
          });
        });
    },
  },
  mounted() {
    this.$axios
      .get("/api/post/cmsFind", {
        params: { postId: this.postId },
      })
      .then((res) => { 
        if (res.data.code == 0) {
          this.form = res.data.info;
          this.imageUrl = res.data.info.imageUrl;
          this.banner = res.data.info.banner[0].split(",")
        }
      })
      .catch((err) => {
        this.$message({
          message: "更新失败，请重新操作",
          type: "error",
        });
      });
  },
};
</script>

<style>
#breadcrumb {
  padding: 0 20px;
  font-size: 18px;
}
#form_add {
  width: 500px;
  margin-top: 30px;
}
#form_add .el-form-item__content {
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
.el-form-item__content {
  text-align: left;
}
</style>
