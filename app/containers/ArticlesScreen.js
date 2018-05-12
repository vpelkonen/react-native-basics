import React from 'react'

import ArticleList from '../components/ArticleList'
import articlesData from '../fixtures/articlesData.json'

const ArticlesScreen = (props) => {
  const { navigation } = props
  return (
    <ArticleList
      articles={articlesData}
      navigation={navigation}
    />
  )
}

export default ArticlesScreen
