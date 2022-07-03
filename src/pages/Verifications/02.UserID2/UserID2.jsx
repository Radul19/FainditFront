import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import st from "./userId2.sass";
import VerifyIdBack from "../../../components/VerifyIdBack";
import { ArrowDown, Badge, Book } from "../../../components/Icons";

import himage from "../../../images/idcard.png";
import vnzl from "../../../images/vnzla.png";
import { BtnPrimaryW } from "../../../components/Btns";

const UserID2 = ({ navigation }) => {
  const nextPage = () => {
    navigation.navigate("UserID_3");
  };
  return (
    <VerifyIdBack
      title="Verificacion de identidad"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
    >
      <View style={st.image_box}>
        <Image source={himage} style={st.image} resizeMode="stretch" />
      </View>
      <Text style={st.subtitle}>Texto indicaciones</Text>

      <Text style={st.text}>
        *Este es tu documento personal emitido por el gobierno
      </Text>
      <Text style={st.text}>*Documento original</Text>
      <Text style={st.text}>*Enfoca bien la fotografia</Text>

      <View style={st.bottom}>
        <BtnPrimaryW text="Continuar" action={nextPage} />
        <TouchableOpacity style={st.text_omt_ctn} onPress={nextPage}>
          <Text style={st.text_omt}>Omitir este paso</Text>
        </TouchableOpacity>
      </View>
    </VerifyIdBack>
  );
};

export default UserID2;
