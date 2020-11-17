import React ,{Component} from 'react'
import ReactDOM from 'react-dom'

// const App = () => React.createElement('h1' , {className : 'header'} , 'hello react')
const App = () => React.createElement(
  'div',
  {id : 'box'},
  'hello',
  React.createElement(
    'h1',
    null,
    'world'
  )
)
//React.createElement react jsx的底层原理
ReactDOM.render(
  <App />,
  document.getElementById('root')
)