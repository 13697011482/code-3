import React , { useReducer } from 'react'
const countState = {
  count : 0
}
function reducer (state , action) {
  switch(action.type){
    case 'increment' : 
      return { count : state.count + action.payload}
    case 'decrement' : 
      return { count : state.count - action.payload}
    default :
      return state
  }
}
function App() {
  const [state , dispatch] = useReducer(reducer , countState)
  return (
    <div>
      count : { state.count }
      <button onClick={() => dispatch({type:'decrement' , payload: 5})}>-</button>
      <button onClick={() => dispatch({type:'increment' , payload: 5})}>+</button>
    </div>
  )
}

export default App
