import { View, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TopBarSellerInventory } from "../../components/TopBar";
import styles from "../../sass/pages/Seller/inventory.sass";
import {
  DisplayTags,
  ItemWide,
  Item_card_B,
  SearchBar,
} from "../../components/SearchDisplay";
import { NavBarGeneral } from "../../components/NavBar";
import Text from "../../components/Text";
import { MorePoints, Plus } from "../../components/Icons";

/// Images
import supermarket from "../../images/supermarket.png";
import ferreteria from "../../images/ferreteria.png";
import food from "../../images/food.png";
import ropa from "../../images/ropa.png";
import tecnologia from "../../images/tecnologia.png";
import farmacias from "../../images/farmacias.png";

const InventoryPage = ({ navigation }) => {
  const data = [
    {
      title: "Categoria 1",
      body: "1",
      imgUrl: "https://picsum.photos/id/11/200/300",
    },
    {
      title: "Categoria 2",
      body: "2",
      imgUrl: "https://picsum.photos/id/10/200/300",
    },
    {
      title: "Categoria 3",
      body: "3",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
    {
      title: "Categoria 4",
      body: "4",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
    {
      title: "Categoria 5",
      body: "5",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
    {
      title: "Categoria 6",
      body: "6",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
    {
      title: "Categoria 7",
      body: "7",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
    {
      title: "Categoria 8",
      body: "8",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
    {
      title: "Categoria 9",
      body: "9",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
    {
      title: "Categoria 10",
      body: "10",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
    {
      title: "Categoria 11",
      body: "11",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
    {
      title: "Categoria 12",
      body: "12",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
  ];

  const [btnActive, setBtnActive] = useState(false);

  return (
    <View style={styles.g_container}>
      <ScrollView style={styles.g_container_scroll}>
        <TopContent />

        <DisplayItems />
      </ScrollView>
      <TouchableOpacity
        style={styles.plus_btn}
        onPress={() => {
          navigation.navigate("AddItem_Category");
        }}
      >
        <Plus />
      </TouchableOpacity>
      {/* <ScrollView style={styles.g_container} >
        <TopBarSellerInventory navigate={navigation.navigate} />
        <View style={styles.banner_ctn}>
          <Text style={styles.banner_upper_text} >Lleva control sobre los articulos de tu comercio.</Text>
          <Text style={styles.banner_lower_text} >Agrega, Edita y Elimina Artículos y Categorías en tu Comercio</Text>
        </View>
        <View style={styles.subtitles_ctn} >
          <Text style={{ fontWeight: 'bold' }} >Categorias</Text>
          <Text>Buscar</Text>
        </View>
        <View style={styles.scroll_ctn} >
          <ScrollView horizontal={true} >
            {data.map((item) => (
              <View key={item.body} style={styles.scroll_tag} >
                <Text style={{ fontSize: 12 }} >{item.title}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.item_display_ctn} >
          {data.map((item) => <Item_card_B key={item.body} goToItem={() => { navigation.navigate('Item') }} />)}
        </View>
        <Text>InventoryPage</Text>
      </ScrollView>
      {btnActive ?
        <View style={styles.btn_text_ctn} >
          <TouchableOpacity style={styles.btn_menu_text} >
            <Text style={{ fontSize: 10 }} >Agregar categoria</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_menu_text} onPress={() => { navigation.navigate('AddItem_Category') }} >
            <Text color='#0067ce' style={{ fontSize: 10 }} >Agregar Articulo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_menu_text} >
            <Text style={{ fontSize: 10 }} >Promocionar</Text>
          </TouchableOpacity>
        </View>
        : null}
      <TouchableOpacity style={styles.btn_menu} onPress={() => {
        setBtnActive(!btnActive)
      }}  >
        <Text style={{ fontSize: 20 }} > {btnActive ? 'x' : "+"} </Text>
      </TouchableOpacity> */}
      <NavBarGeneral navigation={navigation} active={2} />
    </View>
  );
};

export default InventoryPage;

const TopContent = () => {
  const [search, setSearch] = useState("");

  const [tagData, setTagData] = useState([
    {
      title: "Supermercados",
      body: "AD/Carrousel Promocional 1",
      imgUrl: supermarket,
      state: true,
    },
    {
      title: "Ferreterias",
      body: "AD/Carrousel Promocional 2",
      imgUrl: ferreteria,
      state: false,
    },
    {
      title: "Restaurantes",
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
      title: "Tecnologia",
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
  return (
    <>
      <View style={styles.top_bar}>
        <Text style={styles.title}>Inventario</Text>
        <TouchableOpacity style={styles.more_points}>
          <MorePoints />
        </TouchableOpacity>
      </View>

      <View style={{ paddingHorizontal: 12 }}>
        <SearchBar value={search} set={setSearch} placehold="Hogar, comida, tecnologia..." />
      </View>

      <Text style={styles.subtitle}>Categorias de tu negocio</Text>

      <View style={styles.tags_ctn}>
        <DisplayTags data={tagData} setData={setTagData} type="S" />
      </View>

      <Text style={styles.mini_text}>{"(98) Articulos en tu comercio"}</Text>
    </>
  );
};

const DisplayItems = () => {
  return (
    <>
      <Text style={styles.tags_titles}>Abarrotes</Text>
      <ItemWide />
      <ItemWide />
      <ItemWide />
      <Text style={styles.tags_titles}>Farmacia</Text>
      <ItemWide />
      <ItemWide />
      <ItemWide />
      <Text style={styles.tags_titles}>Ropa</Text>
      <ItemWide />
      <ItemWide />
      <ItemWide />
    </>
  );
};
