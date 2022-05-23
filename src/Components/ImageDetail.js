import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const ImageDetail = ({title,imageSource,score}) => {
    // console.log(props)
  return (

    
    <View>
        <Image source={imageSource} style={{width:100,height:100}}resizeMode="cover"/>
      <Text>{title}</Text>
      
      <Text>{score}</Text>
    </View>
  )
}

export default ImageDetail

const styles = StyleSheet.create({})