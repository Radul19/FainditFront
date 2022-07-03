import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import styles from '../sass/components/NavBar.sass'
import { Context } from '../controllers/Context'
import { useNavigation } from '@react-navigation/native';

import { Home, Notifications, Accircle, Store, Dashboard, Inventory, Box,Work } from './Icons'

export const NavBarGeneral = ({ active }) => {

  const { navbarType, setNavbarType } = useContext(Context)

  const navigation = useNavigation()

  if (navbarType === 1) {
    return <NavBar navigation={navigation} active={active} />
  } else if (navbarType === 2) {
    return <NavBarSeller navigation={navigation} active={active} />
  } else {
    return null
  }

}

export const NavBar = ({ navigation, active }) => {

  const { navbarType } = useContext(Context)

  return (
    <View style={styles.nav_bar} >
      <TouchableOpacity onPress={() => {
        navigation.navigate('Home')
      }} >
        <Home active={active === 1 ? true : false} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        navigation.navigate('TuMarket')
      }} >
        <Store active={active === 2 ? true : false} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        navigation.navigate('JobSearch')
      }} >
        <Work active={active === 5 ? true : false} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        navigation.navigate('Notifications')
      }} >
        <Notifications active={active === 3 ? true : false} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        navigation.navigate('UserLogout')
      }} >
        <Accircle active={active === 4 ? true : false} />
      </TouchableOpacity>
    </View >
  )
}

export const NavBarSeller = ({ navigation, active }) => {

  return (
    <View style={active === 2 ? styles.nav_bar_absolute : styles.nav_bar} >
      <TouchableOpacity onPress={() => {
        navigation.navigate('Dashboard')
      }} >
        <Dashboard active={active === 1 ? true : false} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        console.log('test')
        navigation.navigate('Inventory')
      }} >
        <Box active={active === 2 ? true : false} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        navigation.navigate('Notifications')
      }} >
        <Notifications active={active === 3 ? true : false} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        navigation.navigate('User')
      }} >
        <Accircle active={active === 4 ? true : false} />
      </TouchableOpacity>
    </View >
  )
}

