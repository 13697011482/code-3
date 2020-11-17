import {createStore , applyMiddleware} from 'redux'
import {combineReducers} from 'redux-immutable'
import thunk from 'redux-thunk'

import HomeReducer from '../view/Home'
import KindReducer from '../view/Kind'
const reducer = combineReducers({
  home : HomeReducer,
  kind : KindReducer
})

const store = createStore(reducer , applyMiddleware(thunk))
export default store