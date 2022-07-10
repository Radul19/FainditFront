import {
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Modal,
  Image,
} from "react-native";
import Text from "../../../components/Text";
import React, { useEffect, useRef, useState } from "react";
import st from "./home.sass";
import Carousel from "react-native-snap-carousel";
import {
  DisplayMarketSearch,
  DisplaySearch,
  DisplayTags,
  SearchBar,
} from "../../../components/SearchDisplay";
import { HomeTopBar } from "../../../components/TopBar";
import { NavBarGeneral } from "../../../components/NavBar";
import {
  ArrowBack,
  SadFace,
  SearchIcon,
  Tune,
} from "../../../components/Icons";
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
import {
  categoriesList,
  outsideCategories,
  tags
} from "../../../controllers/categories";
const wWidth = Dimensions.get("window").width;
const wHeight = Dimensions.get("window").height;

///// TEMPORAL
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "ViewPropTypes will be removed",
  "ColorPropType will be removed",
]);
///// TEMPORAL

const windowWidth = Dimensions.get("window").width;

const HomePage = ({ navigation }) => {
  const toggleFilterState = () => {
    setFilterModal(true);
  };

  const activeSearchState = () => {
    setHideTop(true);
    setSearchState(true);
    setFilterState(false);
  };

  const onPressTag = (index) => {
    setTagData([...data]);
  };

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

  const [tagData, setTagData] = useState(tags);
  const isCarousel = useRef(null);
  const inputRef = useRef(null);

  const [hideTop, setHideTop] = useState(false);
  const [filterState, setFilterState] = useState(false);

  const [searchInput, setSearchInput] = useState("");
  const [searchState, setSearchState] = useState(false);

  const [filterModal, setFilterModal] = useState(false);

  const [index, setIndex] = useState(0);

  ////////////////////////////////
  const [category, setCategory] = useState(categoriesList);
  const [backState, setBackState] = useState([]);
  const [actualSub, setActualSub] = useState({});
  const [searchResults, setSearchResults] = useState(null);
  const [searchType, setSearchType] = useState(true);

  const hideTopPress = () => {
    let copy = backState;
    switch (copy.length) {
      case 4:
        setCategory(categoriesList[copy[0]].sub[copy[1]].sub[copy[2]].sub);
        break;
      case 3:
        setCategory(categoriesList[copy[0]].sub[copy[1]].sub);
        break;
      case 2:
        setCategory(categoriesList[copy[0]].sub);
        break;
      case 1:
        setCategory(categoriesList);
        break;
      case 0:
        setHideTop(false);
        setFilterState(false);
        setSearchState(false);
        break;

      default:
        break;
    }
    setMomenty(false)
    copy.pop();
    setBackState(copy);

  };

  const categoryOnPress = (subs, id, type) => {
    setHideTop(true);
    setCategory(subs);
    if (id) {
      //// tags
      const copyData = [...tags];
      copyData.splice(type, 1, { ...tags[type], state: true});
      setTagData(copyData);
      ////
      setBackState([...backState, type]);
      setActualSub(subs);
    } else {
      setBackState([...backState, type]);
    }
  };

  const explorePress = () => {
    // console.log(backState);
    setHideTop(true);
    setCategory(categoriesList);
  };

  const showMarkets = ()=>{
    setHideTop(true)
    setCategory(undefined)
    setMomenty(true)
  }
  const showAll = ()=>{
    setHideTop(true)
    setCategory(undefined)
  }

  const [momenty, setMomenty] = useState(false)


  return (
    <View style={st.g_container}>
      <FilterContainer setModal={setFilterModal} visible={filterModal}  tags={tagData} set={setTagData} />
      <ScrollView style={st.scrollview}>
        {!hideTop ? (
          <>
            <HomeTopBar />
          </>
        ) : null}

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
        <View style={{ marginBottom: 10 }}>
          <View style={st.searchBtn_ctn}>
            {!hideTop ? <View></View> : <ArrowBack action={hideTopPress} />}
            {!hideTop ? null : <Text style={st.faindit_title}>Faindit</Text>}
            <Tune action={toggleFilterState} state={filterState} />
          </View>
          {category === undefined && hideTop ? (
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
          <View style={{ paddingHorizontal: 20 }}>
            <SearchBar
              value={searchInput}
              set={setSearchInput}
              onFocus={activeSearchState}
              innerRef={inputRef}
            />
          </View>
        </View>

        {/* RESULT STARTS */}

        {/* {searchState ? (
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
        {searchInput == "x" || filterState ? <NotFoundResult /> : null} */}

        {/* ////////////////////////////////////////////////////// */}

        {/* <DisplayCategories
          category={category}
          action={categoryOnPress}
          hide={hideTop}
        /> */}
        {/* {hideTop ? null : <DisplayCategories />} */}
        {/* {hideTop? null : null} */}

        {/* ////////////////////////////////////////////////////// */}

        {category === undefined & hideTop && !momenty ? (
          <View style={st.selector_ctn}>
            <CheckCircle
              text="Comercio"
              active={searchType}
              set={setSearchType}
            />
            <CheckCircle
              text="Articulos"
              active={!searchType}
              set={setSearchType}
            />
          </View>
        ) : null}

        <View style={st.g_categories_ctn}>
          {hideTop ? (
            <>
              {category === undefined ? (
                <CompleteSearch
                  market={dataMarket}
                  items={dataItem}
                  bool={searchType}
                />
              ) : null}
              <DisplayCategories
                categories={category}
                action={categoryOnPress}
                hide={hideTop}
              />
            </>
          ) : (
            <>
              <WideCategoryItem2 item={outsideCategories[0]} action={showAll} />
              <CategoryItem item={outsideCategories[1]} action={showAll} />
              <CategoryItem item={outsideCategories[2]} action={showMarkets} />
              <WideCategoryItem
                item={outsideCategories[3]}
                action={explorePress}
              />
            </>
          )}
        </View>

        <View style={st.search_ctn}></View>
      </ScrollView>
      <NavBarGeneral navigation={navigation} active={1} />
    </View>
  );
};

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={st.promotion_ctn} key={index}>
      <Image
        style={st.image_promotion}
        source={item.imgUrl}
        resizeMode="contain"
      />
    </View>
  );
};

