
import React from 'react'
import WrapperComponent from '../WrapperComponent'
function Mine(props) {
  return (
    <div>
      {/* <ul>
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
              return <item.component />
            }}></Route>
          ))
        }
      </Switch> */}
      {WrapperComponent(props.routes)}
      
    </div>
  )
}

export default Mine
