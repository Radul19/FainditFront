import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import st from "./jobApply.sass";
import {
  JobResult,
  JobTopBar,
  ProfileItem,
  ApplyBtnWide,
} from "../JobComponents";
const JobApply = ({ navigation }) => {
  
  const nextPage = () => {
    navigation.navigate("JobSuccess");
  };
  
  const goCreate = ()=>{
    navigation.navigate("VerifyCv1");
  }

  return (
    <View style={st.g_container}>
      <JobTopBar title="Aplicar" />
      <JobResult title="Farmatodo" apply={false} />
      <Text style={st.text}>
        ¿Con cual perfil deseas aplicar en esta vacante?
      </Text>
      <ProfileItem text="Perfil Cajero" />
      <ProfileItem text="Perfil Contador" />
      <ApplyBtnWide action={nextPage} />
      <TouchableOpacity style={st.undertext_ctn} onPress={goCreate} >
        <Text style={st.undertext} >Crear perfil profesional</Text>
      </TouchableOpacity>
    </View>
  );
};

export default JobApply;
