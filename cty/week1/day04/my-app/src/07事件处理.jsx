import React, { Component } from 'react'

export default class App extends Component {
  state = {
    msg : '111'
  }
  constructor(props){
    super(props)
    this.HandlerParams2 = this.HandlerParams2.bind(this)
  }
  clickHandler (e) {
    console.log('1' , e);
  }
  HandlerParams(){
    this.setState({
      msg : '222'
    })
  }
  HandlerParams2(){
    this.setState({
      msg : '333'
    })
  }
  render () {
    return (
      <>
        <button onClick={this.clickHandler}>点击修改</button>
        <button onClick={this.HandlerParams.bind(this)}>点击修改{this.state.msg}</button>
        <button onClick={this.HandlerParams2.bind(this)}>点击修改{this.state.msg}</button>
      </>
    )
  }
}
