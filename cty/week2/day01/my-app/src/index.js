import React from 'react'
import ReactDOM from 'react-dom'

// import App from './01redux/App'
// import store from './01redux/store'
import App from './02todolist/TodoList'
import store from './02todolist/store'
import {Provider} from 'react-redux'

// ReactDOM.render(
//   <App />,
//   document.querySelector('#root')
// )
// function render(){
//   ReactDOM.render(
//     <App />,
//     document.querySelector('#root')
//   )
// }
// render()
// store.subscribe(render)

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.querySelector('#root')

)