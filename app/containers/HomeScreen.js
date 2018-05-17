import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ArticleList from '../components/ArticleList'
import fetchGetJSON from '../util/fetchGetJSON'
import { hackerNewsApiUrl } from '../constants/config'
import { getHackerNewsArticlesAction } from '../actions/hacker-news-actions'

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
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
    const { getHackerNewsArticlesAction } = this.props
    getHackerNewsArticlesAction()
  }

  handleNavigation = (routeName, params) => {
    const { navigation } = this.props
    navigation.navigate(routeName, params)
  }

  render() {
    const { articles, isLoading } = this.props
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

const mapStateToProps = (store) => {
  return {
    articles: store.hackerNewsState.articles,
    isLoading: store.hackerNewsState.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHackerNewsArticlesAction: bindActionCreators(
      getHackerNewsArticlesAction,
      dispatch
    )
  }
  /* ...is the same as:
    return bindActionCreators({
      getHackerNewsArticlesAction
    }, dispatch)
  */
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
