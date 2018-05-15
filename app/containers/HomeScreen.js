import React from 'react'
import ArticleList from '../components/ArticleList'
import articlesData from '../fixtures/articlesData.json'

class HomeScreen extends React.Component {
  handleNavigation = (routeName, params) => {
    const { navigation } = this.props
    navigation.navigate(routeName, params)
  }

  render() {
    return (
      <ArticleList
        articles={articlesData}
        handleNavigation={this.handleNavigation}
      />
    )
  }
}

export default HomeScreen
