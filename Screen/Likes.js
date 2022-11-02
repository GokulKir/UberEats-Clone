import { StyleSheet, Text, View , ScrollView , Image} from 'react-native'
import React,{useEffect , useState} from 'react'
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
export default function Likes({navigation}) {
  const [likes , setLikes] = useState([])
  const user = firebase.auth().currentUser;
  useEffect(()=>{
    firestore().collection(user.uid).get().then((snapshot)=>{
      const allLikes = snapshot.docs.map((Likes)=>{
         return {
           ...Likes.data(),
           id : Likes.id
         }
      })
      setLikes(allLikes)
    },[])
    
  },[])
  return (
    <ScrollView  style={styles.container}>
      <View style={{alignItems:'center',marginTop:13 , fontWeight:'bold'}}>
        <Text style={{color:'red', fontSize:19 , fontWeight:'bold'}}>Likes</Text>
      </View>
      {likes.map((obj , index)=>{
        return (
  <View key={index} style={{marginTop:56}}>
  <View style={{width:354 , height:134 , borderWidth:1 , borderColor:'#fff', borderRadius:10}}>
  <Image style={{width:125 , height:"100%"}} source={{uri:obj.image}}/>
  </View>
   </View>
        ) 
      })}
   
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container :{
    flex:1,
    backgroundColor:'black',

  }
})