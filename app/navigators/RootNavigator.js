import { createStackNavigator } from 'react-navigation'

import ArticleScreen from '../containers/ArticleScreen'
import HomeScreen from '../containers/HomeScreen'

const RootNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Article: {
    screen: ArticleScreen,
    navigationOptions: {
      headerTitle: 'Article'
    }
  }
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    headerBackTitle: 'Back',
    headerTitle: 'Hacker News'
  }
})

export default RootNavigator
