import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/list',
    name : 'list',
    component : () => import('@/views/List')
  },
  {
    path: '/search',
    name : 'search',
    component : () => import('@/views/Search')
  },
  {
    path: '/mine',
    name : 'mine',
    component : () => import('@/views/Mine')
  },
  {
    path: '/detail/:postId',
    name : 'detail',
    component : () => import('@/views/Detail'),
    props : true
  },
  {
    path: '/*',
    redirect : '/list'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
