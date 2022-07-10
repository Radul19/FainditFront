import { TouchableOpacity, View } from "react-native";
import Text from "./Text";

import React, { useContext } from "react";
import styles from "../sass/components/btns.sass";
import { Bussines, Edit, Mail, Plus, Accircle } from "./Icons";
import { Context } from "../controllers/Context";

export const BtnPrimaryW = ({ action, text }) => {
  return (
    <TouchableOpacity
      style={[styles.btn, styles.btn_primary_w]}
      onPress={action}
    >
      <Text color="#eee">{text}</Text>
    </TouchableOpacity>
  );
};

export const BtnSecondaryW = ({ onPress, text }) => {
  return (
    <TouchableOpacity
      style={[styles.btn, styles.btn_secondary_w]}
      onPress={onPress}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export const BtnInsideBox = ({ onPress, text }) => {
  return (
    <View style={styles.btn_insideBox_ctn}>
      <TouchableOpacity style={styles.btn_insideBox} onPress={onPress}>
        <Text color="#eee">{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const BtnDoubleBox = ({ onPress, text, navigation }) => {
  return (
    <View style={styles.btn_double_ctn}>
      <TouchableOpacity
        style={styles.btn_double_clear}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text color="#FF6A00" style={{ textDecorationLine: "underline" }}>
          Volver
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn_double} onPress={onPress}>
        <Text color="#eee">{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const BtnBusiness = ({ action }) => {
  return (
    <TouchableOpacity onPress={action} style={styles.btn_business}>
      <Bussines />
      <Text color="#eee" style={{ marginLeft: 10 }}>
        Modo Ejecutivo
      </Text>
    </TouchableOpacity>
  );
};

export const BtnBusiness2 = ({ action }) => {
  const { enableSeller } = useContext(Context);

  return (
    <TouchableOpacity style={styles.btn_absolute_A} onPress={action}>
      {enableSeller ? (
        <>
          <Accircle color="#FFF" />
          <Text color="#eee" style={{ marginLeft: 10, fontSize: 16 }}>
            Modo Usuario
          </Text>
        </>
      ) : (
        <>
          <Bussines />
          <Text color="#eee" style={{ marginLeft: 10, fontSize: 16 }}>
            Modo Ejecutivo
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export const BtnContact = ({ action }) => {
  return (
    <TouchableOpacity
      style={styles.btn_absolute_A}
      onPress={action ? action : null}
    >
      <Mail />
      <Text color="#eee" style={{ marginLeft: 10, fontSize: 16 }}>
        Contactar
      </Text>
    </TouchableOpacity>
  );
};

export const BtnSubmitReview = ({ text = "Comentar", action = false }) => {
  return (
    <TouchableOpacity
      style={styles.btn_absolute_A}
      onPress={action ? action : null}
    >
      <Edit />
      <Text color="#eee" style={{ marginLeft: 10, fontSize: 16 }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
export const BtnPublish = ({action}) => {
  return (
    <TouchableOpacity style={styles.btn_absolute_B} onPress={action} >
      <Plus />
      <Text color="#eee" style={{ marginLeft: 10, fontSize: 16 }}>
        Publica un articulo
      </Text>
    </TouchableOpacity>
  );
};
