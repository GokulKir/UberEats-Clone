import { StyleSheet, Text, View , ScrollView , TouchableOpacity , Image } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {REMOVE_FROM_CART} from '../Redux/Reducer';
export default function Cart({navigation}) {
  const cartItem = useSelector(state=> state)
  const dispatch = useDispatch()
  const Removefromcart = obj => dispatch({type: REMOVE_FROM_CART , payload : obj})
  return (
    <View style={styles.container}>
     
        

     <ScrollView>
     {cartItem.map((obj , index)=>{
      return(
      <View key={index} style={{alignItems:'center'}}>
      <View style={{width:384 , height:123 , backgroundColor:'grey' , borderRadius:23 ,marginTop:34, flexDirection:'row'}}>
        
 <Image style={{width:125 , height:125 ,borderRadius:23}} source={{uri:obj.image}}/> 
     <Text style={{color:'#fff' , marginLeft:25 , marginTop:15 , fontSize:18 , fontWeight:'bold'}}>{obj.title}</Text>
    
      </View>
      <View  style={{flexDirection:'row' , marginTop:10}}>
      <TouchableOpacity onPress={()=> Removefromcart(obj)} style={{ width : 134 , height:34 , backgroundColor:'red' , borderRadius:12  , alignItems:'center' , justifyContent:'center' }}>
       <Text style={{color:'#fff' , fontSize:16 , fontWeight:'bold'}}>Remove</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ width : 134 , height:34 , backgroundColor:'blue' , borderRadius:12  , alignItems:'center' , justifyContent:'center' }}>
       <Text style={{color:'#fff' , fontSize:16 , fontWeight:'bold'}}>Buy</Text>
      </TouchableOpacity>
      </View>
      </View>
      )
            })}
     </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor:'black',
        alignItems:'center',
        jjustifyContent :"center"
    }
})