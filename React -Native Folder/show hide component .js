        import React, { useState } from "react";
        import{ Button, Text, View }from 'react-native';
        const App = ()=>{
            const[data,setData] = useState(false)
            return(
                <View style={{margin:10}}>
                    <Text style={{fontSize:20,textAlign:"center"}}>Welcome to React Native</Text>
                <View style={{margin:10}}>
        
                    <Button title=" show value" onPress={()=>setData(true)}/>
                </View>
                        
                <View style={{margin:10}}>
        
                    <Button title=" Hide value" onPress={()=>setData(false)}/>
                </View>
        
                <View style={{margin:10}}>
        
                    <Button title=" Show / hide value" onPress={()=>setData(!data)}/>
                </View>
        
        
                        {
                            data? <User/> :null
                        }
                </View>
            )
        };
        const User = ()=>{
            return(
                <View>
                    <Text style ={{fontSize:30,color:"green"}}>Hide Component</Text>
                </View>
            )
        }
        export default App;
