import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import styles from '../../sass/pages/Seller/addItem.sass'
import { TopBarAddItem } from '../../components/TopBar'
import { BtnDoubleBox } from '../../components/Btns'
import { NavBarGeneral } from '../../components/NavBar'

const AddItemPage_B = ({ navigation }) => {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    return (
        <View style={styles.g_container} >
            <ScrollView style={styles.g_container} >
                <TopBarAddItem navigation={navigation} />


                <Text style={styles.title} >Nombre del producto / servicio</Text>
                <TextInput placeholder='Nombre...' style={styles.input_name} value={name} onChangeText={setName} />
                <View style={styles.name_underline} ></View>


                <Text style={styles.title} >Agrega una descripcion clara sobre el articulo o servicio que quieres ofrecer.</Text>
                <TextInput placeholder='Nombre...' style={styles.input_name} value={name} onChangeText={setName} multiline={true} />
                <View style={styles.name_underline} ></View>


                <TouchableOpacity>
                    <Text style={{ marginLeft: 20, }} >500 caracteres maximo</Text>
                </TouchableOpacity>
            </ScrollView>

            <BtnDoubleBox text={'Continuar'} navigation={navigation} onPress={() => { navigation.navigate('AddItem_Images') }} />
            <NavBarGeneral navigation={navigation} active={2} />
        </View>
    )
}



export default AddItemPage_B