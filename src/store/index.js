import { createStore } from "vuex";

export default createStore({
  state: {
    isLogin: false,
    username: ''
  },
  mutations: {
    changeLoginStatus(state,uname) {
      console.log('-------------');
      console.log('正在修改登陆状态');
      console.log(state.isLogin);
      console.log('------------');
      state.isLogin = !state.isLogin
      state.username = uname
      console.log(state.isLogin);
      console.log(state.username);
    }
  }
})