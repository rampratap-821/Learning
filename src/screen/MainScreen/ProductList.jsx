import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductDetails = () => {
    const route = useRoute()
  const { product } = route.params; // Ye wahi 'item' hai jo tumne bheja tha

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.category}>{product.category}</Text>
      <Text style={styles.price}>{product.currency} {product.price}</Text>
      <Text style={styles.desc}>{product.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding:4, },
  image: { width: '100%', height: 350,borderRadius:10  },
  name: { fontSize: 22, fontWeight: 'bold', marginVertical: 8 },
  category: { fontSize: 16, color: '#555' },
  price: { fontSize: 18, fontWeight: 'bold', marginVertical: 5, color: 'green' },
  desc: { fontSize: 14, color: '#666', marginTop: 10 }
});

export default ProductDetails;
