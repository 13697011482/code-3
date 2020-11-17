import React, { Component } from 'react'
import {BrowserRouter as Router , Route , NavLink} from 'react-router-dom'

import './style.css'

const Home = () => <div>首页</div>
const Kind = () => <div>分类</div>
const Cart = () => <div>购物车</div>
const Mine = () => <div>我的</div>

export default class hello extends Component {
  render() {
    return (
      <Router>
        <ul>
          <li> <NavLink to='/home'>首页</NavLink></li>
          <li> <NavLink to='/kind'>分类</NavLink></li>
          <li> <NavLink to='/cart'>购物车</NavLink></li>
          <li> <NavLink to='/mine'>我的</NavLink></li>
        </ul>
        <hr/>
        <Route path='/home' component = {Home}></Route>
        <Route path='/kind'> <Kind /></Route>
        <Route path='/cart' render = { () => <Cart />}></Route>
        <Route path='/mine'><Mine /></Route>
      </Router>
    )
  }
}
