import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { TuMarketTopBar } from "../../../components/TopBar";
import { EmailApply, Tune } from "../../../components/Icons";
import { SearchBar } from "../../../components/SearchDisplay";
import st from "./jobSearch.sass";
import { JobResult } from "../JobComponents";
import { NavBarGeneral } from "../../../components/NavBar";

const JobSearch = ({ navigation }) => {
  const [input, setInput] = useState("");
  return (
    <View style={st.g_container}>
      <View style={st.inside_ctn}>
        <View style={{ marginLeft: -20 }}>
          <TuMarketTopBar title="Vacante de empleo" />
        </View>
        <View style={st.subtitle_tune_ctn}>
          <Text>Search</Text>
          <Tune />
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
