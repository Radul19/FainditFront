import { View, TouchableOpacity, ScrollView, Image, Modal } from "react-native";
import React, { useState } from "react";
import st from "./tuMarketItem.sass";
import Text from "../../../components/Text";
import Comment from "../../../components/Comment";
import { TuMarketItemTopBar } from "../../../components/TopBar";
import nivea1 from "../../../images/nivea1.png";
import { NavBarGeneral } from "../../../components/NavBar";
import { BtnContact } from "../../../components/Btns";
import {
  ModalCross,
  Stars,
  FlyIcon,
  Badge,
  Whatsapp,
  Phone,
  Messenger,
  Message,
  Instagram,
} from "../../../components/Icons";
import image from "../../../images/girl.png";

const TuMarkeItemPage = ({ navigation }) => {
  const data = [
    {
      title: "Aenean leo",
      body: "AD/Carrousel Promocional 1",
      imgUrl: "https://picsum.photos/id/11/200/300",
    },
    {
      title: "In turpis",
      body: "AD/Carrousel Promocional 2",
      imgUrl: "https://picsum.photos/id/10/200/300",
    },
    {
      title: "Lorem Ipsum",
      body: "AD/Carrousel Promocional 3",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
    {
      title: "Lorem Ipsum",
      body: "AD/Carrousel Promocional 4",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
    {
      title: "Lorem Ipsum",
      body: "AD/Carrousel Promocional 5",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
    {
      title: "Lorem Ipsum",
      body: "AD/Carrousel Promocional 6",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
    {
      title: "Lorem Ipsum",
      body: "AD/Carrousel Promocional 7",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
  ];

  const [contact, setContact] = useState(false);

  const pressContact = () => {
    setContact(true);
  };

  return (
    <View style={st.g_container}>
      <ContactModal visible={contact} setModal={setContact} />
      <ScrollView style={st.g_container}>
        <TuMarketItemTopBar />
        <View style={st.top}>
          <View style={st.top_image}>
            <Image
              source={nivea1}
              resizeMode="cover"
              style={{ width: "100%", height: "100%" }}
            />
          </View>
        </View>
        <View style={st.middle}>
          <Text style={st.middle_name}>Crema Nivea Cellular</Text>
          <Text style={st.middle_price}>Precio: $$$ o Bsf</Text>
          <Text style={st.middle_description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            curabitur eget faucibus dui in. Sapien tempus risus non turpis eget
            accumsan. Tellus morbi in diam nisl eu. Fermentum mi volutpat nisl
            semper sed sit. In.
          </Text>
        </View>
      </ScrollView>

      <BtnContact action={pressContact} />
      <NavBarGeneral navigation={navigation} active={2} />
    </View>
  );
};

const ContactModal = ({ visible, setModal }) => {
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
      <View style={st.contact_modal}>
        <View style={st.cm_ctn}>
          <View style={st.cm_top}>
            <Text style={st.cm_title}>Vendedor</Text>
            <View style={st.cross_modal}>
              <ModalCross
                onPress={() => {
                  setModal(false);
                }}
              />
            </View>
          </View>
          <View style={st.cm_profile}>
            <View style={st.image_ctn}>
              <Image source={image} style={st.image} />
            </View>
            <View style={st.cm_info}>
              <Text style={st.cm_name}>Dayana Solis</Text>
              <Stars />
            </View>
          </View>

          <View style={st.cm_subtitle_ctn}>
            <Badge size="18" />
            <Text style={st.cm_subtitle}>Description</Text>
          </View>
          <Text style={st.cm_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
            ultrices feugiat sapien sed. Porttitor.
          </Text>
          <View style={st.cm_subtitle_ctn}>
            <FlyIcon color="#000000" />
            <Text style={st.cm_subtitle}>Direccion</Text>
          </View>
          <Text style={st.cm_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
            ultrices feugiat sapien sed. Porttitor.
          </Text>

          <View style={st.cm_btns_ctn}>
            <Messenger />
            <Whatsapp />
            <Instagram />
            <Message />
            <Phone />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TuMarkeItemPage;
