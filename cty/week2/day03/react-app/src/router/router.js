import Home from './view/Home'
import Kind from './view/Kind'
import Cart from './view/Cart'
import Mine from './view/Mine'
import User from './view/User'
import Admin from './view/Admin'


// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path : '/home',
    title : '首页',
    component : Home
  },
  {
    path : '/kind',
    title : '分类',
    component : Kind
  },
  {
    path : '/cart',
    title : '购物车',
    component : Cart
  },
  {
    path : '/mine',
    title : '我的',
    component : Mine,
    children : [
      {
        path : '/mine/user',
        title : '用户',
        component : User
      },
      {
        path : '/mine/admin',
        title : '管理员',
        component : Admin
      },
    ]
  }
]