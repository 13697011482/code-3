import React, { Component } from 'react'
import { Route , NavLink , useLocation} from 'react-router-dom'
import url from 'url'
const Box = (props) => {
  const {id} = url.parse(useLocation().search , true).query
  return (
  <h1>box {id}</h1>
  )
}
export default class App extends Component{
  render (){
    return (
      <div>
        <ul>
            <li><NavLink to='/detail?id=1'>111</NavLink></li>
            <li><NavLink to='/detail?id=2'>222</NavLink></li>
            <li><NavLink to='/detail?id=3'>333</NavLink></li>
        </ul>
      <Route path={'/detail'} component={Box}></Route>
      </div>
    )
  }
}
