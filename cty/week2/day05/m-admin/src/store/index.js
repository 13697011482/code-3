import { createStore , applyMiddleware } from 'redux'
import {combineReducers} from 'redux-immutable'
import thunk from 'redux-thunk'

import CommonReducer from './modules/common'
const reducer = combineReducers({
  common : CommonReducer
})

const store = createStore(reducer , applyMiddleware(thunk))
export default store