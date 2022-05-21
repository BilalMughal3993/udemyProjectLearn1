import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const ImageDetail = props => {
    console.log(props)
  return (

    <View>
      <Text>{props.title}</Text>
      <Image source={props.imageSource}/>
      <Text>{props.score}</Text>
    </View>
  )
}

export default ImageDetail

const styles = StyleSheet.create({})