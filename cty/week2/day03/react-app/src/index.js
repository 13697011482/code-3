import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'

// import App from './redux+immutable/App'
import {Provider} from 'react-redux'
import App from './redux+immutable2/App'
import store from './redux+immutable/store'

ReactDOM.render(
  <Router>
    <Provider store = {store}>
    <App />
    </Provider>
  </Router>,
  // <App />,
  document.querySelector('#root')
)
