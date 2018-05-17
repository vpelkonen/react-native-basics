import { combineReducers } from 'redux'
import hackerNewsReducer from './hacker-news-reducer'

export default combineReducers({
  // partOfTheStore: reducerThatIsResponsible
  hackerNewsState: hackerNewsReducer
})
