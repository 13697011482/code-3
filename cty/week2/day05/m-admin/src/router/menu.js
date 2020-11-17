import React , { lazy } from 'react'
import {
  HomeOutlined,
  PictureOutlined,
  MenuOutlined,
  PicLeftOutlined,
  SwapLeftOutlined,
  BorderTopOutlined,
  ClockCircleOutlined,
  UserOutlined
} from '@ant-design/icons'
const menus = [
  {
    path: '/',
    title: '系统首页',
    icon: <HomeOutlined />,
    component : lazy(() => import('./../views/home/Index'))
  },
  {
    path: '/bannermanager',
    title: '轮播图管理',
    icon: <PictureOutlined />,
    children: [
      {
        path: '/bannermanager/list',
        title: '轮播图列表',
        icon: <MenuOutlined />,
        component : lazy(() => import('./../views/banner/Index'))
      }
    ]
  },
  {
    path: '/navigatormanager',
    title: '快捷导航管理',
    icon: <PicLeftOutlined />,
    children: [
      {
        path: '/navigatormanager/list',
        title: '导航列表',
        icon: <MenuOutlined />,
        component : lazy(() => import('./../views/navigator/List'))
      },
      {
        path: '/navigatormanager/category',
        title: '导航分类',
        icon: <SwapLeftOutlined />,
        component : lazy(() => import('./../views/navigator/Category'))
      },
      {
        path: '/navigatormanager/homelist',
        title: '首页导航',
        icon: <BorderTopOutlined />,
        component : lazy(() => import('./../views/navigator/NavRouter'))
      }
    ]
  },
  {
    path: '/seckillmanager',
    title: '秒杀管理',
    icon: <ClockCircleOutlined />,
    children: [
      {
        path: '/seckillmanager/list',
        title: '秒杀列表',
        icon: <MenuOutlined />,
        component : lazy(() => import('./../views/seckill/List'))
      }
    ]
  },
  {
    path: '/usermanager',
    title: '用户管理',
    icon: <UserOutlined />,
    children: [
      {
        path: '/usermanager/list',
        title: '用户列表',
        icon: <MenuOutlined />,
        component : lazy(() => import('./../views/user/List'))
      }
    ]
  },
  {
    path : 'setting',
    title : '设置中心',
    icon : <UserOutlined />,
    component : lazy(() => import('./../views/setting/Index')),
    meta : {
      hidden : true
    }
  }
]

export default  menus