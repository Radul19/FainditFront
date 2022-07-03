import { View, Text, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import styles from '../../sass/pages/Seller/notifications.sass'
import { NavBarGeneral } from '../../components/NavBar'
import { Context } from '../../controllers/Context'
import Notification from '../../components/Notification'

import nivea1 from '../../images/nivea1.png'
import nivea2 from '../../images/nivea2.png'


const NotificationsPage = ({ navigation }) => {

  const data = [
    {
      title: "Farmatodo",
      body: "Ha agregado un nuevo articulo en su catalogo!",
      imgUrl: nivea2,
      id: 1,
    },
    {
      title: "Luis diaz",
      body: "Ha vendido el articulo que pusiste en favoritos",
      imgUrl: nivea1,
      id: 2,
    },
    {
      title: "Fabiana Hernandez",
      body: "Ha modificado el precio del articulo que guardaste.",
      imgUrl: nivea1,
      id: 3,
    },
    {
      title: "Luis diaz",
      body: "Ha vendido el articulo que pusiste en favoritos",
      imgUrl: nivea1,
      id: 4,
    }, {
      title: "Fabiana Hernandez",
      body: "Ha modificado el precio del articulo que guardaste.",
      imgUrl: nivea1,
      id: 5,
    }, {
      title: "Luis diaz",
      body: "Ha vendido el articulo que pusiste en favoritos",
      imgUrl: nivea1,
      id: 6,
    }, {
      title: "Fabiana Hernandez",
      body: "Ha modificado el precio del articulo que guardaste.",
      imgUrl: nivea1,
      id: 7,
    }]

  const { enableSeller } = useContext(Context)


  return (
    <View style={styles.g_container} >
      <View style={styles.title_ctn} >
        <Text style={styles.title} >Tus Notificaciones!</Text>
      </View>
      <ScrollView style={styles.scroll_container} >
        {data.map(item => (
          <Notification key={item.id} item={item} navigate={navigation.navigate} />
        ))}
      </ScrollView>
      {enableSeller ? <NavBarGeneral navigation={navigation} active={1} /> : <NavBarGeneral navigation={navigation} active={3} />}

    </View>
  )
}

export default NotificationsPage