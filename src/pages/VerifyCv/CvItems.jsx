import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { ArrowDown, Edit, Plus } from "../../components/Icons";
import st from "./cvItems.sass";

export const PlusText = ({ text }) => {
  return (
    <TouchableOpacity style={st.plusText_ctn}>
      <Plus color="#ff6a00" />
      <Text style={st.plusText_text}>{text}</Text>
    </TouchableOpacity>
  );
};

export const ItemExpEdit = ({ text1, text2, text3, edit = true }) => {
  return (
    <View style={st.itemExp_ctn}>
      <View style={st.itemExp_circle}>
        <View style={st.itemExp_circle_inside}></View>
      </View>
      <View style={st.itemExp_mid}>
        <Text style={st.itemExp_text_top}>{text1}</Text>
        <Text style={st.itemExp_text_mid}>{text2}</Text>
        <Text style={st.itemExp_text_bot}>{text3}</Text>
      </View>
      {edit ? (
        <TouchableOpacity style={st.itemExp_edit}>
          <Edit color="#000000" />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export const InputNormal = ({ text }) => {
  return (
    <View style={st.inputNormal_ctn}>
      <Text style={st.inputNormal_text}>{text}</Text>
    </View>
  );
};

export const InputOptions = ({ text, type = false }) => {
  return (
    <View style={type ? st.inputOptions_ctn_small : st.inputOptions_ctn}>
      <Text style={st.inputOptions_text}>{text}</Text>
      <ArrowDown />
    </View>
  );
};

export const CheckCircleDouble = () => {
  return (
    <View style={st.check_circle_double}>
      <View style={st.ccd_left}>
        <CheckCircle text="Si" />
      </View>
      <View style={st.ccd_right}>
        <CheckCircle text="No" />
      </View>
    </View>
  );
};

export const CheckCircle = ({ text }) => {
  const [active, setActive] = useState(false);

  const press = () => {
    setActive(!active);
  };

  return (
    <TouchableOpacity style={st.cc_ctn} onPress={press}>
      {active ? (
        <>
          <View style={st.cc_circle_active}>
            <View style={[st.cc_circle_active_inside,{borderRadius:100}]}></View>
          </View>
          <Text style={st.cc_text_active}>{text}</Text>
        </>
      ) : (
        <>
          <View style={st.cc_circle}>
            <View style={[st.cc_circle_inside,{borderRadius:100}]}></View>
          </View>
          <Text style={st.cc_text}>{text}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};
