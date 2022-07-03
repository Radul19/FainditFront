import { View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import st from './userLogout.sass'
import Text from '../../../components/Text'
import { NavBarGeneral } from '../../../components/NavBar';
import { BtnPrimaryW, BtnSecondaryW } from '../../../components/Btns'
import logo from '../../../images/loginBack.png'
import { BigArrowBack } from '../../../components/Icons';

const UserLogoutPage = ({ navigation }) => {
    return (
        <View style={st.g_container} >
            <View style={st.absolute_arrow} >
                <BigArrowBack />
            </View>
            <Image source={logo} style={st.image} resizeMode="stretch" />
            <View style={st.g_container_scroll} >
                <View style={st.top} >
                    <Text style={st.top_title} >Bienvenido</Text>
                    <Text style={st.top_text} >Aliquam ultrices suspendisse varius.</Text>
                </View>
                <View style={st.bot} >
                    <InfoInput text={'Correo Electronico'} placehold="Ingresa tu correo electronico" />
                    <InfoInput text={'Contraseña'} placehold="Ingresa tu contraseña" />
                    <Text style={st.forg_pass} >¿Olvidaste tu contraseña?</Text>

                    <BtnPrimaryW text={'Ingresar'} action={() => { navigation.navigate("User") }} />

                    <View style={st.bottom_text_ctn} >
                        <Text>No tienes cuenta?</Text>
                        <TouchableOpacity style={st.register_text_ctn} onPress={() => { navigation.navigate('Register') }} >
                            <Text style={st.register_text} >Registrate!</Text>
                        </TouchableOpacity>
                    </View>

                    {/* <View style={styles.bot_g_f_container}  >
                        <TouchableOpacity style={styles.bot_g_f_btn} ><Text>G</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.bot_g_f_btn} ><Text>F</Text></TouchableOpacity>
                    </View> */}
                </View>
                {/* <NavBarGeneral navigation={navigation} active={4} /> */}
            </View>
        </View>
    )
}

const InfoInput = ({ text, placehold }) => {
    return (
        <View style={st.infoInput_ctn} >
            <Text style={st.infoInput_text} >{text}</Text>
            <Text style={st.infoInput_input} >{placehold}</Text>
        </View>
    )
}


export default UserLogoutPage