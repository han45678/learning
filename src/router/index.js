import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login.vue'
import level from '../views/level.vue'
import checkpoint from '../views/checkpoint.vue'
import checkpoint_pb from '../views/checkpoint_pb.vue'
import playground from '../views/playground.vue'
import records from '../views/records.vue'
import theater from '../views/theater.vue'
import settings from '../views/settings.vue'
import point from '../views/point.vue'
import danny from '../views/danny.vue'
import test2 from '../views/test2.vue'
import d6 from '../views/game_page/d6.vue'
import store from '../store'


Vue.use(VueRouter)


const routes = [
  {
    path: '*',
    redirect: '/',
    //避免進入沒定義的頁面(在網址列上亂打)
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/level',
    name: 'level',
    component: level
  },
  {
    path: '/checkpoint',
    name: 'checkpoint',
    component: checkpoint
  },
  {
    path: '/checkpoint_pb',
    name: 'checkpoint_pb',
    component: checkpoint_pb
  },
  {
    path: '/playground',
    name: 'playground',
    component: playground
  },
  {
    path: '/records',
    name: 'records',
    component: records
  },
  {
    path: '/theater',
    name: 'theater',
    component: theater
  },
  {
    path: '/settings',
    name: 'settings',
    component: settings
  },
  {
    path: '/point',
    name: 'point',
    component: point
  },
  {
    path: '/danny',
    name: 'danny',
    component: danny
  },
  {
    path: '/test2',
    name: 'test2',
    component:test2
  },
  {
    path: '/d6',
    name: 'd6',
    component:d6
  },
]
const router = new VueRouter({
  mode: 'history',
  routes
})

// var login = 1;
// localStorage.setItem('user',login);

// localStorage.getItem('user');

router.beforeEach((to, form, next) => {
  const info = JSON.parse(localStorage.getItem('info'));
  // console.log(to, info, store);
  next();

  // if (info && to.name !== 'login') {
    // } else {
      //   next({
        //     name: 'login'
        //   });
        // }
    if (to.name !== 'Login' && !info) next({ name: 'login' })
    else {
      store.commit('INIT', info);
      next()
    }
})

// router.beforeEach((to, from, next) => {
//   const isLogin = localStorage.getItem('user');
//   if (isLogin) {
//     next();
//     if(to.path == '/login') {
//       alert('已登入')
//       next('/');
//     }
//   } else {
//     if( to.path !== '/login' && to.path !== '/')
//       next('/login')
//     else
//       next()
//   }
// })





export default router