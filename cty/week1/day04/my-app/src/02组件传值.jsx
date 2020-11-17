import React, { Component } from 'react'
const Header = (props) => <h1>{props.name}</h1>
const Content = (props) => <h1>{props.name}</h1>
export default class App extends Component {
  render() {
    return (
      <>
        <Header name='header'/>
        <Content name='content'/>
      </>
    )
  }
}
