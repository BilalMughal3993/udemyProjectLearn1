import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ComponentScreen = () => {
const name ="Muhammad Bilal"
  return (
    <View style={styles.main}>
      <Text style={styles.header}>ComponentScreen</Text>
      <Text style={styles.nameS}>My name is {name}</Text>
    </View>
  )
}

export default ComponentScreen

const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"pink"

    },
    header:{
        fontSize:30
    },
    nameS:{
        fontSize:10
    }
})