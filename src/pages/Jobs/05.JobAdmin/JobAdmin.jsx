import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { TuMarketTopBarLogo } from "../../../components/TopBar";
import { EmailApply, Tune } from "../../../components/Icons";
import { SearchBar } from "../../../components/SearchDisplay";
import st from "./jobAdmin.sass";
import { JobResult,JobEdit } from "../JobComponents";
import { NavBarGeneral } from "../../../components/NavBar";
import fjobsbanner from '../../../images/fjobsbanner.png'

const JobAdmin = ({ navigation }) => {
  const [input, setInput] = useState("");
  return (
    <View style={st.g_container}>
      <View style={st.inside_ctn}>
        <View style={st.top_ctn}>
          <Text style={st.title} >Empleo</Text>
        </View>
        <SearchBar value={input} set={setInput} placehold="Buscar Trabajo" />
        <Text style={{marginVertical:6,fontSize:16}} >Vacantes activas en tu negocio</Text>
        <ScrollView style={st.scrollview}>
          <JobEdit title={"Farmatodo"} />
          <JobEdit title={"Farmatodo"} />
          <JobEdit title={"Farmatodo"} />
        </ScrollView>
      </View>
      <NavBarGeneral active={5} />
    </View>
  );
};

export default JobAdmin;
