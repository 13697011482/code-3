import React, { Component } from 'react'
const Com = () => {
  console.log('com');
  return (<div>Com</div>)
}
const fontSize = {fontSize : 14}
export default class App extends Component {
  state = {
    count : 0
  }
  dosomething = () => {console.log('this is dosomething');}
  render() {
    return (
      <div>
        count : {this.state.count}
        <button onClick = {() => this.setState({count : this.state.count + 1})}>+</button>
        <Com style={fontSize} dosomething = {this.dosomething}></Com>
      </div>
    )
  }
}
