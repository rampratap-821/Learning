import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Heder from '../../Component/Heder';
import Card from '../../Component/Card';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const HederScreen = () => {
  const navigation = useNavigation();

  const images = [
    { id: 1, name: 'Truck', src: require('../../assets/image/truck.png') },
    { id: 2, name: 'Bike', src: require('../../assets/image/truck1.png') },
    { id: 3, name: 'Trcuk', src: require('../../assets/image/truck2.png') },
    { id: 4, name: 'dumfer', src: require('../../assets/image/truck3.png') },
    { id: 5, name: 'Truck', src: require('../../assets/image/truck.png') },
    { id: 6, name: 'Bike', src: require('../../assets/image/truck1.png') },
    { id: 7, name: 'Trcuk', src: require('../../assets/image/truck2.png') },
    { id: 8, name: 'dumfer', src: require('../../assets/image/truck3.png') },
  ];

  const [search, setSearch] = useState('');

  const filteredImages = images.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      
        <Heder />

        {/* Search Bar */}
        
        <View style={styles.searchBar}>
          <Image
            source={require('../../assets/image/location.png')}
            style={styles.locationIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Location..."
            placeholderTextColor="#888"
            value={search}
            onChangeText={(text) => setSearch(text)}
          />
        </View>
<ScrollView showsVerticalScrollIndicator={false}>
        {/* Truck Images List */}
        <FlatList
          data={filteredImages}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20, marginTop: 50 }}
          renderItem={({ item }) => (
            <View style={styles.imageWrapper}>
              <TouchableOpacity onPress={() => navigation.navigate('Taxiboking')}>
                <Image source={item.src} style={styles.image} />
                <Text style={styles.imageName}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          )}
        />

        {/* Card Section */}
        <Card />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  searchBar: {
    position: 'absolute',
    top: 190,
    left: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 4,
  },
  locationIcon: { width: 22, height: 22, marginRight: 10, resizeMode: 'contain' },
  searchInput: { flex: 1, fontSize: 16 },
  imageWrapper: { alignItems: 'center', marginRight: 20 },
  image: { width: 44, height: 44, resizeMode: 'contain' },
  imageName: { marginTop: 5, fontSize: 13, color: '#333', fontWeight: '500' },
});

export default HederScreen;
