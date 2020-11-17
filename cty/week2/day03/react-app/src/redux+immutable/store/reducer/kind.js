import {Map} from 'immutable'

import * as types from '../actionType'

const reducer = (state = Map({
  kindList : []
}) , action) => {
  switch(action.type){
    case types.CHANGE_KIND_LIST : 
      return state.set('kindList' , action.data)
    default :
      return state
  }
}
export default reducer