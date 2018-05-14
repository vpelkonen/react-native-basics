import * as actionTypes from '../constants/action-types'
import { getBestStories } from '../api/hacker-news-api'

export const getBestStoriesAction = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.GET_BEST_STORIES_REQUEST })
    getBestStories()
      .then((stories) => {
        dispatch({ type: actionTypes.GET_BEST_STORIES_SUCCESS, stories })
      })
      .catch(() => {
        dispatch({ type: actionTypes.GET_BEST_STORIES_ERROR })
      })
  }
}

//
// export const getBestStoriesAction = () => ({
//   type: actionTypes.GET_BEST_STORIES_REQUEST
// })
//
// export const getStoryByIdAction = id => ({
//   type: actionTypes.GET_STORY_BY_ID_REQUEST,
//   id
// })
