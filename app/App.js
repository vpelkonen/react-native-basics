import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import configureStore from './configure-store'
import AppNavigator from './navigators/AppNavigator'

// Initialise the Redux store.
const store = configureStore()

const App = () => (
  // Expose the Redux store to children using react-redux's Provider.
  // Now all children can use react-redux's higher-order component connect() to access the store.
  <Provider store={store}>
    <SafeAreaView style={styles.appContainer}>
      <AppNavigator />
    </SafeAreaView>
  </Provider>
)

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  }
})

export default App
