import { View, Image, TouchableOpacity } from "react-native";
import Text from "../../../components/Text";
import React, { useState } from "react";
import st from "./verifyCv5.sass";
import VerifyIdBack from "../../../components/VerifyIdBack";
import { Edit, Mail, PhoneClear } from "../../../components/Icons";

import himage from "../../../images/idcard.png";
import vnzl from "../../../images/vnzla.png";
import { BtnPrimaryW } from "../../../components/Btns";
import { SearchBar, SmallerTag } from "../../../components/SearchDisplay";
import {
  CheckCircleDouble,
  InputNormal,
  InputOptions,
  ItemExpEdit,
  PlusText,
} from "../CvItems";

import { CrossTag } from "../01.VerifyCv/VerifyCv1";

const VerifyCv5 = ({ navigation }) => {
  const nextPage = () => {
    navigation.navigate("User");
  };

  const [input, setInput] = useState("");

  const [tagData, setTagData] = useState([
    {
      title: "Creativo",
      body: "12311",
      state: true,
    },
    {
      title: "Proactivo",
      body: "12322",
      state: true,
    },
    {
      title: "Agil",
      body: "12333",
      state: true,
    },
    {
      title: "Honestidad",
      body: "12344",
      state: true,
    },
    {
      title: "Resiliencia",
      body: "12355",
      state: true,
    },
    {
      title: "Liderazgo",
      body: "123",
      state: true,
    },
    {
      title: "Empatia",
      body: "12366",
      state: true,
    },
    {
      title: "Frexibilidad",
      body: "12377",
      state: true,
    },
  ]);
  const [tagData2, setTagData2] = useState([
    {
      title: "Adobe illustrator",
      body: "12311",
      state: true,
    },
    {
      title: "AdobeXD",
      body: "12322",
      state: true,
    },
    {
      title: "Photoshop",
      body: "12333",
      state: true,
    },
    {
      title: "Figma",
      body: "12344",
      state: true,
    },
    {
      title: "Excel",
      body: "12355",
      state: true,
    },
    {
      title: "Office",
      body: "123",
      state: true,
    }
  ]);

  return (
    <VerifyIdBack
      title="Crea un perfil profesional"
      subtitle="Venenatis nisl vel sed gravida vestibulum. "
    >
      <View style={st.top_view}>
        <View>
          <Text style={st.subtitle}>Informacion de contacto</Text>
          <View style={st.top_view}>
            <PhoneClear color="#000000" />
            <Text style={st.icon_text}>7028-7074</Text>
          </View>
        </View>
        <TouchableOpacity style={st.edit_btn}>
          <Edit color="#000000" />
        </TouchableOpacity>
      </View>
      <View style={[st.top_view, { marginTop: 8 }]}>
        <Mail color="#000000" />
        <Text style={st.icon_text}>Juandiego.freites@gmail.com</Text>
      </View>

      <Text style={st.subtitle}>Un poco sobre mi</Text>
      <Text style={{ fontSize: 14 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        fringilla cras duis urna, purus, cras. Lorem a, tincidunt convallis
        volutpat diam diam massa ac molestie.{" "}
      </Text>
      <Text style={st.subtitle}>Aptitudes</Text>
      <View style={st.cross_tag_ctn}>
        {tagData.map((item, index) => (
          <SmallerTag item={item} index={item.body} />
        ))}
      </View>

      <Text style={st.subtitle}>Mis estudios</Text>
      <ItemExpEdit
        edit={false}
        text1="Bachillerato / Educacion media"
        text2="E.B.N Los laureles"
        text3="Junio 2012 - Marzo 2014"
      />
      <ItemExpEdit
        edit={false}
        text1="Universitario / Ingenieria en sistemas"
        text2="I.U.P.S.M Santiago Mariño"
        text3="Junio 2012 - Marzo 2014"
      />

      <Text style={st.subtitle}>Experiencia laboral</Text>
      <ItemExpEdit
        edit={false}
        text1="Cajero"
        text2="Walmart"
        text3="Junio 2019 - Marzo 2020"
      />
      <ItemExpEdit
        edit={false}
        text1="Cocinero"
        text2="Burger king"
        text3="Junio 2019 - Marzo 2020"
      />
      <ItemExpEdit
        edit={false}
        text1="Mesonero"
        text2="El imperio"
        text3="Junio 2019 - Marzo 2020"
      />
      <Text style={st.subtitle}>Experiencia laboral</Text>
      <ItemExpEdit edit={false} text1="Ingles" text2="Intermedio" text3="" />
      <ItemExpEdit edit={false} text1="Español" text2="Nativo" text3="" />

      <Text style={st.subtitle}>Habilidades</Text>
      <View style={st.cross_tag_ctn}>
        {tagData2.map((item, index) => (
          <SmallerTag item={item} index={item.body} />
        ))}
      </View>

      <View style={st.bottom}>
        <BtnPrimaryW text="Guardar perfil profesional" action={nextPage} />
      </View>

      <View style={{ height: 200 }}></View>
    </VerifyIdBack>
  );
};

export default VerifyCv5;
