<template>
  <div id="login">
    <van-nav-bar
        title="登录"
        right-text="注册"
        left-text="返回"
        @click-right="changeState"
        @click-left="goBack"
    />
    <van-form @submit="onSubmit" id="loginForm">
        <div class="title">
            <span>使用聚美账号登录</span>
        </div>
        <van-field
            v-model="username"
            name="username"
            placeholder="已注册的账号"
            :rules="[{ required: true, message: '请输入账号' }]"
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
        <img :src="checkImg" alt="" ref="checkImg" @click="changeSrc">
        <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit" color="#feb2c5">
            登录
            </van-button>
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
        checkCode: '',
        checkImg: '',
        };
    },
    created() {
        this.changeSrc();
    },
    methods: {
        changeState() {
            this.$router.push('/register')
        },
        goBack() {
            history.go(-1)
        },
        onSubmit(values) {
            this.$axios.post('/api/users/login', {
                username : this.username,
                password : this.password,
                checkCode : this.checkCode,
            }).then(res => {
                if(res.data.code == 0) {
                    this.$notify({type : 'success', message : '登录成功'})
                    this.$store.commit('SET_USERNAME',this.username)
                    localStorage.setItem('token',res.data.token);
                    localStorage.setItem('username',this.username);
                    this.username = '';
                    this.password = '';
                    this.checkCode = '';
                    this.$router.push('/home');
                } else {
                    if(res.data.errmsg.indexOf('checkCode') > -1) {
                        this.$notify({type : 'danger', message : '验证码错误'})
                        this.changeSrc();
                    } else {
                        this.$notify({type : 'danger', message : '账号密码错误'})
                    }
                }
            }).catch(err => {
                console.log(err);
                this.$notify({type : 'danger', message : '登录失败'})
            })
        },
        changeSrc() {
            this.checkImg='/api/users/checkCode?'+Math.random();
        },
    },
}
</script>

<style>
    #login {
        background: #fff;
    }

    #loginForm {
        position: relative;
        width: 80%;
        margin: 0 10%;
    }

    #loginForm .title {
        text-align: center;
        margin: 0.1rem;
        color: #999;
    }

    #loginForm .title::before {
        content: '';
        font-size: 0px;
        border-bottom: solid 1px #f5f5f5;
        position: absolute;
        top: 0.07rem;     
        left: 0px;
        width: 100%;
        z-index: -1;
    }

    #loginForm .van-field__value {
        padding-bottom: 0.1rem;
    }

    #loginForm .van-field__body {
        border-radius: 0.25rem;
        background-color: #f5f5f5;
        padding: 0.1rem 0.2rem;
    }

    #loginForm .van-cell::after {
        border: none;
    }
/* 
    #loginForm .checkCode {
        width: 1.6rem;
    }

    .checkImg {
        position: absolute;
        right: .1rem;
        top: 1.85rem;
        width: 1.2rem;
    } */

    #loginForm .van-field__error-message {
        position: absolute;
        top: 0.4rem;
        left: 0.2rem;
    }
</style>