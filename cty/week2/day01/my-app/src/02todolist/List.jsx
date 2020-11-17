import React, { Component } from 'react'
import {connect} from 'react-redux'

class List extends Component {
  removeData = (index) => {
    return () => {
      this.props.removeItem(index)
    }
    
  }
  render() {
    return (
      <ul>
        {this.props.list.map((item,index) => (
          <li key = {index}>
            {item}
            <button onClick = {this.removeData(index)}>删除</button>
          </li>
        ))}
      </ul>
    )
  }
}
const mapStateToProps = state => {
  return {
    list : state.list
  }
}
const mapDispatchToProps = dispatch => {
  return {
    removeItem(index){
      dispatch({
        type : 'REMOVE_ITEM',
        index
      })
    }
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(List)
