import { combineReducers } from 'redux'
import hackerNewsReducer from './hacker-news-reducer'

// For now there is only one reducer, but you can easily add more with combineReducers().
const rootReducer = combineReducers({
  hackerNewsState: hackerNewsReducer
})

export default rootReducer
