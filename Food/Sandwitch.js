import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Sandwitch = () => {
  return (
    <View>
     <ScrollView>
        <View style={{ width:'100%',height:140 , backgroundColor:'#021136',  borderBottomLeftRadius:35 , borderBottomRightRadius:35}}>
            <TouchableOpacity onPress={()=> navigation.navigate("Home")}>
        <Icon name="chevron-thin-left" size={24} color="#fff" style={{marginLeft:20,marginTop:20}}></Icon>
        </TouchableOpacity>
            </View>

        </ScrollView>
    </View>
  )
}

export default Sandwitch

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "black"
    }
})