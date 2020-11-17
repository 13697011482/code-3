import React, { Component } from 'react'
import Form from './Form'
import List from './List'
export default class TodoList extends Component {

  state = {
    keyword : ''
  }
  propsKeyWordHandler = (keyword) => {
    // console.log(keyword);
    this.setState({
      keyword : keyword
    })
  }
  render() {
    return (
      <div>
        <Form onReceiveKeyWord = {this.propsKeyWordHandler.bind(this)}/>
        <List keyword = {this.state.keyword}/>
      </div>
    )
  }
}
