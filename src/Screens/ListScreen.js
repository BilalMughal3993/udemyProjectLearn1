import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React from 'react'

const ListScreen = () => {
    const data =[{
        id:"1",
        name :"Bilal"
    },
    {
        id:"2",
        name :"Zawar"
    },
    {
        id:"3",
        name :"Daniyal"
    },
    {
        id:"4",
        name :"Awais"
    }]
  return (
    <FlatList 
    keyExtractor={item=>{item.id}}
    data={data}

    renderItem={({item})=>{
        return(<Text> {item.name}</Text> 
    )}} />


  )
}

export default ListScreen

const styles = StyleSheet.create({})