import React from 'react'
import moment from 'moment-timezone'
import PropTypes from 'prop-types'
import { NavigationActions } from 'react-navigation'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import colors from '../constants/colors'
import * as shapes from '../constants/prop-types'

class ArticleListItem extends React.Component {
  constructor(props) {
    super(props)
    this.onArticlePress = this.onArticlePress.bind(this)
  }

  onArticlePress() {
    const { article: { url }, dispatch } = this.props
    dispatch(NavigationActions.navigate({ routeName: 'Article', params: { url } }))
  }

  render() {
    const { article: { title, time, by } } = this.props
    const formattedTime = moment.unix(time).tz('Europe/Helsinki').calendar()
    return (
      <TouchableOpacity
        onPress={this.onArticlePress}
        style={styles.container}
      >
        <View style={styles.header}>
          <Text style={styles.meta}>{formattedTime}</Text>
          <Text style={styles.meta}>{by}</Text>
        </View>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    )
  }
}

ArticleListItem.propTypes = {
  article: shapes.article.isRequired,
  dispatch: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 10,
    borderColor: colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 3
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  meta: {
    fontSize: 12
  },
  title: {
    marginTop: 10
  }
})

export default ArticleListItem
