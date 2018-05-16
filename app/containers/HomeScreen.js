import React from 'react'
import ArticleList from '../components/ArticleList'
import fetchGetJSON from '../util/fetchGetJSON'
import { hackerNewsApiUrl } from '../constants/config'

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: null,
      isLoading: true
    }
    this.poller = null
  }

  componentDidMount() {
    this.getArticles()
    const TEN_SECONDS = 10000
    this.poller = setInterval(this.getArticles, TEN_SECONDS)
  }

  componentWillUnmount() {
    clearInterval(this.poller)
  }

  getArticles = () => {
    this.setState({
      isLoading: true
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
        this.setState({
          isLoading: false,
          articles
        })
      })
      .catch(() => {
        this.setState({
          isLoading: false
        })
      })
  }

  handleNavigation = (routeName, params) => {
    const { navigation } = this.props
    navigation.navigate(routeName, params)
  }

  render() {
    console.log(this.props.navigation)
    const { articles, isLoading } = this.state
    return (
      <ArticleList
        articles={articles}
        handleNavigation={this.handleNavigation}
        refreshing={isLoading}
        onRefresh={this.getArticles}
      />
    )
  }
}

export default HomeScreen
