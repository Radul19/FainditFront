import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../sass/components/comment.sass'
import { Stars } from './Icons'

import image from '../images/girl.png'

const Notification = ({ item, navigate }) => {

    const press = () => {
        navigate('Item')
    }

    return (
        <TouchableOpacity style={styles.answer_ctn} onPress={press}>
            <View style={styles.comment_left} >
                <View style={[styles.comment_left_profile, styles.image_border]} >
                    <Image source={item.imgUrl} style={styles.image} resizeMode="cover" />
                </View>
            </View>
            <View style={styles.comment_right} >
                <View style={styles.comment_right_top} >
                    <Text style={{ color: "#FF6A00" }} >{item.title}</Text>
                </View>
                <Text style={styles.comment_right_text} >{item.body}</Text>
                <Text style={styles.comment_right_date} >05/06/2022</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Notification