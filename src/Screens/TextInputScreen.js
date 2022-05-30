import { StyleSheet, Text, View ,TextInput} from 'react-native'
import React,{useState} from 'react'

const TextInputScreen = () => {
const[name,setName]=useState('')
  return (
    <View>
      <Text>Enter Name </Text>
      <TextInput style={styles.input}
       autoCapitalize='false'
       autoCorrect ="false"
       value={name}
       onChangeText={(newValue)=>setName(newValue)}/>
       {name.length<4?<Text style={styles.tex}>Name must be 3 or greater then 3 letter</Text>:null}
    </View>
  )
}

export default TextInputScreen

const styles = StyleSheet.create({
    input:{
        margin:10,
        borderWidth:4,
        height:30,
    },
    tex:{
        color:"red",
        fontSize:20
    }

})