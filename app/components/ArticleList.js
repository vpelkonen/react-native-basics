import React from 'react'
import PropTypes from 'prop-types'
import { FlatList, StyleSheet } from 'react-native'

import ArticleListItem from './ArticleListItem'
import colors from '../constants/colors'
import * as shapes from '../constants/prop-types'

const ArticleList = (props) => {
  const { articles } = props
  return (
    <FlatList
      style={styles.container}
      data={articles}
      keyExtractor={article => `${article.id}`}
      renderItem={({ item }) => <ArticleListItem article={item} />}
    />
  )
}

ArticleList.defaultProps = {
  articles: []
}

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(shapes.article)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white
  }
})

export default ArticleList
