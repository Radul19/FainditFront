import { View, Image, TouchableOpacity } from "react-native";
import Text from "../../../components/Text";
import React, { useState } from "react";
import st from "./verifyCv4.sass";
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

import { CrossTag } from "../01.VerifyCv/VerifyCv1";

const VerifyCv4 = ({ navigation }) => {
  const nextPage = () => {
    navigation.navigate("VerifyCv5");
  };

  const [input, setInput] = useState("");

  return (
    <VerifyIdBack
      title="Crea un perfil profesional"
      subtitle="Venenatis nisl vel sed gravida vestibulum. "
    >
      <Text style={st.subtitle}>Idiomas</Text>
      <PlusText text="Añadir un idioma" />
      <ItemExpEdit text1="Ingles" text2="Intermedio" text3="" />

      <View style={st.double_subtitle_ctn}>
        <Text style={st.double_subtitle}>Idioma</Text>
        <Text style={st.double_subtitle}>Nivel</Text>
      </View>
      <View style={st.double_input_ctn}>
        <InputOptions text="Idioma" type={true} />
        <InputOptions text="Nivel" type={true} />
      </View>

      <Text style={st.subtitle}>Habilidades</Text>
      <View style={{ marginTop: -12 }}></View>
      <SearchBar
        value={input}
        set={setInput}
        placehold="Añade distintas habilidades"
      />

      <View style={st.cross_tag_ctn}>
        <CrossTag text="Adobe illustrator" />
        <CrossTag text="AdobeXD" />
        <CrossTag text="Figma" />
        <CrossTag text="Excel" />
        <CrossTag text="Photoshop" />
        <CrossTag text="Office" />
      </View>

      <TouchableOpacity style={st.save_btn}>
        <Text color="#FFFFFF">Guardar</Text>
      </TouchableOpacity>
      <View style={st.bottom}>
        <BtnPrimaryW text="Continuar" action={nextPage} />
      </View>

      <View style={{ height: 200 }}></View>
    </VerifyIdBack>
  );
};

export default VerifyCv4;
