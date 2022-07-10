import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React from "react";
import st from "../sass/components/inputs.sass";
import vnzl from "../images/vnzla.png";
import { ArrowDown} from "./Icons";

export const InfoInput = ({ text, placehold }) => {
  return (
    <View style={st.infoInput_ctn}>
      <Text style={st.infoInput_text}>{text}</Text>
      <Text style={st.infoInput_input}>{placehold}</Text>
    </View>
  );
};

export const InputWide = ({
  value,
  set,
  placehold = "",
  name,
  pass = false,
}) => {
  return (
    <View style={st.input_wide}>
      <TextInput
        style={st.iw_input}
        value={value}
        onChangeText={(text) => {
          set(name, text);
        }}
        placeholder={placehold}
        secureTextEntry={pass}
      />
    </View>
  );
};

export const InputCountry = () => {
  return (
    <TouchableOpacity style={st.country_btn}>
      <View style={st.flag_img_ctn}>
        <Image source={vnzl} style={st.image} />
      </View>
      <Text style={st.country_name}>Venezuela</Text>
      <View style={st.ad_ctn}>
        <ArrowDown />
      </View>
    </TouchableOpacity>
  );
};

export const InputCountrySmall = () => {
  return (
    <TouchableOpacity style={st.country_btn}>
      <View style={st.flag_img_ctn}>
        <Image source={vnzl} style={st.image} />
      </View>
      {/* <Text style={st.country_name}>Venezuela</Text> */}
      <View style={st.ad_ctn}>
        <ArrowDown />
      </View>
    </TouchableOpacity>
  );
};

export const InputMultipleOptions = ()=>{
  return(
    <TouchableOpacity style={st.input_multipe_options} >
      <Text style={st.imo_text} >Masculino</Text>
      <View style={st.imo_ad_ctn}>
        <ArrowDown />
      </View>
    </TouchableOpacity>
  )
}
