import reducer from './reducer'
import {createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import m1 from '../middleware/m1'

const middleware = applyMiddleware(thunk , m1)
const store = createStore(reducer , middleware)

export default store