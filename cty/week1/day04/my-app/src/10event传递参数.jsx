import React, {Component}from 'react'

export default class App extends Component {
  clickHandler(e){
    console.log(e.target.dataset.id);
  }
  state = {
    msg : '111'
  }
  render () {
    return (
      <>
        <button data-id='postId' onClick = {this.clickHandler.bind(this)}>点击</button>
        <button data-id='id' onClick = {(e) => {
          console.log(e.target.dataset.id);
        } }>qqq</button>
      </>
    )
  }
}
