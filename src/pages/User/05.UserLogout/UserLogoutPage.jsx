import { View, TouchableOpacity, Image } from "react-native";
import React, { useContext, useState } from "react";

import st from "./userLogout.sass";
import Text from "../../../components/Text";
import { NavBarGeneral } from "../../../components/NavBar";
import { BtnPrimaryW, BtnSecondaryW } from "../../../components/Btns";
import logo from "../../../images/loginBack.png";
import { BigArrowBack } from "../../../components/Icons";
import { Context } from "../../../controllers/Context";
import { InputWide, InfoInput } from "../../../components/Inputs";

const UserLogoutPage = ({ navigation }) => {
  const { setAuthFaMarket } = useContext(Context);

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const inputChange = (name, data) => setInputs({ ...inputs, [name]: data });

  return (
    <View style={st.g_container}>
      <View style={st.absolute_arrow}>
        <BigArrowBack />
      </View>
      <Image source={logo} style={st.image} resizeMode="stretch" />
      <View style={st.g_container_scroll}>
        <View style={st.top}>
          <Text style={st.top_title}>Bienvenido</Text>
          <Text style={st.top_text}>Aliquam ultrices suspendisse varius.</Text>
        </View>
        <View style={st.bot}>
          <Text style={st.input_title}>Correo</Text>
          <InputWide
            name="email"
            set={inputChange}
            placehold="Ingresa tu correo electronico"
            value={inputs.email}
          />
          <Text style={[st.input_title,{marginTop:10}]}>Contraseña</Text>
          <InputWide
            name="password"
            set={inputChange}
            placehold="Ingresa tu contraseña"
            value={inputs.password}
          />
          <Text style={st.forg_pass}>¿Olvidaste tu contraseña?</Text>

          <BtnPrimaryW
            text={"Ingresar"}
            action={() => {
              setAuthFaMarket(true);
              navigation.navigate("User");
            }}
          />

          <View style={st.bottom_text_ctn}>
            <Text>No tienes cuenta?</Text>
            <TouchableOpacity
              style={st.register_text_ctn}
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              <Text style={st.register_text}>Registrate!</Text>
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
  );
};

export default UserLogoutPage;
