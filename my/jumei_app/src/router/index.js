import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path : '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: () => import('../views/Login')
  },
  {
    path: '/register',
    component: () => import('../views/Register')
  },
  {
    path: '/home',
    redirect: '/home/index'
  },
  {
    path: '/home/:active',
    component: () => import('../views/Home')
  },
  {
    path: '/group',
    redirect: '/group/rec'
  },
  {
    path: '/group/:active',
    component: () => import('../views/Group')
  },
  {
    path: '/shopcart',
    component: () => import('../views/ShopCart')
  },
  {
    path: '/mine',
    component: () => import('../views/Mine')
  },
  {
    path: '/detail/:postId',
    component: () => import('../views/Detail'),
    props: true,
  },
  {
    path: '/group_detail/:postId',
    component: () => import('../views/GroupDetail'),
    props: true,
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})



export default router
