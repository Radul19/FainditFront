import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import st from "./userId1.sass";
import VerifyIdBack from "../../../components/VerifyIdBack";
import { ArrowDown, Badge, Book } from "../../../components/Icons";

import himage from "../../../images/idcard.png";
import vnzl from "../../../images/vnzla.png";
import { BtnPrimaryW } from "../../../components/Btns";

const UserID1 = ({ navigation }) => {
  const nextPage = () => {
    navigation.navigate("UserID_2");
  };

  return (
    <VerifyIdBack title="Verificacion de identidad" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " >
      <View style={st.image_box}>
        <Image source={himage} style={st.image} resizeMode="stretch" />
      </View>
      <Text style={st.subtitle}>
        Seleccione un pais de emision del documento
      </Text>

      {/* COUNTRY BTN */}
      <TouchableOpacity style={st.country_btn}>
        <View style={st.flag_img_ctn}>
          <Image source={vnzl} style={st.image} />
        </View>
        <Text style={st.country_name}>Venezuela</Text>
        <View style={st.ad_ctn}>
          <ArrowDown />
        </View>
      </TouchableOpacity>

      <Text style={st.subtitle}>Tipo de documento</Text>
      <Text style={st.text}>
        Selecciona el tipo de documento que deseeas utilizar para verificar tu
        cuenta
      </Text>

      <TypeDocBtn text="Documento de identidad" Icon={Badge} />
      <TypeDocBtn text="Pasaporte" Icon={Book} />

      <View style={st.bottom}>
        <BtnPrimaryW text="Continuar" action={nextPage} />
        <TouchableOpacity style={st.text_omt_ctn} onPress={nextPage}>
          <Text style={st.text_omt}>Omitir este paso</Text>
        </TouchableOpacity>
      </View>
    </VerifyIdBack>
  );
};

export default UserID1;

const TypeDocBtn = ({ Icon, text }) => {
  const [active, setActive] = useState(false);

  const action = () => {
    setActive(!active);
  };

  return (
    <>
      {active ? (
        <TouchableOpacity style={st.doc_btn_active} onPress={action}>
          <Icon color="#FF6A00" />
          <Text style={st.doc_text_active}>{text}</Text>
          <View style={st.circle_ctn_active}>
            <View style={st.circle_inside_active}></View>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={st.doc_btn} onPress={action}>
          <Icon color="#000000" />
          <Text style={st.doc_text}>{text}</Text>
          <View style={st.circle_ctn}>
            <View style={st.circle_inside}></View>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};
