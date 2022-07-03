import { View, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'

import st from './favorite.sass'
import Text from '../../../components/Text'
import { NavBar, NavBarGeneral } from '../../../components/NavBar';
import { FavoriteTopBar } from '../../../components/TopBar'

import { SearchMarketItem, SearchBar } from '../../../components/SearchDisplay'

const FavoritePage = ({ navigation }) => {

    const [searchInput, setSearchInput] = useState('')

    const [active, setActive] = useState(true)

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
        }, {
            title: "Lorem Ipsum",
            body: "AD/Carrousel Promocional 8",
            imgUrl: "https://picsum.photos/id/12/200/300",
        },]

    const goToItem = () => {
        navigation.navigate('Item')
    }

    return (
        <View style={st.g_container} >
            <ScrollView style={st.scrollview}>
                {/* <Text>ExplorerPage</Text> */}
                <View style={st.top} >
                    <FavoriteTopBar />
                    <View style={st.top_mid} >
                        <SearchBar value={searchInput} set={setSearchInput} />
                    </View>
                    <View style={st.top_bot} >
                        <TouchableOpacity onPress={() => {
                            setActive(true)
                        }} style={st.top_bot_text_left} ><Text color='#0067ce' >Comercios</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            setActive(false)
                        }} style={st.top_bot_text_right} ><Text color='#0067ce' >Articulos</Text></TouchableOpacity>
                    </View>

                    {active ?
                        <View style={st.scroll_container}>
                            {data.map(item => (
                                <SearchMarketItem item={item} key={item.body} navigation={navigation} />
                            ))}
                        </View>

                        : <View style={st.items_container_A} >
                            {data.map(item => (
                                <Card_A key={item.body} goToItem={goToItem} />
                            ))}
                        </View>}
                </View>
            </ScrollView>
            <NavBarGeneral navigation={navigation} active={3} />
        </View>
    )
}


{/* <View style={styles.items_container_A} >
{data.map(item => (
  <Card_A key={item.title} goToItem={goToItem} />
))}
</View> */}

const Card_A = ({ goToItem }) => {
    return (
        <TouchableOpacity style={st.item_A} onPress={goToItem} >
            <Text>Photo</Text>
            <View style={st.item_A_bot} >
                <Text style={st.item_A_bot_text} >Nombre</Text>
            </View>
        </TouchableOpacity>
    )
}

export default FavoritePage