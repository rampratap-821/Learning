import React, { use, useState } from 'react';
import{ Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View }from 'react-native';

const GridListData =() =>{
    const User =[
        {
            id:1,
            name:"Omveer"
        },
        {
            id:2,
            name:"Upendra"
        }, {
            id:3,
            name:"Pushpendra"
        }, {
            id:4,
            name:"Rampratap"
        },
    ]
    return (
        <View>
            <Text style={{fontSize:20,textAlign:"center",marginTop:50}}>Welcom to Rampratap </Text>
            <View style ={{flex:1,flexDirection:"row",flexWrap:'wrap'}}>
          {
            User.map((item)=><Text style ={instyle.grid}>{item.name}</Text>)
          }

            </View>

        </View>
    )
} 
  const instyle =StyleSheet.create({
    grid:{
     color:"yellow",
     backgroundColor:"black",
     margin:5,
     padding:10,
     textAlign:"center",
     width:100,
     height:120


    }
  })

export default GridListData;


