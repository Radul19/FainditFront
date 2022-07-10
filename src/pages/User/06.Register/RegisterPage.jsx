import {
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";

import st from "./register.sass";
import Text from "../../../components/Text";
import { BtnPrimaryW } from "../../../components/Btns";
import { ArrowBack, BigArrowBack } from "../../../components/Icons";
import logo from "../../../images/backreg2.png";
import himage from "../../../images/HimageCreate.png";
import { InputWide } from "../../../components/Inputs";

const RegisterPage = ({ navigation }) => {
  const [inputs, setInputs] = useState({
    name: "",
    second_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputChange = (name, data) => setInputs({ ...inputs, [name]: data });

  return (
    <View style={st.g_container}>
      <Image source={logo} style={st.image} resizeMode="stretch" />
      <ScrollView style={st.g_container_scroll}>
        <View style={st.top}>
          {/* <View style={st.back_absolute}>
            <BigArrowBack />
          </View> */}
          <Text style={st.top_title}>Create una cuenta</Text>
          <Text style={st.top_text}>Aliquam ultrices suspendisse varius.</Text>
        </View>
        <View style={st.bot}>
          <View style={st.himage_ctn}>
            <Image style={st.himage} source={himage}></Image>
          </View>
          <Text style={st.input_title}>Nombres</Text>
          <InputWide
            name="name"
            value={inputs.name}
            set={inputChange}
            placehold="Ej: Carlos Enrique"
          />
          <Text style={st.input_title}>Apellidos</Text>
          <InputWide
            name="second_name"
            value={inputs.second_name}
            set={inputChange}
            placehold="Ej: Martinez Coronado"
          />
          <Text style={st.input_title}>Correo Electronico</Text>
          <InputWide
            name="email"
            value={inputs.email}
            set={inputChange}
            placehold="Ej: perez@gmail.com"
          />
          <Text style={st.input_title}>Contraseña</Text>
          <InputWide
            name="password"
            value={inputs.password}
            set={inputChange}
            placehold="**********"
            pass={true}
          />
          <Text style={st.input_title}>Confirmar Contraseña</Text>
          <InputWide
            name="confirmPassword"
            value={inputs.confirmPassword}
            set={inputChange}
            placehold="**********"
            pass={true}
          />
          {/* <View style={styles.bot_text_ctn} >
                        <Text style={styles.bot_text} >¿Ya tienes una cuenta?</Text>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Login')
                        }} >
                            <Text color='#0067ce' style={styles.bot_text_ctn_login} >Ingresa</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.bot_text} >Tambien puedes registrarte con:</Text>
                    <View style={styles.bot_g_f_container}  >
                        <TouchableOpacity style={styles.bot_g_f_btn} ><Text>G</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.bot_g_f_btn} ><Text>F</Text></TouchableOpacity>
                    </View> */}
          <View style={{ height: 30 }}></View>
          <BtnPrimaryW
            action={() => {
              navigation.navigate("ExtraData");
            }}
            text={"Continuar"}
          />
          <View style={st.bot_text_ctn}>
            <Text style={st.bot_text}>¿Ya tienes una cuenta?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("UserLogout");
              }}
            >
              <Text color="#FF6A00" style={st.bot_text_ctn_login}>
                Ingresa!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const InfoInput = ({ text, placehold }) => {
  return (
    <View style={st.infoInput_ctn}>
      <Text style={st.infoInput_text}>{text}</Text>
      <Text style={st.infoInput_input}>{placehold}</Text>
    </View>
  );
};

export default RegisterPage;
