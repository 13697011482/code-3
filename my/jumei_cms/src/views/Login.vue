<template>
  <div id="login">
    <el-form status-icon ref="ruleForm" :model="ruleForm" :rules="rules">
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        <router-link to="/register" id="href">立即注册</router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data(){

    function validateUser (rule, value, callback){
      if (value === "") {
          callback(new Error('用户名不能为空'));
      }else{
        callback()
      }
    }
    function validatePass (rule, value, callback){
      if (value === "") {
          callback(new Error('密码不能为空'));
      }else{
        callback()
      }
    }

    return {
      ruleForm : {
        username : '',
        pass : ''
      }, 
      rules: {
          username: [
            { validator: validateUser, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
        }
    }
  },
  methods : {
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$axios.post('/api/admin/login' , {
              username : this.ruleForm.username,
              password : this.ruleForm.pass
            }).then((res) => {
              if(res.data.code == 0){
                  this.$message({
                    showClose: true,
                    message: '恭喜你，登录成功！',
                    type: 'success'
                  });
                
                this.$router.push('/admin')
                localStorage.setItem('token' , res.data.token)
                }else {
                  this.$message({
                    showClose: true,
                    message: '登录失败！',
                    type: 'error'
                  });
                  return false;
                }
            })
          } 
        });
      },
  }
}
</script>

<style>
#login{
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