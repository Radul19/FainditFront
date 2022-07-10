import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import styles from "../../../sass/pages/Seller/addItem.sass";
import { TopBarAddItem } from "../../../components/TopBar";
import { BtnDoubleBox } from "../../../components/Btns";
import { NavBarGeneral } from "../../../components/NavBar";

const FmarketCreate_C = ({ navigation }) => {
  const [categories, setCategories] = useState({
    comida: false,
    bebidas: false,
    snacks: false,
    otros: false,
  });

  return (
    <View style={styles.g_container}>
      <ScrollView style={styles.g_container}>
        <TopBarAddItem navigation={navigation} backTo={"TuMarket"} />
        <Text style={styles.title}>
          Agreguemos algunas fotografias sobre el articulo/servicio.
        </Text>

        <TouchableOpacity style={styles.image_big}>
          <Text style={{ fontSize: 40 }}>+</Text>
          <Text>Agregar fotogragfia</Text>
        </TouchableOpacity>

        <View style={styles.image_ctn}>
          <TouchableOpacity style={styles.image}>
            <Text style={{ fontSize: 40 }}>+</Text>
            <Text style={{ textAlign: "center" }}>Agregar fotogragfia</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.image}>
            <Text style={{ fontSize: 40 }}>+</Text>
            <Text style={{ textAlign: "center" }}>Agregar fotogragfia</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={{ marginLeft: 20, marginRight: 20, fontSize: 12 }}>
            Puedes agregar un maximo de 3 fotos (De preferencia debe tener una
            relacion de aspecto 4:3).
          </Text>
          {/* <Text style={{ marginLeft: 20, fontSize: 10, marginTop: 10 }} >De preferencia debe tener una relacion 4:3</Text> */}
        </TouchableOpacity>
      </ScrollView>
      <BtnDoubleBox
        text={"Continuar"}
        navigation={navigation}
        onPress={() => {
          navigation.navigate("FmarketCreate_D");
        }}
      />
      <NavBarGeneral navigation={navigation} active={2} />
    </View>
  );
};

export default FmarketCreate_C;
