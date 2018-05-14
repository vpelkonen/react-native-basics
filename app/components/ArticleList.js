import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import ArticleListItem from './ArticleListItem'

const ArticleList = (props) => {
  const articles = props.articles
  return (
    <FlatList
      style={styles.container}
      data={articles}
      renderItem={({ item }) => (
        <ArticleListItem
          title={item.title}
          by={item.by}
          time={item.time}
          url={item.url}
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
  articles: PropTypes.arrayOf(PropTypes.shape({}))
}

export default ArticleList
