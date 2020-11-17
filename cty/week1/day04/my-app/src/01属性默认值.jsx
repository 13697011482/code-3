import React, { Component } from 'react'
const Header = (props) => <h1>{props.name}</h1>
const Content = (props) => <h1>{props.name}</h1>
Content.defaultProps = {
  name : 'default content'
}
class Input extends Component{
  static defaultProps = {
    type : 'password'
  }
  render(){
    return (
      <input type = {this.props.type}/>
    )
  }
}
export default class App extends Component {
  render() {
    return (
      <>
        <Header name='header'/>
        {/* <Content name='content'/> */}
        <Content/>
        <Input/>
      </>
    )
  }
}
