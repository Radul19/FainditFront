import { View, TouchableOpacity, Image } from "react-native";
import React from "react";

import st from "./extraData.sass";
import Text from "../../../components/Text";
import { NavBarGeneral } from "../../../components/NavBar";
import { BtnPrimaryW, BtnSecondaryW } from "../../../components/Btns";
import logo from "../../../images/backreg2.png";
import { ArrowDown, BigArrowBack } from "../../../components/Icons";

import himage from "../../../images/HimageCreate2.png";
import vnzl from "../../../images/vnzla.png";

const ExtraDataPage = ({ navigation }) => {
  return (
    <View style={st.g_container}>
      <View style={st.absolute_arrow}>
        <BigArrowBack />
      </View>
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
          <InfoInput
            text={"Direccion"}
            placehold="Av. Universidad. Calle n4 "
          />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <InfoIputFlag text={"Pais de origen"} placehold="Venezuela" />
            <InfoInput text={"Fecha de nacimiento"} placehold="20/03/1997" />
          </View>

          <View style={st.absolute_btn_bottom}>
            <BtnPrimaryW
              text={"Continuar"}
              action={() => {
                navigation.navigate("Verification");
              }}
            />
          </View>

          <View style={st.absolute_bottom_text_ctn}>
            {/* <TouchableOpacity
              style={st.register_text_ctn}
              onPress={() => {
                navigation.navigate("Verification");
              }}
            >
              <Text style={st.register_text_back}>Regresar</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              style={st.register_text_ctn}
              onPress={() => {
                navigation.navigate("Verification");
              }}
            >
              <Text style={st.register_text}>Omitir este paso</Text>
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
