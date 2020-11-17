import React from 'react'
import { Switch , Route , NavLink } from 'react-router-dom'
 

// eslint-disable-next-line import/no-anonymous-default-export
export default (routes ) => {
  return (
    <div>
      <ul>
        {
          routes.map(item => (
          <li><NavLink to={item.path}>{item.title}</NavLink></li>
          ))
        }
      </ul>
      <Switch>
        {
          routes.map(item => (
            <Route key={item.path} path={item.path} render={ () => {
              return <item.component routes = {item.children}/>
            }}></Route>
          ))
        }
      </Switch>
    </div>
  )
}
