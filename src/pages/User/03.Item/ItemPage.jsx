import { View, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import st from './item.sass'
import Text from '../../../components/Text'
import Comment from '../../../components/Comment'
import { BackTopBar, MarketTopBar } from '../../../components/TopBar'
import nivea from "../../../images/nivea1.png"
import { NavBarGeneral } from '../../../components/NavBar'
import { BtnContact, BtnSubmitReview } from '../../../components/Btns'
import { ArrowBack, BigArrowBack, Star } from '../../../components/Icons'

const Item = ({ navigation }) => {

    const data = [
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
            title: "Lorem Ipsum",
            body: "AD/Carrousel Promocional 3",
            imgUrl: "https://picsum.photos/id/12/200/300",
        },
        {
            title: "Lorem Ipsum",
            body: "AD/Carrousel Promocional 4",
            imgUrl: "https://picsum.photos/id/12/200/300",
        }, {
            title: "Lorem Ipsum",
            body: "AD/Carrousel Promocional 5",
            imgUrl: "https://picsum.photos/id/12/200/300",
        }, {
            title: "Lorem Ipsum",
            body: "AD/Carrousel Promocional 6",
            imgUrl: "https://picsum.photos/id/12/200/300",
        }, {
            title: "Lorem Ipsum",
            body: "AD/Carrousel Promocional 7",
            imgUrl: "https://picsum.photos/id/12/200/300",
        },]

    const [changeView, setChangeView] = useState(false)

    const [reviewInput, setReviewInput] = useState("")

    const reverView = () => {
        setChangeView(false)
    }
    
    const trueView = ()=>{
        setChangeView(true)
    }



    return (
        <View style={st.g_container} >
            <ScrollView style={st.g_container} >
                <View style={changeView ? st.top_changeView : st.top} >
                    {changeView ?
                        <View style={st.top_absolute} >
                            <BigArrowBack action={reverView} />
                        </View>
                        : <MarketTopBar navigation={navigation} />}
                    <View style={st.top_mid} >
                        <Image source={nivea} style={st.image} resizeMode="contain" />
                    </View>
                </View>
                <View style={st.middle} >
                    {!changeView ?
                        <>
                            <Text style={st.middle_name} >Crema Nivea Cellular</Text>
                            <Text style={st.middle_price} >50 Bs.</Text>
                            <Text style={st.middle_description} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque curabitur eget faucibus dui in. Sapien tempus risus non turpis eget accumsan. Tellus morbi in diam nisl eu. Fermentum mi volutpat nisl semper sed sit. In.</Text>
                        </>
                        :
                        <>
                            <Text style={st.middle_name_small} >Crema Nivea Cellular</Text>
                            <Text style={st.middle_price_small} >50 Bs.</Text>
                        </>
                    }
                </View>
                <View style={st.bottom} >
                    {!changeView ?
                        <>
                            <View style={st.bottom_top} >
                                <Text >Comentarios</Text>
                                <TouchableOpacity onPress={trueView} >
                                    <Text style={st.calify}  >Calificar</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={st.bottom_bot} >
                                {data.map(item => (
                                    <Comment key={item.body} />
                                ))}
                            </View>
                        </>
                        :
                        <>
                            <View style={st.stars_ctn} >
                                <Star size='36' />
                                <Star size='36' />
                                <Star size='36' />
                                <Star size='36' />
                                <Star size='36' />
                            </View>
                            <Text style={st.subtitle} >Deja tu reseña sobre el producto</Text>
                            <TextInput
                                style={st.input}
                                onChangeText={setReviewInput}
                                value={reviewInput}
                                placeholder="Escribe una reseña"
                                multiline
                            // numberOfLines={5}
                            />
                            <View style={st.underline_ctn} >
                                <View style={st.underline} ></View>
                            </View>
                        </>
                    }
                </View>
                <View style={{ height: 200 }} ></View>
            </ScrollView>
            <BtnSubmitReview action={trueView} />
            <NavBarGeneral navigation={navigation} active={1} />

        </View>
    )
}



export default Item