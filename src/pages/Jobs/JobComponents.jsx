import { View, TouchableOpacity } from "react-native";
import React from "react";
import {
  EmailApply,
  FlyIcon,
  Heart,
  ArrowBack,
  Flag,
  PersonSil,
} from "../../components/Icons";
import st from "./jobComponents.sass";
import Text from "../../components/Text";
import { useNavigation } from "@react-navigation/native";
import { CheckCircle } from "../VerifyCv/CvItems";

export const JobResult = ({ title, apply = true }) => {
  return (
    <View style={st.job_res_ctn}>
      <View style={st.jr_title_ctn}>
        <Text color="#ffffff">{title}</Text>
      </View>

      <View style={st.jr_subtitle_ctn}>
        <Text style={st.big_subtitle}>Cajero</Text>
        <Text>2 hours ago</Text>
      </View>

      <View style={st.jr_addres_ctn}>
        <View style={st.home_icon}>
          <FlyIcon />
        </View>
        <Text style={{ fontSize: 12, color: "#FF6A00", marginLeft: 6 }}>
          Cabimas, las 40, avenida universidad
        </Text>
      </View>

      <Text style={st.jr_text}>$200</Text>
      <Text style={st.jr_subtitle}>Description</Text>
      <Text style={st.jr_text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit orci
        auctor netus morbi vitae netus elit amet turpis id nisi ipsum dolor.
      </Text>

      {apply ? (
        <View style={st.jr_bottom}>
          <JobApplyBtn />
          <Heart />
        </View>
      ) : null}
    </View>
  );
};

export const JobApplyBtn = () => {
  const navigation = useNavigation();

  const action = () => {
    navigation.navigate("JobView");
  };

  return (
    <TouchableOpacity style={st.job_apply_btn} onPress={action}>
      <EmailApply />
      <Text style={st.job_apply_text}>Aplicar</Text>
    </TouchableOpacity>
  );
};

export const JobTopBar = ({ title }) => {
  return (
    <View style={st.top_menu}>
      <View style={st.tm_left}>
        <IconBox>
          <ArrowBack />
        </IconBox>
      </View>
      <View style={st.tm_mid}>
        <Text style={st.tm_title}>{title}</Text>
      </View>
      <View style={st.tm_right}>
        <IconBox>
          <Flag />
        </IconBox>
        <IconBox>
          <Heart />
        </IconBox>
      </View>
    </View>
  );
};

export const IconBox = ({ children }) => {
  return <TouchableOpacity style={st.icon_box}>{children}</TouchableOpacity>;
};

export const ApplyBtnWide = ({ action }) => {
  return (
    <TouchableOpacity style={st.apply_btn_wide} onPress={action}>
      <EmailApply />
      <Text style={{ color: "#ffffff", marginLeft: 6, fontSize: 16 }}>
        Aplicar
      </Text>
    </TouchableOpacity>
  );
};

export const ProfileItem = ({ text }) => {
  return (
    <View style={st.profile_item}>
      <View style={st.icon_ctn}>
        <PersonSil />
      </View>
      <Text style={st.pi_text}>{text}</Text>
      <View style={{ marginLeft: "auto", marginRight: 12 }}>
        <CheckCircle />
      </View>
    </View>
  );
};
