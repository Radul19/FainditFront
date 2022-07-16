import { View, Text, ScrollView, Dimensions, Image,TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import { TuMarketTopBarLogo } from "../../../components/TopBar";
import { EmailApply, Tune } from "../../../components/Icons";
import { SearchBar } from "../../../components/SearchDisplay";
import st from "./jobSearch.sass";
import { JobResultSmall } from "../JobComponents";
import { NavBarGeneral } from "../../../components/NavBar";
import fjobsbanner from "../../../images/fjobsbanner.png";
import Carousel from "react-native-snap-carousel";

import prom from "../../../images/promotion.png";
import prom2 from "../../../images/promo2.png";

const windowWidth = Dimensions.get("window").width;

const JobSearch = ({ navigation }) => {
  const [input, setInput] = useState("");
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
    const redirect = () => {
    navigation.navigate("JobView");
  };

  return (
    <View style={st.g_container}>
      <View style={st.inside_ctn}>
        <ScrollView style={st.scrollview}>
          <View style={{ marginLeft: -20 }}>
            <TuMarketTopBarLogo image={fjobsbanner} />
          </View>
          <View style={{ marginLeft: -20 }}>
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
          </View>
          <SearchBar value={input} set={setInput} placehold="Buscar Trabajo" />
          <Text style={{ marginBottom: 12 }}>Publicaciones mas recientes</Text>

          <JobResultSmall title={"Farmatodo"} />
          <JobResultSmall title={"Farmatodo"} />
          <JobResultSmall title={"Farmatodo"} />
        </ScrollView>
      </View>
      <NavBarGeneral active={5} />
    </View>
  );
};

export default JobSearch;

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
