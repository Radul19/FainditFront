import { View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'

import st from './login.sass'
import Text from '../../../components/Text'

import { BtnPrimaryW } from '../../../components/Btns'

const LoginPage = ({ navigation }) => {

    const [inputs, setInputs] = useState({
        user: '',
        email: '',
        password: '',
        confirmPassword: '',
        number: '',
    })

    const inputChange = (name, data) => setInputs({ ...inputs, [name]: data });

    return (
        <View style={st.g_container} >
            <View style={st.g_container} >
                <TouchableOpacity onPress={() => {
                    navigation.goBack()
                }} style={st.top} >
                    <Text color="#0067ce" >Back</Text>
                </TouchableOpacity>
                <View style={st.logo} >
                    <Text style={{ fontSize: 20 }} >Logo</Text>
                </View>
                <View style={st.bot} >
                    <TextInput
                        autoComplete='off'
                        placeholder='User' style={st.input}
                        value={inputs.user}
                        onChangeText={(text) => inputChange('user', text)} />
                    <TextInput
                        autoComplete='off'
                        placeholder='Password' style={st.input}
                        secureTextEntry={true}
                        value={inputs.password}
                        onChangeText={(text) => inputChange('password', text)} />

                    <View style={st.bot_text_ctn} >
                        <Text style={st.bot_text} >¿No tienes una cuenta?</Text>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Register')
                        }} >
                            <Text color='#0067ce' style={st.bot_text_ctn_login} >Registrate</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={st.bot_text} >Tambien puedes ingresar con:</Text>
                    <View style={st.bot_g_f_container}  >
                        <TouchableOpacity style={st.bot_g_f_btn} ><Text>G</Text></TouchableOpacity>
                        <TouchableOpacity style={st.bot_g_f_btn} ><Text>F</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
            <BtnPrimaryW onPress={() => { navigation.navigate('User') }} text={'Ingresar'} />
        </View>
    )
}

export default LoginPage