import * as actionTypes from '../constants/action-types'
import { getBestStories, getStoryById } from '../api/hacker-news-api'

/* eslint-disable-next-line import/prefer-default-export */
export const getBestStoriesAction = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_BEST_STORIES_REQUEST })
  getBestStories()
    .then((stories) => {
      const promises = stories.slice(0, 10).map(storyId => getStoryById(storyId))
      return Promise.all(promises)
    })
    .then((stories) => {
      dispatch({
        type: actionTypes.GET_BEST_STORIES_SUCCESS,
        stories
      })
    })
    .catch(() => {
      dispatch({ type: actionTypes.GET_BEST_STORIES_ERROR })
    })
}
