<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品添加</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form id="postaddForm" ref="form" :model="form" label-width="80px">
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
          <input type="hidden"/>
        </el-upload>
      </el-form-item>
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
        <el-button type="primary" @click="onSubmit">添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    data(){
        return {
          inputVisible : false,
          inputValue: '',
          form : {
              goodsImage : '',
              goodsName : '',
              goodsNewPrice : '',
              goodsOldPrice : '',
              goodsShop  : '',
              goodsType : '',
              smIcon : '',
              buyNumber : '',
              shopIcon : ''
            },
          imageUrl: '',
          file : {},
          banner : []
        }
    },
    methods : {
      handleAvatarSuccess(res, file) {
      this.file = file.raw;  //上传的对象
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
      onSubmit(){

          // 利用elementUI自带的上传控件

          console.log(this.banner);
          var file = this.file;
          var param = new FormData();
          param.append('filename',file);
          param.append('imageUrl',this.imageUrl);
          param.append('goodsName',this.form.goodsName);
          param.append('goodsNewPrice',this.form.goodsNewPrice);
          param.append('goodsOldPrice',this.form.goodsOldPrice);
          param.append('goodsShop',this.form.goodsShop);
          param.append('goodsType',this.form.goodsType);
          param.append('smIcon',this.form.smIcon);
          param.append('buyNumber',this.form.buyNumber);
          param.append('shopIcon',this.form.shopIcon);
          param.append('banner',this.banner);
          this.$axios.post('/api/post/add', param , {
            headers : {'Content-Type': 'multipart/form-data'}
          }).then((res)=>{
              if(res.data.code == 0){
                  this.$message({
                      message: '恭喜你，添加商品成功',
                      type: 'success'
                  });
              }
              else{
                  this.$message({
                      message: 'C添加失败，请重新添加',
                      type: 'error'
                  });
              }
          }).catch(()=>{
              this.$message({
                  message: '添加失败，请重新添加',
                  type: 'error'
              });
          });
      },
      
    }
}
</script>

<style>
#postaddForm {
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
.el-form-item__content{
  text-align: left;
}
</style>
