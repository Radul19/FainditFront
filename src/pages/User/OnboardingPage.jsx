import { View, TouchableOpacity, StyleSheet, Dimensions, Image, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import Text from '../../components/Text'
import styles from '../../sass/pages/User/onboarding.sass'
import Carousel, { Pagination } from 'react-native-snap-carousel';

const windowWidth = Dimensions.get('window').width

const OnboardingPage = ({ navigation }) => {

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
      title: "Lorem Ipsum",
      body: "Onboarding4",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },]

  const [index, setIndex] = useState(0)
  const [length, setLength] = useState(data.length)

  const isCarousel = React.useRef(null)



  return (
    <View style={styles.g_container} >
      {/* <StatusBar
        hidden={true} /> */}
      <View style={styles.top} >
        <Carousel
          style={styles.carousel}
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
            setIndex(index)
          }}
        />
        <Pagination

          dotsLength={length}
          activeDotIndex={index}
          containerStyle={styles.pagination}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 2,
            backgroundColor: '#191919'
          }}
          inactiveDotStyle={{
            backgroundColor: '#c4c4c4'
          }}
          inactiveDotOpacity={0.7}
          inactiveDotScale={0.6}
        />
      </View>
      <View style={styles.bottom} >
        <Text> Explain </Text>
      </View>
      <TouchableOpacity onPress={() => {
        navigation.navigate('Home')
      }} style={styles.btn} >
        <Text color="#eee" >Continuar</Text>
      </TouchableOpacity>
    </View>
  )
}


const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  )
}



export default OnboardingPage