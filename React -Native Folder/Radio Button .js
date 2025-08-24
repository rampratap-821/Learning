import React, { useEffect, useState } from "react";
import{ View,TouchableOpacity, Text, StyleSheet }from 'react-native';
const RadioData = ()=>{
    const[salectRadio,setsalectRadio] =useState(0)
    return(
        <View style={styles.main}>
            <TouchableOpacity onPress={()=>setsalectRadio(1)}>
                <View style={styles.staight}>
                    

                    <View style ={styles.radio}> 
                        {
                            salectRadio===1?  <View style ={styles.bg}></View>:null
                        }

                          </View>

                    <Text style={styles.test}>Radio 1</Text>

                </View>
            </TouchableOpacity>


 <TouchableOpacity onPress={()=>setsalectRadio(2)}>
                <View style={styles.staight}>
                    

                    <View style ={styles.radio}> 
                       {
                            salectRadio===2?  <View style ={styles.bg}></View>:null
                        }


                          </View>

                    <Text style={styles.test}>Radio 1</Text>

                </View>
            </TouchableOpacity>


              
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
export default RadioData;