import { View, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { DashboardTopBar } from '../../components/TopBar'
import styles from '../../sass/pages/Seller/dashboard.sass'
import { ArrowDown, ArrowLeftMini, ArrowRightMini, Stars2 } from '../../components/Icons'
import { NavBarGeneral } from '../../components/NavBar'
import Text from '../../components/Text'
import stats from '../../images/stats.png'

const DashboardPage = ({ navigation }) => {

  const [view, setView] = useState(false)

  return (
    <View style={styles.g_container} >
      <ScrollView style={styles.g_container} >
        <DashBoard navigate={navigation.navigate} />
      </ScrollView>

      <NavBarGeneral navigation={navigation} active={1} />

    </View>
  )
}

const DashBoard = ({ navigate }) => {

  return (
    <>
      <Text style={styles.title} >Dashboard</Text>
      <Text style={styles.subtitle} >Calificacion</Text>
      <ReviewBanner action={() => { navigate('GeneralReview') }} text={'Ver reseñas'} />
      <Text style={styles.subtitle} >Estadisticas Generales</Text>
      <Chart />
      <CategorySlide />
    </>
  )
}

export const ReviewBanner = ({ action, text }) => {
  return (
    <View style={styles.review_banner} >
      <View><Text style={styles.big_num} >4,7</Text></View>
      <View style={styles.review_banner_bottom} >
        <Stars2 size='24' />
        <TouchableOpacity onPress={action} >
          <Text style={styles.review_btn}  >{text}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Chart = () => {
  return (
    <View style={styles.chart_ctn} >
      <DMY_menu />
      <DMY_calendar />
      <View style={styles.middle_text_ctn}>
        <Text style={styles.middle_num} >1254</Text>
        <Text style={styles.middle_text} >Reseñas</Text>
      </View>
      <View style={styles.stats_ctn} >
        <Image source={stats} resizeMode="contain" style={styles.image} />
      </View>
    </View>
  )
}

const Reviews = () => {
  return (
    <>
    </>
  )
}

export default DashboardPage


/// CHART ITEMS

const DMY_menu = () => {

  const [index, setIndex] = useState(1)

  const Item = ({ text, type = false, num }) => {
    return (
      <TouchableOpacity style={[(num !== index ? styles.DMY_selection : styles.DMY_selection_active), (!type ? styles2.DYM_item : null)]} onPress={() => { setIndex(num) }} >
        <Text color={num !== index ? '#FF6A00' : '#eee'} >{text}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={[styles.DYM_menu_ctn, styles2.DYM_menu_ctn]} >
      <Item text='Dia' type={true} num={1} />
      <Item text='Semana' num={2} />
      <Item text='Mes' num={3} />
      <Item text='Año' num={4} />
    </View>
  )
}

const styles2 = StyleSheet.create({
  DYM_menu_ctn: {
    borderLeftColor: '#FF6A00',
    borderLeftWidth: 1
  },
  DYM_item: {
    borderLeftColor: '#FF6A00',
    borderLeftWidth: 1,
  }
})

const DMY_calendar = () => {

  const [num, setNum] = useState(18)

  const plusNum = () => {
    if (num === 31) {
      setNum(1)
    } else {
      setNum(prev => prev + 1)
    }
  }

  const minusNum = () => {
    if (num === 1) {
      setNum(31)
    } else {
      setNum(prev => prev - 1)
    }
  }

  return (
    <View style={styles.DYM_arrows_ctn} >
      <ArrowLeftMini action={minusNum} />
      <TouchableOpacity style={styles.DYM_arrows_ctn_inside} >
        <Text color='#FF6A00' >Mier, {`${num}`} de Mayo</Text>
        <ArrowDown color="#FF6A00" />
      </TouchableOpacity>
      <ArrowRightMini action={plusNum} />
    </View>
  )
}

const CategorySlide = () => {

  const [index, setIndex] = useState(1)


  const Item = ({ text, amount, num }) => {
    const action = () => {
      setIndex(num)
    }
    return (
      <TouchableOpacity style={(index === num ? styles.cs_item_active : styles.cs_item)} onPress={action} >
        <Text style={(index === num ? styles.cs_num_active : styles.cs_num)} >{amount}</Text>
        <Text style={(index === num ? styles.cs_text_active : styles.cs_text)} >{text}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <ScrollView horizontal={true}  >
      <View style={styles.category_slide}>
        <Item text='Reseñas' amount='1375' num={1} />
        <Item text='Favoritos' amount='276' num={2} />
        <Item text='Visitas' amount='395' num={3} />
        <Item text='Contactado' amount='712' num={4} />
        <Item text='Otros' amount='666' num={5} />
      </View>
    </ScrollView>
  )
}