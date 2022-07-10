import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import styles from "../../../sass/pages/Seller/addItem.sass";
import { TopBarAddItem } from "../../../components/TopBar";
import { BtnDoubleBox } from "../../../components/Btns";
import { NavBarGeneral } from "../../../components/NavBar";
import { InputWide } from "../../../components/Inputs";

const FmarketCreate_B = ({ navigation }) => {
  const [input, setInput] = useState({
    name: "",
    description: "",
  });

  return (
    <View style={styles.g_container}>
      <ScrollView style={styles.g_container}>
        <TopBarAddItem navigation={navigation} backTo={"TuMarket"} />

        <Text style={styles.title}>Nombre del producto / servicio</Text>

        <View style={{ marginVertical: -10, paddingHorizontal: 20 }}>
          <InputWide
            name="name"
            set={setInput}
            value={input.name}
            placehold="Nombre..."
          />
        </View>
        <View style={styles.name_underline}></View>

        <Text style={styles.title}>
          Agrega una descripcion clara sobre el articulo o servicio que quieres
          ofrecer.
        </Text>
        <View style={{ marginVertical: -10, paddingHorizontal: 20 }}>
          <InputWide
            name="description"
            set={setInput}
            value={input.description}
            placehold="Descripcion..."
          />
        </View>
        {/* <TextInput placeholder='Nombre...' style={styles.input_name} value={name} onChangeText={setName} multiline={true} /> */}
        <View style={styles.name_underline}></View>

        <TouchableOpacity>
          <Text style={{ marginLeft: 20 }}>500 caracteres maximo</Text>
        </TouchableOpacity>
      </ScrollView>

      <BtnDoubleBox
        text={"Continuar"}
        navigation={navigation}
        onPress={() => {
          navigation.navigate("FmarketCreate_C");
        }}
      />
      <NavBarGeneral navigation={navigation} active={2} />
    </View>
  );
};

export default FmarketCreate_B;
