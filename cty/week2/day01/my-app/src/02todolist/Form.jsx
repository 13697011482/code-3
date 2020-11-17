import React, { Component } from 'react'
import {connect} from 'react-redux'

class Form extends Component {
  state = {
    keyword : ''
  }
  changeHandler = (e) => {
    this.setState({
      keyword : e.target.value
    })
  }
  keyUpHandler = (e) => {
    if(e.keyCode === 13){
      this.props.addItem(this.state.keyword)
    }
  }
  render() {
    return (
      <div>
        <input
        type='text'
        value = {this.state.keyword}
        onChange = {this.changeHandler}
        onKeyUp = {this.keyUpHandler}/>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addItem(data){
      dispatch ({
        type : 'ADD_ITEM',
        data
      })
    }
  }
}
export default connect(null , mapDispatchToProps)(Form)
