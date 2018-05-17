import * as actionTypes from '../constants/action-types'

const initialState = {
  articles: null,
  isLoading: false
}

export default (state = initialState, action) => {
  // if (action.type === actionTypes.GET_HACKER_NEWS_ARTICLES_REQUEST) {
  //   return { ...state, isLoading: true }
  // }
  switch (action.type) {
    case actionTypes.GET_HACKER_NEWS_ARTICLES_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case actionTypes.GET_HACKER_NEWS_ARTICLES_SUCCESS:
      return {
        articles: action.articles,
        isLoading: false
      }
    case actionTypes.GET_HACKER_NEWS_ARTICLES_ERROR:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state
  }
}
