import * as React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from "react-native-vector-icons/Entypo";
/*/Screens/*/
import Plash from './Screen/Plash';
/*/Signup/*/
import Signup from './Screen/Signup';
/*/Signup/*/
/*/Login/*/
import Login from './Screen/Login';
/*/Login/*/
/*/Mobile Login/*/
import Mobile from './Screen/Mobile';
import OTP from './Screen/OTP';
/*/Mobile Login/*/
/*/Home Page/*/
import Home from './Screen/Home';
import Likes from './Screen/Likes';
import Maps from './Screen/Maps';
import Cart from './Screen/Cart';
/*/Home Page/*/
/*/Food Page/*/
import Pizza from './Food/Pizza';
import Burger from './Food/Burger';
import Coffee from './Food/Coffee';
import Chicken from './Food/Chicken';
import Sandwitch from './Food/Sandwitch';
import Booking from './Food/Booking';
/*/Food Page/*/
/*/Screens/*/




import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    screenOptions={{
    
      tabBarStyle: {  position: 'absolute',backgroundColor:'black'},
      tabBarBackground: () =>(
    <View  style={{flex:1}}>

    </View>
      )
    }}
    
    
    >
      <Tab.Screen name="Home" component={Home}   options={{ tabBarIcon : ({focused}) => focused ? <Icon name="home" size={26} color="blue"/> : <Icon name="home" size={26} color="grey"/> , headerShown:false }}/>
      <Tab.Screen name="Likes" component={Likes}     options={{tabBarIcon : ({focused}) => focused ? <Icons name="heart-outlined" size={26} color="blue"/> : <Icons name="heart-outlined" size={26} color="grey"/>, headerShown:false }} />
      <Tab.Screen name="Maps" component={Maps}     options={{tabBarIcon : ({focused}) => focused ? <Icon name="map" size={26} color="blue"/> : <Icon name="map" size={26} color="grey"/>,  headerShown:false}}/>
      <Tab.Screen name="Cart" component={Cart}   options={{tabBarIcon : ({focused}) => focused ? <Icon name="shopping-bag" size={26} color="blue"/> : <Icon name="shopping-bag" size={26} color="grey"/>, headerShown:false}}/>
   
  </Tab.Navigator>
  )
}



export default function App() {
  return (
    <NavigationContainer>
<Stack.Navigator>
     <Stack.Screen name="Plash" component={Plash} options={{headerShown:false}}/>
     <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
     <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
     <Stack.Screen name="Mobile" component={Mobile} options={{headerShown:false}}/>
     <Stack.Screen name="OTP" component={OTP} options={{headerShown:false}}/>
    <Stack.Screen name="MyTabs" component={MyTabs} options={{headerShown:false}}/>
    <Stack.Screen name="Pizza" component={Pizza} options={{headerShown:false}}/>
    <Stack.Screen name="Booking" component={Booking}  options={{headerShown:false}}/>
   </Stack.Navigator>
    </NavigationContainer>
  );
}