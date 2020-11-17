import React from 'react'
import {connect} from 'react-redux'
import { Layout } from 'antd';
import logo from './../../logo.svg'
import SideMenu from './SideMenu'
import { Route} from 'react-router-dom'
import RouterView from './../../router/RouterView'
import './../../index.css'
import MainHeader from './MainHeader'

const { Sider , Content } = Layout;
@connect(state => {
  return {
    collapsed : state.getIn(['common' , 'collapsed'])
  }
})
class Index
 extends React.Component {

  renderMenu = (menus) => {
    return menus.map(item => {
      if(item.children){
        return this.renderMenu(item.children)
      }else {
        return <Route path = {item.path} exact component = {item.component}></Route>
      }
    })
  }
  render() {
    
    const { collapsed } = this.props
    console.log('11', collapsed)
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <img src={ logo } style={{width: '32px', height: '32px', margin: '0 10px 0 0'}} alt=""/>
            {collapsed ? null : <span>JD_ADMIN_PRO</span>  }
        </div>
        <SideMenu />
        </Sider>{/*  */}
        <Layout className="site-layout">
          {/* <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header> */}
          <MainHeader />
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              position : 'relative'
            }}
          >
            {/* <Suspense fallback = {<div className="loading"><Spin size="large" /></div> }>
              <Switch>
                {
                  this.renderMenu(menus)
                }
              </Switch>
            </Suspense> */}
            <RouterView />

          </Content>
        </Layout>
      </Layout>
    );
  }}

export default Index
