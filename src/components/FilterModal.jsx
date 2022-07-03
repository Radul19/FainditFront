import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import styles from "../sass/components/filterModal.sass";
import { Check, FlyIcon, ModalCross, Star, Stars } from "./Icons";
import Slider from "@react-native-community/slider";
import { SmallerTag } from "./SearchDisplay";

const FilterModal = ({ setModal }) => {
  const [tagData, setTagData] = useState([
    {
      title: "Tecnologia",
      body: "AD/Carrousel Promocional 1",
      state: true,
    },
    {
      title: "Ropa",
      body: "AD/Carrousel Promocional 2",
      state: false,
    },
    {
      title: "Comida",
      body: "AD/Carrousel Promocional 3",
      state: false,
    },
    {
      title: "Cocina",
      body: "AD/Carrousel Promocional 4",
      state: false,
    },
    {
      title: "Electrodomesticos",
      body: "AD/Carrousel Promocional 5",
      state: false,
    },
    {
      title: "Ropa",
      body: "AD/Carrousel Promocional 6",
      state: false,
    },
    {
      title: "Comida",
      body: "AD/Carrousel Promocional 7",
      state: false,
    },
    {
      title: "Decoracion",
      body: "AD/Carrousel Promocional 8",
      state: false,
    },
    {
      title: "Ropa",
      body: "AD/Carrousel Promocional 9",
      state: false,
    },
    {
      title: "Tecnologia",
      body: "AD/Carrousel Promocional 10",
      state: false,
    },
    {
      title: "Electrodomesticos",
      body: "AD/Carrousel Promocional 12",
      state: false,
    },
    {
      title: "Ropa",
      body: "AD/Carrousel Promocional 13",
      state: false,
    },
    {
      title: "Comida",
      body: "AD/Carrousel Promocional 14",
      state: false,
    },
    {
      title: "Tecnologia",
      body: "AD/Carrousel Promocional 15",
      state: false,
    },
    {
      title: "Ropa",
      body: "AD/Carrousel Promocional 16",
      state: false,
    },
    {
      title: "Comida",
      body: "AD/Carrousel Promocional 17",
      state: false,
    },
    {
      title: "Cocina",
      body: "AD/Carrousel Promocional 18",
      state: false,
    },
  ]);

  const onPress = (index, item) => {
    const copyData = [...tagData];
    copyData.splice(index, 1, { ...item, state: !item.state });
    setTagData(copyData);
  };

  return (
    <View style={styles.filter_modal}>
      <View style={styles.f_ctn}>
        <View style={styles.f_top}>
          <Text style={styles.f_title}>Filtros</Text>
          <View style={styles.cross_modal}>
            <ModalCross
              onPress={() => {
                setModal(false);
              }}
            />
          </View>
        </View>
        <ScrollView style={styles.scrollview}>
          <Text style={styles.subtitle}>Ubicacion</Text>
          <Place />
          <Text style={styles.subtitle}>Rango de precio</Text>
          <Price />
          <Text style={styles.subtitle}>Categorias</Text>
          <View style={styles.tags_container}>
            {tagData.map((item, index) => (
              <SmallerTag
                item={item}
                index={index}
                key={item.body}
                onPress={onPress}
              />
            ))}
          </View>
          <Text style={styles.subtitle}>Comercio verificado</Text>
          <Checks text1={"Verificado"} text2={"No verificado"} />
          <Text style={styles.subtitle}>Producto o comercio</Text>
          <Checks text1={"Producto"} text2={"Comercio"} />
          <Text style={styles.subtitle}>Clasificacion</Text>
          <StarsCtn />
          <Slider
            style={{ width: "100%", height: 40 }}
            minimumValue={0}
            maximumValue={5}
            minimumTrackTintColor="#FF6A00"
            maximumTrackTintColor="#000000"
          />
        </ScrollView>
      </View>
    </View>
  );
};

const Place = ({}) => {
  return (
    <View style={styles.place_btn}>
      <FlyIcon color="black" />
      <Text style={styles.place_text}>Cabimas, Los laureles, Calle 23</Text>
    </View>
  );
};
export default FilterModal;

const Price = ({}) => {
  return (
    <View style={styles.price_ctn}>
      <View style={styles.price_box}>
        <Text>0.00</Text>
      </View>
      <View style={styles.price_line}></View>
      <View style={styles.price_box}>
        <Text>0.00</Text>
      </View>
    </View>
  );
};

const Checks = ({ text1, text2 }) => {
  return (
    <View style={styles.checks_ctn}>
      <View style={styles.check}>
        <CheckCircle />
        <Text style={styles.check_text}>{text1}</Text>
      </View>
      <View style={styles.check}>
        <CheckCircle />
        <Text style={styles.check_text}>{text2}</Text>
      </View>
    </View>
  );
};

const CheckCircle = ({}) => {
  const [active, setActive] = useState(false);
  return (
    <TouchableOpacity
      style={active ? styles.circle_active : styles.circle}
      onPress={() => {
        setActive(!active);
      }}
    >
      <View
        style={active ? styles.circle_inside_active : styles.circle_inside}
      ></View>
    </TouchableOpacity>
  );
};

const StarsCtn = ({}) => {
  return (
    <View style={styles.stars_ctn}>
      <Star size="24" />
      <Star size="24" />
      <Star size="24" />
      <Star size="24" />
      <Star size="24" />
    </View>
  );
};
