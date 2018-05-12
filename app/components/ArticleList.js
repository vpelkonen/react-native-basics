import React from 'react'
import PropTypes from 'prop-types'
import { Button, FlatList, StyleSheet } from 'react-native'

import ArticleListItem from './ArticleListItem'
import colors from '../constants/colors'
import * as shapes from '../constants/prop-types'

class ArticleList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isNightModeOn: false
    }
    this.onThemeButtonPressed = this.onThemeButtonPressed.bind(this)
  }

  onThemeButtonPressed() {
    const { isNightModeOn } = this.state
    this.setState({
      isNightModeOn: !isNightModeOn
    })
  }

  render() {
    const { articles } = this.props
    const { isNightModeOn } = this.state
    return (
      <FlatList
        contentContainerStyle={[styles.container, isNightModeOn && styles.containerNightMode]}
        data={articles}
        keyExtractor={article => `${article.id}`}
        renderItem={({ item }) => (
          <ArticleListItem
            article={item}
            isNightModeOn={isNightModeOn}
          />
        )}
        ListHeaderComponent={
          <Button
            title="Change theme"
            onPress={this.onThemeButtonPressed}
          />
        }
      />
    )
  }
}

ArticleList.defaultProps = {
  articles: []
}

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(shapes.article)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white
  },
  containerNightMode: {
    backgroundColor: colors.black
  }
})

export default ArticleList
