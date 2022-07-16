import { View, Image, TouchableOpacity } from "react-native";
import Text from "../../../components/Text";
import React, { useState } from "react";
import st from "./verifyCv3.sass";
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
import { InputWide } from "../../../components/Inputs";

const VerifyCv3 = ({ navigation }) => {
  const nextPage = () => {
    navigation.navigate("VerifyCv4");
  };

  const [inputs, setInputs] = useState({
    rol: "",
    name: "",
    functions:""
  });

  return (
    <VerifyIdBack
      title="Crea un perfil profesional"
      subtitle="Venenatis nisl vel sed gravida vestibulum. "
    >
      <Text style={st.subtitle}>Experiencia laboral</Text>
      <PlusText text="Añadir experiencia laboral" />
      <ItemExpEdit
        text1="Cajero"
        text2="Walmart"
        text3="Junio 2019 - Marzo 2020"
      />
      <Text style={st.subtitle}>Cargo</Text>
      <InputWide
        name="rol"
        set={setInputs}
        value={inputs.rol}
        placehold="Ej: Contador"
      />
      <Text style={st.subtitle}>Nombre de la empresa</Text>
      <InputWide
        name="name"
        set={setInputs}
        value={inputs.name}
        placehold="Ej: Microsoft"
      />
      <Text style={st.subtitle}>Funciones del cargo</Text>
      <InputWide
        name="functions"
        set={setInputs}
        value={inputs.functions}
        placehold="Detalles..."
      />

      <Text style={st.subtitle}>¿Sigue trabajando alli?</Text>
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

export default VerifyCv3;
