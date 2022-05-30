import React, { useState ,useReducer} from "react";
import { StyleSheet,View,Text } from "react-native";


import ColorCounter from "../Components/ColorCounter";


const COLOR_VALUE_INCREASE =15;
const reducer=(state,action)=>{
  switch (action.type) {
    case "change_red":
      return state.red+action.payload<0||state.red+action.payload>255 ? state : 
      {...state,red:state.red+action.payload}
      
    case "change_green":
      return state.green+action.payload<0||state.green+action.payload>255 ? state : 
      {...state,green:state.green+action.payload}
    case "change_blue":
      return state.blue+action.payload<0||state.blue+action.payload>255 ? state : 
      {...state,blue:state.blue+action.payload}
  
    default:
      return state;
  }
}

const SquareScreen = () => {

const [state,dispatch]=useReducer(reducer,{red:0,green:0,blue:0})
const {red,green,blue}=state;
// console.log(state.red)
// console.log(state)
// console.log({red,green,blue});

  return (
    <View>
      <View>
        <ColorCounter 
        onIncrease={()=>dispatch({type:"change_red",payload:COLOR_VALUE_INCREASE})}
        onDecrease={()=>dispatch({type:"change_red",payload:-1*COLOR_VALUE_INCREASE})}
        colorName="Red"
        />
        <ColorCounter 
        onIncrease={()=>dispatch({type:"change_green",payload:COLOR_VALUE_INCREASE})}
        onDecrease={()=>dispatch({type:"change_green",payload:-1*COLOR_VALUE_INCREASE})}
        colorName="Green"/>
        <ColorCounter  
        onIncrease={()=>dispatch({type:"change_blue",payload:COLOR_VALUE_INCREASE})}
        onDecrease={()=>dispatch({type:"change_blue",payload:-1*COLOR_VALUE_INCREASE})}
        colorName="Blue"/>

        <View style={{width:100,height:100,backgroundColor:`rgb(${red},${green},${blue})`}}>
        </View>
        </View>
    </View>
  )
}

export default SquareScreen

const styles = StyleSheet.create({})






// let COLOR_VALUE=10;
// const SquareScreen = ()=>{
//     const [red, setRed] = useState(0);
//     const [green, setGreen] = useState(0);
//     const [blue, setBlue] = useState(0);

//     const handleLimit = (color, change) => {
//         switch (color) {
//           case 'red':
//             red + change > 255 || red + change < 0 ? null : setRed(red + change);
//             return;
//           case 'green':
//             green + change > 255 || green + change < 0
//               ? null
//               : setGreen(green + change);
//             return;
//           case 'blue':
//             blue + change > 255 || blue + change < 0
//               ? null
//               : setBlue(blue + change);
//             return;
//           default:
//             return;
//         }
//       };

// console.log(red)
// console.log(green)
// console.log(blue)
//     return(
//         <View>
//         <ColorCounter 
//         onIncrease={()=>handleLimit("red",COLOR_VALUE)}
//         onDecrease={()=>handleLimit('red',-1*COLOR_VALUE)}
//         colorName="Red"
//         />
//         <ColorCounter 
//         onIncrease={()=>handleLimit('green',COLOR_VALUE)}
//         onDecrease={()=>handleLimit('green',-1*COLOR_VALUE)}
//         colorName="Green"/>
//         <ColorCounter  
//         onIncrease={()=>handleLimit('blue',COLOR_VALUE)}
//         onDecrease={()=>handleLimit('blue',-1*COLOR_VALUE)}
//         colorName="Blue"/>

//         <View style={{width:100,height:100,backgroundColor:`rgb(${red},${green},${blue})`}}>
//         </View>
//         </View>
//     )
// }

// export default SquareScreen;
// const styles = StyleSheet.create({

// })