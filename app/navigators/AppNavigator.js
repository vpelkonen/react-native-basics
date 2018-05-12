import React from 'react'
import { createStackNavigator } from 'react-navigation'

import ArticleScreen from '../containers/ArticleScreen'
import ArticlesScreen from '../containers/ArticlesScreen'
import colors from '../constants/colors'

export default createStackNavigator(
  // RouteConfigs
  {
    Article: {
      screen: ArticleScreen,
      navigationOptions: {
        title: 'Hacker News'
      }
    },
    Articles: {
      screen: ArticlesScreen,
      navigationOptions: {
        title: 'Hacker News'
      }
    }
  },
  // StackNavigatorConfig
  {
    initialRouteName: 'Articles'
  }
)
