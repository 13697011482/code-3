<template>
  <div id="register">
    <van-nav-bar
        title="注册"
        right-text="登录"
        left-text="返回"
        @click-right="changeState"
        @click-left="goBack"
    />
    <van-form @submit="onSubmit" id="registerForm">
        <div class="title">
            <span>账号注册</span>
        </div>
        <van-field
            v-model="username"
            name="username"
            placeholder="请输入账号"
            :rules="[{ required: true, message: '请填写账号' }]"
        />
        <van-field
            v-model="password"
            type="password"
            name="password"
            placeholder="6-16位登录密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
         <van-field
            class="checkCode"
            v-model="checkCode"
            type="text"
            name="checkCode"
            placeholder="请输入下图验证码"
            :rules="[{ required: true, message: '请填写验证码' }]"
        />
        <img :src="checkImg" alt="" @click="changeSrc">
        <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit" color="#feb2c5">
            注册
            </van-button>
        </div>
        <div class="reg-agree">
            点击注册表示同意 <a href="http://i.jumei.com/m/account/protocol">《聚美优品用户协议》</a>
        </div>
    </van-form>
  </div>
</template>

<script>
export default {
    data() {
        return {
        username: '',
        password: '',
        checkCode : '',
        checkImg: '',
        };
    },
    created() {
        this.changeSrc()
    },
    methods: {
        changeState() {
            this.$router.push('/login')
        },
        goBack() {
            history.go(-1)
        },
        onSubmit(values) {
            console.log('submit', values);
            this.$axios.post('/api/users/register',{
                username : this.username,
                password : this.password,
                checkCode : this.checkCode
            }).then(res => {
                if(res.data.code == "0") {
                    this.$notify({type : 'success', message : '注册成功'});
                    this.username = '';
                    this.password = '';
                    this.checkCode = '';
                    this.$router.push('/login');
                } else {
                    this.$notify({type : 'danger', message : '验证码错误或账号已存在'})
                }
            }).catch(err => {
                    this.$notify({type : 'danger', message : '注册失败'})
            })
        },
        changeSrc() {
            this.checkImg='/api/users/checkCode?'+Math.random()
        }
    },
}
</script>

<style>
    #registerForm {
        position: relative;
        width: 80%;
        margin: 0 10%;
    }

    #registerForm .title {
        text-align: center;
        margin: 0.1rem;
        color: #999;
    }

    #registerForm .van-cell {
        padding: 0.08rem 0;
    }

    #registerForm .title::before {
        content: '';
        font-size: 0px;
        border-bottom: solid 1px #f5f5f5;
        position: absolute;
        top: 0.07rem;     
        left: 0px;
        width: 100%;
        z-index: -1;
    }

    #registerForm .van-field__value {
        padding-bottom: 0.1rem;
    }

    #registerForm .van-field__body {
        border-radius: 0.25rem;
        background-color: #f5f5f5;
        padding: 0.05rem 0.2rem;
    }

    #registerForm .van-cell::after {
        border: none;
    }

    #registerForm .van-field__error-message {
        position: absolute;
        top: 0.35rem;
        left: 0.2rem;
    }

    #registerForm .reg-agree {
        text-align: center;
    }

    #registerForm .reg-agree a {
        color: #808080;
    }
</style>