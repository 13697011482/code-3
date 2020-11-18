// import React , {useState} from 'react'
import React from 'react'
import { Layout } from 'antd';
import {connect} from 'react-redux'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import * as types from './../../store/actionTypes'
const { Header} = Layout;

function MainHeader({collapsed , changeCollapsed}) {
  // const [collapsed , setCollapsed] = useState(false)
  const toggle = () => {
    changeCollapsed(!collapsed)
  }
  return (
    <Header className="site-layout-background" style={{ padding: '0 16px' }}>
      {/* {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: toggle,
      })} */}
      {
        collapsed ? <MenuUnfoldOutlined style={{ fontSize: '24px' }} className="trigger" onClick={toggle}/> : 
        <MenuFoldOutlined style={{ fontSize: '24px' }} className="trigger" onClick={toggle}/>
      }
    </Header>
  )
}

export default connect(state => ({
  collapsed : state.getIn(['common' , 'collapsed'])
}) , dispatch => ({
  changeCollapsed(){
    dispatch({
      type : types.CHANGE_COLLAPSED,
    })
  }
}))(MainHeader)
