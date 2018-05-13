import React from 'react'
import PropTypes from 'prop-types'
import { FlatList, RefreshControl, StyleSheet } from 'react-native'

import ArticleListItem from './ArticleListItem'
import colors from '../constants/colors'
import * as shapes from '../constants/prop-types'

const ArticleList = (props) => {
  const {
    articles, isLoading, navigation: { dispatch }, onRefresh
  } = props
  return (
    <FlatList
      style={styles.container}
      data={articles}
      keyExtractor={article => `${article.id}`}
      refreshControl={
        <RefreshControl
          refreshing={isLoading}
          onRefresh={onRefresh}
        />
      }
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
  articles: null
}

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(shapes.article),
  isLoading: PropTypes.bool.isRequired,
  onRefresh: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white
  }
})

export default ArticleList
