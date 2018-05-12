import React from 'react'

import ArticleList from '../components/ArticleList'
import { getBestStories } from '../api/hacker-news-api'

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
      .then(data => {
        this.setState({
          articles: data,
          isLoading: false
        })
      })
      .catch((error) => {
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
