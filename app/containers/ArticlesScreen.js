import React from 'react'
import PropTypes from 'prop-types'

import ArticleList from '../components/ArticleList'
import articlesData from '../api/articlesData.json'

const ArticlesScreen = (props) => {
  const { navigation } = props
  return (
    <ArticleList
      articles={articlesData}
      navigation={navigation}
    />
  )
}

ArticlesScreen.propTypes = {
  navigation: PropTypes.shape({}).isRequired
}

export default ArticlesScreen
