import React from 'react'

import Article from '../components/Article'

const ArticleScreen = (props) => {
  const { id } = props.navigation.state.params
  return <Article id={id} />
}

export default ArticleScreen
