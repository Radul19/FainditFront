import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import st from "./userId5.sass";
import VerifyIdBack from "../../../components/VerifyIdBack";

import himage from "../../../images/checklist.png";
import { BtnPrimaryW } from "../../../components/Btns";

const UserID5 = ({ navigation }) => {
  const nextPage = () => {
    navigation.navigate("User");
  };

  const resetPhotos = () => {
    navigation.navigate("UserID_3");
  };
  return (
    <VerifyIdBack title="Verificacion en proceso" subtitle="Lorem ipsum dolor sit amet, consectetur. " >
      <View style={st.image_box}>
        <Image source={himage} style={st.image} resizeMode="stretch" />
      </View>
      <Text style={st.subtitle}>
        El proceso de verificacion puede demorar de 1 a 2 dias
      </Text>

      <Text style={st.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna est,
        maecenas elit vulputate sed sit morbi nulla. Lacus augue tincidunt
        sociis magna.
      </Text>

      <View style={st.bottom}>
        <BtnPrimaryW text="Volver al inicio" action={nextPage} />
        <TouchableOpacity style={st.text_omt_ctn} onPress={resetPhotos}>
          <Text style={st.text_omt}>Volver a hacer las fotografias</Text>
        </TouchableOpacity>
      </View>
    </VerifyIdBack>
  );
};

export default UserID5;
