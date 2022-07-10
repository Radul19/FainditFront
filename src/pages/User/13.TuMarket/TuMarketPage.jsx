import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import {
  SearchBar,
  DisplaySearch,
} from "../../../components/SearchDisplay";
import { NavBarGeneral } from "../../../components/NavBar";

import st from "./tuMarket.sass";
import { TuMarketTopBar, TuMarketTopBarLogo } from "../../../components/TopBar";
import { Tune } from "../../../components/Icons";

import nivea1 from "../../../images/nivea1.png";
import nivea2 from "../../../images/nivea2.png";
import { BtnContact, BtnPublish } from "../../../components/Btns";
import FilterModal from "../../../components/FilterModal";
import fmarketlogo from "../../../images/fmarketbanner.png"

const TuMarketPage = ({ navigation }) => {
  const [inputSearch, setInputSearch] = useState("");
  const dataMarket = [
    {
      title: "Aenean leo",
      body: "1",
      imgUrl: "https://picsum.photos/id/11/200/300",
    },
    {
      title: "In turpis",
      body: "2",
      imgUrl: "https://picsum.photos/id/10/200/300",
    },
    {
      title: "Lorem Ipsum 1",
      body: "3",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
    {
      title: "Lorem Ipsum 2",
      body: "4",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
    {
      title: "Lorem Ipsum 3",
      body: "5",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
    {
      title: "Lorem Ipsum 4",
      body: "6",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
    {
      title: "Lorem Ipsum 5",
      body: "7",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
    {
      title: "Lorem Ipsum 6",
      body: "8",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
  ];

  const dataItem = [
    {
      title: "Crema nivea cellular",
      body: "AD/Carrousel Promocional 1",
      imgUrl: nivea1,
    },
    {
      title: "Crema nivea cellular 630",
      body: "AD/Carrousel Promocional 2",
      imgUrl: nivea2,
    },
    {
      title: "Crema nivea cellular 630",
      body: "AD/Carrousel Promocional 3",
      imgUrl: nivea2,
    },
    {
      title: "Crema nivea cellular",
      body: "AD/Carrousel Promocional 4",
      imgUrl: nivea1,
    },
    {
      title: "Crema nivea cellular",
      body: "AD/Carrousel Promocional 5",
      imgUrl: nivea1,
    },
    {
      title: "Crema nivea cellular 630",
      body: "AD/Carrousel Promocional 6",
      imgUrl: nivea2,
    },
    {
      title: "Crema nivea cellular 630",
      body: "AD/Carrousel Promocional 7",
      imgUrl: nivea2,
    },
    {
      title: "Crema nivea cellular",
      body: "AD/Carrousel Promocional 8",
      imgUrl: nivea1,
    },
  ];

  const [btnActive, setBtnActive] = useState(false);

  const [filterModal, setFilterModal] = useState(false);

  const tunePress = () => {
    setFilterModal(true);
  };

  const publishBtn = ()=>{
    navigation.navigate("FmarketCreate_A")
  }

  return (
    <View style={st.g_container}>
      <FilterContainer setModal={setFilterModal} visible={filterModal} />
      <ScrollView style={[st.g_container, { paddingTop: 20 }]}>
        <TuMarketTopBarLogo image={fmarketlogo} />
        {/* <View style={st.subtitle_ctn}>
          <Tune action={tunePress} />
        </View> */}
        <View style={{ paddingHorizontal: 20}}>
          <SearchBar value={inputSearch} set={setInputSearch} />
        </View>
        <Text style={{ fontWeight: "bold", marginLeft: 20 }}>
          Articulos publicados por otros usuarios
        </Text>
        {/* <View style={styles.display_ctn} ></View> */}
        <DisplaySearch data={dataItem} type="B" />
        <View style={{ height: 90 }}></View>
      </ScrollView>
      <BtnPublish action={publishBtn} />
      <NavBarGeneral navigation={navigation} active={2} />
    </View>
  );
};

const FilterContainer = ({ setModal, visible }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        // setModalVisible(!modalVisible);
      }}
      style={st.modal}
    >
      <FilterModal setModal={setModal} />
    </Modal>
  );
};

export default TuMarketPage;
