import React from 'react'

import Article from '../components/Article'

const ArticleScreen = (props) => {
  const { url } = props.navigation.state.params
  return <Article url={url} />
}

export default ArticleScreen
