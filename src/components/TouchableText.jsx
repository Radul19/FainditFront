import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const TouchableText = ({children}) => {
  return (
    <TouchableOpacity>
      <Text>TouchableText</Text>
    </TouchableOpacity>
  )
}

export default TouchableText