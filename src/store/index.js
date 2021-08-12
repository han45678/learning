import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading:false,
    helper:true,
    username:"",
    password:"",
    identity:'',
    level:''
  },
  mutations: {

  },
  actions: {
  },
  modules: {
  }
})