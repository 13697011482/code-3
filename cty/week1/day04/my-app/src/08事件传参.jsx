import React, { Component } from 'react'

export default class App extends Component {
  state = {
    msg : 'aaa'
  }
  clickHandler (val) {
    this.setState ({
      msg : val
    })
  }
  clickHandler2 (val) {
    this.setState({
      msg : val
    })
  }
  render () {
    return (
      <>
        <button onClick = {this.clickHandler.bind(this , 'params')}>{this.state.msg}</button>
        <button onClick = {() => {
          this.clickHandler2('params2')
        }}>{this.state.msg}</button>
      </>
    )
  }
}
