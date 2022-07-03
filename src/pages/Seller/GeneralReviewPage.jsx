import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { BackTopBar } from '../../components/TopBar'
import styles from '../../sass/pages/Seller/generalReview.sass'
import { NavBarGeneral } from '../../components/NavBar'
import Comment from '../../components/Comment'
import { Stars, Tune } from '../../components/Icons'
import { ReviewBanner } from './DashboardPage'


const GeneralReviewPage = ({ navigation }) => {

  const data = [
    {
      title: "Aenean leo",
      body: "1",
      imgUrl: "https://picsum.photos/id/11/200/300",
    },
    {
      title: "In turpis",
      body: "2",
      imgUrl: "https://picsum.photos/id/10/200/300",
    },
    {
      title: "Lorem Ipsum",
      body: "3",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
    {
      title: "Lorem Ipsum 2",
      body: "4",
      imgUrl: "https://picsum.photos/id/12/200/300",
    }, {
      title: "Lorem Ipsum 3",
      body: "5",
      imgUrl: "https://picsum.photos/id/12/200/300",
    }, {
      title: "Lorem Ipsum 4",
      body: "6",
      imgUrl: "https://picsum.photos/id/12/200/300",
    }, {
      title: "Lorem Ipsum 5",
      body: "7",
      imgUrl: "https://picsum.photos/id/12/200/300",
    }, {
      title: "Lorem Ipsum 6",
      body: "8",
      imgUrl: "https://picsum.photos/id/12/200/300",
    }, {
      title: "Lorem Ipsum 7",
      body: "9",
      imgUrl: "https://picsum.photos/id/12/200/300",
    }, {
      title: "Lorem Ipsum 8",
      body: "10",
      imgUrl: "https://picsum.photos/id/12/200/300",
    }, {
      title: "Lorem Ipsum 9",
      body: "11",
      imgUrl: "https://picsum.photos/id/12/200/300",
    }, {
      title: "Lorem Ipsum 10",
      body: "12",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },]

  return (
    <View style={styles.g_container} >
      <BackTopBar text={'Calificacion General'} />
      <Text style={styles.subtitle}>Calificacion</Text>
      <ReviewBanner action={() => { navigation.navigate('Dashboard') }} text={'Regresar'} />
      <View style={styles.subtitle_ctn} >
        <Text style={styles.subtitle}>Todas las Reseñas</Text>
        <Tune />
      </View>

      <ScrollView style={styles.scroll_container}  >
        {data.map((item) => {
          if (item.body === '2') {
            // return <Comment key={item.title} answer={true} hide={true} />
          }
          if (item.body === '6') {
            // return <Comment key={item.title} answer={true} hide={true} />
          }
          return <Comment key={item.title} />
        })}
      </ScrollView>

      {/* <View style={styles.absolute_text_ctn} >
        <Text style={styles.absolute_text} >Clasificacion General</Text>
      </View>
      <View style={styles.review_ctn} >
        <Text style={styles.review_num}  >4,5</Text>
        <View style={styles.stars_ctn} >
          <Stars2 size='24' />
        </View>
        <Text>Clasificacion general</Text>
      </View>
      <ScrollView style={styles.scroll_container}  >
        {data.map((item) => {
          if (item.body === '2') {
            return <Comment key={item.title} answer={true} hide={true} />
          }
          if (item.body === '6') {
            return <Comment key={item.title} answer={true} hide={true} />
          }
          return <Comment key={item.title} />
        })}
      </ScrollView>
      <NavBarGeneral navigation={navigation} active={1} /> */}
    </View>
  )
}

export default GeneralReviewPage