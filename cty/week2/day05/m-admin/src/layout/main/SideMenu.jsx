import React , {useState} from 'react'
import { Menu } from 'antd'
import menus from './../../router/menu'
import {useHistory, useLocation, withRouter} from 'react-router-dom'
const {SubMenu} = Menu
const rootSubmenuKeys = []
menus.forEach(item => {
  item.children && rootSubmenuKeys.push(item.path)
})

const SideMenu =  withRouter((props) => {
  const [openKeys , setOpenKeys] = useState([])
  const [selectedKeys , setSelectedKeys] = useState([])
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
  const openChange = (keys) => {
    console.log(keys);
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    console.log(latestOpenKey) 
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  }
  const {pathname }= useLocation()
  const type = '/' + pathname.split('/')[1]
  // useEffect(() => {
  //   // setOpenKeys(type)
  //   setSelectedKeys(pathname)
  // })
  return (
    <Menu 
    theme="dark" 
    mode="inline" 
    defaultSelectedKeys={[pathname]}
    defaultOpenKeys={[type]}
    openKeys = { openKeys }
    selectedKeys = { selectedKeys } 
    onClick = {goPage}
    onOpenChange = {openChange}>
      {
        renderMenu(menus)
      }
    </Menu>
  )
})
 

export default SideMenu
