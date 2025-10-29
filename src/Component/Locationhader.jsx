


// import React from 'react';
// import { Text, StyleSheet, Image, ScrollView, View, Dimensions } from 'react-native';
// const { width, height } = Dimensions.get('window');

// function Locationhader() {
//   return (
//     <View style={styles.container}>
//       <Image source={require('../assets/image/mor1.png')} style={styles.image1} />
//       <Image source={require('../assets/image/mor2.png')} style={styles.image2} />
//       <Image source={require('../assets/image/mor3.png')} style={styles.image3} />
//       <View style={styles.textWrapper}>
//         <Text style={styles.headerText}>It's Easier to Just </Text>
//         <Text style={styles.headerText}> Takea Motorcycle</Text>
//         <Text style={[styles.headerText, { right: 70 ,fontSize:20}]}>Taxi</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#027AFD',
   

//   },
//   textWrapper: {
//     position: 'absolute',
//     top: 100,
//     right: 80,
//     width: '100%',
//     alignItems: 'center',
//   },
//   headerText: {
//     fontSize: 25,
//     fontWeight: 'bold',
//     color: '#fff',
//     zIndex: 3,
//     textAlign: 'center',
//     marginBottom: 4,
//   },
//   image1: {
//     position: 'absolute',
//     left: 30,
//     width: 40,
//     height: 40,
//     borderRadius: 10,
//     marginTop: 30,
//   },
//   image2: {
//     width: 100,
//     height: 70,
//     marginTop: 132,
//     left: 142,
//     zIndex:3,
//   },
//   image3: {
//     position: 'absolute',
//     width: width * 0.35,
//     height: width * 0.35,
//     left: width * 0.60,
//     marginTop: height * 0.09,
//     borderRadius: 15,
//   },
// });

// export default Locationhader;
 

import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

function Locationhader() {
  return (
    <View style={styles.container}>
      {/* सिर्फ टेक्स्ट */}
      <View style={styles.textWrapper}>
        <Text style={styles.headerText}>It's Easier to Just</Text>
        <Text style={styles.headerText}>Take a Motorcycle</Text>
        <Text style={[styles.headerText, styles.subText]}>Taxi</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingBottom: 36,
    backgroundColor: '#027AFD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWrapper: {
    marginTop: 80, // text नीचे से थोड़ा gap में आए
    alignItems: 'center',
  },
  headerText: {
    fontSize: 25,
    fontWeight: "800",
    color: '#fff',
    textAlign: 'center',
    marginBottom: 4,
  },
  subText: {
    fontSize: 20,
    fontWeight: '600',
  },
});

export default Locationhader;
