import React, { useEffect, useState } from "react";
import{ Button, Text, View }from 'react-native';
const App = ()=>{
    const[count,setCount] = useState(0)
    const [data,setData]  = useState(100)
   // useEffect(()=>{
   //     alert(count)
   // },[count])
   //   useEffect(()=>{
   //     alert(data)
    //},[data])
    return(
        <View>
            <Text style = {{fontSize:30}}>  {count} : Useffect{data}</Text>
            <Button title="click value" onPress={()=>setCount(count +1)}/>
            <Button title="click value" onPress={()=>setData(data +1)}/>
                <User info ={{count,data}}/>

        </View>
    )
};
const User =(props)=>{
    useEffect(()=>{
        alert(props.info.count)
    } ,[props.info.count])
     useEffect(()=>{
        alert(props.info.data)
    } ,[props.info.data])
    return(
        <View>
            <Text style = {{fontSize:30,color:"orange"}}> Count :{props.info.count} </Text>
            <Text style = {{fontSize:30,color:"orange"}}> Data  :{props.info.data} </Text>

        </View>
    )
}
export default App;
