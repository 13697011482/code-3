import React, { Component } from 'react'

export default class List extends Component {
  state = {
    list : []
  }
  UNSAFE_componentWillReceiveProps(props){
    this.setState({
      list : [...this.state.list , props.keyword]
    })
  }
  removeHandler = () => {
    // console.log('1');
    this.state.list.splice(index,1)
  }
  render() {
    return (
      <>
        <ul>
          {
            this.state.list.map((item,index) => {
              return <li key={index}>{item}<button onClick = {this.removeHandler.bind(this,index)}>删除</button></li>
            })
          }      
        </ul>
      </>
    )
  }
}
