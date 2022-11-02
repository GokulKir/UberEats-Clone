import React,{ useEffect , useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Image,
    ImageBackground

} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';
// import auth from '@react-native-firebase/auth';
// import { MaterialIcons } from '@expo/vector-icons';



function Signup({navigation}) {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

//Firebase Signup Auth//

const Signup = ({navigation}) => {
    if(email != "" && password != ""){
    auth().createUserWithEmailAndPassword(email , password).then((response)=> {
        console.log("Created user :"+ response);
        navigation.navigate("MyTabs")
    })
    .catch((error)=> {
        if(error) 
            console.log("User already exits");
        if(email.error) 
        console.log("Enter your email address :", email.error);
        if(password.error)

        console.log("Enter your password", password.error);

    })
    }
}




//Firebase Signup Auth//   


    return (
        <View style={styles.container}>
             <ImageBackground style={styles.ImageST} source={require('../assets/LI.jpg')}>
                <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
              <Icon name="west" size={28}  color="#fff" style={{marginRight:255,marginTop:23}}/>
              </TouchableOpacity>
              <Text style={{ color:'#fff', fontSize:36 , fontWeight:'bold' , marginTop:55}}>Sign Up</Text>

              <Text style={{color:'#fff', marginTop:15 , fontSize:13}}>Create new user!!</Text>
             </ImageBackground>
    <View>

             </View>
             <ScrollView>
             <View style={{alignItems:'center' , marginTop:53}}>
                <View style={{width:'95%' , height:44 , borderWidth:1, borderColor:'grey', backgroundColor:'#fff', flexDirection:'row' ,borderRadius:6}}>
                 <Image style={{width:26 , height:26 , marginTop:8 , marginLeft:13}} source={require('../assets/email.png')}/>
                 <TextInput  onChangeText={setEmail} style={{ width:"85%" , height:39 , borderWidth:1, borderColor:'#fff',marginTop:2 , marginLeft:8,paddingLeft:12,fontSize:16}} placeholder="Enter email"/>
              
                </View>


                <View style={{width:'95%' , height:44 , borderWidth:1, borderColor:'grey', backgroundColor:'#fff', flexDirection:'row' , marginTop:74 , borderRadius:6}}>
                 <Image style={{width:29 , height:29 , marginTop:6 , marginLeft:13}} source={require('../assets/lock.png')}/>
                 <TextInput  onChangeText={setPassword} style={{ width:"85%" , height:39 , borderWidth:1, borderColor:'#fff',marginTop:2 , marginLeft:8,paddingLeft:12,fontSize:16}}  secureTextEntry={true} placeholder="Enter password"/>
              
                </View>
               
    </View>
 
             <View style={{alignItems:'center',marginTop:90}}>

             <TouchableOpacity onPress={Signup} style={{width:"70%", height:44, borderWidth:2 , borderColor:'red', borderRadius:5 , alignItems:'center', justifyContent:'center'}}>
                <Text style={{color:'#fff', fontSize:17 , fontWeight:'bold'}}>Sign Up</Text>
             </TouchableOpacity>
             </View>
             <View style={{alignItems:'center',marginBottom:55, marginTop:18}}>
                <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                <Text style={{color:'yellow', fontWeight:'bold'}}>Created user?</Text>
                </TouchableOpacity>
              
             </View>
            
             </ScrollView>

        </View>
        
    )
    
}

const styles = StyleSheet.create({
    container: {
   flex:1,
   backgroundColor:'black',
    },
    ImageST : {
        width:'100%',
        height:256,
        alignItems:'center',
        
    }
})

export default Signup ;