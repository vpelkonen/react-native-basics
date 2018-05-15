import React from 'react'
import { WebView } from 'react-native'

const ArticleScreen = (props) => {
  // const url = props.navigation.state.params.url
  // const { navigation: { state: { params: { url } } } } = props
  const { url } = props.navigation.state.params
  return (
    <WebView
      source={{ url }}
      // startInLoadingState={true}
      startInLoadingState
    />
  )
}

export default ArticleScreen
