import React, { useState ,useReducer} from "react";
import { StyleSheet,View,Text } from "react-native";


import ColorCounter from "../Components/ColorCounter";


const COLOR_VALUE_INCREASE =15;
const reducer=(state,action)=>{
  switch (action.colorToChange) {
    case "red":
      return state.red+action.amount<0||state.red+action.amount>255 ? state : 
      {...state,red:state.red+action.amount}
      
    case "green":
      return state.green+action.amount<0||state.green+action.amount>255 ? state : 
      {...state,green:state.green+action.amount}
    case "blue":
      return state.blue+action.amount<0||state.blue+action.amount>255 ? state : 
      {...state,blue:state.blue+action.amount}
  
    default:
      return state;
  }
}

const SquareScreen = () => {

const [state,dispatch]=useReducer(reducer,{red:0,green:0,blue:0})
const {red,green,blue}=state;
console.log(state.red)
console.log(state)
console.log({red,green,blue});

  return (
    <View>
      <View>
        <ColorCounter 
        onIncrease={()=>dispatch({colorToChange:"red",amount:COLOR_VALUE_INCREASE})}
        onDecrease={()=>dispatch({colorToChange:"red",amount:-1*COLOR_VALUE_INCREASE})}
        colorName="Red"
        />
        <ColorCounter 
        onIncrease={()=>dispatch({colorToChange:"green",amount:COLOR_VALUE_INCREASE})}
        onDecrease={()=>dispatch({colorToChange:"green",amount:-1*COLOR_VALUE_INCREASE})}
        colorName="Green"/>
        <ColorCounter  
        onIncrease={()=>dispatch({colorToChange:"blue",amount:COLOR_VALUE_INCREASE})}
        onDecrease={()=>dispatch({colorToChange:"blue",amount:-1*COLOR_VALUE_INCREASE})}
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