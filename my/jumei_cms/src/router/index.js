import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import store from '../store/index'
Vue.use(VueRouter)

const routes = [
  {
    path : '/login',
    name : 'login',
    component : () => import('@/views/Login.vue')
  },
  {
    path : '/register',
    name : 'register',
    component : () => import('@/views/Register.vue')
  },
  {
    path : '/admin',
    name : 'admin',
    component : () => import('@/views/Admin.vue'),
    children : [
      {
        path : 'postAdd',
        name : 'postAdd',
        component : () => import('@/views/Admin_postAdd.vue'),
      }, 
      {
        path : 'activeAdd',
        name : 'activeAdd',
        component : () => import('@/views/Admin_activeAdd.vue'),
      },
      {
        path : 'postEdit',
        name : 'postEdit',
        component : () => import('@/views/Admin_postEdit.vue'),
      },
      {
        path : 'activeEdit',
        name : 'activeEdit',
        component : () => import('@/views/Admin_activeEdit.vue'),
      },
      {
        path : 'activeUpdate/:postId',
        name : 'activeUpdate',
        component : () => import('@/views/Admin_activeUpdate.vue'),
        props : true
      },
      {
        path : 'postUpdate/:postId',
        name : 'postUpdate',
        component : () => import('@/views/Admin_postUpdate.vue'),
        props : true
      },
      {
        path : '',
        component : {
          template : '<div style="font-size:40px;margin: 200px auto;">欢迎进入聚美优品后台管理系统</div>'
        }
      }
    ]
  },
  {
    path : '/*',
    redirect : '/login'
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

//全局路由前置守卫
router.beforeEach((to,from,next) => {
  if(to.path == '/login' || to.path == '/register'){
    next();
  }else{
    axios.get('/api/admin/info').then((res) => {
      if(res.data.code == 0){
        store.commit('SET_USERNAME' , res.data.username)
        next();
      }else{
        next('/login')
      }
    }).catch((err) => {
      next('/login')
    })
  }
})

export default router
