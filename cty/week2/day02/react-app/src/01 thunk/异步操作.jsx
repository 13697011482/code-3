import React, { Component } from 'react'
import {connect} from 'react-redux'

@connect(state => ({list : state.list}) , dispatch =>({
  getList(){
    fetch('/pro.json').then(res => res.json()).then(result => {
      dispatch({
        type : 'CHANGE_LIST',
        payload : result.result
      })
    })
  }
}))
class App extends Component {
  componentDidMount () {
    this.props.getList()
  }
  render() {
    const {list} = this.props
    return (
      <div>
        <ul>
          {
            list && list.map(item => (
            <li key = {item.positionId}>{item.positionName}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default App