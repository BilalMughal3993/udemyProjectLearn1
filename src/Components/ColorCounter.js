import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'




const ColorCounter = ({colorName,onIncrease,onDecrease}) => {
  return (
    <View>
      <Text>{colorName}</Text>
      <Button onPress={()=>{onIncrease()}} title={`Increase ${colorName}`}/>
      <Button onPress={()=>{onDecrease()}} title={`Decrease ${colorName}`}/>
    </View>
  )
}

export default ColorCounter

const styles = StyleSheet.create({})