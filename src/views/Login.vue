<template>
  <div class="login">
    <div class="login-content">
      <div class="login-nav">
        <div>
          <a href="/">首页</a>
          <span> > 登录</span>
        </div>
      </div>
      <div class="login-item">
        <div class="username">
          <div>
            <span>用户名</span>
            <input type="text" ref="username" placeholder="用户名或注册邮箱">
          </div>
        </div>
        <div class="password">
          <span>密码</span>
          <input ref="password" type="password">
        </div>
        <div class="login-btn">
          <button @click="login">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
import {getCurrentInstance} from 'vue'

export default {
  name: 'Login',
  setup() {
    const _this = getCurrentInstance()
    const router = useRouter()
    const store = useStore()
    const login = () => {
      axios.post('http://127.0.0.1:3000/login',{
        username: _this.refs.username.value,
        password: _this.refs.password.value
      })
      .then(res => {
        localStorage.setItem('token',res.data.token)
        store.commit('changeLoginStatus',_this.refs.username.value)
        router.push('/')
      })
      .catch(error => {
        console.log(error);
      })
    }
    return {
      login
    }
  }
}
</script>

<style>
  .login {
    background-color: #e2e2e2;
    padding: 20px 0;
  }
  .login-content {
    margin: 0 200px;
    background-color: #fff;
    min-width: 600px;
  }
  .login-nav {
    height: 40px;
  }
  .login-nav div {
    padding-top: 10px;
    margin-left: 5px;
  }
  .username {
    height: 60px;
  }
  .username div {
    padding-top: 15px;
    margin-left: 70px;
  }
  .username span {
    margin-right: 5px;
  }
  .username input {
    height: 30px;
    width: 300px;
    border-radius: 3px;
    border: 1px solid #000;
  }
  input {
    padding-left: 1em;
  }
  .password {
    margin-left: 84px;
  }
  .password span {
    margin-right: 5px;
  }
  .password input {
    height: 30px;
    width: 300px;
    border-radius: 3px;
    border: 1px solid #000;
  }
  .login-btn {
    margin: 15px 0 0 125px;
    padding-bottom: 20px;
  }
  .login-btn button {
    height: 30px;
    width: 80px;
    border-radius: 5px;
    border: 1px solid #000;
  }
</style>