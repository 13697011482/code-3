import React, {Component}from 'react'

export default class App extends Component {
  state = {
    firstName : '',
    lastName : ''
  }
  // InputChangeHandler(e){
  //   // console.log(e.target.name);
  //   this.setState({
  //     [e.target.name] : e.target.value
  //   })
  // }
  InputChangeHandler = (type , e) => {
    this.setState({
      [type] : e.target.value
    })
  }
  render () {
    return (
      <>
        {/* <label>firstName : <input placeholder='firstName' name='firstName' onChange = {this.InputChangeHandler.bind(this)}/></label>
        <label>lastName : <input placeholder='lastName' name='lastName' onChange = {this.InputChangeHandler.bind(this)}/></label>
        {this.state.firstName} - {this.state.lastName} */}

        {/* <label>firstName : <input placeholder='firstName' name='firstName' onChange = {this.InputChangeHandler}/></label>
        <label>lastName : <input placeholder='lastName' name='lastName' onChange = {this.InputChangeHandler}/></label>
        {this.state.firstName} - {this.state.lastName} */}

        <label>firstName : <input placeholder='firstName' onChange = {(e) => {
          this.InputChangeHandler('firstName' , e)
        }}/></label>
        <label>lastName : <input placeholder='lastName' onChange = {(e) => {
          this.InputChangeHandler('lastName' , e)
        }}/></label>
        {this.state.firstName} - {this.state.lastName}
      </>
    )
  }
}
