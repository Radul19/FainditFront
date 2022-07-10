import { View, TouchableOpacity, Image, Modal } from "react-native";
import React, { useContext, useState } from "react";

import st from "./verification.sass";
import Text from "../../../components/Text";
import { NavBarGeneral } from "../../../components/NavBar";
import { BtnPrimaryW, BtnSecondaryW } from "../../../components/Btns";
import logo from "../../../images/backreg2.png";
import { ArrowDown, BigArrowBack, Check } from "../../../components/Icons";

import himage from "../../../images/HimageCreate2.png";
import vnzl from "../../../images/vnzla.png";

import { Context } from "../../../controllers/Context";
import { InputWide } from "../../../components/Inputs";

const VerificationPage = ({ navigation }) => {
  const [modal, setModal] = useState(false);
  const [modal_2, setModal_2] = useState(false);

  const [inputs, setInputs] = useState({
    num: "",
    card_id:"",
  });

  const inputChange = (name, data) => setInputs({ ...inputs, [name]: data });

  return (
    <View style={st.g_container}>
      <VerifyModal_1
        setModal={setModal}
        visible={modal}
        setModal_2={setModal_2}
      />
      <VerifyModal_2
        setModal={setModal_2}
        visible={modal_2}
        navigation={navigation}
      />
      {/* <View style={st.absolute_arrow}>
        <BigArrowBack />
      </View> */}
      <Image source={logo} style={st.image} resizeMode="stretch" />
      <View style={st.g_container_scroll}>
        <View style={st.top}>
          <Text style={st.top_title_small}>Datos Complementarios</Text>
          <Text style={st.top_text}>Aliquam ultrices suspendisse varius.</Text>
        </View>
        <View style={st.bot}>
          <View style={st.himage_ctn}>
            <Image style={st.himage} source={himage} />
          </View>
          <InfoDescription
            text={"Ingresa tu numero telefonico"}
            placehold="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tortor viverra ipsum gravida dignissim tempor sem in. Elit enim."
          />
          <View style={st.info_bar}>
            <TouchableOpacity style={st.num_ctn}>
              <Image source={vnzl} />
              <ArrowDown />
            </TouchableOpacity>
            <View style={st.num_input_ctn}>
              <InputWide
                name="num"
                value={inputs.num}
                set={inputChange}
                placehold="888 8888"
              />
              <View style={st.check}>
                <Check color="#ff6a00" />
              </View>
            </View>
          </View>
          <Text style={{ marginTop: 12,marginBottom:-12, fontWeight:"bold" }}>Ingresar documento de Identidad</Text>
          <View style={st.info_bar}>
            <TouchableOpacity style={st.id_selector_ctn}>
              <Text style={{marginLeft:6}} >V</Text>
              <ArrowDown />
            </TouchableOpacity>
            <View style={st.num_input_ctn}>
              <InputWide
                name="num"
                value={inputs.num}
                set={inputChange}
                placehold="31.895.717"
              />
              <View style={st.check}>
                <Check color="#ff6a00" />
              </View>
            </View>
          </View>

          <View style={st.absolute_btn_bottom}>
            <BtnPrimaryW
              text={"Enviar codigo de confirmacion"}
              action={() => {
                setModal(true);
              }}
            />
          </View>

          {/* <View style={st.absolute_bottom_text_ctn}>
            <TouchableOpacity
              style={st.register_text_ctn}
              onPress={() => {
                navigation.navigate("Topics");
              }}
            >
              <Text style={st.register_text}>Omitir este paso</Text>
            </TouchableOpacity>
          </View> */}

          {/* <View style={styles.bot_g_f_container}  >
                        <TouchableOpacity style={styles.bot_g_f_btn} ><Text>G</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.bot_g_f_btn} ><Text>F</Text></TouchableOpacity>
                    </View> */}
        </View>
        {/* <NavBarGeneral navigation={navigation} active={4} /> */}
      </View>
    </View>
  );
};

const InfoInput = ({ text, placehold }) => {
  return (
    <View style={st.infoInput_ctn}>
      <Text style={st.infoInput_text}>{text}</Text>
      <Text style={st.infoInput_input}>{placehold}</Text>
    </View>
  );
};
const InfoIputFlag = ({ text, placehold }) => {
  return (
    <View style={st.infoInput_ctn}>
      <Text style={st.infoInput_text}>{text}</Text>
      <TouchableOpacity style={[st.infoInput_image_ctn, { marginTop: 5 }]}>
        <Image source={vnzl} />
        <Text style={{ marginLeft: 5 }}>{placehold}</Text>
        <ArrowDown />
      </TouchableOpacity>
    </View>
  );
};

const InfoDescription = ({ text, placehold }) => {
  return (
    <View style={st.infoInput_ctn}>
      <Text style={st.infoInput_text}>{text}</Text>
      <Text style={st.infoInput_description}>{placehold}</Text>
    </View>
  );
};

import shield from "../../../images/shield.png";
const VerifyModal_1 = ({ setModal, visible, setModal_2 }) => {
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
      <View style={st.modal_ctn}>
        <View style={st.modal_box}>
          <Image source={shield} style={st.modal_img} />
          <Text style={st.modal_title}>Verificacion de codigo por SMS</Text>
          <View style={st.code_inputs}>
            <View style={st.num}>
              <Text color="#eee">5</Text>
            </View>
            <View style={st.num}>
              <Text color="#eee">7</Text>
            </View>
            <View style={st.num}>
              <Text color="#eee">9</Text>
            </View>
            <View style={st.num_inactive}>
              <Text color="#FF6A00"> </Text>
            </View>
            <View style={st.num_inactive}>
              <Text color="#FF6A00"> </Text>
            </View>
            <View style={st.num_inactive}>
              <Text color="#FF6A00"> </Text>
            </View>
          </View>
          <Text style={st.modal_desc}>
            Ingresa el codigo que se te envio por SMS +58-6504476
          </Text>
          <View style={st.under_text_ctn}>
            <Text style={st.under_text}>Reenviar codigo</Text>
            <Text style={st.under_text}>Cambiar numero telefonico</Text>
          </View>
          <View style={st.modal_btn}>
            <BtnPrimaryW
              text={"Enviar codigo de confirmacion"}
              action={() => {
                setModal(false);
                setModal_2(true);
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
import checkbox from "../../../images/check_circle.png";

const VerifyModal_2 = ({ setModal, visible, navigation }) => {
  const { setAuthFaMarket } = useContext(Context);

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
      <View style={st.modal_ctn}>
        <View style={st.modal_box_2}>
          <Image source={checkbox} style={st.modal_img} />
          <Text style={st.modal_title}>Verificacion de codigo por SMS</Text>
          <Text style={st.modal_desc_2}>
            Tu numero telefonico ha sido confirmado exitosamente
          </Text>
          <View style={st.modal_btn}>
            <BtnPrimaryW
              text={"Continuar"}
              action={() => {
                setAuthFaMarket(true);
                navigation.navigate("Topics");
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default VerificationPage;
