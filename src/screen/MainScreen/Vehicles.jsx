
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'  // Import
import { productss } from '../../Utils/DummyData'
import { VEHICLESLIST } from '../../Navigation/NavigationString'

const Vehicles = ({navigation}) => {
 
  return (
    <LinearGradient
      colors={['#080406ff', '#28465cff']}  // Gradient colors
      style={Styles.container}
    >
      <FlatList
        data={productss}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          <TouchableOpacity  style={Styles.FlatListBackground} onPress={()=>navigation.navigate(VEHICLESLIST,{Ram:item})}>
            <Image source={{ uri: item.image }} style={Styles.image} />
            <Text style={Styles.name}>{item.name}</Text>
            <Text style={Styles.category}>{item.category}</Text>
            <Text style={Styles.price}>Price - {item.price} {item.currency}</Text>
          </TouchableOpacity>
        }
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </LinearGradient>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  FlatListBackground: {
    flex: 1,
    backgroundColor: "white",
    shadowColor: "black",
    elevation: 5,
    margin: 10,
    borderRadius: 10,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
    borderRadius:10
  },
  name: {
    textAlign: "center",
    fontWeight: 700,
    marginTop: 5,
    fontSize:14,
    fontWeight:700
  },
  category: {
    textAlign: "center",
    color: "red",
    fontSize:12
  },
  price: {
    textAlign: "center",
    color: "green",
    padding: 5,
    fontSize:10

  }
})

export default Vehicles;