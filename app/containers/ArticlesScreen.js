import React from 'react'

import ArticleList from '../components/ArticleList'
import { getBestStories, getStoryById } from '../api/hacker-news-api'

class ArticlesScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: null,
      isLoading: false
    }
    this.onRefresh = this.onRefresh.bind(this)
  }

  componentDidMount() {
    this.onRefresh()
  }

  onRefresh() {
    this.setState({ isLoading: true })
    getBestStories()
      .then(storyIds => {
        const firstTenStories = storyIds.slice(0, 10)
        return Promise.all(firstTenStories.map(itemId => getStoryById(itemId)))
      })
      .then((stories) => {
        this.setState({
          articles: stories,
          isLoading: false
        })
      })
      .catch(() => {
        this.setState({
          articles: null,
          isLoading: false
        })
      })
  }

  render() {
    const { navigation } = this.props
    const { articles, isLoading } = this.state
    return (
      <ArticleList
        articles={articles}
        isLoading={isLoading}
        navigation={navigation}
        onRefresh={this.onRefresh}
      />
    )
  }
}

export default ArticlesScreen
