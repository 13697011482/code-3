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
  componentDidMount (){
    setTimeout(() => {
      this.setState({
        list : ['3','4']
      } , () => {
        console.log('111' , this.state.list)
      })
      console.log('222' , this.state.list);
    } , 2000)
  }
  render () {
    return (
      <>
        {this.state.list}
      </>
    )
  }
}
