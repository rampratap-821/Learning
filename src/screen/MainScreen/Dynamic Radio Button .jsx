
import React, { useEffect, useState } from "react";
import{ View,TouchableOpacity, Text, StyleSheet }from 'react-native';
const DynamicRadioButton = ()=>{
    const map =[
        {
            id:1,
            name:"css"
        },
         {
            id:2,
            name:"java"
        }, {
            id:3,
            name:"html"
        }, {
            id:4,
            name:"angular"
        }, {
            id:5,
            name:"react"
        },
    ]
    const[salectRadio,setsalectRadio] =useState(0)
    return(
        <View style={styles.main}>
           {
            map.map((item)=> <TouchableOpacity  onPress={()=>setsalectRadio(item.id)}>
                <View style={styles.staight}>
                    

                    <View style ={styles.radio}> 
                        {
                            salectRadio===item.id?  <View style ={styles.bg}></View>:null
                        }

                          </View>

                    <Text style={styles.test}>{item.name}</Text>

                </View>
            </TouchableOpacity>
)
           }
              
        </View>
    )
}  
const styles = StyleSheet.create({
    main:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    test:{
     fontSize:25,
     color:"skyblue"
    },
    radio:{
        borderColor:"green",
        borderWidth:2,
        width:30,
        height:30,
        borderRadius:15,
    },
    staight:{
        flexDirection:"row",
        alignItems:"center",
    },
    bg:{
        backgroundColor:"red",
        width:20,
        height:20,
        borderRadius:10,
        margin:3
    }

})
export default DynamicRadioButton;