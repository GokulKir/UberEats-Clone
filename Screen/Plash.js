import React,{ useEffect , useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    ImageBackground
} from 'react-native';
import auth from '@react-native-firebase/auth';

function Plash({navigation}) {
 
    // const [user , setUser] = useState()


  
    useEffect(()=> {
    setTimeout(() => {
        auth().onAuthStateChanged((user)=> {
            if(!user) {
                navigation.navigate("Login");
            }else {
                navigation.navigate("MyTabs")
            }
        })
    }, 2000);
    },[])






    return (

        <View style={styles.container}>
       <ImageBackground style={styles.ImageST} source={require('../assets/U.jpg')}>
      
        <Text style={styles.TextST}>Uber</Text>

        <Text style={styles.TextST1}>Eats</Text>
       
         
       </ImageBackground>
        </View>

    )
    
}
const styles  = StyleSheet.create({
    container  :{ 
        flex:1,
        backgroundColor:'black'
    },
    ImageST :{
        width:'100%',
        height:'100%',
        alignItems:'center',
        
    },
    TextST :{
        color:'#fff',
        fontSize:73,
        marginTop:236
    },
    TextST1 :{
        color:'green',
        fontSize:73,
      
        
    }
})
export default Plash;