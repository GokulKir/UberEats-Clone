import { StyleSheet, Text, View , PermissionsAndroid } from 'react-native'
import React ,{useEffect , useState}from 'react'
import MapView, { PROVIDER_GOOGLE , Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
export default function Maps({navigation}) {
  async function Permission () {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    )
  }
  useEffect(()=>{
    Permission().then(()=>{
      Geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
        },
        (error) => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
    })
   
   

  },[])
  return (
   
          <MapView  
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={{flex:1}}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
      <Marker
  coordinate={{ latitude : 37.78825 , longitude : -122.4324 }}
/>
     </MapView>
    
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor:'black',
        alignItems:'center',
        jjustifyContent :"center"
    },
   
})