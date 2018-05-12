import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'

const Article = (props) => {
  const { id } = props
  return (
    <View style={styles.container}>
      <Text>
        Article {id} content will be shown here.
      </Text>
    </View>
  )
}

Article.propTypes = {
  id: PropTypes.number.isRequired
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
})

export default Article
