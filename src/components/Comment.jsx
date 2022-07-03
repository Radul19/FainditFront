import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../sass/components/comment.sass'
import { Stars } from './Icons'

import { useNavigation } from '@react-navigation/native'

import image from '../images/girl.png'
import farmatodo from '../images/farmatodo.jpg'

const Comment = ({ hide = false, answer = false }) => {

    const navigation = useNavigation()

    return (
        <>
            {answer ?
                <View style={styles.comment_ctn} >
                    <View style={styles.comment_left} >
                        <View style={styles.comment_profile} >
                            <Image source={farmatodo} style={styles.image} resizeMode="contain" />
                        </View>
                    </View>
                    <View style={styles.comment_right} >
                        <View style={styles.comment_right_top} >
                            <Text style={{ color: "#FF6A00" }} >Farmatodo</Text>
                        </View>
                        <Text style={styles.comment_right_text} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit orci auctor netus morbi vitae netus elit amet turpis id nisi ipsum dolor.</Text>
                        <Text style={styles.comment_right_date} >05/06/2022</Text>
                    </View>
                </View>
                : <View style={styles.answer_ctn} >
                    <View style={styles.answer_left} >
                        <View style={styles.answer_profile} >
                            <Image source={image} style={styles.image} resizeMode="contain" />
                        </View>
                    </View>
                    <View style={styles.answer_right} >
                        <View style={styles.answer_right_top} >
                            <Text style={{ color: "#FF6A00" }} >Dayana Solis</Text>
                            <Stars size='18' />
                        </View>
                        <Text style={styles.answer_text} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit orci auctor netus morbi vitae netus elit amet turpis id nisi ipsum dolor.</Text>
                        <View style={styles.answer_bottom} >
                            <Text style={styles.comment_right_date} >05/06/2022</Text>
                            <TouchableOpacity onPress={() => { navigation.navigate('Answer') }} >
                                <Text style={[styles.answer_text, styles.answer_text_2]} >Responder</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>}
        </>
    )
}

export default Comment