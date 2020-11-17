import React ,{Component} from 'react'
import ReactDOM from 'react-dom'

// const App = (props) => <h1>hello {props.name} react</h1>
// ReactDOM.render(
//   <App name='cccc'/>,
//   document.getElementById('root')
// )
class App extends React.Component{
  render(){
    return (
    <h1>{ this.props.name },欢迎来到react的世界3</h1>
    )
  }
}
const app = new App({name : 'cty'}).render()
// ReactDOM.render(
//   <App name='cty'/>,
//   document.querySelector('#root')
// )
ReactDOM.render(
  app,
  document.getElementById('root')
)