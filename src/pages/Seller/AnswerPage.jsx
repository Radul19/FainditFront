import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { BackTopBar } from '../../components/TopBar'
import Comment from '../../components/Comment'
import styles from '../../sass/pages/Seller/generalReview.sass'

const AnswerPage = () => {

    const [input, setInput] = useState("")

    return (
        <View style={styles.g_container} >
            <BackTopBar text="Calificacion General" />
            <Comment />
            <TextInput
                value={input}
                onChangeText={setInput}
                style={styles.inputStyle}
                placeholder="Escribe una respuesta"
                multiline={true}
            />
            <View style={styles.underline} ></View>
        </View>
    )
}

export default AnswerPage
