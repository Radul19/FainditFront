import { View, TouchableOpacity, Image, ScrollView } from "react-native";
import Text from "../../../components/Text";
import React, { useState, useContext } from "react";
import st from "./user.sass";
import { NavBarGeneral, NavBarSeller } from "../../../components/NavBar";
import { Context } from "../../../controllers/Context";

import image from "../../../images/girl2.png";
import { SmallerTag } from "../../../components/SearchDisplay";
import { ArrowBack, ArrowRight, Edit } from "../../../components/Icons";
import { BtnBusiness2 } from "../../../components/Btns";
import farmatodo from "../../../images/heroimg.png";
import farmatodo_p from "../../../images/farmatodo.jpg";

import vnlz from "../../../images/vnzl_flag.png";

const UserPage = ({ navigation }) => {
  const { enableSeller } = useContext(Context);

  return (
    <>
      {!enableSeller ? (
        <UserProfile navigation={navigation} />
      ) : (
        <SellerProfile navigation={navigation} />
      )}
    </>
  );
};

const Option = ({ text, hide = false, press }) => {
  return (
    <View style={st.option_ctn}>
      <Text style={st.option_text}>{text}</Text>
      {hide ? null : (
        <View style={st.option_btn}>
          <ArrowRight action={press} />
        </View>
      )}
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

export default UserPage;
/////////////////////////////////// USER PROFILE
const UserProfile = ({ navigation }) => {
  const [active, setActive] = useState(false);

  const { navbarType, setNavbarType, enableSeller, setEnableSeller } =
    useContext(Context);

  const switchSeller = () => {
    if (enableSeller) {
      setNavbarType(1);
    } else {
      setNavbarType(2);
    }
    setEnableSeller(!enableSeller);
  };

  const [tagData, setTagData] = useState([
    {
      title: "Tecnologia",
      body: "010203",
      state: true,
    },
    {
      title: "Electrodomesticos",
      body: "010304",
      state: true,
    },
    {
      title: "Ropa",
      body: "001024",
      state: true,
    },
    {
      title: "Cocina",
      body: "301024",
      state: true,
    },
    {
      title: "Decoracion",
      body: "091283",
      state: true,
    },
    {
      title: "Electrodomesticos",
      body: "19083",
      state: true,
    },
    {
      title: "Comida rapida",
      body: "877571",
      state: true,
    },
    {
      title: "Decoracion",
      body: "981",
      state: true,
    },
    {
      title: "Relajacion",
      body: "p9428",
      state: true,
    },
  ]);

  const [viewInfo, setViewInfo] = useState(false);

  const pressInfo = () => {
    setViewInfo(!viewInfo);
  };

  const pressVerify = () => {
    navigation.navigate("UserID_1");
  };
  const pressCreateCv = () => {
    navigation.navigate("VerifyCv1");
  };

  const changeUser = () => {
    switchSeller();
    navigation.navigate("Dashboard");
  };

  return (
    <View style={st.g_container}>
      <ScrollView style={st.g_container}>
        <View style={st.top}>
          {viewInfo ? (
            <>
              <ArrowBack action={pressInfo} />
              <Text style={st.title}>Tu Informacion!</Text>
            </>
          ) : (
            <Text style={st.title}>
              {enableSeller ? "de comerciante" : "Tu Perfil!"}{" "}
            </Text>
          )}
        </View>
        <View style={st.mid}>
          <View style={st.mid_image}>
            <Image source={image} resizeMode="contain" style={st.image} />
          </View>
          <View style={st.mid_info}>
            {enableSeller ? (
              <Text>Deportes y Musica</Text>
            ) : (
              <Text style={st.username}>Alanis Ramirez</Text>
            )}
            <Text style={st.change_profile_text}>Cambiar foto de perfil</Text>
          </View>
        </View>
        <View style={st.bot}>
          {viewInfo ? (
            <>
              {/* <Text style={[styles.subtitle, { marginTop: 14 }]}>Informacion</Text> */}
              <Option
                text="Informacion Personal"
                press={pressInfo}
                hide={true}
              />

              <View style={{ height: 10 }}></View>

              <InfoInput text={"Nombres"} placehold="Alanis Ramirez" />
              <InfoInput text={"Apellidos"} placehold="Trejo Casasola" />
              <InfoInput text={"Email"} placehold="Trejo.Casasola@gmail.com" />
              <View style={st.infoInput_ctn}>
                <Text style={st.infoInput_text}>Numero telefonico</Text>
                <View style={st.phone_ctn}>
                  <TouchableOpacity style={st.phone_image}>
                    <Image
                      source={vnlz}
                      style={st.image}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <Text style={[st.infoInput_input, { alignSelf: "center" }]}>
                    888 8888
                  </Text>
                </View>
              </View>

              <Option text="Seguridad" press={pressInfo} hide={true} />
              <View style={{ height: 10 }}></View>
              <InfoInput
                text={"Tu contraseña"}
                placehold="***********************"
              />
              <InfoInput
                text={"Nueva contraseña"}
                placehold="***********************"
              />
              <InfoInput
                text={"Confirmar tu nueva contraseña"}
                placehold="***********************"
              />
            </>
          ) : (
            <>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingBottom: 20,
                }}
              >
                <Text style={st.subtitle}>Tus Intereses</Text>
                <TouchableOpacity>
                  <Text style={st.change_profile_text}>Editar intereses</Text>
                </TouchableOpacity>
              </View>
              <View style={st.tags_ctn}>
                {tagData.map((item, index) => (
                  <SmallerTag item={item} index={item.body} key={item.body} />
                ))}
              </View>

              <Text style={[st.subtitle, { marginTop: 14 }]}>Informacion</Text>
              <Option text="Informacion Personal" press={pressInfo} />
              <Option text="Verificacion por ID" press={pressVerify} />
              <Option text="Actualizar curriculum" press={pressCreateCv} />

              <Text style={[st.subtitle, { marginTop: 14 }]}>
                Configuracion General
              </Text>
              <Option text="Tus Favoritos" />
              <Option text="Notificaciones" />
              <Option text="Legal" />
              <Option text="Privacidad" />
              <Option text="Cerrar Sesión" />
            </>
          )}
        </View>
        <View style={{ height: 70 }}></View>
      </ScrollView>
      {viewInfo ? null : <BtnBusiness2 action={changeUser} />}
      <NavBarGeneral navigation={navigation} active={4} />
    </View>
  );
};

