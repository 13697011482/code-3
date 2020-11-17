import { Map } from 'immutable'
import * as types from '../actionTypes'

const reducer = (state = Map({
  bannerList : [],
  proList : []
}) , action) => {
  switch(action.type){
    case types.CHANGE_BANNER_LIST : 
      return state.set('bannerList' , action.data)
    case types.CHANGE_PRO_LIST : 
      return state.set('proList' , action.data)
    default : 
      return state
  }
}

export default reducer