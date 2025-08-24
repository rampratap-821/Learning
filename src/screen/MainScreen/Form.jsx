import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from 'react-native'

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "white", borderWidth: 2, borderColor: "black", margin: 10, borderRadius: 8, width: 335, height: 115,
          shadowColor: "black", elevation: 20
        }}>
        <View style={{ flexDirection: "row" }}>

          <Text style={styles.test}> Rampratap</Text>
          <Text style={styles.Date}> 3/07/2025  10:30</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10, marginLeft: 10 }}>
          <Text style={{ fontSize: 15, color: "black" }}> ID :</Text>
          <Text style={{ color: "gray" }}> MH/IDN/21/02441</Text>
        </View>


        <View style={{ flexDirection: "row" }}>

          <View style={{ flexDirection: "row", margin: 10 }} >

            <Text> Mob :</Text>
            <Text style={{ color: "gray" }}> 8218253516</Text>

          </View>
          <View style={{ marginLeft: 90, marginBottom: 10 }}>
            <Image source={require("../Demo/src/assets/image/eye.png")} style={{
              height: 40, width: 40, borderRadius: 20,
              shadowColor: "black", elevation: 20

            }} />
          </View>
        </View>
      </View>
//////////////////////////
      <View
        style={{
          backgroundColor: "white", borderWidth: 2, borderColor: "black", margin: 10, borderRadius: 8, width: 335, height: 115,
          shadowColor: "black", elevation: 20

        }}>
        <View style={{ flexDirection: "row" }}>

          <Text style={styles.test}> Daksh</Text>
          <Text style={styles.Date3}> 3/07/2025  10:30</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10, marginLeft: 10 }}>
          <Text style={{ fontSize: 15, color: "black" }}> ID :</Text>
          <Text style={{ color: "gray" }}> MH/IDN/21/02441</Text>
        </View>


        <View style={{ flexDirection: "row" }}>

          <View style={{ flexDirection: "row", margin: 10 }} >

            <Text> Mob :</Text>
            <Text style={{ color: "gray" }}> 8218253516</Text>

          </View>
          <View style={{ marginLeft: 90, marginBottom: 10 }}>
            <Image source={require("../Demo/src/assets/image/eye.png")} style={{
              height: 40, width: 40, borderRadius: 20,
              shadowColor: "black", elevation: 20

            }} />
          </View>
        </View>
      </View>
/////////////////////////////
      <View
        style={{
          backgroundColor: "white", borderWidth: 2, borderColor: "black", margin: 10, borderRadius: 8, width: 335, height: 115,
          shadowColor: "black", elevation: 20

        }}>
        <View style={{ flexDirection: "row" }}>

          <Text style={styles.test}> Upendra</Text>
          <Text style={styles.Date2}> 3/07/2025  10:30</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10, marginLeft: 10 }}>
          <Text style={{ fontSize: 15, color: "black" }}> ID :</Text>
          <Text style={{ color: "gray" }}> MH/IDN/21/02441</Text>
        </View>


        <View style={{ flexDirection: "row" }}>

          <View style={{ flexDirection: "row", margin: 10 }} >

            <Text> Mob :</Text>
            <Text style={{ color: "gray" }}> 8218253516</Text>

          </View>
          <View style={{ marginLeft: 90, marginBottom: 10 }}>
            <Image source={require("../Demo/src/assets/image/eye.png")} style={{
              height: 40, width: 40, borderRadius: 20,
              shadowColor: "black", elevation: 20

            }} />
          </View>
        </View>
      </View>
////////////////////////////////////
      <View
        style={{
          backgroundColor: "white", borderWidth: 2, borderColor: "black", margin: 10, borderRadius: 8, width: 335, height: 115,
          shadowColor: "black", elevation: 20

        }}>
        <View style={{ flexDirection: "row" }}>

          <Text style={styles.test}> Pushpendra</Text>
          <Text style={styles.Date}> 3/07/2025  10:30</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10, marginLeft: 10 }}>
          <Text style={{ fontSize: 15, color: "black" }}> ID :</Text>
          <Text style={{ color: "gray" }}> MH/IDN/21/02441</Text>
        </View>


        <View style={{ flexDirection: "row" }}>

          <View style={{ flexDirection: "row", margin: 10 }} >

            <Text> Mob :</Text>
            <Text style={{ color: "gray" }}> 8218253516</Text>

          </View>
          <View style={{ marginLeft: 90, marginBottom: 10 }}>
            <Image source={require("../Demo/src/assets/image/eye.png")} style={{
              height: 40, width: 40, borderRadius: 20,
              shadowColor: "black", elevation: 20

            }} />
          </View>
        </View>
      </View>
//////////////////////
      <View
        style={{
          backgroundColor: "white", borderWidth: 2, borderColor: "black", margin: 10, borderRadius: 8, width: 335, height: 115,
          shadowColor: "black", elevation: 20

        }}>
        <View style={{ flexDirection: "row" }}>

          <Text style={styles.test}> Omveer</Text>
          <Text style={styles.Date4}> 3/07/2025  10:30</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10, marginLeft: 10 }}>
          <Text style={{ fontSize: 15, color: "black" }}> ID :</Text>
          <Text style={{ color: "gray" }}> MH/IDN/21/02441</Text>
        </View>


        <View style={{ flexDirection: "row" }}>

          <View style={{ flexDirection: "row", margin: 10 }} >

            <Text> Mob :</Text>
            <Text style={{ color: "gray" }}> 8218253516</Text>

          </View>
          <View style={{ marginLeft: 90, marginBottom: 20 }}>
            <Image source={require("../Demo/src/assets/image/eye.png")} style={{
              height: 40, width: 40, borderRadius: 20, backgroundColor: "gray",
              shadowColor: "black", elevation: 20,

            }} />
          </View>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  test: {
    fontSize: 20,
    marginLeft: 10
  },
  Date: {
    color: "orange",
    marginLeft: 70,
    fontSize: 12,
    marginTop: 10
  },
        Date2:{
    color:"orange",
    marginLeft:95,
    fontSize:12,
    marginTop:10
  },
        Date3:{
    color:"orange",
    marginLeft:122,
    fontSize:12,
    marginTop:10
  },
        Date4:{
    color:"orange",
    marginLeft:108,
    fontSize:12,
    marginTop:10
  },
})
export default App; 