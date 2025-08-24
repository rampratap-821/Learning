import React, { useEffect, useState } from "react";
import{ Button, Text, View }from 'react-native';
const App =()=>{
    const[show,setShow]=useState(false)
    return(
        <View>
            <Text style ={{fontSize:15,textAlign:"center"}}>useffect for unmount component</Text>
            <Button title="toggle" onPress={()=>setShow(!show)}/>
            {
                show?<User/>:null
            }
        </View>
    )
}
const User =()=>{
     let Timer = setInterval(() => {
       alert("Timer called") 
    }, 2000);
    useEffect(()=>{
       // alert("useffect called")
       return()=>{
       // alert("Called")
       clearInterval(Timer)
       }
    })
    return(
        <View>
            <Text style ={{fontSize:30,color:"red"}}>Student</Text>
        </View>
    )
}
export default App;