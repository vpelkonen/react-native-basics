import React from 'react'

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

export default ArticlesScreen
