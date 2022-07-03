import { View, TouchableOpacity } from "react-native";
import Text from "./Text";
import React, { useContext } from "react";
import styles from "../sass/components/topBar.sass";
import { FlyIcon, BigHeart, BigArrowBack, QR, ArrowBack, Help } from "./Icons";
import { useNavigation } from "@react-navigation/native";

import { BtnBusiness } from "./Btns";
import { Context } from "../controllers/Context";

export const HomeTopBar = ({ user }) => {
  const navigation = useNavigation();
  const { navbarType, setNavbarType, setEnableSeller } = useContext(Context);

  return (
    <View style={styles.top_bar_home}>
      <View style={styles.top_bar_home_left}>
        <Text style={{ fontSize: 24 }}>Hola Juan!</Text>
        <BtnBusiness
          action={() => {
            setEnableSeller(true);
            setNavbarType(2);
            navigation.navigate("Dashboard");
          }}
        />
      </View>
      <View style={styles.top_bar_home_down}>
        <View style={styles.home_icon}>
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
    <View style={styles.top_bar_home}>
      <View style={styles.top_bar_home_left}>
        <Text style={{ fontSize: 24, marginBottom: 6 }}>{title}</Text>
        {hour ? <Text>{hour}</Text> : null}
      </View>
      <View style={styles.top_bar_home_down}>
        <View style={styles.home_icon}>
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
    <View style={styles.market_top_bar}>
      <BigArrowBack />
      <QR action={setQrModal} />
      <BigHeart />
    </View>
  );
};
export const MarketTopBarSmall = ({ navigation }) => {
  return (
    <View style={styles.top_bar}>
      <View style={styles.top_bar_left}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text color="#0067ce">Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.top_bar_mid}>
        <Text>QR</Text>
      </View>
      <View style={styles.top_bar_right_D}>
        <Text>Filter</Text>
      </View>
    </View>
  );
};

export const TuMarketItemTopBar = ({ navigation }) => {
  return (
    <View style={styles.market_top_bar}>
      <BigArrowBack />
      <BigHeart />
    </View>
  );
};

export const DashboardTopBar = ({ navigate }) => {
  return (
    <View style={styles.top_bar}>
      <Text style={{ fontSize: 20 }}>T</Text>
      <View style={styles.top_bar_right_C}>
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
    <View style={styles.btb_ctn}>
      <ArrowBack />
      <View style={styles.btb_title_ctn}>
        <Text style={styles.btb_title}>{text}</Text>
      </View>
    </View>
  );
};

export const BackExploreTopBar = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.top_bar}
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Text color="#0067ce">Back</Text>
      <View style={styles.top_bar_right_A}>
        <Text>Modo Ejecutivo</Text>
      </View>
    </TouchableOpacity>
  );
};

export const TopBarSellerInventory = ({ navigate }) => {
  return (
    <View style={styles.top_bar}>
      <Text style={{ fontSize: 20 }}>Deporte y Música</Text>
      <View style={styles.top_bar_right_C}>
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

export const TopBarAddItem = ({ navigation }) => {
  return (
    <View style={styles.top_bar_addItem}>
      <ArrowBack
        action={() => {
          navigation.navigate("Inventory");
        }}
      />
      <Text style={styles.top_bar_addItem_mid_text}>Agregar Articulo</Text>
      <Help />
    </View>
  );
};
