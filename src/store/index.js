import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    home:true,
    isLoading: false,
    helper:true,
    username:"",
    password:"",
    identity:'',
    level:''
  },
  mutations: {
    SET_IS_LOADING(state, status) {
      state.isLoading = status;
    },
    SET_USER_INFO(state, userInfo) {
      state.username = userInfo.username;
      state.password = userInfo.password;
    },
    INIT(state, data) {
      state.isLoading = data.isLoading;
      // state.helper = data.helper;
      state.username = data.username;
      state.password = data.password;
      state.identity = data.identity;
      state.level = data.level;
    }
  },
  actions: {
  },
  modules: {
  }
})