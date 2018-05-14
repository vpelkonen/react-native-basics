import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import initialState from './reducers/initial-state'

export default () => createStore(rootReducer, applyMiddleware(thunk))
