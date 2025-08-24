import React, { use, useState } from 'react';
import{ Button, StyleSheet, Text, TextInput, View }from 'react-native';

const App =()=>{
    const[name,setName]= useState("");
    const[email,setEmail]= useState("");
    const[password,setPassword]= useState("");
    const[display,setDisplay] =useState(false)
    const setreset = ()=>{
       setDisplay(false);
        setEmail("");
        setName("");
        setPassword("")
    };
    return(
        <View>
            <Text style ={{fontSize:20,textAlign:"center",marginTop:20}}>Simple Form in React Native</Text>
             <TextInput
             style={instyle.testInput} 
             placeholder='Enter the value'
             onChangeText={(test)=>setName(test)}
             value={name}
             /> 
              <TextInput
             style={instyle.testInput} 
             placeholder='Enter User password'
             secureTextEntry={true}
             onChangeText={(test)=>setPassword(test)}
             value={password}
             /> 
               <TextInput
             style={instyle.testInput} 
             placeholder='Enter User Email'
             onChangeText={(test)=>setEmail(test)}
             value={email}
             /> 
             <View style={{marginBottom:10,margin:20}}>
             <Button color ={"green"}title='Print Value'
             onPress={()=>setDisplay(true)}/>  
             </View> 
             <View style={{marginBottom:10,margin:20}}>

             <Button color ={"black"} title='Clear Value'onPress={setreset}/>       
             </View> 
             <View>
                {
                    display?
                    <View>
                        <Text style={{fontSize:15}}>Enter User Name :{name}</Text>
                        <Text style={{fontSize:15}}>Enter User Password :{password}</Text>
                        <Text style={{fontSize:15}}>Enter User Email :{email}</Text>

                    </View>
                    :null
                }
             </View>

        </View>
    )
}

const instyle = StyleSheet.create({
    testInput:{ 
        fontSize:18,
        borderWidth:2,
        borderColor:"black",
        margin:10
    }
})
export default App;


