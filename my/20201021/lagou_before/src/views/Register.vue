<template>
  <div id="register">
     <el-form status-icon ref="ruleForm" label-width="100px" :model="ruleForm" :rules="rules">
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkpass">
        <el-input type="password" v-model="ruleForm.checkpass"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"  @click="submitForm('ruleForm')">注册</el-button>
        <router-link to="/login" id="href">立即登录</router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data(){

    var  validateUser = (rule, value, callback) => {
      if (value === "") {
          callback(new Error('用户名不能为空'));
      }else{
        callback()
      }
    }
    var  validatePass = (rule, value, callback) =>{
      if (value === "") {
          callback(new Error('密码不能为空'));
      }else{
        callback()
      }
    } 
    var validateCheckPass = (rule, value, callback) =>{
      if (value === "" ) {
          callback(new Error('密码不能为空'));
      }else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
      }else{
        callback()
      }
    }

    return {
      ruleForm : {
        username : '',
        pass : '',
        checkpass : ''
      },
      rules: {
          username: [
            { validator: validateUser, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkpass: [
            { validator: validateCheckPass, trigger: 'blur' }
          ],
        }
    }
  },
  methods : {
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {  
            this.$axios.post('/api/users/register' , {
              username : this.ruleForm.username,
              password : this.ruleForm.pass,
            }).then((res) => {
                // console.log(res.data);
                if(res.data.code == 0){
                  this.$message({
                    showClose: true,
                    message: '恭喜你，注册成功！',
                    type: 'success'
                  });
                }
                this.$router.push('/login')
            })

          } else {
            this.$message({
              showClose: true,
              message: '注册失败！',
              type: 'error'
            });
            return false;
          }
        });
      },
  },
  mounted(){

  }
}
</script>

<style scoped>
#register{
  width: 500px;
  margin: 30px auto;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 15px;
}
#href{
  float: right;
  font-size: 18px;
}
</style>