<template>
  <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>职位添加</el-breadcrumb-item>
      </el-breadcrumb>
      <el-form id="postaddForm" ref="form" :model="form" label-width="80px">
          <el-form-item label="商品图片">
            <el-input v-model="form.goodsImage"></el-input>
          </el-form-item>
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
          <!-- <el-form-item label="职位薪水">
            <el-select v-model="form.postMoney" placeholder="请选择">
                <el-option value="不限"></el-option>
                <el-option value="5K以下"></el-option>
                <el-option value="5K-10K"></el-option>
                <el-option value="10K-15K"></el-option>
                <el-option value="15K-25K"></el-option>
                <el-option value="25K以上"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="职位年限">
            <el-select v-model="form.postYear" placeholder="请选择">
                <el-option value="不限"></el-option>
                <el-option value="1年以下"></el-option>
                <el-option value="1-3年"></el-option>
                <el-option value="3-5年"></el-option>
                <el-option value="5年以上"></el-option>
            </el-select>
          </el-form-item> -->
          <!-- <el-form-item>
              <label>
                  上传
                <input ref="fileInput" type="file" style="display:none">
              </label>
          </el-form-item> -->
          <!-- <el-form-item>
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                >
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
          </el-form-item> -->
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
                // postName : '',
                // postCity : '',
                // postMoney : '',
                // postYear : ''
                goodsImage : '',
                goodsName : '',
                goodsNewPrice : '',
                goodsOldPrice : '',
                goodsShop  : '',
                goodsType : ''
             },
            imageUrl: '',
            file: {}
        }
    },
    methods : {
        onSubmit(){
            
            // 利用elementUI自带的上传控件

            // var file = this.file; 
            var param = new FormData();
            // param.append('filename',file);
            param.append('goodsImage',this.form.goodsImage);
            param.append('goodsName',this.form.goodsName);
            param.append('goodsNewPrice',this.form.goodsNewPrice);
            param.append('goodsOldPrice',this.form.goodsOldPrice);
            param.append('goodsShop',this.form.goodsShop);
            param.append('goodsType',this.form.goodsType);

            this.$axios.post('/api/post/add', param).then((res)=>{
                if(res.data.code == 0){
                    this.$message({
                        message: '恭喜你，添加职位成功',
                        type: 'success'
                    });
                }
                else{
                    this.$message({
                        message: '添加失败，请重新添加',
                        type: 'error'
                    });
                }
            }).catch(()=>{
                this.$message({
                    message: '添加失败，请重新添加',
                    type: 'error'
                });
            });

            
            // 利用ajax发送文件给后端
            /* var file = this.$refs.fileInput.files[0];  // 得到上传的对象
            
            var param = new FormData();
            param.append('filename',file);
            param.append('postName',this.form.postName);
            param.append('postCity',this.form.postCity);
            param.append('postMoney',this.form.postMoney);
            param.append('postYear',this.form.postYear);

            this.$axios.post('/api/post/add', param,{
                headers: {'Content-Type': 'multipart/form-data'}
            }).then((res)=>{
                if(res.data.code == 0){
                    this.$message({
                        message: '恭喜你，添加职位成功',
                        type: 'success'
                    });
                }
                else{
                    this.$message({
                        message: '添加失败，请重新添加',
                        type: 'error'
                    });
                }
            }).catch(()=>{
                this.$message({
                    message: '添加失败，请重新添加',
                    type: 'error'
                });
            }); */


            //console.log( this.form );
            /* this.$axios.post('/api/post/add',{
                postName : this.form.postName,
                postCity : this.form.postCity,
                postMoney : this.form.postMoney,
                postYear : this.form.postYear
            }).then((res)=>{
                if(res.data.code == 0){
                    this.$message({
                        message: '恭喜你，添加职位成功',
                        type: 'success'
                    });
                }
                else{
                    this.$message({
                        message: '添加失败，请重新添加',
                        type: 'error'
                    });
                }
            }).catch(()=>{
                this.$message({
                    message: '添加失败，请重新添加',
                    type: 'error'
                });
            }); */
        },
        // handleAvatarSuccess(res, file) {
        //     this.file = file.raw;  //上传的对象
        //     this.imageUrl = URL.createObjectURL(file.raw);
        // }
    }
}
</script>

<style>
#postaddForm{ width:500px; margin-top:30px;}
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