import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login.vue'
import level from '../views/level.vue'
import game_levels from '../views/game_levels.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
    //避免進入沒定義的頁面(在網址列上亂打)
  },
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/game_levels',
    name: 'game_levels',
    component: game_levels
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
