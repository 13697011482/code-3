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
        path : 'postEdit',
        name : 'postEdit',
        component : () => import('@/views/Admin_postEdit.vue'),
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
          template : '<div style="font-size:40px;margin: 200px auto;">欢迎进入拉钩网后台管理系统</div>'
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
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//全局路由前置守卫
// router.beforeEach((to,from,next) => {
//   if(to.path == '/login' || to.path == '/register'){
//     next();
//   }else{
//     axios.get('/api/users/info').then((res) => {
//       if(res.data.code == 0){
//         store.commit('SET_USERNAME' , res.data.username)
//         next();
//       }else{
//         next('/login')
//       }
//     }).catch((err) => {
//       next('/login')
//     })
//   }
// })

export default router