/////////////////////////////////// SELLER PROFILE
const SellerProfile = ({ navigation }) => {
  const [active, setActive] = useState(false);

  const { navbarType, setNavbarType, enableSeller, setEnableSeller } =
    useContext(Context);

  const switchSeller = () => {
    if (enableSeller) {
      setNavbarType(1);
    } else {
      setNavbarType(2);
    }
    setEnableSeller(!enableSeller);
  };

  const [tagData, setTagData] = useState([
    {
      title: "Tecnologia",
      body: "AD/Carrousel Promocional 1",
      state: true,
    },
    {
      title: "Electrodomesticos",
      body: "AD/Carrousel Promocional 2",
      state: true,
    },
    {
      title: "Ropa",
      body: "AD/Carrousel Promocional 3",
      state: true,
    },
    {
      title: "Cocina",
      body: "AD/Carrousel Promocional 4",
      state: true,
    },
    {
      title: "Decoracion",
      body: "AD/Carrousel Promocional 5",
      state: true,
    },
    {
      title: "Electrodomesticos",
      body: "AD/Carrousel Promocional 6",
      state: true,
    },
    {
      title: "Comida rapida",
      body: "AD/Carrousel Promocional 7",
      state: true,
    },
    {
      title: "Decoracion",
      body: "AD/Carrousel Promocional 8",
      state: true,
    },
    {
      title: "Relajacion",
      body: "AD/Carrousel Promocional 9",
      state: true,
    },
  ]);

  const [viewInfo, setViewInfo] = useState(false);

  const pressInfo = () => {
    // setViewInfo(!viewInfo)
    navigation.navigate("SellerInfo");
  };

  const changeUser = () => {
    switchSeller();
    navigation.navigate("User");
  };

  const AdminJobs = () => {
    setNavbarType(5);
    navigation.navigate("JobAdmin");
  };

  return (
    <View style={st.g_container}>
      <ScrollView style={st.g_container}>
        <View style={st.image_absolute_ctn}>
          <Image
            source={farmatodo}
            style={st.image_absolute}
            resizeMode="cover"
          />
        </View>

        <View style={st.profile_container}>
          <TouchableOpacity style={st.edit_ctn}>
            <Edit color={"#000"} />
          </TouchableOpacity>
          <View style={st.image_profile_ctn}>
            <Image source={farmatodo_p} style={st.image} />
          </View>
          <View style={st.profile_container_right}>
            <Text style={{ fontSize: 28, color: "#fff" }}>Farmatodo</Text>
            <Text style={st.btn_profile}>Cambiar foto de perfil</Text>
          </View>
        </View>

        <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
          <Text style={[st.subtitle, { marginTop: 14 }]}>Informacion</Text>
          <Option text="Informacion de contacto" press={pressInfo} />
          <Option text="Informacion comercial" press={pressInfo} />

          <Text style={[st.subtitle, { marginTop: 24 }]}>
            Configuracion General
          </Text>
          <Option text="Administrar Vacantes" press={AdminJobs} />
          <Option text="Notificaciones" />
          <Option text="Legal" />
          <Option text="Privacidad" />
          <Option text="Cerrar Sesión" />
        </View>

        <View style={{ height: 70 }}></View>
      </ScrollView>
      {viewInfo ? null : <BtnBusiness2 action={changeUser} />}
      <NavBarGeneral navigation={navigation} active={4} />
    </View>
  );
};
