import React from "react";
import { Text, View, Image, TouchableOpacity, } from 'react-native'
import { DRAWERNAVIGATION } from "../../Navigation/NavigationString";

const DashBoard = ({navigation}) => {
 
  return (
    <View style={{flex:1}} >

    <TouchableOpacity 
    style={{backgroundColor:"white",borderRadius:10,margin:20,padding:20,marginTop:20,shadowColor:"black",elevation:15}}
    onPress={()=>navigation.navigate(DRAWERNAVIGATION)}
    >
      <Text style={{fontSize:20,textAlign:"center"}}>TruckersHealthCare</Text>
    </TouchableOpacity>
          <View style={{flexDirection:"row",margin:5,flexWrap:"wrap"}}>
            <View 
            style={{backgroundColor:"white",height:180,width:155,borderRadius:10,shadowColor:"black",elevation:20,marginTop:10,
              justifyContent:"center",alignItems:"center",margin:15
            }}>
              <Image source={require('../../assets/image/Computer.gif')}
                style={{ height: 70, width: 70 }}
            />
            <Text style={{color:"violet"}}> coding </Text>
            </View>

             <View 
            style={{backgroundColor:"white",height:180,width:155,borderRadius:10,shadowColor:"black",elevation:20,marginTop:10,
              justifyContent:"center",alignItems:"center"

            }}>
              <Image source={require('../../assets/image/Twiter.png')}
                style={{ height: 70, width: 70 }}
            />
            <Text>UpendraTwiter</Text>
            </View>

             <View 
            style={{backgroundColor:"white",height:180,width:155,borderRadius:10,shadowColor:"black",elevation:20,marginTop:10,
              justifyContent:"center",alignItems:"center",margin:15,

            }}>
              <Image source={require('../../assets/image/Police.png')}
                style={{ height: 70, width: 70 }}
            />
            <Text style={{color:"blue"}}>RAM</Text>
            </View>

             <View 
            style={{backgroundColor:"white",height:180,width:155,borderRadius:10,shadowColor:"black",elevation:20,marginTop:10,
              justifyContent:"center",alignItems:"center"

            }}>
              <Image source={require('../../assets/image/Truck.gif')}
                style={{ height: 70, width: 70 }}
            />
            <Text style={{color:"green"}}>DAKSH</Text>
            </View>

          </View>

      
    </View>
  )
}

export default DashBoard;



