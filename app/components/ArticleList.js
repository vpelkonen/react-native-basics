import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';

import ArticleListItem from './ArticleListItem'

const ArticleList = (props) => {
  const { articles, handleNavigation, refreshing, onRefresh } = props
  return (
    <FlatList
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
      style={styles.container}
      data={articles}
      renderItem={({ item }) => (
        <ArticleListItem
          title={item.title}
          by={item.by}
          time={item.time}
          url={item.url}
          onHandlePress={handleNavigation}
        />
      )}
      keyExtractor={(article) => `${article.id}`}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
})

ArticleList.defaultProps = {
  articles: [{ title: 'yay' }]
}

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({})),
  handleNavigation: PropTypes.func.isRequired,
  refreshing: PropTypes.bool.isRequired,
  onRefresh: PropTypes.func.isRequired
}

export default ArticleList
