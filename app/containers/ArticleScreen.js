import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

import Article from '../components/Article'

const ArticleScreen = (props) => {
  const id = props.navigation.state.params.id
  return <Article id={id} />
}

ArticleScreen.propTypes = {
  navigation: PropTypes.shape({}).isRequired
}

export default ArticleScreen
