import initialState from './initial-state'
import * as actionTypes from '../constants/action-types'

// REDUCER
// The reducer will listen to all actions dispatched, and update the state based on each action.
// Each reducer handles specific actions, and a specific part of the store.
// The reducer should be a pure function, meaning it has no side effects like mutating state.
export default (state = initialState.hackerNewsState, action) => {
  switch (action.type) {
  case actionTypes.GET_BEST_STORIES_REQUEST:
    return {
      ...state, // The spread operator ... allows referencing existing state without mutating it.
      isLoading: true
    }
  case actionTypes.GET_BEST_STORIES_SUCCESS:
    return {
      ...state,
      isLoading: false,
      articles: action.stories
    }
  case actionTypes.GET_BEST_STORIES_ERROR:
    return {
      ...state,
      isLoading: false,
      isError: true
    }
  default:
    return state // If the action isn't handled by this reducer, just return the existing state.
  }
}