const RecentSearch = () => {
  return (
    <View style={st.rs_ctn}>
      <Text style={st.rs_title}>Busqueda Reciente</Text>
      <View style={st.rs_sub_ctn}>
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
    <View style={st.rs_item}>
      <SearchIcon size="14" />
      <Text style={st.rs_item_text}>Some text here</Text>
    </View>
  );
};

const NotFoundResult = () => {
  return (
    <View style={st.nf_ctn}>
      <Text>No se han encontrado resultados</Text>
      <View style={st.nf_inside_ctn}>
        <View style={st.nf_sadface}>
          <SadFace size="50" />
        </View>
        <Text style={st.nf_title}>
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

const FilterContainer = ({ setModal, visible,tags,set }) => {
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
      <FilterModal setModal={setModal} tags={tags} set={set} />
    </Modal>
  );
};

///// WC
const DisplayCategories = ({ categories, action }) => {
  return (
    <>
      {categories === undefined
        ? null
        : categories.map((item, index) => (
            <CategoryItem item={item} key={item.title} action={action} />
          ))}
    </>
  );
};
const WideCategoryItem = ({ action, item }) => {
  return (
    <TouchableOpacity
      style={st.wide_category_ctn}
      onPress={() => {
        action(categoriesList);
      }}
    >
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );
};
const WideCategoryItem2 = ({ action, item }) => {
  return (
    <TouchableOpacity
      style={st.wide_category_ctn}
      onPress={action}
    >
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );
};

const CategoryItem = ({ item, action }) => {
  return (
    <TouchableOpacity
      style={st.category_ctn}
      onPress={() => {
        // console.log(item);
        action(item.sub, item.id, item.type);
      }}
    >
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );
};
const DisplaySubCategories = () => {
  return (
    <View>
      {category.map((item, index) => (
        <CategoryItem title={item.title} key={item.title} />
      ))}
    </View>
  );
};
export default HomePage;

//// NEW
const CompleteSearch = ({ bool, market, items }) => {
  return (
    <>
      {bool ? (
        <View style={st.test}>
          <DisplayMarketSearch data={market} />
        </View>
      ) : (
        <View style={st.test}>
          <DisplaySearch data={items} />
        </View>
      )}
    </>
  );
};

const CheckCircle = ({ text, active, set }) => {
  const press = () => {
    set((prev) => !prev);
  };

  return (
    <TouchableOpacity style={st.cc_ctn} onPress={press}>
      {active ? (
        <>
          <View style={st.cc_circle_active}>
            <View
              style={[st.cc_circle_active_inside, { borderRadius: 100 }]}
            ></View>
          </View>
          <Text style={st.cc_text_active}>{text}</Text>
        </>
      ) : (
        <>
          <View style={st.cc_circle}>
            <View style={[st.cc_circle_inside, { borderRadius: 100 }]}></View>
          </View>
          <Text style={st.cc_text}>{text}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};
