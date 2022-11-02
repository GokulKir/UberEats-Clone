import { StyleSheet, Text, View , Image , ImageBackground , ScrollView , TouchableOpacity } from 'react-native'
import React, {useEffect , useState} from 'react'
import Icon from "react-native-vector-icons/Entypo";
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
import { useSelector, useDispatch } from 'react-redux'
import {ADD_TO_CART} from '../Redux/Reducer';
export default function Booking({navigation , route}) {

  const user = firebase.auth().currentUser;
  const [like, setLike] = useState(false)
  const [color , setColor] = useState('red')
    const {url , title , dec,obj} = route.params ;

    const dispatch = useDispatch()
    const addItemToCart =  obj => dispatch({type:ADD_TO_CART,payload:obj})
    useEffect(()=>{
    
   
    },[])

    const Liked = () =>{
      setLike(!like)
      firestore().collection(user.uid).add({
        image : url ,
        title : title ,
        Dec  : dec ,
        Like : like
      })



       
      
    }

  return (
    <View style={styles.container}>
      
       <ScrollView >
        <View style={{alignItems:'center', justifyContent:'center'}}>
            <ImageBackground style={styles.ImageB}  source={{uri:url}}>
              <View style={{flexDirection:'row'}}>
            <TouchableOpacity>

      <Icon style={{marginLeft:23 , marginTop:23}} size={24} name="chevron-thin-left" color="#fff"></Icon>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> Liked()}>
      {like ?  <Icon name="heart" size={30} style={{  color: "red" , marginLeft:256,marginTop:15}}/> : <Icon name="heart" size={30} style={{  color: "#fff" , marginLeft:256,marginTop:15}}/> }
      </TouchableOpacity>
      </View>
   
            </ImageBackground>
           <ScrollView style={{width:"100%" , height:534 , backgroundColor:'#fff' , borderTopLeftRadius:15, borderTopRightRadius:15}}>
              <View style={{marginLeft:45 , marginTop:14}}>
                <Text style={{color:'black' , fontSize:20 , fontWeight:'bold'}}>{title}</Text>

              </View>
              <View>
                <Text style={{color:'grey' , fontSize:15 ,  marginLeft:12 , marginTop:53}}>{dec}</Text>
              </View>

              <View style={{marginTop:260 , flexDirection:'row'}}>
                <TouchableOpacity onPress={()=> addItemToCart(obj)} style={{width:"50%" , height:53 , backgroundColor:'black' , alignItems:'center' , justifyContent:'center'}}>
               <Text style={{color:'#fff' , fontWeight:"bold", fontSize:15}}>Add to cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:"50%" , height:53 , backgroundColor:'red' , alignItems:'center' , justifyContent:'center'}}>
               <Text style={{color:'#fff' , fontWeight:"bold", fontSize:15}}>Buy now</Text>
                </TouchableOpacity>
              </View>
           </ScrollView>
        </View>
    
       </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor:'black',
  },
  ImageB : {
    width:"100%",
    height:234,
   
  }

})