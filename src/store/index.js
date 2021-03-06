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
    level:'',
    records_menu:'',
    h5_game:false
    // theater:{
    //   theater_menu:'',
    //   play_video:''
    // }
  },
  mutations: {
    SET_H5_GAME_STATUS(state, status) {
      state.h5_game = status;
    },
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