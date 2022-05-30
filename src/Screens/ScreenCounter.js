import { StyleSheet, Text, View ,Button} from 'react-native'
import React,{useReducer} from 'react'

const reducer=(state,action)=>{
    switch (action.type) {
      case "increase":
          return state.counter+action.payload<=0?state:{...state,counter:state.counter+action.payload}
      case "decrease":
          return state.counter+action.payload<0?state:{...state,counter:state.counter+action.payload}
  
    default : return state;
  }
}

const ScreenCounter = () => {
const[state,dispatch]=useReducer(reducer,{counter:0})
console.log(counter)
console.log(state)
const {counter}=state;
  return (
    <View>
      <View>
        <Button title='Increase' onPress={()=>dispatch({type:"increase",payload:1})}/>
        <Button title='Decrease' onPress={()=>dispatch({type:"decrease",payload:-1})}/>
      </View>
      <Text>Current Counter:</Text>
      <Text>{state.counter}</Text>
      
    </View>
  )
}

export default ScreenCounter

const styles = StyleSheet.create({})