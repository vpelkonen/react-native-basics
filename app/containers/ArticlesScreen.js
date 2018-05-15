import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ArticleList from '../components/ArticleList'
import { getBestStoriesAction } from '../actions/hacker-news-actions'
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
    const { getBestStories } = this.props
    getBestStories()
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
  articles: PropTypes.arrayOf(shapes.article),
  isLoading: PropTypes.bool.isRequired,
  getBestStories: PropTypes.func.isRequired
}

// Together with connect(), expose required parts of the Redux store as props.
const mapStateToProps = ({ hackerNewsState }) => ({
  articles: hackerNewsState.articles,
  isLoading: hackerNewsState.isLoading
})

// Together with connect(), have the action creators bound to dispatch and exposed as props.
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getBestStories: getBestStoriesAction
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesScreen)
