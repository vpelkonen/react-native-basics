import React from 'react'
import PropTypes from 'prop-types'
import { WebView } from 'react-native'

const Article = (props) => {
  const { url } = props
  return <WebView source={{ uri: url }} startInLoadingState />
}

Article.propTypes = {
  url: PropTypes.string.isRequired
}

export default Article
