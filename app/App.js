import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import ArticleList from './components/ArticleList'
import articlesData from './fixtures/articlesData.json'

function App() {
  return (
    <SafeAreaView>
      <ArticleList articles={articlesData} />
    </SafeAreaView>
  );
}

export default App
