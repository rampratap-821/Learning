// import React, { Component } from "react";
// import{ Button, Text, TextInput, View }from 'react-native';

// class Student extends Component{
//     render(){
        
//         return(
//             <View>
//             <Text style ={{fontSize:30,color:"green"}}>Student Name : {this.props.name}</Text>
           
//             </View>
//         )
//     }
// }
// export default Student;
// //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // pahela code hai ye uper bala file banaker hai 
// //_______________________________________________________________________________________________________________________
// import React, { Component } from "react";
// import{ Button, Text, TextInput, View }from 'react-native';
// import Student from "./React -Native/student";

// class App extends Component{
//     constructor(){
//         super();
//         this.state={
//             fname:"Rampratap",
//             lname:" Singh"
//         }
//     }
//     updateName(val1){
//         this.setState({fname:val1});
//        // this.setState({fname:"Sachin"});

//     }
//     render(){
//         return(
//             <View>
//             <Text style ={{fontSize:30,textAlign:"center",color:"red"}}>{this.state.fname}{this.state.lname}</Text>
//             <TextInput style= {{borderWidth:2,borderColor:"blue",margin:20}}
//             placeholder="Enter the value"
//             onChangeText={(test)=>this.updateName(test)} 
//             />
//             <Button title="click me"></Button>
//             <Student name ={this.state.fname}/>
//             </View>
//         )
//     }
// }
// export default App; 


import { View, Text } from 'react-native'
import React from 'react'

const student = () => {
  return (
    <View>
      <Text>student</Text>
    </View>
  )
}

export default student