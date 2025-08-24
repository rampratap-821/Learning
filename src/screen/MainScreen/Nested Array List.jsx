import React from "react";
import { SectionList, Text, Vibration, View }from'react-native' ; 

const NestedArrayList = ()=>{
    const User = [
        {
            id:1,
            name:"VIRENDRA PAL SINGH",
            data:["Rampratap","Pushpendra","Upendra","Omveer"]
        },
           {
            id:2,
            name:"SOMVEER",
            data:["Vinod","Sonu"]
        },   {
            id:3,
            name:"JASVEER",
            data:["Vipin","Sachine","Gurpreet"]
        },   {
            id:4,
            name:"VASANTRAM",
            data:["1 - Kandahiya","2 - Sani"]
        },
    ];
    return(
    <View>
        <Text style ={{fontSize:30,textAlign:"center",color:"red"}}>Nested Array List</Text>
        <SectionList
        sections={User}
        renderItem={({item})=>(<Text style={{fontSize:20,color:"green",marginLeft:20}}>{item}</Text>)}
        renderSectionHeader={({section:{name}})=>(
            <Text style ={{fontSize:20,color:"blue"}}>{name}</Text>
        )}
        />
    </View>
    )
}
export default NestedArrayList;