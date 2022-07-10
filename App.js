import { StyleSheet, BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState, useContext } from 'react'
import { Context } from './src/controllers/Context'

const UserURL = "./src/pages/User/"

//// USER 
import OnboardingPage from './src/pages/User/OnboardingPage';
import HomePage from "./src/pages/User/01.Home/HomePage"
import MarketPage from "./src/pages/User/02.Market/MarketPage"
import ItemPage from "./src/pages/User/03.Item/ItemPage"
import FavoritePage from "./src/pages/User/04.Favorite/FavoritePage"
import UserLogoutPage from "./src/pages/User/05.UserLogout/UserLogoutPage"
import RegisterPage from "./src/pages/User/06.Register/RegisterPage"
import VerificationPage from "./src/pages/User/07.Verification/VerificationPage"
import ExtraDataPage from "./src/pages/User/08.ExtraData/ExtraDataPage"
import TopicsPage from "./src/pages/User/09.Topics/Topics"
import LoginPage from "./src/pages/User/10.Login/LoginPage"
import UserPage from "./src/pages/User/11.User/UserPage"
import TuMarkeItemPage from "./src/pages/User/12.TuItem/TuMarkeItemPage"
import TuMarketPage from "./src/pages/User/13.TuMarket/TuMarketPage"

//// VERIFICATIONS
import UserID1 from "./src/pages/Verifications/01.UserID/UserID1"
import UserID2 from "./src/pages/Verifications/02.UserID2/UserID2"
import UserID3 from './src/pages/Verifications/03.UserID3/UserID3';
import UserID4 from './src/pages/Verifications/04.UserID4/UserID4';
import UserID5 from './src/pages/Verifications/05.UserID5/UserID5';

import FmarketCreate_A from './src/pages/User/14.TuMarketCreateItem/FmarketCreate_A'
import FmarketCreate_B from './src/pages/User/14.TuMarketCreateItem/FmarketCreate_B'
import FmarketCreate_C from './src/pages/User/14.TuMarketCreateItem/FmarketCreate_C'
import FmarketCreate_D from './src/pages/User/14.TuMarketCreateItem/FmarketCreate_D'

//// VERIFY JOBS
import VerifyCv1 from './src/pages/VerifyCv/01.VerifyCv/VerifyCv1';
import VerifyCv2 from './src/pages/VerifyCv/02.VerifyCv/VerifyCv2';
import VerifyCv3 from './src/pages/VerifyCv/03.VerifyCv/VerifyCv3';
import VerifyCv4 from './src/pages/VerifyCv/04.VerifyCv/VerifyCv4';
import VerifyCv5 from './src/pages/VerifyCv/05.VerifyCv/VerifyCv5';


//// JOBS
import JobSearch from './src/pages/Jobs/01.JobSearch/JobSearch';
import JobView from './src/pages/Jobs/02.JobView/JobView';
import JobApply from './src/pages/Jobs/03.JobApply/JobApply';
import JobSuccess from './src/pages/Jobs/04.JobSucces/JobSuccess';
import JobAdmin from './src/pages/Jobs/05.JobAdmin/JobAdmin';
import JobCreate from './src/pages/Jobs/06.JobCreate/JobCreate';
import JobPrice from './src/pages/Jobs/07.JobPrice/JobPrice';

/////
import DashboardPage from './src/pages/Seller/DashboardPage';
import NotificationsPage from './src/pages/Seller/NotificationsPage';
import GeneralReviewPage from './src/pages/Seller/GeneralReviewPage';
import InventoryPage from './src/pages/Seller/InventoryPage';
import AddItemPage_A from './src/pages/Seller/AddItemPage_A';
import AddItemPage_B from './src/pages/Seller/AddItemPage_B';
import AddItemPage_C from './src/pages/Seller/AddItemPage_C';
import AddItemPage_D from './src/pages/Seller/AddItemPage_D';
import AnswerPage from './src/pages/Seller/AnswerPage';
import InventoryItemPage from './src/pages/Seller/InventoryItemPage';
import SellerInfoPage from './src/pages/Seller/SellerInfoPage';

import * as NavigationBar from 'expo-navigation-bar';




///eas build --profile production --platform android


const Stack = createNativeStackNavigator();

