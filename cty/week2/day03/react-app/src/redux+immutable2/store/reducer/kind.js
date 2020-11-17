import { Map } from 'immutable'
import * as types from '../actionTypes'

const reducer = (state = Map({
  kindList : []
}) , action) => {
  switch(action.type){
    case types.CHANGE_KIND_LIST : 
      return state.set('KindList' , action.data)
    default : 
      return state
  }
}

export default reducer