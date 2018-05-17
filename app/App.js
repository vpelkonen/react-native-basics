import React from 'react';
import { Provider } from 'react-redux'

import RootNavigator from './navigators/RootNavigator'
import configureStore from './configure-store'

const store = configureStore()

export default () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  )
}
