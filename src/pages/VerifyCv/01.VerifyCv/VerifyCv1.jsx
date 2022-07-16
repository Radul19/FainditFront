import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import st from "./verifyCv1.sass";
import VerifyIdBack from "../../../components/VerifyIdBack";
import { ArrowDown, Badge, Book, Cross } from "../../../components/Icons";

import himage from "../../../images/idcard.png";
import vnzl from "../../../images/vnzla.png";
import { BtnPrimaryW } from "../../../components/Btns";
import { SearchBar } from "../../../components/SearchDisplay";
import { InputWide } from "../../../components/Inputs";

const VerifyCv1 = ({ navigation }) => {
  const nextPage = () => {
    navigation.navigate("VerifyCv2");
  };

  const [search, setSearch] = useState("");
  const [inputs, setInputs] = useState({
    name: "",
    details: "",
  });

  return (
    <VerifyIdBack
      title="Crea un perfil profesional"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
    >
      <Text style={st.subtitle}>Nombre del perfil</Text>
      <InputWide
        name="name"
        set={setInputs}
        value={inputs.name}
        placehold="Ej: Cajero"
      />
      <Text style={st.subtitle}>Hablanos un poco sobre tu experiencia</Text>
      <InputWide
        name="details"
        set={setInputs}
        value={inputs.details}
        placehold="Detalles..."
      />
      <Text style={st.subtitle}>Aptitudes </Text>
      <SearchBar value={search} set={setSearch} placehold="Añade aptitudes" />

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
        {/* <TouchableOpacity style={st.text_omt_ctn} onPress={nextPage}>
          <Text style={st.text_omt}>Omitir este paso</Text>
        </TouchableOpacity> */}
      </View>

      <View style={{ height: 200 }}></View>
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
