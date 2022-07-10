import { View, Text, ScrollView, TouchableOpacity ,TextInput} from "react-native";
import React, { useState } from "react";
import { TuMarketTopBar } from "../../../components/TopBar";
import { ArrowBack, EmailApply, Tune } from "../../../components/Icons";
import { SearchBar } from "../../../components/SearchDisplay";
import st from "./jobPrice.sass";
import { ApplyBtnWide, JobCreateTopBar } from "../JobComponents";
import { InputWide } from "../../../components/Inputs";
import { NavBarGeneral } from "../../../components/NavBar";
import { ArrowDown, ArrowUp } from '../../../components/Icons'

const JobView = ({ navigation }) => {
  const [num, setNum] = useState("27,5")
  const [input,setInput] = useState({
    place:""
  })

  const [coin, setCoin] = useState(true)

  const changeCoin = () => {
      setCoin(!coin)
  }

  const nextPage = () => {
    navigation.navigate("JobAdmin");
  };

  return (
    <View style={st.g_container}>
      <View style={{ paddingVertical: 20, flex: 1, paddingHorizontal: 20 }}>
        <JobCreateTopBar title="Crear Vacante" />
        <ScrollView style={st.scrollview}>
          <Text style={[st.subtitle, { fontSize: 16 }]}>
            Informacion complementaria
          </Text>
          <View style={{ margin: 12 }}></View>
          <Text style={st.subtitle}>Ubicacion</Text>
          <InputWide
            name={"place"}
            value={input.place}
            set={setInput}
            placehold="Cabimas, Los laureles, Calle 23..."
          />
          <View style={{ margin: 12 }}></View>
          <Text style={st.subtitle}>Salario</Text>
          <View style={st.input_ctn} >
                    <View style={st.input}>
                        <TextInput
                            style={{ fontSize: 42, color: '#ff6a00' }}
                            value={num}
                            onChangeText={setNum}
                            keyboardType="numeric"
                        />
                    </View>
                    {coin ?
                        <Text style={{ fontSize: 26, color: '#ff6a00', marginRight: 10, minWidth: 26 }} >Bsf</Text>
                        :
                        <Text style={{ fontSize: 40, color: '#ff6a00', marginRight: 10, minWidth: 26 }} >$</Text>
                    }
                    <View>
                        <ArrowUp action={changeCoin} />
                        <ArrowDown color='#ff6a00' action={changeCoin} />
                    </View>
                </View>
        </ScrollView>
        <TouchableOpacity style={st.cj_create_btn} onPress={nextPage}>
          <Text style={{ color: "#fff" }}>Crear vacante</Text>
        </TouchableOpacity>
      </View>
      <NavBarGeneral active={5} />
    </View>
  );
};

export default JobView;
