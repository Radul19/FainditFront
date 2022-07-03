import {
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import Text from "../../../components/Text";

import React, { useState } from "react";
import st from "./market.sass";
import {
  DisplaySearch,
  DisplayTags,
  Item_card_A,
  Item_card_B,
  SearchBar,
} from "../../../components/SearchDisplay";
import { MarketTopBar, MarketTopBarSmall } from "../../../components/TopBar";
import Comment from "../../../components/Comment";
import heroimg from "../../../images/heroimg.png";
import {
  Star,
  Tune,
  Whatsapp,
  Phone,
  Messenger,
  Message,
  Instagram,
  ModalCross,
  Schedule,
  Truck,
  ShareIcon,
  QR_clean,
} from "../../../components/Icons";

/// IMAGES
import supermarket from "../../../images/supermarket.png";
import ferreteria from "../../../images/ferreteria.png";
import food from "../../../images/food.png";
import ropa from "../../../images/ropa.png";
import tecnologia from "../../../images/tecnologia.png";
import farmacias from "../../../images/farmacias.png";
import farmatodo from "../../../images/farmatodo.jpg";
import qrimage from "../../../images/qr.png";

import nivea1 from "../../../images/nivea1.png";
import nivea2 from "../../../images/nivea2.png";
import { NavBarGeneral } from "../../../components/NavBar";
import { BtnContact, BtnPrimaryW } from "../../../components/Btns";
import FilterModal from "../../../components/FilterModal";

const MarketPage = ({ navigation }) => {
  const [view, setView] = useState(true);
  const [search, setSearch] = useState(true);
  const [commentView, setCommentView] = useState(false);
  const [inputSearch, setInputSearch] = useState("");

  const data = [
    {
      title: "Aenean leo",
      body: "Onboarding1",
      imgUrl: "https://picsum.photos/id/11/200/300",
    },
    {
      title: "In turpis",
      body: "Onboarding2 ",
      imgUrl: "https://picsum.photos/id/10/200/300",
    },
    {
      title: "Lorem Ipsum",
      body: "Onboarding3",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
    {
      title: "Lorem Ipsum 2",
      body: "Onboarding4",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
    {
      title: "Lorem Ipsum 3",
      body: "Onboarding4",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
    {
      title: "Lorem Ipsum 4",
      body: "Onboarding4",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
    {
      title: "Lorem Ipsum 5",
      body: "Onboarding4",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
    {
      title: "Lorem Ipsum 6",
      body: "Onboarding4",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
  ];
  const [tagData, setTagData] = useState([
    {
      title: "Medicamentos",
      body: "AD/Carrousel Promocional 1",
      imgUrl: supermarket,
      state: true,
    },
    {
      title: "Abarrotes",
      body: "AD/Carrousel Promocional 2",
      imgUrl: ferreteria,
      state: false,
    },
    {
      title: "Snacks",
      body: "AD/Carrousel Promocional 3",
      imgUrl: food,
      state: false,
    },
    {
      title: "Ropa",
      body: "AD/Carrousel Promocional 4",
      imgUrl: ropa,
      state: false,
    },
    {
      title: "Cosas varias",
      body: "AD/Carrousel Promocional 5",
      imgUrl: tecnologia,
      state: false,
    },
    {
      title: "Farmacias",
      body: "AD/Carrousel Promocional 6",
      imgUrl: farmacias,
      state: false,
    },
    {
      title: "Lorem Ipsum",
      body: "AD/Carrousel Promocional 7",
      imgUrl: supermarket,
      state: false,
    },
    {
      title: "Lorem Ipsum",
      body: "AD/Carrousel Promocional 8",
      imgUrl: supermarket,
      state: false,
    },
    {
      title: "Lorem Ipsum",
      body: "AD/Carrousel Promocional 9",
      imgUrl: supermarket,
      state: false,
    },
    {
      title: "Lorem Ipsum",
      body: "AD/Carrousel Promocional 10",
      imgUrl: supermarket,
      state: false,
    },
  ]);
  const dataItem = [
    {
      title: "Crema nivea cellular",
      body: "AD/Carrousel Promocional 1",
      imgUrl: nivea1,
    },
    {
      title: "Crema nivea cellular 630",
      body: "AD/Carrousel Promocional 2",
      imgUrl: nivea2,
    },
    {
      title: "Crema nivea cellular 630",
      body: "AD/Carrousel Promocional 3",
      imgUrl: nivea2,
    },
    {
      title: "Crema nivea cellular",
      body: "AD/Carrousel Promocional 4",
      imgUrl: nivea1,
    },
    {
      title: "Crema nivea cellular",
      body: "AD/Carrousel Promocional 5",
      imgUrl: nivea1,
    },
    {
      title: "Crema nivea cellular 630",
      body: "AD/Carrousel Promocional 6",
      imgUrl: nivea2,
    },
    {
      title: "Crema nivea cellular 630",
      body: "AD/Carrousel Promocional 7",
      imgUrl: nivea2,
    },
    {
      title: "Crema nivea cellular",
      body: "AD/Carrousel Promocional 8",
      imgUrl: nivea1,
    },
  ];

  const [modal, setModal] = useState(false);

  const [info, setInfo] = useState(false);

  const [qrModal, setQrModal] = useState(false);

  const [filterModal, setFilterModal] = useState(false);

  const goToItem = () => {
    navigation.navigate("Item");
  };

  return (
    <View style={st.g_container}>
      <ContactModal
        navigation={navigation}
        setModal={setModal}
        visible={modal}
      />
      <InfoModal setModal={setInfo} visible={info} />
      <QR_modal setModal={setQrModal} visible={qrModal} />
      <FilterContainer setModal={setFilterModal} visible={filterModal} />
      <ScrollView style={st.g_container}>
        {search ? (
          <View style={st.top}>
            <MarketTopBar
              navigation={navigation}
              setQrModal={() => {
                setQrModal(true);
              }}
            />
            <View style={st.top_mid}>
              <Image source={heroimg} style={st.image} resizeMode="cover" />
            </View>
            <View style={st.profile_image}>
              <Image
                source={farmatodo}
                style={st.image}
                resizeMode="cover"
              />
            </View>
          </View>
        ) : (
          <View style={st.top_search}>
            <MarketTopBarSmall />
            <View style={st.top_search_bar}>
              <TextInput
                style={st.searchbar}
                onChangeText={setInputSearch}
                value={inputSearch}
                placeholder="Search..."
              />
            </View>
          </View>
        )}
        {/* BOTTOM CONTENT */}

        {!commentView ? (
          <View style={st.scroll}>
            <View style={st.name_rev_ctn}>
              <View style={st.name_rev_ctn_left}>
                <Text style={{ fontSize: 24, marginBottom: 2 }}>Farmatodo</Text>
                <TouchableOpacity
                  style={{ flexDirection: "row", alignItems: "center" }}
                  onPress={() => {
                    setCommentView(!commentView);
                  }}
                >
                  <Star />
                  <Text style={{ marginLeft: 8, fontSize: 14 }}>
                    4,5 (459 reseñas)
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setInfo(true);
                }}
              >
                <Text color="#FF6A00" style={st.underline}>
                  Información
                </Text>
              </TouchableOpacity>
            </View>
            <SearchBar />
            <View style={st.scroll_subtitle}>
              <Text>Explora nuestras categorias</Text>
              <Tune
                action={() => {
                  setFilterModal(true);
                }}
              />
            </View>

            <DisplayTags data={tagData} setData={setTagData} type="S" />

            <View style={st.scroll_top}>
              <Text style={{ fontSize: 18 }}>Cuidado Personal</Text>
            </View>
            {/* ITEMS FLAT LIST */}
            {view ? (
              <DisplaySearch data={dataItem} />
            ) : (
              <View style={st.items_container}>
                {data.map((item) => (
                  <Item_card_B key={item.title} goToItem={goToItem} />
                ))}
              </View>
            )}
          </View>
        ) : (
          <View style={st.scroll_B}>
            <View style={st.scroll_B_top}>
              <Text style={st.scroll_B_top_text}>5 stars</Text>
              <Text style={st.scroll_B_top_text}>Comentarios</Text>
            </View>
            <View>
              {data.map((item) => (
                <Comment key={item.title} />
              ))}
            </View>
          </View>
        )}
        <View style={{ height: 70 }}></View>
      </ScrollView>
      {modal ? null : (
        <BtnContact
          action={() => {
            setModal(true);
          }}
        />
      )}
      <NavBarGeneral navigation={navigation} active={1} />
    </View>
  );
};

export default MarketPage;

const ContactModal = ({ navigation, setModal, visible }) => {
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
        <TouchableWithoutFeedback
          onPress={() => {
            setModal(false);
          }}
        >
          <View style={st.image}></View>
        </TouchableWithoutFeedback>
      </View>
      <View style={st.icon_ctn}>
        <Messenger />
        <Whatsapp />
        <Instagram />
        <Message />
        <Phone />
      </View>
      <View style={st.navbar_ctn}>
        <NavBarGeneral navigation={navigation} active={1} />
      </View>
    </Modal>
  );
};

const InfoModal = ({ setModal, visible }) => {
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
      <View style={st.info_modal}>
        <View style={st.ifm_ctn}>
          <View style={st.ifm_top}>
            <Text style={st.ifm_title}>Información</Text>
            <View style={st.cross_modal}>
              <ModalCross
                onPress={() => {
                  setModal(false);
                }}
              />
            </View>
          </View>

          <Text style={st.ifm_subtitle}>Descripcion</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id lacus
            aliquam turpis turpis enim gravida facilisi egestas. Viverra
            tristique pharetra sit sed lacus dui massa magna. Nisl vestibulum
            tristique tellus volutpat at pharetra accumsan dictum. Sed.
          </Text>

          <View style={st.ifm_subtitle_ctn}>
            <Schedule />
            <Text style={st.ifm_subtitle_2}>Direccion</Text>
          </View>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
            ultrices feugiat sapien sed. Porttitor.
          </Text>
          <View style={st.ifm_subtitle_ctn}>
            <Schedule />
            <Text style={st.ifm_subtitle_2}>Horarios</Text>
          </View>
          <ScheduleItem day="Lunes" open={true} />
          <ScheduleItem day="Martes" open={true} />
          <ScheduleItem day="Miercoles" open={true} />
          <ScheduleItem day="Jueves" open={true} />
          <ScheduleItem day="Viernes" open={true} />
          <ScheduleItem day="Sabado" open={true} />
          <ScheduleItem day="Domingo" open={false} />

          <View style={st.delivery_ctn}>
            <Truck />
            <Text style={st.delivery_text}>
              Delivery disponible en este establecimiento
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const ScheduleItem = ({ day, open }) => {
  return (
    <View style={st.schedule_item_ctn}>
      <Text style={st.si_day}>{day}</Text>
      <Text style={st.si_date}>
        {open ? "8:00 - 20:00" : "Cerrado todo el dia"}
      </Text>
    </View>
  );
};

const QR_modal = ({ setModal, visible }) => {
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
      <View style={st.info_modal}>
        <View style={st.qr_modal}>
          <View style={st.ifm_top}>
            <Text style={st.ifm_title}>Compartir</Text>
            <View style={st.cross_modal}>
              <ModalCross
                onPress={() => {
                  setModal(false);
                }}
              />
            </View>
          </View>
          <View style={st.qr_ctn}>
            <Image source={qrimage} style={st.image} />
          </View>

          <View style={st.qr_btns_ctn}>
            <TouchableOpacity style={st.qr_btn_left}>
              <ShareIcon />
              <Text style={st.qr_btn_left_text}>Compartir</Text>
            </TouchableOpacity>
            <TouchableOpacity style={st.qr_btn_right}>
              <QR_clean color="#eee" />
              <Text style={st.qr_btn_right_text}>Descargar QR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const FilterContainer = ({ setModal, visible }) => {
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
      <FilterModal setModal={setModal} />
    </Modal>
  );
};
