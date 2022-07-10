import { View, TouchableOpacity, Image } from "react-native";
import Text from "./Text";
import React, { useContext } from "react";
import st from "../sass/components/topBar.sass";
import {
  FlyIcon,
  BigHeart,
  BigArrowBack,
  QR,
  ArrowBack,
  Help,
  Flag,
  Bell2,
} from "./Icons";
import { useNavigation } from "@react-navigation/native";

import { BtnBusiness } from "./Btns";
import { Context } from "../controllers/Context";

export const HomeTopBar = ({ user }) => {
  const navigation = useNavigation();
  const { navbarType, authFaMarket, setNavbarType, setEnableSeller } =
    useContext(Context);

  return (
    <View style={st.top_bar_home}>
      <View style={st.top_bar_home_left}>
        <Text style={{ fontSize: 24 }}>Hola Juan!</Text>
        <BtnBusiness
          action={() => {
            if (authFaMarket) {
              setEnableSeller(true);
              setNavbarType(2);
              navigation.navigate("Dashboard");
            } else {
              navigation.navigate("UserLogout");
            }
          }}
        />
      </View>
      <View style={st.top_bar_home_down}>
        <View style={st.home_icon}>
          <FlyIcon />
        </View>
        <Text style={{ fontSize: 12, color: "#FF6A00" }}>
          Cabimas, Los laureles
        </Text>
      </View>
    </View>
  );
};

export const TuMarketTopBar = ({ title = "Tu Market!", hour = false }) => {
  return (
    <View style={st.top_bar_home}>
      <View style={st.top_bar_home_left}>
        <Text style={{ fontSize: 24, marginBottom: 6 }}>{title}</Text>
        {hour ? <Text>{hour}</Text> : null}
      </View>
      <View style={st.top_bar_home_down}>
        <View style={st.home_icon}>
          <FlyIcon />
        </View>
        <Text style={{ fontSize: 12, color: "#FF6A00" }}>
          Cabimas, Los laureles
        </Text>
      </View>
    </View>
  );
};
export const TuMarketTopBarLogo = ({
  title = "Faindit Market",
  hour = false,
  image,
}) => {
  return (
    <View style={st.top_bar_home}>
      <View style={st.tb_fmarket_ctn}>
        <View style={st.tb_fmarket_left}>
          <Image source={image} style={st.image} resizeMode="stretch" />
        </View>
        <View style={st.tb_fmarket_right}>
          <Bell2 />
        </View>
      </View>
      <View style={st.top_bar_home_down}>
        <View style={st.home_icon}>
          <FlyIcon />
        </View>
        <Text style={{ fontSize: 12, color: "#FF6A00" }}>
          Cabimas, Los laureles
        </Text>
      </View>
    </View>
  );
};

export const MarketTopBar = ({ navigation, setQrModal }) => {
  return (
    <View style={st.market_top_bar}>
      <View style={st.mtb_left}>
        <BigArrowBack />
      </View>
      <View style={st.mtb_mid}>
        <QR action={setQrModal} />
      </View>
      <View style={st.mtb_right}>
        <Flag />
        <BigHeart />
      </View>
    </View>
  );
};
export const MarketTopBarSmall = ({ navigation }) => {
  return (
    <View style={st.top_bar}>
      <View style={st.top_bar_left}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text color="#0067ce">Back</Text>
        </TouchableOpacity>
      </View>
      <View style={st.top_bar_mid}>
        <Text>QR</Text>
      </View>
      <View style={st.top_bar_right_D}>
        <Text>Filter</Text>
      </View>
    </View>
  );
};

export const TuMarketItemTopBar = ({ navigation }) => {
  return (
    <View style={st.market_top_bar}>
      <BigArrowBack />
      <View>
        <Flag />
        <BigHeart />
      </View>
    </View>
  );
};

export const DashboardTopBar = ({ navigate }) => {
  return (
    <View style={st.top_bar}>
      <Text style={{ fontSize: 20 }}>T</Text>
      <View style={st.top_bar_right_C}>
        <TouchableOpacity
          onPress={() => {
            navigate("Notifications");
          }}
        >
          <Text color="#0067ce">Notification</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const BackTopBar = ({ text }) => {
  const navigation = useNavigation();
  return (
    <View style={st.btb_ctn}>
      <ArrowBack />
      <View style={st.btb_title_ctn}>
        <Text style={st.btb_title}>{text}</Text>
      </View>
    </View>
  );
};

export const BackExploreTopBar = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={st.top_bar}
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Text color="#0067ce">Back</Text>
      <View style={st.top_bar_right_A}>
        <Text>Modo Ejecutivo</Text>
      </View>
    </TouchableOpacity>
  );
};

export const TopBarSellerInventory = ({ navigate }) => {
  return (
    <View style={st.top_bar}>
      <Text style={{ fontSize: 20 }}>Deporte y Música</Text>
      <View style={st.top_bar_right_C}>
        <TouchableOpacity
          onPress={() => {
            navigate("Notifications");
          }}
        >
          <Text color="#0067ce">Notification</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const TopBarAddItem = ({ navigation, backTo = "Inventory" }) => {
  return (
    <View style={st.top_bar_addItem}>
      <ArrowBack
        action={() => {
          navigation.navigate(backTo);
        }}
      />
      <Text style={st.top_bar_addItem_mid_text}>Agregar Articulo</Text>
      <Help />
    </View>
  );
};
