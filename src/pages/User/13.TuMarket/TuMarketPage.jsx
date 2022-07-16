import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import React, { useRef, useState } from "react";
import { SearchBar, DisplaySearch } from "../../../components/SearchDisplay";
import { NavBarGeneral } from "../../../components/NavBar";

import st from "./tuMarket.sass";
import { TuMarketTopBar, TuMarketTopBarLogo } from "../../../components/TopBar";
import { Tune } from "../../../components/Icons";

import nivea1 from "../../../images/nivea1.png";
import nivea2 from "../../../images/nivea2.png";
import { BtnContact, BtnPublish } from "../../../components/Btns";
import FilterModal from "../../../components/FilterModal";
import fmarketlogo from "../../../images/fmarketbanner.png";

import prom from "../../../images/promotion.png";
import prom2 from "../../../images/promo2.png";

import Carousel from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";
const windowWidth = Dimensions.get("window").width;

const TuMarketPage = ({ navigation }) => {
  const [inputSearch, setInputSearch] = useState("");
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

  const [index, setIndex] = useState(0);

  const isCarousel = useRef(null);
  const data = [
    {
      title: "Aenean leo",
      body: "AD/Carrousel Promocional 1",
      imgUrl: prom,
      state: false,
    },
    {
      title: "In turpis",
      body: "AD/Carrousel Promocional 2",
      imgUrl: prom2,
      state: false,
    },
    {
      title: "Lorem Ipsum",
      body: "AD/Carrousel Promocional 3",
      imgUrl: prom,
      state: false,
    },
    {
      title: "Lorem Ipsum",
      body: "AD/Carrousel Promocional 4",
      imgUrl: prom2,
      state: false,
    },
    {
      title: "Lorem Ipsum",
      body: "AD/Carrousel Promocional 5",
      imgUrl: prom,
      state: false,
    },
    {
      title: "Lorem Ipsum",
      body: "AD/Carrousel Promocional 6",
      imgUrl: prom2,
      state: false,
    },
    {
      title: "Lorem Ipsum",
      body: "AD/Carrousel Promocional 7",
      imgUrl: prom2,
      state: false,
    },
    {
      title: "Lorem Ipsum",
      body: "AD/Carrousel Promocional 8",
      imgUrl: prom,
      state: false,
    },
    {
      title: "Lorem Ipsum",
      body: "AD/Carrousel Promocional 9",
      imgUrl: prom2,
      state: false,
    },
    {
      title: "Lorem Ipsum",
      body: "AD/Carrousel Promocional 10",
      imgUrl: prom,
      state: false,
    },
  ];

  const tunePress = () => {
    setFilterModal(true);
  };

  const publishBtn = () => {
    navigation.navigate("FmarketCreate_A");
  };
  const redirect = () => {
    navigation.navigate("TuMarketItem");
  };

  return (
    <View style={st.g_container}>
      <FilterContainer setModal={setFilterModal} visible={filterModal} />
      <ScrollView style={[st.g_container, { paddingTop: 20 }]}>
        <TuMarketTopBarLogo image={fmarketlogo} />
        {/* <View style={st.subtitle_ctn}>
          <Tune action={tunePress} />
        </View> */}
        <Carousel
          layout="default"
          layoutCardOffset={9}
          ref={isCarousel}
          data={data}
          renderItem={({ item, index }) => (
            <CarouselCardItem action={redirect} item={item} index={index} />
          )}
          sliderWidth={windowWidth}
          itemWidth={windowWidth}
          inactiveSlideShift={0}
          useScrollView={true}
          onSnapToItem={(index) => {
            setIndex(index);
          }}
        />
        <View style={{ paddingHorizontal: 20 }}>
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

const CarouselCardItem = ({ item, index, action }) => {
  return (
    <TouchableOpacity style={st.promotion_ctn} key={index} onPress={action}>
      <Image
        style={st.image_promotion}
        source={item.imgUrl}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};
