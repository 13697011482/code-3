import React, { Component } from 'react'

export default class App extends Component {
  // state = {
  //   list : ['qqq' , 'www']
  // }
  constructor(props){
    super(props)
    this.state = {
      list : ['111','222']
    }
  }
  render () {
    return (
      <>
        {this.state.list}
      </>
    )
  }
}
