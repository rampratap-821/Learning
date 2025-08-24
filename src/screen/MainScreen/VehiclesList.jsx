import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const VehiclesList = () => {
    const route = useRoute()
    const { Ram } = route.params
    return (
        <View style={styles.container}>
            <Image source={{ uri: Ram.image }} style={styles.image} />
            <Text style={styles.name}>{Ram.name}</Text>
            <Text style={styles.category}>{Ram.category}</Text>
            <Text style={styles.price}>Price - {Ram.price} </Text>
            <Text style={styles.Description}> {Ram.description} </Text>
            <Text style={{textAlign:"center",fontSize:50,color:"pink",marginTop:30  }}>CEO Pala</Text>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        margin:8,
    

    },
    image: {
width:340,
height:300,
resizeMode:"cover",
borderRadius:20,
shadowColor:"black",
elevation:10,

    },
    name: {
        fontSize:25,
        fontWeight:700

    },
    category: {
        color:"indigo"

    },
    price: {
        fontSize:20,
        color:"green"

    }
})

export default VehiclesList