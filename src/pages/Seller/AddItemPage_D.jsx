import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import styles from '../../sass/pages/Seller/addItem.sass'
import { TopBarAddItem } from '../../components/TopBar'
import { BtnDoubleBox } from '../../components/Btns'
import { NavBarGeneral } from '../../components/NavBar'
import { ArrowDown, ArrowUp } from '../../components/Icons'

const AddItemPage_D = ({ navigation }) => {

    const [input, setInput] = useState('27,5')

    const [coin, setCoin] = useState(true)

    const changeCoin = () => {
        setCoin(!coin)
    }



    return (
        <View style={styles.g_container} >
            <ScrollView style={styles.g_container} >
                <TopBarAddItem navigation={navigation} />
                <Text style={styles.title_2} >Pongámosle un precio</Text>
                <View style={styles.input_ctn} >
                    <View style={styles.input}>
                        <TextInput
                            style={{ fontSize: 42, color: '#ff6a00' }}
                            value={input}
                            onChangeText={setInput}
                            keyboardType="numeric"
                        />
                    </View>
                    {coin ?
                        <Text style={{ fontSize: 26, color: '#ff6a00', marginRight: 10, minWidth: 26 }} >Bsf</Text>
                        :
                        <Text style={{ fontSize: 40, color: '#ff6a00', marginRight: 10, minWidth: 26 }} >$</Text>
                    }
                    <View>
                        <ArrowUp action={changeCoin} />
                        <ArrowDown color='#ff6a00' action={changeCoin} />
                    </View>
                </View>
            </ScrollView>
            <BtnDoubleBox text={'Publicar'} navigation={navigation} onPress={() => { navigation.navigate('Inventory') }} />
            <NavBarGeneral navigation={navigation} active={2} />
        </View>
    )
}



export default AddItemPage_D