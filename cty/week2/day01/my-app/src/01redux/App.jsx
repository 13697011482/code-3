import React , {Component} from 'react'
import store from './store'
import Child from './Child'

export default class App extends Component{
  render () {
    return (
      <>
        <button onClick = {() => {
          store.dispatch({type:'DECREMENT',number:1})
        }}>-</button>
        {store.getState().count}
        <button onClick = {() => {
          store.dispatch({type:'INCREMENT',number:1})
        }}>+</button>

        <hr/>
        <Child />
      </>
    )
  }
}