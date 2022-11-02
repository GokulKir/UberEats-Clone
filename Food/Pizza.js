import { StyleSheet, Text, View , ScrollView , TouchableOpacity , Image} from 'react-native'
import React,{useEffect , useState} from 'react'
import Icon from "react-native-vector-icons/Entypo";
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import firestore from '@react-native-firebase/firestore';
export default function Pizza({navigation}) {
    const [products , setProducts] = useState([])
    useEffect(()=>{
        const usersCollection = firestore().collection('Pizza').get().then((snapshot)=>{
            const allPost = snapshot.docs.map((Pizza)=>{
                return {
                    ...Pizza.data(),
                    id:Pizza.id
                }
            })
            setProducts(allPost)
            console.log(allPost);
        })

    },[])
  return (
    <View  style={styles.container}>
         <View style={{flexDirection:'row'}}>
        <ScrollView>
           

        <View style={{ width:'100%',height:90 , backgroundColor:'#021136',  borderBottomLeftRadius:35 , borderBottomRightRadius:35, flexDirection:'row'}}>
            <TouchableOpacity onPress={()=> navigation.navigate("Home")}>
        <Icon name="chevron-thin-left" size={24} color="#fff" style={{marginLeft:20,marginTop:20}}></Icon>
        </TouchableOpacity>
        <View  style={{flexDirection:'row', marginTop:8}}>
    <Text style={{color:'#3aad09',marginTop:13,marginLeft:20,fontSize:18,fontWeight:'bold'}}>Uber</Text>
    <Text style={{color:'#fff',marginTop:10,fontSize:20,marginLeft:1,fontWeight:'bold'}}>E</Text>
    </View>

    <Icon style={{marginLeft:186,marginTop:13}} name="shopping-bag" size={26} color="#fff"/>
        
            </View>
            
            
          
            

        </ScrollView>
        </View>
        <View>
        {products.map((obj , index)=> {

            return   ( 
                            
             <ScrollView key={index}>
                
          
                <View  style={{flexDirection:'row'}}>

                  
        <TouchableOpacity onPress={()=> navigation.navigate('Booking',{url:obj.image, title : obj.title , dec : obj.dec, obj})} style={{width:153 , height: 173 ,marginTop:34 , marginLeft:15,borderWidth:1 , borderColor:'#fff', borderRadius:12}}>
                       <Image style={{width:'100%' , height:'100%' ,  borderRadius:12}}  source={{uri:obj.image}}/>
                    </TouchableOpacity>

                    <TouchableOpacity  onPress={()=> navigation.navigate('Booking',{url:obj.image1, title : obj.title , dec : obj.dec})}  style={{width:153 , height: 173 ,marginTop:34 , marginLeft:15,borderWidth:1 , borderColor:'#fff' , borderRadius:12}}>
                    <Image style={{width:'100%' , height:'100%' ,  borderRadius:12}}  source={{uri:obj.image1}}/>
               </TouchableOpacity>
            
                    
                </View>

        


                <View  style={{flexDirection:'row'}}>
                    
                    <TouchableOpacity   onPress={()=> navigation.navigate('Booking',{url:obj.image2, title : obj.title , dec : obj.dec})}   style={{width:153 , height: 173 ,marginTop:34 , marginLeft:15,borderWidth:1 , borderColor:'#fff', borderRadius:12}}>
                    <Image style={{width:'100%' , height:'100%' ,  borderRadius:12}}  source={{uri:obj.image2}}/>
                    </TouchableOpacity>

                    <TouchableOpacity  onPress={()=> navigation.navigate('Booking',{url:obj.image3, title : obj.title , dec : obj.dec})}   style={{width:153 , height: 173 ,marginTop:34 , marginLeft:15,borderWidth:1 , borderColor:'#fff' , borderRadius:12}}>
                    <Image style={{width:'100%' , height:'100%' ,  borderRadius:12}}  source={{uri:obj.image3}}/>
               </TouchableOpacity>
                    
                </View>



                <View  style={{flexDirection:'row'}}>
                    <TouchableOpacity  onPress={()=> navigation.navigate('Booking',{url:obj.image4, title : obj.title , dec : obj.dec})}   style={{width:153 , height: 173 ,marginTop:34 , marginLeft:15,borderWidth:1 , borderColor:'#fff', borderRadius:12}}>
                    <Image style={{width:'100%' , height:'100%' ,  borderRadius:12}}  source={{uri:obj.image4}}/>
                    </TouchableOpacity>

                    <TouchableOpacity  onPress={()=> navigation.navigate('Booking',{url:obj.image5, title : obj.title , dec : obj.dec})}   style={{width:153 , height: 173 ,marginTop:34 , marginLeft:15,borderWidth:1 , borderColor:'#fff' , borderRadius:12}}>
                    <Image style={{width:'100%' , height:'100%' ,  borderRadius:12}}  source={{uri:obj.image5}}/>
               </TouchableOpacity>
                    
                </View>


                <View  style={{flexDirection:'row'}}>
                    <TouchableOpacity   onPress={()=> navigation.navigate('Booking',{url:obj.image6, title : obj.title , dec : obj.dec})}  style={{width:153 , height: 173 ,marginTop:34 , marginLeft:15,borderWidth:1 , borderColor:'#fff', borderRadius:12}}>
                    <Image style={{width:'100%' , height:'100%' ,  borderRadius:12}}  source={{uri:obj.image6}}/>
                    </TouchableOpacity>
                    

                    <TouchableOpacity onPress={()=> navigation.navigate('Booking',{url:obj.image7, title : obj.title , dec : obj.dec})}  style={{width:153 , height: 173 ,marginTop:34 , marginLeft:15,borderWidth:1 , borderColor:'#fff' , borderRadius:12}}>
                    <Image style={{width:'100%' , height:'100%' ,  borderRadius:12}}  source={{uri:obj.image7}}/>
    </TouchableOpacity>
                    
                    
                    
                    
                </View>
                
                    

                <View style={{marginTop:123}}>

                </View>
                
             </ScrollView>
            
            )
               })}
               
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        backgroundColor :"black"
    }
})