import React from 'react'
import PropTypes from 'prop-types'
import { FlatList, StyleSheet } from 'react-native'

import ArticleListItem from './ArticleListItem'
import colors from '../constants/colors'
import * as shapes from '../constants/prop-types'

const ArticleList = (props) => {
  const { articles, navigation: { dispatch } } = props
  return (
    <FlatList
      style={styles.container}
      data={articles}
      keyExtractor={article => `${article.id}`}
      renderItem={({ item }) => (
        <ArticleListItem
          article={item}
          dispatch={dispatch}
        />
      )}
    />
  )
}

ArticleList.defaultProps = {
  articles: []
}

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(shapes.article),
  navigation: PropTypes.shape({})
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white
  }
})

export default ArticleList
