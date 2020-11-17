import React from 'react'
import { Menu } from 'antd'
import menus from './../../router/menu'
import {useHistory, useLocation, withRouter} from 'react-router-dom'
const {SubMenu} = Menu


const SideMenu =  withRouter((props) => {
  const history = useHistory()
  const goPage = ({ key }) => {
    // console.log(props);
    history.push(key)
  }
  const renderMenu = (menus) => {
    return (
     <>
      {
        menus.map(item => {
          if(item.children){
            return (
              <SubMenu key={item.path} icon={item.icon} title={item.title}>
                 {
                    renderMenu(item.children)
                 }
              </SubMenu>
            )
          }else {
            return item.meta && item.meta.hidden ? null : <Menu.Item key={item.path} icon={item.icon}>
            { item.title }
          </Menu.Item>
          }
        })
      }
     </>
    )
  }
  const {pathname }= useLocation()
  console.log(useLocation());
  const type = '/' + pathname.split('/')[1]
  return (
    <Menu 
    theme="dark" 
    mode="inline" 
    defaultSelectedKeys={[pathname]}
    defaultOpenKeys={[type]} 
    onClick = {goPage}>
      {
        renderMenu(menus)
      }
    </Menu>
  )
})
 

export default SideMenu
