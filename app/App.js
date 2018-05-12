import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import AppNavigator from './navigators/AppNavigator'

const App = () => (
  <SafeAreaView style={styles.appContainer}>
    <AppNavigator />
  </SafeAreaView>
)

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  }
})

export default App
