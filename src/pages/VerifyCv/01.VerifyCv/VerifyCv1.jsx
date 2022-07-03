import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import st from "./verifyCv1.sass";
import VerifyIdBack from "../../../components/VerifyIdBack";
import { ArrowDown, Badge, Book, Cross } from "../../../components/Icons";

import himage from "../../../images/idcard.png";
import vnzl from "../../../images/vnzla.png";
import { BtnPrimaryW } from "../../../components/Btns";
import { SearchBar } from "../../../components/SearchDisplay";

const VerifyCv1 = ({ navigation }) => {
  const nextPage = () => {
    navigation.navigate("VerifyCv2");
  };

  const [input, setInput] = useState("");

  return (
    <VerifyIdBack
      title="Verificacion de identidad"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
    >
      <Text style={st.subtitle}>Nombre del perfil</Text>
      <Text style={st.text}>Cajero</Text>
      <Text style={st.subtitle}>Hablanos un poco sobre ti </Text>
      <Text style={st.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        fringilla cras duis urna, purus, cras. Lorem a, tincidunt convallis
        volutpat diam diam massa ac molestie.{" "}
      </Text>
      <Text style={st.subtitle}>Aptitudes </Text>
      <SearchBar value={input} set={setInput} placehold="Añade aptitudes" />

      <View style={st.cross_tag_ctn}>
        <CrossTag text="Creativo" />
        <CrossTag text="Proactivo" />
        <CrossTag text="Agil" />
        <CrossTag text="Resiliencia" />
        <CrossTag text="Liderazgo" />
        <CrossTag text="Empatia" />
        <CrossTag text="Honestidad" />
        <CrossTag text="Frexibilidad" />
      </View>

      <View style={st.bottom}>
        <BtnPrimaryW text="Continuar" action={nextPage} />
        <TouchableOpacity style={st.text_omt_ctn} onPress={nextPage}>
          <Text style={st.text_omt}>Omitir este paso</Text>
        </TouchableOpacity>
      </View>

      <View style={{height:200}} ></View>
    </VerifyIdBack>
  );
};

export default VerifyCv1;

export const CrossTag = ({ text }) => {
  return (
    <TouchableOpacity style={st.cross_tag}>
      <Text style={st.cross_text}>{text}</Text>
      <Cross color="#fff" />
    </TouchableOpacity>
  );
};
