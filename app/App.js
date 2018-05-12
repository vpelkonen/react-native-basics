import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import ArticleList from './components/ArticleList'
import articlesData from './api/articlesData.json'

const App = () => (
  <SafeAreaView style={styles.appContainer}>
    <ArticleList articles={articlesData} />
  </SafeAreaView>
)

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  }
})

export default App
