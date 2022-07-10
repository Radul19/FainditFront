import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TuMarketTopBar } from "../../../components/TopBar";
import { ArrowBack, EmailApply, Tune } from "../../../components/Icons";
import { SearchBar } from "../../../components/SearchDisplay";
import st from "./jobCreate.sass";
import { ApplyBtnWide, JobCreateTopBar } from "../JobComponents";
import { InputWide } from "../../../components/Inputs";
import { NavBarGeneral } from "../../../components/NavBar";

const JobView = ({ navigation }) => {
  const [input, setInput] = useState({
    name: "",
    description: "",
    req: "",
  });

  const nextPage = () => {
    navigation.navigate("JobPrice");
  };

  return (
    <View style={st.g_container}>
      <View style={{ paddingVertical: 20, flex: 1, paddingHorizontal: 20 }}>
        <JobCreateTopBar title="Crear Vacante" />
        <ScrollView style={st.scrollview}>
          <Text style={[st.subtitle, { fontSize: 16 }]}>
            Crea una vacante para que las personas puedan aplicar en ella
          </Text>
          <View style={{ margin: 12 }}></View>
          <Text style={st.subtitle}>Nombre de la vacante</Text>
          <InputWide
            name={"name"}
            value={input.name}
            set={setInput}
            placehold="Nombre..."
          />
          <View style={{ margin: 12 }}></View>
          <Text style={st.subtitle}>Descipcion</Text>
          <InputWide
            name={"name"}
            value={input.description}
            set={setInput}
            placehold="Descripcion..."
          />
          <View style={{ margin: 12 }}></View>
          <Text style={st.subtitle}>Requisitos</Text>
          <InputWide
            name={"name"}
            value={input.req}
            set={setInput}
            placehold="Requisitos..."
          />
        </ScrollView>
        <TouchableOpacity style={st.cj_continue_btn} onPress={nextPage}>
          <Text style={{ color: "#fff" }}>Continuar</Text>
        </TouchableOpacity>
      </View>
      <NavBarGeneral active={5} />
    </View>
  );
};

export default JobView;
