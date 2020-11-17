import React, { Component } from 'react'
const Content = (props) => <div>{props.children}content</div>
const Content = (props) => <div>{props.children}content</div>
export default class App extends Component {
  render(){
    return (
      <>
        <Content>
          你好，
        </Content>
      </>
    )
  }
}
