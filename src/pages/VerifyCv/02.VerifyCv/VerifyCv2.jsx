import { View, Image, TouchableOpacity } from "react-native";
import Text from "../../../components/Text";
import React, { useState } from "react";
import st from "./verifyCv2.sass";
import VerifyIdBack from "../../../components/VerifyIdBack";
import { ArrowDown, Badge, Book, Cross } from "../../../components/Icons";

import himage from "../../../images/idcard.png";
import vnzl from "../../../images/vnzla.png";
import { BtnPrimaryW } from "../../../components/Btns";
import { SearchBar } from "../../../components/SearchDisplay";
import {
  CheckCircleDouble,
  InputNormal,
  InputOptions,
  ItemExpEdit,
  PlusText,
} from "../CvItems";

const VerifyCv2 = ({ navigation }) => {
  const nextPage = () => {
    navigation.navigate("VerifyCv3");
  };

  const [input, setInput] = useState("");

  return (
    <VerifyIdBack
      title="Crea un perfil profesional"
      subtitle="Venenatis nisl vel sed gravida vestibulum. "
    >
      <Text style={st.subtitle}>Mis estudios</Text>
      <PlusText text="Añadir Estudios" />
      <ItemExpEdit
        text1="Bachillerato / Educacion media"
        text2="E.B.N Los laureles"
        text3="Junio 2012 - Marzo 2014"
      />
      <Text style={st.subtitle}>Centro de educacion</Text>
      <InputNormal text="¿Donde estudiaste?" />
      <Text style={st.subtitle}>Nivel de estudios</Text>
      <InputOptions text="Educacion basica primaria" />

      <Text style={st.subtitle}>¿Cursando actualmente?</Text>
      <CheckCircleDouble />
      {/* DOUBLE INPUTS */}
      <Text style={st.subtitle}>Desde</Text>
      <View style={st.double_input_ctn}>
        <InputOptions text="Mes" type={true} />
        <InputOptions text="Año" type={true} />
      </View>
      <Text style={st.subtitle}>Hasta</Text>
      <View style={st.double_input_ctn}>
        <InputOptions text="Mes" type={true} />
        <InputOptions text="Año" type={true} />
      </View>

      <TouchableOpacity style={st.save_btn} >
        <Text color="#FFFFFF" >Guardar</Text>
      </TouchableOpacity>

      <View style={st.bottom}>
        <BtnPrimaryW text="Continuar" action={nextPage} /> 
      </View>

      <View style={{ height: 200 }}></View>
    </VerifyIdBack>
  );
};

export default VerifyCv2;
