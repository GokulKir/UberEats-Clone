import { View, Text , StyleSheet , TouchableOpacity , TextInput , ScrollView , Image , ImageBackground } from 'react-native'
import React, {useEffect , useState} from 'react'
import auth from '@react-native-firebase/auth';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/Entypo";
import firestore from '@react-native-firebase/firestore';
import { useSelector, useDispatch } from 'react-redux'
export default function Home({navigation}) {
  const cartItem = useSelector(state=> state)
  const [product , setProducts] = useState([])
  useEffect(()=>{
    const usersCollection = firestore().collection('Restorents').get().then((snapshot)=>{
      const allPost = snapshot.docs.map((Restorents)=>{
        return {
         ...Restorents.data(),
         id:Restorents.id,

        }
      })
      setProducts(allPost)
       console.log(allPost);
    })

  },[])
  return (
    <View style={styles.container}>
 
     <View>
      <View style={{ width:'100%',height:140 , backgroundColor:'#021136',  borderBottomLeftRadius:35 , borderBottomRightRadius:35}}>
   <View style={{alignItems:'center'}}>
    <View style={{flexDirection:'row'}}>
    <View  style={{flexDirection:'row'}}>
    <Text style={{color:'#3aad09',marginTop:13,marginLeft:20,fontSize:18,fontWeight:'bold'}}>Uber</Text>
    <Text style={{color:'#fff',marginTop:10,fontSize:20,marginLeft:1,fontWeight:'bold'}}>E</Text>
    </View>
   <Icon style={{marginLeft:226,marginTop:13}} name="shopping-bag" size={26} color="#fff"/>
   <TouchableOpacity style={{width:20 , height: 20 , backgroundColor:'red' , marginLeft:0 , alignItems:'center' , justifyContent:'center' , borderRadius:34 }}>
    <Text style={{fontSize:15 , fontWeight:'bold' , color:'#fff' }}>{cartItem.length}</Text>
    </TouchableOpacity>



   

  

  

 
    
     </View>

   </View>
   <View style={{alignItems:'center',marginTop:15}}>
    <View style={{width: '90%' , height:35, backgroundColor:'#fff',borderRadius:23,flexDirection:'row'}}>
    <Icons name="search" style={{marginLeft:13,marginTop:5}}  size={24}/>
    <TextInput style={{width:"80%",height:38,fontSize:16 , paddingLeft:13}} placeholder="Search"/>
    </View>

   </View>

      </View>
      <ScrollView horizontal={true}>
  <View style={{ alignItems:'center' , marginTop:12 , flexDirection:'row' }}>
    <TouchableOpacity style={styles.card}>
    <Image style={{width:"100%",height:'100%',borderRadius:23}} source={require('../assets/K.jpg')}>
     
    </Image>

    </TouchableOpacity>
    <TouchableOpacity  style={styles.card}>
    <Image style={{width:"100%",height:'100%',borderRadius:23}} source={require('../assets/P.jpg')}>
     
    </Image>

    </TouchableOpacity>
    <TouchableOpacity style={styles.card}>
    <Image style={{width:"100%",height:'100%',borderRadius:23}} source={require('../assets/Chi.jpg')}>
     
    </Image>

    </TouchableOpacity>
    
  </View>
     </ScrollView>
     <ScrollView horizontal={true}>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={()=> navigation.navigate('Pizza')} style={{ marginLeft:33, marginTop:14 , borderRadius:34 , alignItems:'center' , justifyContent:'center'}}>
   <Image style={{color:'#fff', fontSize:15 , fontWeight:'bold', width:34, height:34}} source={require('../assets/pizza.png')}/>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginLeft:33, marginTop:14 , borderRadius:34 , alignItems:'center' , justifyContent:'center'}}>
   <Image style={{color:'#fff', fontSize:15 , fontWeight:'bold', width:38, height:36}} source={require('../assets/Ch.png')}/>
        </TouchableOpacity>



        <TouchableOpacity style={{ marginLeft:33, marginTop:14 , borderRadius:34 , alignItems:'center' , justifyContent:'center'}}>
   <Image style={{color:'#fff', fontSize:15 , fontWeight:'bold', width:34, height:34}} source={require('../assets/B.png')}/>
        </TouchableOpacity>


        <TouchableOpacity style={{ marginLeft:33, marginTop:14 , borderRadius:34 , alignItems:'center' , justifyContent:'center'}}>
   <Image style={{color:'#fff', fontSize:15 , fontWeight:'bold', width:34, height:34}} source={require('../assets/San.png')}/>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginLeft:33, marginTop:14 , borderRadius:34 , alignItems:'center' , justifyContent:'center'}}>
   <Image style={{color:'#fff', fontSize:15 , fontWeight:'bold', width:34, height:34}} source={require('../assets/Cof.png')}/>
        </TouchableOpacity>


        <TouchableOpacity style={{ marginLeft:33, marginTop:14 , borderRadius:34 , alignItems:'center' , justifyContent:'center'}}>
   <Image style={{color:'#fff', fontSize:15 , fontWeight:'bold', width:34, height:34}} source={require('../assets/cake.png')}/>
        </TouchableOpacity>


        <TouchableOpacity style={{ marginLeft:33, marginTop:14 , borderRadius:34 , alignItems:'center' , justifyContent:'center'}}>
   <Image style={{color:'#fff', fontSize:15 , fontWeight:'bold', width:34, height:34}} source={require('../assets/Beef.png')}/>
        </TouchableOpacity>
      </View>
     </ScrollView>

     <View style={{marginTop:20 , marginLeft:24 , flexDirection:'row'}}>
      <Text style={{color:"red" , fontSize:17 , fontWeight:'bold'}}>Top</Text>
      <Icon name="chevron-thin-right" color="#fff" size={19}  style={{marginLeft:235,marginTop:2}}/>
     </View>



     </View>
     <ScrollView horizontal={true}>
      <View style={{flexDirection:'row', marginTop:25}}>
        {product.map((obj , index)=>{

       return (
      <TouchableOpacity key={index} style={{width:344 , height:155 , borderWidth:1, borderColor:'grey', marginLeft:14 , borderRadius:5}}>
          <Image style={{width:'100%',height:'100%' ,  borderRadius:5}} source={{uri:obj.image}}/>
          <View style={{alignItems:'center', marginTop:12}}>
            <Text style={{color:'grey', marginBottom:12}}>{obj.discription}</Text>
          <Text style={{color:'#fff', fontWeight:'bold' , fontSize:15 , }}>{obj.title}</Text>
          </View>
      </TouchableOpacity>
     
       )
       })
}
      </View>
 
     </ScrollView>
     

   

     
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex :2,
        backgroundColor: 'black'
    },
    card : {
   width:344,
   height:134,
   borderWidth:1,
   borderColor:'#fff',
   borderRadius:23,
   marginLeft:10,
   alignItems:'center',
   justifyContent:'center'
    }
})
