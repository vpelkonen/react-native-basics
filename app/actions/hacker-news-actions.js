import * as actionTypes from '../constants/action-types'
import { hackerNewsApiUrl } from '../constants/config'
import fetchGetJSON from '../util/fetchGetJSON'

export const getHackerNewsArticlesAction = (dispatch) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.GET_HACKER_NEWS_ARTICLES_REQUEST
    })
    fetchGetJSON(`${hackerNewsApiUrl}/beststories.json`)
      .then(articleIds => {
        const promises = articleIds.splice(0,20)
          .map((articleId) => {
            const url = `${hackerNewsApiUrl}/item/${articleId}.json`
            return fetchGetJSON(url)
          })
        return Promise.all(promises)
      })
      .then((articles) => {
        // NOT THIS: this.state = { ...this.state, articles: 'something' }
        dispatch({
          type: actionTypes.GET_HACKER_NEWS_ARTICLES_SUCCESS,
          articles
        })
      })
      .catch(() => {
        dispatch({
          type: actionTypes.GET_HACKER_NEWS_ARTICLES_ERROR
        })
      })
  }
}

/*

// Action:
const action = {
  type: 'NAME'
}

// Dispatch:
dispatch(action)

*/
