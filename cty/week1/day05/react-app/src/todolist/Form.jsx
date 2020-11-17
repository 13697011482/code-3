import React, { Component } from 'react'

export default class Form extends Component {
  state = {
    keyword : ''
  }
  changHandler = (e) => {
      this.setState({
        keyword : e.target.value
      })
  }
  keyUpHandler = (e) => {
    // console.log(e.keyCode);
    if(e.keyCode === 13){
      this.props.onReceiveKeyWord(this.state.keyword)
      this.state.keyword = ''
    }
  }
  render() {
    return (
      <div>
        <label>
          <input 
            type='text' value={this.state.keyword} 
            onChange = {this.changHandler.bind(this)}
            onKeyUp = {this.keyUpHandler.bind(this)}/>
        </label>
      </div>
    )
  }
}
