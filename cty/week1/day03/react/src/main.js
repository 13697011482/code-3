import React ,{Component} from 'react'
import ReactDOM from 'react-dom'
import './style.css'
class App extends Component{
  render(){
    return (
      <>
        <h1>react样式</h1>
        <div style = {{background:'skyblue'}}>
          行内样式
        </div>
        <div className='test'>
          class样式
        </div>
      </>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)