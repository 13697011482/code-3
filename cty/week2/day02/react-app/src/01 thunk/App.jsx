import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getListAction } from './store/actionCreate'

@connect(state => ({list : state.list}) , dispatch =>({
  getList(){
    dispatch(getListAction())
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