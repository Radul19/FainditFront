import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import st from "../sass/components/NavBar.sass";
import { Context } from "../controllers/Context";
import { useNavigation } from "@react-navigation/native";

import {
  Home,
  Notifications,
  Accircle,
  Store,
  Dashboard,
  Inventory,
  Box,
  Work,
} from "./Icons";

export const NavBarGeneral = ({ active }) => {
  const { navbarType, setNavbarType, authFaMarket } = useContext(Context);

  const navigation = useNavigation();

  if (navbarType === 1) {
    return <NavBar navigation={navigation} active={active} />;
  } else if (navbarType === 2) {
    return <NavBarSeller navigation={navigation} active={active} />;
  } else {
    return null;
  }
};

export const NavBar = ({ navigation, active }) => {
  const { navbarType, authFaMarket, authCv } = useContext(Context);

  return (
    <View style={st.nav_bar}>
      <TouchableOpacity
        style={st.icon}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Home active={active === 1 ? true : false} />
      </TouchableOpacity>

      <TouchableOpacity
        style={st.icon}
        onPress={() => {
          {
            authFaMarket
              ? navigation.navigate("TuMarket")
              : navigation.navigate("UserLogout");
          }
        }}
      >
        <Store active={active === 2 ? true : false} />
      </TouchableOpacity>

      <TouchableOpacity
        style={st.icon}
        onPress={() => {
          if (authFaMarket) {
            if (authCv) {
              navigation.navigate("JobSearch");
            } else {
              navigation.navigate("VerifyCv1");
            }
          } else {
            navigation.navigate("UserLogout");
          }
        }}
      >
        <Work active={active === 5 ? true : false} />
      </TouchableOpacity>

      <TouchableOpacity
        style={st.icon}
        onPress={() => {
          navigation.navigate("Notifications");
        }}
      >
        <Notifications active={active === 3 ? true : false} />
      </TouchableOpacity>

      <TouchableOpacity
        style={st.icon}
        onPress={() => {
          navigation.navigate("UserLogout");
        }}
      >
        <Accircle active={active === 4 ? true : false} />
      </TouchableOpacity>
    </View>
  );
};

export const NavBarSeller = ({ navigation, active }) => {
  return (
    <View style={active === 2 ? st.nav_bar_absolute : st.nav_bar}>
      <TouchableOpacity
        style={st.icon}
        onPress={() => {
          navigation.navigate("Dashboard");
        }}
      >
        <Dashboard active={active === 1 ? true : false} />
      </TouchableOpacity>

      <TouchableOpacity
        style={st.icon}
        onPress={() => {
          console.log("test");
          navigation.navigate("Inventory");
        }}
      >
        <Box active={active === 2 ? true : false} />
      </TouchableOpacity>

      <TouchableOpacity
        style={st.icon}
        onPress={() => {
          navigation.navigate("JobAdmin");
        }}
      >
        <Work active={active === 5 ? true : false} />
      </TouchableOpacity>

      <TouchableOpacity
        style={st.icon}
        onPress={() => {
          navigation.navigate("Notifications");
        }}
      >
        <Notifications active={active === 3 ? true : false} />
      </TouchableOpacity>

      <TouchableOpacity
        style={st.icon}
        onPress={() => {
          navigation.navigate("User");
        }}
      >
        <Accircle active={active === 4 ? true : false} />
      </TouchableOpacity>
    </View>
  );
};
