import React, { useState } from "react";
import { StyleSheet,View,Text } from "react-native";


import ColorCounter from "../Components/ColorCounter";



let COLOR_VALUE=10;
const SquareScreen = ()=>{
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const handleLimit = (color, change) => {
        switch (color) {
          case 'red':
            red + change > 255 || red + change < 0 ? null : setRed(red + change);
            return;
          case 'green':
            green + change > 255 || green + change < 0
              ? null
              : setGreen(green + change);
            return;
          case 'blue':
            blue + change > 255 || blue + change < 0
              ? null
              : setBlue(blue + change);
            return;
          default:
            return;
        }
      };

console.log(red)
console.log(green)
console.log(blue)
    return(
        <View>
        <ColorCounter 
        onIncrease={()=>handleLimit("red",COLOR_VALUE)}
        onDecrease={()=>handleLimit('red',-1*COLOR_VALUE)}
        colorName="Red"
        />
        <ColorCounter 
        onIncrease={()=>handleLimit('green',COLOR_VALUE)}
        onDecrease={()=>handleLimit('green',-1*COLOR_VALUE)}
        colorName="Green"/>
        <ColorCounter  
        onIncrease={()=>handleLimit('blue',COLOR_VALUE)}
        onDecrease={()=>handleLimit('blue',-1*COLOR_VALUE)}
        colorName="Blue"/>

        <View style={{width:100,height:100,backgroundColor:`rgb(${red},${green},${blue})`}}>
        </View>
        </View>
    )
}

export default SquareScreen;
const styles = StyleSheet.create({

})