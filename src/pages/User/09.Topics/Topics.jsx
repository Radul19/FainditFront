import { View, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useState } from "react";

import st from "./topics.sass";
import Text from "../../../components/Text";
import { NavBarGeneral } from "../../../components/NavBar";
import { BtnPrimaryW, BtnSecondaryW } from "../../../components/Btns";
import logo from "../../../images/backreg2.png";
import { SearchBar } from "../../../components/SearchDisplay";

/// Images
import supermarket from "../../../images/supermarket.png";
import ferreteria from "../../../images/ferreteria.png";
import food from "../../../images/food.png";
import ropa from "../../../images/ropa.png";
import tecnologia from "../../../images/tecnologia.png";
import farmacias from "../../../images/farmacias.png";

import himage from "../../../images/HimageCreate3.png";
import { SmallerTag } from "../../../components/SearchDisplay";

const TopicsPage = ({ navigation }) => {
  const [tagData, setTagData] = useState([
    {
      title: "Tecnologia",
      body: "AD/Carrousel Promocional 1",
      imgUrl: supermarket,
      state: true,
    },
    {
      title: "Ropa",
      body: "AD/Carrousel Promocional 2",
      imgUrl: ferreteria,
      state: false,
    },
    {
      title: "Comida",
      body: "AD/Carrousel Promocional 3",
      imgUrl: food,
      state: false,
    },
    {
      title: "Cocina",
      body: "AD/Carrousel Promocional 4",
      imgUrl: ropa,
      state: false,
    },
    {
      title: "Electrodomesticos",
      body: "AD/Carrousel Promocional 5",
      imgUrl: tecnologia,
      state: false,
    },
    {
      title: "Ropa",
      body: "AD/Carrousel Promocional 6",
      imgUrl: farmacias,
      state: false,
    },
    {
      title: "Tecnologia",
      body: "AD/Carrousel Promocional 7",
      imgUrl: supermarket,
      state: false,
    },
    {
      title: "Comida",
      body: "AD/Carrousel Promocional 8",
      imgUrl: supermarket,
      state: false,
    },
    {
      title: "Electrodomesticos",
      body: "AD/Carrousel Promocional 9",
      imgUrl: supermarket,
      state: false,
    },
    {
      title: "Ropa",
      body: "AD/Carrousel Promocional 10",
      imgUrl: supermarket,
      state: false,
    },
    {
      title: "Tecnologia",
      body: "AD/Carrousel Promocional 11",
      imgUrl: supermarket,
      state: false,
    },
    {
      title: "Comida",
      body: "AD/Carrousel Promocional 12",
      imgUrl: supermarket,
      state: false,
    },
    {
      title: "Electrodomesticos",
      body: "AD/Carrousel Promocional 13",
      imgUrl: supermarket,
      state: false,
    },
    {
      title: "Ropa",
      body: "AD/Carrousel Promocional 14",
      imgUrl: supermarket,
      state: false,
    },
  ]);

  const onPress = (index, item) => {
    const copyData = [...tagData];
    copyData.splice(index, 1, { ...item, state: !item.state });
    setTagData(copyData);
  };

  const [input, setInput] = useState("second")

  return (
    <View style={st.g_container}>
      <Image source={logo} style={st.image} resizeMode="stretch" />
      <View style={st.g_container_scroll}>
        <View style={st.top_2}>
          <Text style={st.top_title_small_2}>Cuales son tus intereses</Text>
          <Text style={st.top_text}>Aliquam ultrices suspendisse varius.</Text>
        </View>
        <ScrollView style={st.bot_2}>
          <View style={st.himage_ctn_2}>
            <Image style={st.himage} source={himage} />
          </View>
          <SearchBar placehold="Busca entre distintos intereses" value={input} set={setInput} />
          <Text style={{ marginBottom: 16 }}>
            Escoge entre distintos intereses para personalizar tu inicio
          </Text>

          <View style={st.tag_container}>
            {tagData.map((item, index) => (
              <SmallerTag
                item={item}
                index={index}
                key={item.body}
                onPress={onPress}
              />
            ))}
          </View>

          <View style={st.bot_2_btn}>
            <BtnPrimaryW
              text={"Ir a inicio"}
              action={() => {
                navigation.navigate("User");
              }}
            />
          </View>

          <View style={st.bottom_text_ctn_2}>
            <Text>Quieres omitir este paso?</Text>
            <TouchableOpacity
              style={st.register_text_ctn}
              onPress={() => {
                navigation.navigate("User");
              }}
            >
              <Text style={st.register_text}>Omitir</Text>
            </TouchableOpacity>
          </View>
          {/* <View style={{height:100}} ></View> */}
        </ScrollView>
      </View>
    </View>
  );
};

const InfoInput = ({ text, placehold }) => {
  return (
    <View style={st.infoInput_ctn}>
      <Text style={st.infoInput_text}>{text}</Text>
      <Text style={st.infoInput_input}>{placehold}</Text>
    </View>
  );
};

export default TopicsPage;
