import React, { Suspense } from 'react'
import { Spin } from 'antd'
import { Switch, Route } from 'react-router-dom'
// import RedirectRouterView from './RedirectRouterView'
import menus from './menu'
function RouterView() {
  const renderRoute = (menus) => {
    return menus.map(item => {
      if (item.children) {
        return renderRoute(item.children)
      } else {
        return <Route
          path={ item.path }
          key={item.path}
          exact
          component = { item.component } />
        }
    })
  }
  return (
    <Suspense fallback={<div className="loading"><Spin size="large" /></div>} >
      <Switch>
        {
          renderRoute(menus)
        }
        {/* <Route path="/" exact component = { lazy(() => import('../../views/home/Index'))} /> */}
        {/* <RedirectRouterView /> */}
        {/* <Redirect path="/bannermanager" to="/bannermanager/list" />
        <Redirect path="/navigatormanager" to="/navigatormanager/list" />
        <Redirect path="/seckillmanager" to="/seckillmanager/list" />
        <Redirect path="/usermanager" to="/usermanager/list" /> */}
      </Switch>
    </Suspense>
)
}

export default RouterView
