import React,{ useEffect , useState , useRef } from "react";
import {
    View,
    StyleSheet,
    Button,
    TouchableOpacity,
    TextInput,
    Text,
    ScrollView,
    SafeAreaView,
    Image,
    ImageBackground
} from 'react-native';
import auth from '@react-native-firebase/auth';
function Login({navigation}) {
    const [email ,setEmail] = useState('')
    const [password , setPassword] = useState('')

    const TouchEmail = useRef()
    const TouchPassword = useRef()
    //User Login//
const Login = () => {
 auth().signInWithEmailAndPassword(email , password).then((response)=>{
    console.log("User Login Successfully", response);
    navigation.navigate("MyTabs")
 })
 .catch((error)=> {
    if(error){
        console.log("user Login Error", error);
    }else if(email === ""){
        console.log("Invalid email", email.error);;
    }else {
        console.log("Invalid Passwors", password.error);
    }
 })

}

    //User Login//
    return (
        <View style={styles.container}>
             <ImageBackground style={styles.ImageST} source={require('../assets/SIM.jpg')}>
              
              <Text style={{ color:'#fff', fontSize:36 , fontWeight:'bold' , marginTop:85}}>Log In</Text>

              <Text style={{color:'#fff', marginTop:15 , fontSize:13}}>Login to your Uber account to get started!!</Text>
             </ImageBackground>
            <ScrollView>
            <View style={{alignItems:'center' , marginTop:53}}>
                <View style={{width:'95%' , height:44 , borderWidth:1, borderColor:'grey', backgroundColor:'#fff', flexDirection:'row' ,borderRadius:6}}>
                 <Image style={{width:26 , height:26 , marginTop:8 , marginLeft:13}} source={require('../assets/email.png')}/>
                 <TextInput  onChangeText={setEmail} style={{ width:"85%" , height:39 , borderWidth:1, borderColor:'#fff',marginTop:2 , marginLeft:8,paddingLeft:12,fontSize:16}} placeholder="Enter email"/>
              
                </View>


                <View style={{width:'95%' , height:44 , borderWidth:1, borderColor:'grey', backgroundColor:'#fff', flexDirection:'row' , marginTop:74 , borderRadius:6}}>
                 <Image style={{width:29 , height:29 , marginTop:6 , marginLeft:13}} source={require('../assets/lock.png')}/>
                 <TextInput ref={TouchPassword}   onChangeText={setPassword } style={{ width:"85%" , height:39 , borderWidth:1, borderColor:'#fff',marginTop:2 , marginLeft:8,paddingLeft:12,fontSize:16}}  secureTextEntry={true} placeholder="Enter password"/>
              
                </View>
                <View>
                    <TouchableOpacity onPress={()=> navigation.navigate('Mobile')}>
                    <Text style={{color:'yellow' , marginLeft:85,marginTop:24}}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>
               
    </View>

    <View style={{alignItems:'center',marginTop:70}}>

<TouchableOpacity onPress={Login} style={{width:"70%", height:44, borderWidth:2 , borderColor:'red', borderRadius:5 , alignItems:'center', justifyContent:'center'}}>
   <Text style={{color:'#fff', fontSize:17 , fontWeight:'bold'}}>Log In</Text>
</TouchableOpacity>
</View>
             <View style={{alignItems:'center',marginTop:12}}>
                <TouchableOpacity onPress={()=> navigation.navigate('Signup')}>
                <Text style={{color:'yellow'}}>Sign Up?</Text>
                </TouchableOpacity>
             </View>

            </ScrollView>

        </View>

    )
    
}

const styles = StyleSheet.create({
     container : {
        flex :1,
        backgroundColor:'black',

     },
     ImageST :{
        alignItems:'center',
        width:'100%',
        height:256,


     }
})


export default Login;