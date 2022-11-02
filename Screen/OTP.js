import React,{ useEffect , useState , useRef } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Button,
    SafeAreaView,
    TextInput,
    Text,
    ImageBackground,
    Image,

} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function OTP({navigation, route,props}) {
    const {phone} = route.params;
    const FirstInput = useRef()
    const SecondInput = useRef()
    const ThirdInput = useRef()
    const FourthInput = useRef()
    const FifthInput = useRef()
    const SixthInput = useRef()

    const [otp , setOtp] = useState({1 : "" , 2 : "" , 3 : "" , 4 : "" , 5 : "" , 6 : ""})
    return (
   <View style={styles.container}>
  <ImageBackground style={styles.ImageST} source={require('../assets/Fu.jpg')}>
                <TouchableOpacity onPress={()=> navigation.navigate('Mobile')}>
                <Icon name="west" size={28}  color="#fff" style={{marginRight:255,marginTop:23}}/>
              </TouchableOpacity>
              <Text style={{ color:'#fff', fontSize:36 , fontWeight:'bold' , marginTop:55}}>Verification</Text>

              <Text style={{color:'#fff', marginTop:15 , fontSize:13}}>Please wait verification code sent you mobile?</Text>
              <Text style={{color:'yellow', marginTop:15 , fontSize:14}}>+91 {phone}</Text>
             </ImageBackground>
             <ScrollView>
                <View style={{flexDirection:'row',marginTop:45,marginLeft:15}}>
                <View  style={{marginLeft:13}}>
                    <TextInput style={{ width:40,height:40, borderWidth:1 , borderColor:'blue',color:'#fff', paddingLeft:16,fontSize:18,fontWeight:'bold'}} keyboardType="numeric" maxLength={1} 
                    ref={FirstInput}
                    onChangeText = {(text)=>{
                        setOtp({...otp , 1 : text})
                        text && SecondInput.current.focus() 
                    }}
                  
                    />


                </View>
                <View  style={{marginLeft:13}}>
                    <TextInput style={{ width:40,height:40, borderWidth:1 , borderColor:'blue',color:'#fff', paddingLeft:16,fontSize:18,fontWeight:'bold'}} keyboardType="numeric" maxLength={1}
                    ref={SecondInput}
                    onChangeText = {(text)=>{
                        setOtp({...otp , 2 : text})
                        text ? ThirdInput.current.focus() : FirstInput.current.focus()
                    }}
                    />


                </View>
                <View  style={{marginLeft:13}}>
                    <TextInput style={{ width:40,height:40, borderWidth:1 , borderColor:'blue',color:'#fff', paddingLeft:16,fontSize:18,fontWeight:'bold'}} keyboardType="numeric" maxLength={1}
                    ref={ThirdInput}
                    onChangeText = {(text)=>{
                        setOtp({...otp , 3 : text})
                        text ? FourthInput.current.focus(): SecondInput.current.focus()
                    }}
                    />


                </View>
                <View  style={{marginLeft:13}}>
                    <TextInput style={{ width:40,height:40, borderWidth:1 , borderColor:'blue',color:'#fff', paddingLeft:16,fontSize:18,fontWeight:'bold'}} keyboardType="numeric" maxLength={1}
                    ref={FourthInput}
                    onChangeText = {(text)=>{
                        setOtp({...otp , 4 : text})
                         text ? FifthInput.current.focus() : ThirdInput.current.focus()
                    }}
                    />


                </View>


                <View  style={{marginLeft:13}}>
                    <TextInput style={{ width:40,height:40, borderWidth:1 , borderColor:'blue',color:'#fff', paddingLeft:16,fontSize:18,fontWeight:'bold'}} keyboardType="numeric" maxLength={1}
                    ref={FifthInput}
                    onChangeText = {(text)=>{
                        setOtp({...otp , 5 : text})
                        text ? SixthInput.current.focus(): FourthInput.current.focus()
                    }}
                    />


                </View>


                <View  style={{marginLeft:13}}>
                    <TextInput style={{ width:40,height:40, borderWidth:1 , borderColor:'blue',color:'#fff', paddingLeft:16,fontSize:18,fontWeight:'bold'}} keyboardType="numeric" maxLength={1}
                    ref={SixthInput}
                    onChangeText = {(text)=>{
                        setOtp({...otp , 6 : text})
                         ! text && FifthInput.current.focus()
                    }}
                    />


                </View>
                
                </View>

                <View style={{alignItems:'center',marginTop:123}}>
                    <TouchableOpacity onPress={()=> confirmCode()} style={{width:"60%", height:44, borderWidth:1, borderColor:'red', borderRadius:4 , alignItems:'center' , justifyContent:'center'}}>
                        <Text style={{color:'#fff', fontSize:16 , fontWeight:'bold'}}>Verify</Text>
                    </TouchableOpacity>

                </View>
             </ScrollView>
   </View>
    )
    
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'black'
    },
   ImageST : {
    width:'100%',
    height:334,
    alignItems:'center'
   }
})

export default OTP;