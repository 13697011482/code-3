import React, { Component } from 'react'
import PropTypes from 'prop-types'
const Content = (props) => <div>{props.children}{props.name} - {props.age}content</div>
Content.propTypes = {
  name : PropTypes.string.isRequired,
  age : PropTypes.number.isRequired
}
export default class App extends Component {
  render(){
    return (
      <>
        <Content name='cty' age={ 18 }>你好，</Content>
      </>
    )
  }
}
