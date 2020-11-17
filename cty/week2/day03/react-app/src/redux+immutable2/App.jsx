import React , {Component} from 'react'
import Home from './view/Home'
import Kind from './view/Kind'
import { Route  , NavLink } from 'react-router-dom'

export default class App extends Component {
  render(){
    return (
      <div>
        <li><NavLink to='/home'>首页</NavLink></li>
        <li><NavLink to='/kind'>分类</NavLink></li>

        <ul>
          <Route path='/home' component = {Home}></Route>
          <Route path='/kind' component = {Kind}></Route>
        </ul>
      </div>
    )
  }
}