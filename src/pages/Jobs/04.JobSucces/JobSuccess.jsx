import { View, Text, TouchableOpacity ,Image} from "react-native";
import React from "react";
import st from "./jobSuccess.sass";
import {
  JobResult,
  JobTopBar,
  ProfileItem,
  ApplyBtnWide,
} from "../JobComponents";
import himage from "../../../images/checklist.png";
import { BtnPrimaryW } from "../../../components/Btns";

const JobSuccess = ({navigation}) => {
  const nextPage = () => {
    navigation.navigate("JobSearch");
  };
  return (
    <View style={st.g_container}>
      <JobTopBar title="Aplicar" />
      <View style={st.image_box}>
        <Image source={himage} style={st.image} resizeMode="stretch" />
      </View>
      <Text style={st.text}>Has aplicado con exito en esta vacante</Text>
      <JobResult title="Farmatodo" apply={false} />
      <View style={{marginTop:72}} >
      <BtnPrimaryW text="Volver al inicio" action={nextPage} />
      </View>
    </View>
  );
};

export default JobSuccess;
