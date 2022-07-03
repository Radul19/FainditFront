import { View, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import styles from '../../sass/pages/User/item.sass'
import Text from '../../components/Text'
import Comment from '../../components/Comment'
import { BackTopBar, MarketTopBar } from '../../components/TopBar'
import nivea from "../../images/nivea1.png"
import { NavBarGeneral } from '../../components/NavBar'
import { BtnContact, BtnSubmitReview } from '../../components/Btns'
import { ArrowBack, BigArrowBack, Star } from '../../components/Icons'

const InventoryItemPage = ({ navigation }) => {

    const [inputName, setInputName] = useState('Crema Nivea Cellular')
    const [inputDesc, setInputDesc] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque curabitur eget faucibus dui in. Sapien tempus risus non turpis eget accumsan. Tellus morbi in diam nisl eu. Fermentum mi volutpat nisl semper sed sit. In.')

    return (
        <View style={styles.g_container} >
            <ScrollView style={styles.g_container} >
                <View style={styles.top} >
                    <MarketTopBar navigation={navigation} />
                    <View style={styles.top_mid} >
                        <Image source={nivea} style={styles.image} resizeMode="contain" />
                    </View>
                </View>
                <View style={styles.middle} >
                    <TextInput value={inputName} onChangeText={setInputName} placeholder="Nombre de producto/servicio" style={styles.middle_name} multiline={true} />
                    <View style={styles.underline_input} ></View>
                    {/* <Text style={styles.middle_name} >Crema Nivea Cellular</Text> */}
                    <Text style={styles.middle_price} >50 Bs.</Text>
                    <TextInput value={inputDesc} onChangeText={setInputDesc} placeholder="Nombre de producto/servicio" style={styles.middle_description} multiline={true} />
                    <View style={styles.underline_input} ></View>
                    {/* <Text style={styles.middle_description} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque curabitur eget faucibus dui in. Sapien tempus risus non turpis eget accumsan. Tellus morbi in diam nisl eu. Fermentum mi volutpat nisl semper sed sit. In.</Text> */}
                </View>
                <View style={{ height: 200 }} ></View>
            </ScrollView>
            <BtnSubmitReview text='Editar' />
            <NavBarGeneral navigation={navigation} active={2} />

        </View>
    )
}



export default InventoryItemPage