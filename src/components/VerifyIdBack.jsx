import { View, Text, Image,ScrollView } from "react-native";
import React from "react";
import st from "../sass/components/verifyIdBack.sass";
import backimg from "../images/back3.png";

const VerifyIdBack = ({ children,title,subtitle }) => {
  return (
    <View style={st.g_container}>
      <Image source={backimg} style={st.image_back}  /> 
      <Text style={st.title}>{title}</Text>
      <Text style={st.subtitle}>{subtitle}</Text>
      <ScrollView 
      style={st.box}>{children}</ScrollView>
    </View>
  );
};

export default VerifyIdBack;
