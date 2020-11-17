import React ,{Component, Fragment} from 'react'
import ReactDOM from 'react-dom'

const Header = () => <h1>Header</h1>
const Content = () => <h1>Content</h1>
class App extends Component {
  render () {
    return  (
      <Fragment name='aaa'>
        <Header />
        <Content />
      </Fragment>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)