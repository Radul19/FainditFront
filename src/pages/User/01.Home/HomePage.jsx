import {
  View,
  StatusBar,
  BackHandler,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Modal,
  Image,
} from "react-native";
import Text from "../../../components/Text";
import React, { useEffect, useRef, useState } from "react";
import styles from "./home.sass";
import Carousel from "react-native-snap-carousel";
import {
  DisplayMarketSearch,
  DisplaySearch,
  DisplayTags,
  SearchBar,
} from "../../../components/SearchDisplay";
import { HomeTopBar, BackExploreTopBar } from "../../../components/TopBar";
import { NavBarGeneral } from "../../../components/NavBar";
import { ArrowBack, SadFace, SearchIcon, Tune } from "../../../components/Icons";
import FilterModal from "../../../components/FilterModal";

import prom from "../../../images/promotion.png";
import prom2 from "../../../images/promo2.png";

/// Images
import supermarket from "../../../images/supermarket.png";
import ferreteria from "../../../images/ferreteria.png";
import food from "../../../images/food.png";
import ropa from "../../../images/ropa.png";
import tecnologia from "../../../images/tecnologia.png";
import farmacias from "../../../images/farmacias.png";

import nivea1 from "../../../images/nivea1.png";
import nivea2 from "../../../images/nivea2.png";

///// TEMPORAL
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "ViewPropTypes will be removed",
  "ColorPropType will be removed",
]);
///// TEMPORAL

const windowWidth = Dimensions.get("window").width;

