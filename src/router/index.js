import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login.vue'
import level from '../views/level.vue'
import checkpoint from '../views/checkpoint.vue'
import checkpoint2 from '../views/checkpoint2.vue'

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
    path: '/checkpoint',
    name: 'checkpoint',
    component: checkpoint
  },
  {
    path: '/checkpoint2',
    name: 'checkpoint2',
    component: checkpoint2
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
