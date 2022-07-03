import { Text as TextRN } from 'react-native';
import React from 'react'

const Text = ({ children, color = "#000", style = {} }) => {
    return (
        <TextRN style={[{ color: color }, style]} >{children}</TextRN>
    )
}

export default Text