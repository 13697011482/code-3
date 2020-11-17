const countState = {
  count : 1
}
const reducer = (state = countState , action) => {
  switch (action.type) {
    case 'DECREMENT' : 
    return {
      ...state,
      count : state.count - action.number
    }
    case 'INCREMENT' :
      return Object.assign({} , state , {count : state.count + action.number})
    default : 
      return state
  }
}
export default reducer