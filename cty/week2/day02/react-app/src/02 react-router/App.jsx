import React, { Component } from 'react'
import {BrowserRouter as Router , Route , } from 'react-router-dom'

import './style.css'

const Home = () => <div>首页</div>
const Kind = () => <div>分类</div>
const Cart = () => <div>购物车</div>
const Mine = () => <div>我的</div>

// const Child = (props) => {
//   console.log(props);
//   const type = props.match.params.type
//   return (
//     <div>
//       {type}
//     </div>
//   )
// } 

export default class hello extends Component {
  state = {
    currentIndex : 0
  }
  changePage = (path , index) => {
    return (e) => {
      this.setState({ currentIndex: index })
      this.props.history.push(path)
    }
  }
  render() {
    // const {currentIndex} = this.state
    return (
      <Router>
        <ul>
          <li onClick = {this.changePage('/home' , 0)}>首页</li>
          <li onClick = {this.changePage('/kind' , 1)}>分类</li>
          <li onClick = {this.changePage('/cart' , 2)}>购物车</li>
          <li onClick = {this.changePage('/mine' , 3)}>我的</li>
        </ul>
        <hr/>
        {/* <Route path='/:type' component = { Child }></Route> */}
        <Route path='/home' component={Home}></Route>
        <Route path='/kind' component={Kind}></Route>
        <Route path='/cart' component={Cart}></Route>
        <Route path='/mine' component={Mine}></Route>
      </Router>
    )
  }
}
