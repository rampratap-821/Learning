import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import NextHeader from '../../Component/NextHeader';
import { useNavigation } from '@react-navigation/native';
import colors from '../../Utils/Colors';

const { width } = Dimensions.get('window');

// ✅ Card data array
const cards = [
  {
    id: '1',
    title: 'Outstation',
    info: '10 km away | 12:50',
    description: 'Comfortable long rides',
    image: require('../../assets/image/pps1.png'),
    bgColor: '#fff',
    shadowColor: '#000',
  },
  {
    id: '2',
    title: 'Local Service',
    info: '2 min away | 12:34',
    description: 'Affordable motorcycle rides',
    image: require('../../assets/image/pps.png'),
    bgColor: colors.secondary,
    shadowColor: colors.secondary,
  },
  {
    id: '3',
    title: 'Outstation Plus',
    info: '100 km away | 12:58',
    description: 'Long comfortable trips',
    image: require('../../assets/image/pps1.png'),
    bgColor: '#fff',
    shadowColor: '#000',
  },
  {
    id: '4',
    title: 'Local Express',
    info: '5 min away | 12:40',
    description: 'Fast local rides',
    image: require('../../assets/image/pps.png'),
    bgColor: colors.secondary,
    shadowColor: colors.secondary,
  },
];

function Taxiboking() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <NextHeader />

      {/* Scrollable card list */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {cards.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.card,
              {
                backgroundColor: item.bgColor,
                shadowColor: item.shadowColor,
              },
            ]}
            onPress={() => {
              if (item.title.includes('Local')) {
                navigation.navigate('LocationCon');
              }
            }}
            activeOpacity={0.9}
          >
            <Image source={item.image} style={styles.cardImage} />
            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardInfo}>{item.info}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },

  scrollContent: {
    paddingTop: 20,
    paddingBottom: 40,
    alignItems: 'center',
  },

  card: {
    flexDirection: 'row',
    borderRadius: 18,
    padding: 15,
    marginBottom: 15,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 8,
    elevation: 6,
    alignItems: 'center',
    width: width * 0.9,
  },

  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 15,
  },

  cardText: {
    flex: 1,
    justifyContent: 'center',
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
    marginBottom: 4,
  },

  cardInfo: {
    fontSize: 13,
    color: '#555',
    marginBottom: 4,
  },

  cardDescription: {
    fontSize: 14,
    color: '#333',
  },
});

export default Taxiboking;
