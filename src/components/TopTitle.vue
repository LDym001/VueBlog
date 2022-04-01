<template>
  <div class="top-container">
    <div class="title-content">
      <div class="title-left">
        <a href="/">首页</a>
        <input type="text" name="" id="" placeholder="请输入查找内容...">
      </div>
      <div class="title-right">
        <a href="/">首页</a>
        <router-link v-if="loginStatus" to="/login">个人主页</router-link>
        <router-link v-else="loginStatus" to="/login">登录</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {computed,ref} from 'vue'
import {useStore} from 'vuex'
export default {
  name: 'TopTitle',
  setup() {
    const store = useStore()
    return {
      loginStatus: computed(() => store.state.isLogin)
    }
  }
}
</script>

<style scoped>
  .top-container {
    height: 49px;
    width: 100%;
    overflow: hidden;
    font-size: 16px;
    text-align: center;
    background-color: #fff;
    margin-bottom: 20px;
  }
  .title-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 6px;
    width: 70%;
    min-width: 500px;
    height: 36px;
    /* background-color: aliceblue; */
  }
  .title-right a {
    margin-right: 20px;
  }
  .title-left input {
    margin-left: 30px;
    min-width: 160px;
    height: 26px;
    border-radius: 8px;
    border: none;
    padding-left: 7px;
  }
  .title-left input:focus {
    outline: none;
  }
</style>