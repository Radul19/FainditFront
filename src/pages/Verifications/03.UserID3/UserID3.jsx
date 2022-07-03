import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import st from "./userId3.sass";
import VerifyIdPhoto from "../VerifyIdPhoto";

import picImage from "../../../images/rectangle.png";
import himage from "../../../images/idcard.png";
import { BtnPrimaryW } from "../../../components/Btns";

const UserID3 = ({ navigation }) => {
  const nextPage = () => {
    navigation.navigate("UserID_4");
  };

  return (
    <VerifyIdPhoto
      title="Documento de identidad"
      subtitle="Coloca el documento de identidad en el recuadro"
      image={picImage}
    >
      <View style={st.image_box}>
        <Image source={himage} style={st.image} resizeMode="stretch" />
      </View>
      <Text style={st.subtitle}>Texto </Text>

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

      <View style={{ height: 100 }}></View>
    </VerifyIdPhoto>
  );
};

export default UserID3;
