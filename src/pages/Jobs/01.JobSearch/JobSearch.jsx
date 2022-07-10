import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { TuMarketTopBarLogo } from "../../../components/TopBar";
import { EmailApply, Tune } from "../../../components/Icons";
import { SearchBar } from "../../../components/SearchDisplay";
import st from "./jobSearch.sass";
import { JobResult } from "../JobComponents";
import { NavBarGeneral } from "../../../components/NavBar";
import fjobsbanner from '../../../images/fjobsbanner.png'

const JobSearch = ({ navigation }) => {
  const [input, setInput] = useState("");
  return (
    <View style={st.g_container}>
      <View style={st.inside_ctn}>
        <View style={{ marginLeft: -20 }}>
          <TuMarketTopBarLogo image={fjobsbanner} />
        </View>
        <SearchBar value={input} set={setInput} placehold="Buscar Trabajo" />
        <Text style={{marginBottom:12}} >Publicaciones mas recientes</Text>
        <ScrollView style={st.scrollview}>
          <JobResult title={"Farmatodo"} />
          <JobResult title={"Farmatodo"} />
          <JobResult title={"Farmatodo"} />
        </ScrollView>
      </View>
      <NavBarGeneral active={5} />
    </View>
  );
};

export default JobSearch;
