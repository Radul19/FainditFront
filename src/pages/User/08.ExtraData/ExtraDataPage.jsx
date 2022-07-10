import { View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

import st from "./extraData.sass";
import Text from "../../../components/Text";
import { NavBarGeneral } from "../../../components/NavBar";
import { BtnPrimaryW, BtnSecondaryW } from "../../../components/Btns";
import logo from "../../../images/backreg2.png";
import { ArrowDown, BigArrowBack } from "../../../components/Icons";

import himage from "../../../images/HimageCreate2.png";
import vnzl from "../../../images/vnzla.png";
import {
  InputWide,
  InputCountrySmall,
  InputMultipleOptions,
} from "../../../components/Inputs";

const ExtraDataPage = ({ navigation }) => {
  const [inputs, setInputs] = useState({
    address: "",
  });

  const inputChange = (name, data) => setInputs({ ...inputs, [name]: data });

  return (
    <View style={st.g_container}>
      {/* <View style={st.absolute_arrow}>
        <BigArrowBack />
      </View> */}
      <Image source={logo} style={st.image} resizeMode="stretch" />
      <View style={st.g_container_scroll}>
        <View style={st.top}>
          <Text style={st.top_title_small}>Datos Complementarios</Text>
          <Text style={st.top_text}>Aliquam ultrices suspendisse varius.</Text>
        </View>
        <View style={st.bot}>
          <View style={st.himage_ctn}>
            <Image style={st.himage} source={himage} />
          </View>
          <Text style={st.input_title}>Direccion</Text>
          <InputWide
            name="address"
            value={inputs.address}
            set={inputChange}
            placehold="Av. Universidad calle n4"
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 12,
            }}
          >
            <View>
              <Text style={[st.input_title, { marginBottom: 6 }]}>
                Pais de residencia
              </Text>
              <InputCountrySmall />
            </View>
            <InfoInput text={"Fecha de nacimiento"} placehold="20/03/1997" />
          </View>
          <Text style={[st.input_title, { marginTop: 12}]}>Sexo</Text>
          <InputMultipleOptions />

          <View style={st.absolute_btn_bottom}>
            <BtnPrimaryW
              text={"Continuar"}
              action={() => {
                navigation.navigate("Verification");
              }}
            />
          </View>

          <View style={st.absolute_bottom_text_ctn}>
            <TouchableOpacity
              style={st.register_text_ctn}
              onPress={() => {
                navigation.navigate("Verification");
              }}
            >
              <Text style={st.register_text}>Omitir este paso</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* <NavBarGeneral navigation={navigation} active={4} /> */}
      </View>
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
const InfoIputFlag = ({ text, placehold }) => {
  return (
    <View style={st.infoInput_ctn}>
      <Text style={st.infoInput_text}>{text}</Text>
      <TouchableOpacity style={[st.infoInput_image_ctn, { marginTop: 5 }]}>
        <Image source={vnzl} />
        <Text style={{ marginLeft: 5 }}>{placehold}</Text>
        <ArrowDown />
      </TouchableOpacity>
    </View>
  );
};

export default ExtraDataPage;
