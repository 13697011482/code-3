// import {createStore , applyMiddleware , combineReducers } from 'redux'
import {createStore , applyMiddleware } from 'redux'
import { combineReducers } from 'redux-immutable'
import thunk from 'redux-thunk'
import HomeReducer from './reducer/home'
import KindReducer from './reducer/kind'

const reducer = combineReducers({
  home : HomeReducer,
  kind : KindReducer  
})

const store = createStore(reducer , applyMiddleware(thunk))
export default store