export default App = () => {


  ///// BACK BTN ANDROID
  // useEffect(() => {
  //   const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
  //   return () => backHandler.remove()
  // }, [])

  const [enableSeller, setEnableSeller] = useState(false)
  const [authFaMarket, setAuthFaMarket] = useState(false)
  const [authCv, setAuthCv] = useState(false)

  const [navbarType, setNavbarType] = useState(1)

  return (
    <Context.Provider value={{
      navbarType,
      setNavbarType,
      enableSeller,
      setEnableSeller, authFaMarket, setAuthFaMarket, authCv, setAuthCv
    }} >
      <NavigationContainer>
        <Stack.Navigator

          screenOptions={{
            headerShown: false
          }}
        >
          {/* <Stack.Screen name="JobView" component={JobView} /> */}
          {/* USER FLOW */}
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Onboarding" component={OnboardingPage} />
          <Stack.Screen name="Market" component={MarketPage} />
          <Stack.Screen name="Item" component={ItemPage} />
          <Stack.Screen name="TuMarket" component={TuMarketPage} />
          <Stack.Screen name="Favorite" component={FavoritePage} />
          <Stack.Screen name="UserLogout" component={UserLogoutPage} />
          <Stack.Screen name="Register" component={RegisterPage} />
          <Stack.Screen name="Verification" component={VerificationPage} />
          {/* <Stack.Screen name="Login" component={LoginPage} /> */}
          <Stack.Screen name="User" component={UserPage} />
          <Stack.Screen name="TuMarketItem" component={TuMarkeItemPage} />
          <Stack.Screen name="ExtraData" component={ExtraDataPage} />
          <Stack.Screen name="Topics" component={TopicsPage} />  

          {/* TU MARKET CREATE ITEM */}
          <Stack.Screen name="FmarketCreate_A" component={FmarketCreate_A} />  
          <Stack.Screen name="FmarketCreate_B" component={FmarketCreate_B} />  
          <Stack.Screen name="FmarketCreate_C" component={FmarketCreate_C} />  
          <Stack.Screen name="FmarketCreate_D" component={FmarketCreate_D} />  

          {/* VERIFICATION */}
          <Stack.Screen name="UserID_1" component={UserID1} />
          <Stack.Screen name="UserID_2" component={UserID2} />
          <Stack.Screen name="UserID_3" component={UserID3} />
          <Stack.Screen name="UserID_4" component={UserID4} />
          <Stack.Screen name="UserID_5" component={UserID5} />

          {/* VERIFY JOBS */}
          <Stack.Screen name="VerifyCv1" component={VerifyCv1} />
          <Stack.Screen name="VerifyCv2" component={VerifyCv2} />
          <Stack.Screen name="VerifyCv3" component={VerifyCv3} />
          <Stack.Screen name="VerifyCv4" component={VerifyCv4} />
          <Stack.Screen name="VerifyCv5" component={VerifyCv5} />
          <Stack.Screen name="JobAdmin" component={JobAdmin} />
          {/* <Stack.Screen name="JobAdmin" component={JobAdmin} />
          <Stack.Screen name="JobAdmin" component={JobAdmin} /> */}

          {/* JOBS */}
          <Stack.Screen name="JobSearch" component={JobSearch} />
          <Stack.Screen name="JobView" component={JobView} />
          <Stack.Screen name="JobApply" component={JobApply} />
          <Stack.Screen name="JobSuccess" component={JobSuccess} />
          <Stack.Screen name="JobCreate" component={JobCreate} />
          <Stack.Screen name="JobPrice" component={JobPrice} />






          {/* MARKET FLOW */}
          <Stack.Screen name="Dashboard" component={DashboardPage} />
          <Stack.Screen name="Notifications" component={NotificationsPage} />
          <Stack.Screen name="GeneralReview" component={GeneralReviewPage} />
          <Stack.Screen name="Inventory" component={InventoryPage} />
          <Stack.Screen name="AddItem_Category" component={AddItemPage_A} />
          <Stack.Screen name="AddItem_Description" component={AddItemPage_B} />
          <Stack.Screen name="AddItem_Images" component={AddItemPage_C} />
          <Stack.Screen name="AddItem_Price" component={AddItemPage_D} />
          <Stack.Screen name="Answer" component={AnswerPage} />
          <Stack.Screen name="InventoryItem" component={InventoryItemPage} />
          <Stack.Screen name="SellerInfo" component={SellerInfoPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
