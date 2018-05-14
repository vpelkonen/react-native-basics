import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ArticleList from '../components/ArticleList'
import { getBestStories, getStoryById } from '../api/hacker-news-api'
import * as shapes from '../constants/prop-types'

class ArticlesScreen extends React.Component {
  constructor(props) {
    super(props)
    this.onRefresh = this.onRefresh.bind(this)
  }

  componentDidMount() {
    this.onRefresh()
  }

  onRefresh() {
    // Using Redux's dispatch(), dispatch an action and update the store via reducers.
    const { dispatch } = this.props
    dispatch(getBestStories())
  }

  render() {
    const { articles, isLoading, navigation } = this.props
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

ArticlesScreen.defaultProps = {
  articles: null
}

ArticlesScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  articles: PropTypes.arrayOf(shapes.articles),
  isLoading: PropTypes.bool.isRequired
}

// Together with connect(), expose required parts of the Redux store as props.
const mapStateToProps = ({
  dispatch,
  hackerNewsState
}, {
  dispatch,
  articles: hackerNewsState.articles,
  isLoading: hackerNewsState.isLoading
})

// Connect the ArticlesScreen to the store as defined with mapStateToProps.
export default connect(mapStateToProps)(ArticlesScreen)
