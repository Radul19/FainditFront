import { View, TouchableOpacity, ScrollView } from 'react-native'
import Text from '../../../components/Text'
import React, { useState } from 'react'
import styles from '../../../sass/pages/Seller/addItem.sass'
import { TopBarAddItem } from '../../../components/TopBar'
import { BtnInsideBox, BtnPrimaryW } from '../../../components/Btns'
import { NavBarGeneral } from '../../../components/NavBar'

const FmarketCreate_A = ({ navigation }) => {

  const [categories, setCategories] = useState({
    comida: false, bebidas: false, snacks: false, otros: false,
  })

  return (
    <View style={styles.g_container} >
      <ScrollView style={styles.g_container} >
        <TopBarAddItem navigation={navigation}  backTo={"TuMarket"} />
        <Text style={styles.title} >¿En que categoría debería ir este producto/ servicio?</Text>
        {/* <CheckBoxContainer text="Comida" onPress={() => setCategories({ ...categories, comida: !categories.comida })} value={categories.comida} />
        <CheckBoxContainer text="Bebidas" onPress={() => setCategories({ ...categories, bebidas: !categories.bebidas })} value={categories.bebidas} />
        <CheckBoxContainer text="Snacks" onPress={() => setCategories({ ...categories, snacks: !categories.snacks })} value={categories.snacks} />
        <CheckBoxContainer text="Otros" onPress={() => setCategories({ ...categories, otros: !categories.otros })} value={categories.otros} /> */}
        <CheckItem text="Abarrotes" />
        <CheckItem text="Farmacia" />
        <CheckItem text="Ropa" />
        <CheckItem text="Cocina" />
        <CheckItem text="Tecnologia" />
        <CheckItem text="Limpieza" />
        <TouchableOpacity>
          <Text style={{ marginLeft: 20, marginTop: 50, textDecorationLine: 'underline', color: '#ff6a00' }} >Agregar categoria</Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity style={styles.btn_absolute} onPress={() => { navigation.navigate('FmarketCreate_B') }} >
        <Text color="#eee" >Continuar</Text>
      </TouchableOpacity>
      <NavBarGeneral navigation={navigation} active={2} />
    </View>
  )
}

const CheckBoxContainer = ({ text, value, onPress }) => {
  return (
    <TouchableOpacity style={styles.checkbox_ctn} onPress={onPress} >
      <View style={styles.checkbox} >
        <View style={value ? styles.checkbox_inside_on : styles.checkbox_inside_off} ></View>
      </View>
      <Text>{text}</Text>
    </TouchableOpacity>
  )
}

const CheckItem = ({ text }) => {

  const [active, setActive] = useState(false)

  return (
    <TouchableOpacity style={styles.check_item} onPress={() => { setActive(!active) }} >
      <Text style={active ? styles.check_text_active : styles.check_text} >{text}</Text>
    </TouchableOpacity>
  )
}

export default FmarketCreate_A