import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import st from "./verifyIdPhoto.sass";

const VerifyIdPhoto = ({ children, title, subtitle, image, type = true }) => {
  return (
    <View style={st.g_container}>
      <View style={type? st.image_picture_ctn : st.image_picture_ctn_2}>
        <Image source={image} style={st.image} resizeMode="stretch" />
      </View>
      <Text style={st.title}>{title}</Text>
      <Text style={st.subtitle}>{subtitle}</Text>
      <ScrollView style={st.box}>{children}</ScrollView>
    </View>
  );
};

export default VerifyIdPhoto;
