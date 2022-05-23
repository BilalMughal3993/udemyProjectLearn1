import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import ImageDetail from '../Components/ImageDetail'

const ImageScreen = () => {
  return (
      <View>
    <ImageDetail
    title="Montain"
    imageSource={require('../../assets/images/mountain.jpg')}
    score="1"/>
    
    <ImageDetail
    title="Beach"
    imageSource={require("../../assets/images/beach.jpg")}
    score="2"/>
    <ImageDetail
    title="Forest"
    imageSource={require("../../assets/images/forest.jpg")}
    score="3"/>
    </View>
  )
}

export default ImageScreen

const styles = StyleSheet.create({})