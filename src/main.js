import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Vuex from 'vuex'
import store from './store'

Vue.use(Vuex)

Vue.use(VueSweetalert2);

Vue.prototype.$axios = axios;

Vue.use(VueAxios, axios);

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

