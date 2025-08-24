import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { products } from '../../Utils/DummyData'
import { useNavigation } from '@react-navigation/native'
import { DASHBOARD, PRODUCTLIST } from '../../Navigation/NavigationString'

const Categories = () => {

  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        numColumns={2}
        renderItem={({ item }) =>
          <TouchableOpacity
          onPress={() => navigation.navigate(PRODUCTLIST, { product: item })}
            style={styles.flatlistbackground}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.category}>{item.category}</Text>
            <View style={styles.price}>
              <Text style={styles.pricecolor}>{item.price}</Text>
              <Text style={styles.currency}> - {item.currency}</Text>
            </View>
          </TouchableOpacity>
        }
      />
    </View>
  )
}
const styles = StyleSheet.create({
  image: {
    width: 140,
    height: 100,
    borderRadius: 10,
    resizeMode: "cover"
  },
  container: {
    flex: 1,
    padding: 20,
  },
  flatlistbackground: {
    borderRadius: 10,
    shadowColor: "gray",
    elevation: 10,
    backgroundColor: "white",
    borderColor: "gray",
    margin: 10,
    flex: 1

  },
  name: {
    fontSize: 14,
    fontWeight: 700,
    textAlign: "center"
  },
  price: {
     fontSize: 14,
    flexDirection: "row",
     justifyContent:"center"
    
    

  },
  pricecolor: {
    color: "green",
    fontSize: 14
  },
  currency: {
  
     fontSize: 14,
    color: "green"
  },
  category: {
    textAlign: "center",
    color: "indigo"
  }

})
export default Categories
