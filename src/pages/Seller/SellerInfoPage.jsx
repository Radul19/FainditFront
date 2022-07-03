
import styles from '../../sass/pages/Seller/sellerInfo.sass'

import { View, TouchableOpacity, Image, ScrollView } from 'react-native'
import Text from '../../components/Text'
import React, { useState, useContext } from 'react'
import { NavBarGeneral, NavBarSeller } from '../../components/NavBar';

import image from '../../images/girl2.png'
import { SmallerTag } from '../../components/SearchDisplay';
import { ArrowBack, ArrowRight } from '../../components/Icons';
import { BtnBusiness2 } from '../../components/Btns';
import farmatodo from '../../images/heroimg.png'
import farmatodo_p from '../../images/farmatodo.jpg'

import vnlz from '../../images/vnzl_flag.png'

const SellerInfoPage = ({ navigation }) => {

    const pressInfo = () => {
        return 0
    }

    return (
        <View style={styles.g_container} >
            <ScrollView style={styles.g_container} >
                <View style={styles.top} >
                    <ArrowBack action={() => { navigation.goBack() }} />
                    <Text style={styles.title} >Tu Informacion!</Text>
                </View>
                <View style={styles.mid} >
                    <View style={styles.mid_image} ><Image source={farmatodo_p} resizeMode="contain" style={styles.image} /></View>
                    <View style={styles.mid_info} >
                        <Text>Deportes y Musica</Text>
                        <Text style={styles.change_profile_text} >Cambiar foto de perfil</Text>
                    </View>
                </View>
                <View style={styles.bot} >
                    {/* <Text style={[styles.subtitle, { marginTop: 14 }]}>Informacion</Text> */}
                    <Option text="Informacion Personal" press={pressInfo} hide={true} />

                    <View style={{ height: 10 }} ></View>

                    <InfoInput text={'Nombre de la empresa'} placehold="Alanis Ramirez" />
                    <DescInput text={'Descripcion de la empresa'} placehold="Alanis Ramirez" />
                    <InfoInput text={'Apellidos'} placehold="Trejo Casasola" />
                    <InfoInput text={'Email'} placehold="Trejo.Casasola@gmail.com" />

                    <Option text="Seguridad" press={pressInfo} hide={true} />
                    <View style={{ height: 10 }} ></View>
                    <InfoInput text={'Tu contraseña'} placehold="***********************" />
                    <InfoInput text={'Nueva contraseña'} placehold="***********************" />
                    <InfoInput text={'Confirmar tu nueva contraseña'} placehold="***********************" />
                </View>
                <View style={{ height: 70 }} ></View>
            </ScrollView>
            <NavBarGeneral navigation={navigation} active={4} />
        </View>
    )
}

export default SellerInfoPage

// import { View, TouchableOpacity, Image, ScrollView } from 'react-native'
// import Text from '../../components/Text'
// import React, { useState, useContext } from 'react'
// import styles from '../../sass/pages/User/user.sass'
// import { NavBarGeneral, NavBarSeller } from '../../components/NavBar';
// import { Context } from '../../controllers/Context';

// import image from '../../images/girl2.png'
// import { SmallerTag } from '../../components/SearchDisplay';
// import { ArrowBack, ArrowRight } from '../../components/Icons';
// import { BtnBusiness2 } from '../../components/Btns';
// import farmatodo from '../../images/heroimg.png'
// import farmatodo_p from '../../images/farmatodo.jpg'

// import vnlz from '../../images/vnzl_flag.png'

// const UserPage = ({ navigation }) => {

//     const { enableSeller } = useContext(Context)

//     return (
//         <>
//             {!enableSeller ?
//                 <UserProfile navigation={navigation} />
//                 :
//                 <SellerProfile navigation={navigation} />
//             }
//         </>
//     )
// }

const Option = ({ text, hide = false, press }) => {
    return (
        <View style={styles.option_ctn} >
            <Text style={styles.option_text} >{text}</Text>
            {hide ? null :
                <TouchableOpacity style={styles.option_btn} onPress={press} >
                    <ArrowRight />
                </TouchableOpacity>
            }
        </View>
    )
}

const InfoInput = ({ text, placehold }) => {
    return (
        <View style={styles.infoInput_ctn} >
            <Text style={styles.infoInput_text} >{text}</Text>
            <Text style={styles.infoInput_input} >{placehold}</Text>
        </View>
    )
}
const DescInput = ({ text, placehold }) => {
    return (
        <View style={styles.infoInput_ctn} >
            <Text style={styles.infoInput_text} >{text}</Text>
            <Text style={styles.infoInput_desc} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id lacus aliquam turpis turpis enim gravida facilisi egestas. Viverra tristique pharetra sit sed lacus dui massa magna. Nisl vestibulum tristique tellus volutpat at pharetra accumsan dictum. Sed.</Text>
        </View>
    )
}

// export default UserPage

// const UserProfile = ({ navigation }) => {


//     const [active, setActive] = useState(false)

//     const { navbarType, setNavbarType, enableSeller, setEnableSeller } = useContext(Context)

//     const switchSeller = () => {
//         if (enableSeller) {
//             setNavbarType(1)
//         } else {
//             setNavbarType(2)
//         }
//         setEnableSeller(!enableSeller)

//     }

//     const [tagData, setTagData] = useState([
//         {
//             title: "Tecnologia",
//             body: "AD/Carrousel Promocional 1",
//             state: true
//         }, {
//             title: "Electrodomesticos",
//             body: "AD/Carrousel Promocional 2",
//             state: true
//         },
//         {
//             title: "Ropa",
//             body: "AD/Carrousel Promocional 3",
//             state: true
//         }, {
//             title: "Cocina",
//             body: "AD/Carrousel Promocional 4",
//             state: true
//         }, {
//             title: "Decoracion",
//             body: "AD/Carrousel Promocional 5",
//             state: true
//         },
//         {
//             title: "Electrodomesticos",
//             body: "AD/Carrousel Promocional 6",
//             state: true
//         }, {
//             title: "Comida rapida",
//             body: "AD/Carrousel Promocional 7",
//             state: true
//         }, {
//             title: "Decoracion",
//             body: "AD/Carrousel Promocional 8",
//             state: true
//         }, {
//             title: "Relajacion",
//             body: "AD/Carrousel Promocional 9",
//             state: true
//         }])

//     const [viewInfo, setViewInfo] = useState(false)

//     const pressInfo = () => {
//         setViewInfo(!viewInfo)
//     }

//     const changeUser = () => {
//         switchSeller()
//         // navigation.navigate('Dashboard')
//     }

//     return (

//     )
// }