const HomePage = ({ navigation }) => {
  const data = [
    {
      title: "Aenean leo",
      body: "AD/Carrousel Promocional 1",
      imgUrl: prom,
      state: false,
    },
    {
      title: "In turpis",
      body: "AD/Carrousel Promocional 2",
      imgUrl: prom2,
      state: false,
    },
    {
      title: "Lorem Ipsum",
      body: "AD/Carrousel Promocional 3",
      imgUrl: prom,
      state: false,
    },
    {
      title: "Lorem Ipsum",
      body: "AD/Carrousel Promocional 4",
      imgUrl: prom2,
      state: false,
    },
    {
      title: "Lorem Ipsum",
      body: "AD/Carrousel Promocional 5",
      imgUrl: prom,
      state: false,
    },
    {
      title: "Lorem Ipsum",
      body: "AD/Carrousel Promocional 6",
      imgUrl: prom2,
      state: false,
    },
    {
      title: "Lorem Ipsum",
      body: "AD/Carrousel Promocional 7",
      imgUrl: prom2,
      state: false,
    },
    {
      title: "Lorem Ipsum",
      body: "AD/Carrousel Promocional 8",
      imgUrl: prom,
      state: false,
    },
    {
      title: "Lorem Ipsum",
      body: "AD/Carrousel Promocional 9",
      imgUrl: prom2,
      state: false,
    },
    {
      title: "Lorem Ipsum",
      body: "AD/Carrousel Promocional 10",
      imgUrl: prom,
      state: false,
    },
  ];
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
  const dataMarket = [
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
      title: "Lorem Ipsum 1",
      body: "AD/Carrousel Promocional 3",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
    {
      title: "Lorem Ipsum 2",
      body: "AD/Carrousel Promocional 4",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
    {
      title: "Lorem Ipsum 3",
      body: "AD/Carrousel Promocional 5",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
    {
      title: "Lorem Ipsum 4",
      body: "AD/Carrousel Promocional 6",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
    {
      title: "Lorem Ipsum 5",
      body: "AD/Carrousel Promocional 7",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
    {
      title: "Lorem Ipsum 6",
      body: "AD/Carrousel Promocional 8",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
  ];

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

  const [hideTop, setHideTop] = useState(false);
  const [filterState, setFilterState] = useState(false);

  const [searchInput, setSearchInput] = useState("");
  const [searchState, setSearchState] = useState(false);

  const [filterModal, setFilterModal] = useState(false);

  const [index, setIndex] = useState(0);

  const isCarousel = useRef(null);
  const inputRef = useRef(null);

  const toggleFilterState = () => {
    // if (filterState) {
    //   // setHideTop(false)
    //   inputRef.current.focus();
    //   setFilterState(false);
    // } else {
    //   setHideTop(true);
    //   setFilterState(true);
    //   setSearchState(false);
    // }
    setFilterModal(true);
  };

  const activeSearchState = () => {
    setHideTop(true);
    setSearchState(true);
    setFilterState(false);
    // setTimeout(() => {
    //   if (!inputRef.current.activeElement) {
    //     inputRef.current.focus()
    //   }
    // }, 1000);
  };

  const onPressTag = (index) => {
    // const copyData = data
    // copyData[index] = { ...copyData[index], state: !copyData[index].state }
    // setData(copyData)

    setTagData([...data]);
  };

  const hideTopPress = () => {
    setHideTop(false);
    setFilterState(false);
    setSearchState(false);
  };

  const consol = () => {
    // console.log(filterState);
    // console.log(tagData[0].state);
    // console.log('///');
    // console.log(((searchInput !== "") || (filterState)) && !tagData[0].state);
    console.log(searchInput === "" || hideTop ? true : false);
    // console.log(searchInput === "" ? true : false)
  };

  return (
    <View style={styles.g_container}>
      <FilterContainer setModal={setFilterModal} visible={filterModal} />
      <ScrollView
        style={styles.scrollview}
        //  stickyHeaderIndices={!hideTop ? null : [0]}
      >
        {!hideTop ? (
          <>
            <HomeTopBar />
            {false ? <Text style={styles.user_text}>Hola Julieta!</Text> : null}
          </>
        ) : // <View style={{ marginTop: 20 }} />
        null}
        {/* <ScrollView style={styles.scrollview} > */}

        {/* Carousel Promotions */}
        {!hideTop ? (
          <Carousel
            layout="default"
            layoutCardOffset={9}
            ref={isCarousel}
            data={data}
            renderItem={CarouselCardItem}
            sliderWidth={windowWidth}
            itemWidth={windowWidth}
            inactiveSlideShift={0}
            useScrollView={true}
            onSnapToItem={(index) => {
              setIndex(index);
            }}
          />
        ) : null}
        <View>
          <View style={styles.searchBtn_ctn}>
            {!hideTop ? (
              <Text>Faindit</Text>
            ) : (
              <ArrowBack action={hideTopPress} />
            )}
            {!hideTop ? null : (
              <Text style={styles.faindit_title}>Faindit</Text>
            )}
            <Tune action={toggleFilterState} state={filterState} />
          </View>
          <SearchBar
            value={searchInput}
            set={setSearchInput}
            onFocus={activeSearchState}
            innerRef={inputRef}
          />
        </View>

        <TouchableOpacity
          style={[styles.searchBtn_ctn, { marginBottom: 10 }]}
          onPress={consol}
        >
          <Text>Explora hoy</Text>
        </TouchableOpacity>
        {searchState ? (
          <DisplayTags data={tagData} setData={setTagData} type="S" />
        ) : null}
        {!hideTop && !filterState && searchInput === "" ? (
          <DisplayTags data={tagData} setData={setTagData} type="B" />
        ) : null}

        {hideTop && filterState ? (
          <DisplayTags data={tagData} setData={setTagData} type="B" />
        ) : null}

        {((searchInput !== "" && searchInput !== "x") || filterState) &&
        tagData[0].state ? (
          <DisplayMarketSearch data={dataMarket} />
        ) : null}
        {((searchInput !== "" && searchInput !== "x") || filterState) &&
        !tagData[0].state ? (
          <DisplaySearch data={dataItem} />
        ) : null}
        {searchInput === "" && hideTop ? <RecentSearch /> : null}
        {/* {(searchInput === "" && hideTop) ? <RecentSearch /> : null} */}
        {searchInput == "x" || filterState ? <NotFoundResult /> : null}

        {/* {hideTop && !tagData[0].state ? <DisplaySearch data={dataMarket} type="A" /> : null}
        {hideTop && tagData[0].state ? <DisplayMarketSearch data={dataMarket} /> : null} */}

        {/* {!hideTop ?
          <ScrollView horizontal={true} >
            <DisplayTags data={tagData} setData={setTagData} type="B" />
          </ScrollView>
          : null} */}

        <View style={styles.search_ctn}></View>
      </ScrollView>
      <NavBarGeneral navigation={navigation} active={1} />
    </View>
  );
};

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.promotion_ctn} key={index}>
      <Image
        style={styles.image_promotion}
        source={item.imgUrl}
        resizeMode="contain"
      />
    </View>
  );
};

const RecentSearch = () => {
  return (
    <View style={styles.rs_ctn}>
      <Text style={styles.rs_title}>Busqueda Reciente</Text>
      <View style={styles.rs_sub_ctn}>
        <RecentSearchItem />
        <RecentSearchItem />
        <RecentSearchItem />
        <RecentSearchItem />
        <RecentSearchItem />
      </View>
    </View>
  );
};

const RecentSearchItem = () => {
  return (
    <View style={styles.rs_item}>
      <SearchIcon size="14" />
      <Text style={styles.rs_item_text}>Some text here</Text>
    </View>
  );
};

const NotFoundResult = () => {
  return (
    <View style={styles.nf_ctn}>
      <Text>No se han encontrado resultados</Text>
      <View style={styles.nf_inside_ctn}>
        <View style={styles.nf_sadface}>
          <SadFace size="50" />
        </View>
        <Text style={styles.nf_title}>
          No hemos conseguido resultados relacionados
        </Text>
        <Text>
          Recuerde que puede aplicar filtros a su busqueda para obtener
          resultados mas certeros.
        </Text>
      </View>
    </View>
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
      style={styles.modal}
    >
      <FilterModal setModal={setModal} />
    </Modal>
  );
};

export default HomePage;
