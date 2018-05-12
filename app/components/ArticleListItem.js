import React from 'react'
import moment from 'moment-timezone'
import PropTypes from 'prop-types'
import { Linking, StyleSheet, Text, TouchableOpacity } from 'react-native'

import colors from '../constants/colors'
import * as shapes from '../constants/prop-types'

class ArticleListItem extends React.Component {
  constructor(props) {
    super(props)
    this.onArticlePress = this.onArticlePress.bind(this)
  }

  onArticlePress() {
    const { article: { url } } = this.props
    Linking.openURL(url)
  }

  render() {
    const { article: { title, time }, isNightModeOn } = this.props
    const formattedTime = moment.unix(time).tz('Europe/Helsinki').calendar()
    return (
      <TouchableOpacity
        onPress={this.onArticlePress}
        style={styles.container}
      >
        <Text style={[styles.time, isNightModeOn && styles.nightModeText]}>
          {formattedTime}
        </Text>
        <Text style={[styles.title, isNightModeOn && styles.nightModeText]}>
          {title}
        </Text>
      </TouchableOpacity>
    )
  }
}

ArticleListItem.propTypes = {
  article: shapes.article.isRequired,
  isNightModeOn: PropTypes.bool.isRequired
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 10,
    borderColor: colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
  },
  time: {
    fontSize: 12
  },
  title: {
    marginTop: 10
  },
  nightModeText: {
    color: colors.white
  }
})

export default ArticleListItem
