import {
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Text from "./Text";
import { Star, Heart, SearchIcon, Cross } from "./Icons";
import { LinearGradient } from "expo-linear-gradient";
import farmatodo from "../images/farmatodo_wide.png";
import nivea from "../images/nivea1.png";
// import farmatodo from '../images/a.jpg'

import st from "../sass/components/SearchDisplay.sass";

export const SearchBar = ({
  value,
  set,
  onFocus,
  innerRef,
  placehold = "Comercio, Articulos, Servicios, Etc.",
}) => {
  return (
    <View style={st.sb_container}>
      <SearchIcon />
      <TextInput
        ref={innerRef}
        // onSubmitEditing={Keyboard.dismiss}
        onFocus={onFocus}
        style={st.searchbar}
        onChangeText={set}
        value={value}
        placeholder={placehold}
      />
      <TouchableOpacity
        onPress={() => {
          set("");
        }}
        style={st.sb_cross_ctn}
      >
        <Cross color="#646464" />
      </TouchableOpacity>
    </View>
  );
};

export const SearchMarketItem = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={st.marketItem_container}
      onPress={() => {
        navigation.navigate("Market");
      }}
    >
      <View style={st.marketItem_top}>
        <Heart />
      </View>
      <View style={st.marketItem_mid}>
        <Image
          source={farmatodo}
          resizeMode="stretch"
          style={st.marketItem_mid_image}
        />
      </View>
      <View style={st.marketItem_bot}>
        <Text style={[st.marketItem_container_text]}>Farmatodo</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Star size="12" />
          <Text
            style={[
              st.marketItem_container_text,
              st.small,
              { marginLeft: 4 },
            ]}
          >
            4,5 (459 reseñas)
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const SearchItem = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={st.marketItem_container}
      onPress={() => {
        navigation.navigate("Item");
      }}
    >
      <View style={st.marketItem_top}>
        <Heart />
      </View>
      <View style={st.marketItem_mid}>
        <Image
          source={item.imgUrl}
          resizeMode="stretch"
          style={st.marketItem_mid_image}
        />
      </View>
      <View style={st.marketItem_bot}>
        <Text style={[st.marketItem_container_text]}>{item.title}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Star size="12" />
          <Text
            style={[
              st.marketItem_container_text,
              st.small,
              { marginLeft: 4 },
            ]}
          >
            4,5 (459 reseñas)
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export const SearchTuMarketItem = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={st.marketItem_container}
      onPress={() => {
        navigation.navigate("TuMarketItem");
      }}
    >
      <View style={st.marketItem_mid}>
        <Image
          source={item.imgUrl}
          resizeMode="stretch"
          style={st.marketItem_mid_image}
        />
      </View>
      <View style={st.marketItem_bot}>
        <Text style={[st.marketItem_container_text]}>{item.title}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Star size="12" />
          <Text
            style={[
              st.marketItem_container_text,
              st.small,
              { marginLeft: 4 },
            ]}
          >
            4,5 (459 reseñas)
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// export const Item_card_B_Backup = ({ goToItem }) => {
//     return (
//         <TouchableOpacity style={styles.item_B} onPress={goToItem} >
//             <View style={styles.item_B_left} >
//                 <Text>Photo</Text>
//             </View>
//             <View style={styles.item_B_right} >
//                 <View style={styles.item_B_right_top} >
//                     <Text>Nombre</Text>
//                     <Text>Descripcion</Text>
//                 </View>
//             </View>
//         </TouchableOpacity>
//     )
// }

export const DisplayMarketSearch = ({ data }) => {
  // SearchMarketItem
  return (
    <View style={st.search_wide_ctn}>
      {data.map((item) => (
        <SearchMarketItem item={item} key={item.body} />
      ))}
    </View>
  );
};

export const DisplaySearch = ({ data, type = "A" }) => {
  return (
    <View style={st.search_wide_ctn}>
      {type === "A"
        ? data.map((item) => <SearchItem item={item} key={item.body} />)
        : data.map((item) => (
            <SearchTuMarketItem item={item} key={item.body} />
          ))}
    </View>
  );
};

// export const DisplayBigTags = ({ data }) => {
//     return (

//     )
// }

export const DisplayTags = ({ data, type, setData }) => {
  const onPress = (index, item) => {
    const copyData = [...data];
    copyData.splice(index, 1, { ...item, state: !item.state });
    setData(copyData);
  };
  return (
    <>
      {type === "S" ? (
        <ScrollView style={st.small_tag_ctn} horizontal={true}>
          {data.map((item, index) => (
            <SmallTag
              item={item}
              index={index}
              key={item.body}
              onPress={onPress}
            />
          ))}
        </ScrollView>
      ) : null}

      {type === "B" ? (
        <View style={st.big_tag_ctn}>
          {data.map((item, index) => (
            <BigTag
              item={item}
              index={index}
              key={item.body}
              onPress={onPress}
            />
          ))}
        </View>
      ) : null}
    </>
  );
};

export const BigTag = ({ onPress, index, item }) => {
  const [active, setActive] = useState(false);

  return (
    <TouchableOpacity
      style={!item.state ? st.big_tag : st.big_tag_active}
      onPress={() => {
        onPress(index, item);
        console.log(item);
        // setActive(!active)
      }}
    >
      <Image source={item.imgUrl} style={st.big_tag_image} />
      {/* <Text color={!item.state ? null : '#eee'} >{item.title}</Text> */}
      <View style={st.big_tag_bottom}>
        <Text style={st.big_tag_bottom_text}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
export const SmallTag = ({ onPress, index, item }) => {
  const [active, setActive] = useState(false);

  return (
    <TouchableOpacity
      style={!item.state ? st.small_tag : st.small_tag_active}
      onPress={() => {
        if (onPress) {
          onPress(index, item);
        }
        // setActive(!active)
      }}
    >
      <Text color={!item.state ? "#FF6A00" : "#eee"}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export const SmallerTag = ({ onPress, index, item }) => {
  const [active, setActive] = useState(false);

  return (
    <TouchableOpacity
      style={!item.state ? st.smaller_tag : st.smaller_tag_active}
      onPress={() => {
        if (onPress) {
          onPress(index, item);
        }
        // setActive(!active)
      }}
    >
      <Text color={!item.state ? "#FF6A00" : "#eee"}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export const ItemWide = ({}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={st.item_wide}
      onPress={() => {
        navigation.navigate("InventoryItem");
      }}
    >
      <View style={st.iw_left}>
        <Image source={nivea} style={st.image} />
      </View>
      <View style={st.iw_right}>
        <Text style={st.iw_title}>Crema Nivea Cellular</Text>
        <Text style={st.iw_price}>$50.00</Text>
        <Text style={st.iw_desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin arcu
          elit scelerisque.
        </Text>
      </View>
    </TouchableOpacity>
  );
};

///////////////////////////////////////////////////

export const Item_card_A = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={st.item_A}
      onPress={() => {
        navigation.navigate("Item");
      }}
    >
      <Text>Photo</Text>
      <View style={st.item_A_bot}>
        <Text style={st.item_A_bot_text}>Nombre</Text>
      </View>
    </TouchableOpacity>
  );
};

export const Item_card_B = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={st.item_B}
      onPress={() => {
        navigation.navigate("Item");
      }}
    >
      <View style={st.item_B_left}>
        <Text>Photo</Text>
      </View>
      <View style={st.item_B_right}>
        <View style={st.item_B_right_top}>
          <Text style={{ fontWeight: "bold" }}>Nombre del articulo</Text>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Bsf 20,5</Text>
          <Text style={{ fontSize: 12 }}>Descripcion del articulo</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const TuMarketItem_B = ({ item, navigate }) => {
  return (
    <TouchableOpacity
      style={st.marketItem_container_A}
      onPress={() => {
        navigate("TuMarketItem");
      }}
    >
      <Text>Photo</Text>
      <View style={st.item_A_bot}>
        <Text style={st.item_A_bot_text}>Nombre</Text>
      </View>
    </TouchableOpacity>
  );
};

export const TuMarketItem_A = ({ item, navigate }) => {
  return (
    <TouchableOpacity
      style={st.marketItem_container_B}
      onPress={() => {
        navigate("TuMarketItem");
      }}
    >
      <Text>Photo</Text>
      <View style={st.item_A_bot}>
        <Text style={st.item_A_bot_text}>Nombre</Text>
      </View>
    </TouchableOpacity>
  );
};

export const TuMarketItem_C = ({ navigate }) => {
  return (
    <TouchableOpacity
      style={st.item_A}
      onPress={() => {
        navigate("TuMarketItem");
      }}
    >
      <Text>Photo</Text>
      <View style={st.item_A_bot}>
        <Text style={st.item_A_bot_text}>Nombre</Text>
      </View>
    </TouchableOpacity>
  );
};

//// OLD SEARCH
// export const DisplaySearch = ({ data, type, setData }) => {
//     return (
//         <>
//             {type === "A" ?
//                 <View style={styles.search_wide_ctn}  >
//                     {data.map((item) => (
//                         <Item_card_A item={item} key={item.title} />
//                     ))}
//                 </View>
//                 : null}

//             {type === "B" ?
//                 <View style={styles.big_tag_ctn} >
//                     {data.map((item) => (
//                         <Item_card_B item={item} key={item.title} />
//                     ))}
//                 </View>
//                 : null}
//         </>
//     )
// }
