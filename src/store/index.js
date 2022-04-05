import { createStore } from "vuex";

export default createStore({
  state: {
    isLogin: false,
    notetypes: ''
  },
  mutations: {
    changeLoginStatus(state) {
      state.isLogin = !state.isLogin
    },
    addNoteType(state,data) {
      state.notetypes = data
    }
  }
})