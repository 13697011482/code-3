import React from 'react'
import ReactDOM from 'react-dom'

// import App from './01 useState/App'
// import App from './02 useEffect/App'
// import App from './03 useContext/App'
// import App from './04 useReducer/App'
// import App from './05 useCallback/App'
import App from './06 useMemo/App'

ReactDOM.render (
  <App />,
  document.querySelector('#root')
)

// setTimeout(() => {
//   ReactDOM.unmountComponentAtNode(document.querySelector('#root'))
// } , 3000)