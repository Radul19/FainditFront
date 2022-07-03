import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import st from "./userId4.sass";
import VerifyIdPhoto from "../VerifyIdPhoto";

import himage from "../../../images/selfie.png";
import selfieBox from "../../../images/face.png";
import { BtnPrimaryW } from "../../../components/Btns";

const UserID4 = ({ navigation }) => {
  const nextPage = () => {
    navigation.navigate("UserID_5");
  };

  return (
    <VerifyIdPhoto
      title="Autoretrato"
      subtitle="Asegurese de que su rostro encaje en el recuadro "
      image={selfieBox}
      type={false}
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

      <View style={{ height: 100 }}></View>
    </VerifyIdPhoto>
  );
};

export default UserID4;
