const countState = {
  list : ['task1' , 'task2' ,'task3']
}

const reducer = (state = countState , action) => {
  switch(action.type) {
    case 'ADD_ITEM' :
      return {
        ...state,
        list : [...state.list , action.data]
      }
    case 'REMOVE_ITEM' : 
      const arr = state.list.filter((item , index) => {
        return index !== action.index
      })
      return {...state , list : arr}
      // console.log(action.index);
      // break;
    default :
      return state

  }
}

export default reducer