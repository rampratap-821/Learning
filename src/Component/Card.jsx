import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

function Card() {
  return (
    <View style={styles.wrapper}>
    
      <Text style={styles.heading}>Packages</Text>

      <View style={styles.row}>

        <View style={styles.card}>
          <Image
            source={require('../assets/image/pex2.jpg')}
            style={styles.image}
          />
          <Text style={styles.title}>Home Shifting</Text>
          <Text style={styles.subtitle}>Paket keliling pantai dengan kami</Text>
        </View>

        <View style={[styles.card, { marginRight: 0 }]}>
          <Image
            source={require('../assets/image/pex3.jpg')}
            style={styles.image}
          />
          <Text style={styles.title}>Office Shifting</Text>
          <Text style={styles.subtitle}>
            Paket keliling desa nusantara dengan kami!
          </Text>
        </View>
      </View>

    
      <View style={{ marginTop: height * 0.03 }}>
        <Text style={styles.bottomHeading}>Offers & Discounts</Text>
      </View>
      <View style={{ marginBottom: height * 0.02 }}>
        <Image
          source={require('../assets/image/dis5.png')}
          style={styles.decorationImage}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: width * 0.04,
    marginBottom: height * 0.43,
  },
  heading: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    marginBottom: height * 0.01,
    color: '#222',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: height * 0.02,
  },
  card: {
    flex: 1,
    marginRight: width * 0.03,
    height: height * 0.23,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 2,
    padding: width * 0.03,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '60%',
    borderRadius: 8,
    marginBottom: height * 0.01,
  },
  title: {
    fontWeight: 'bold',
    fontSize: width * 0.04,
    marginBottom: height * 0.005,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: width * 0.033,
    color: '#555',
    textAlign: 'center',
  },
  bottomHeading: {
    // backgroundColor:"red",
    marginTop:-20,
    fontSize: width * 0.045,
    fontWeight: 'bold',
    marginBottom: height * 0.01,
    color: '#222',
  },
  decorationImage: {
    width: '100%',
    marginTop:-40,
    borderRadius: 12,
    resizeMode: "contain",
  },
});

export default Card;
