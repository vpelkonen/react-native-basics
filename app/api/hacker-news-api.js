import config from '../constants/config'
import fetchGetJSON from '../util/fetchGetJSON'

// Hacker News API: https://github.com/HackerNews/API

export const getBestStories = () => {
  const url = `${config.hackerNewsApiUrl}/beststories.json`
  return fetchGetJSON(url)
}

export const getStoryById = (id) => {
  const url = `${config.hackerNewsApiUrl}/item/${id}.json`
  return fetchGetJSON(url)
}
