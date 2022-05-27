import React, { useState } from "react";
import { StyleSheet,View,Text } from "react-native";


import ColorCounter from "../Components/ColorCounter";

const COLOR_VALUE=10;
const SquareScreen = ()=>{
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    return(
        <View>
        <ColorCounter 
        onIncrease={()=>{setRed(red+COLOR_VALUE)}}
        onDecrease={()=>{setRed(red-COLOR_VALUE)}}
        colorName="Red"
        />
        <ColorCounter 
        onIncrease={()=>{setGreen(green+COLOR_VALUE)}}
        onDecrease={()=>{setGreen(green-COLOR_VALUE)}}
        colorName="Green"/>
        <ColorCounter  
        onIncrease={()=>{setBlue(blue+COLOR_VALUE)}}
        onDecrease={()=>{setBlue(blue-COLOR_VALUE)}}
        colorName="Blue"/>

        <View style={{width:100,height:100,backgroundColor:`rgb(${red},${green},${blue})`}}>
        </View>
        </View>
    )
}

export default SquareScreen;
const styles = StyleSheet.create({

})