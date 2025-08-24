

import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
import { DASHBOARD } from '../../Navigation/NavigationString';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient'; // Gradient import
import { images } from '../../Utils/Images';
import { themes } from '../../Utils/colors';

const Button1 = () => {
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
   const theme = themes[0]; // Default Theme select kiya

  return (
    <LinearGradient
      colors={['#111213ff', '#b694a1ff']} // Gradient colors
      style={styles.container}
    >
      <View style={{marginTop:50,justifyContent:"center",alignSelf:"center",marginBottom:50}}>
        <Image 
        source={images[1].shopping} 
        style={{ width: 200, height: 200}} 
      />
      </View>
       
      <View style={styles.name}>
        <TextInput placeholder='Enter the name' />
      </View>

      <View style={styles.textinput}>
        <TextInput
          placeholder='Enter the password'
          secureTextEntry={!show}
          style={styles.input}
        />
        <TouchableOpacity style={styles.touch} onPress={() => setShow(!show)}>
          <Image
            source={
              show
                ? require('../../assets/image/eye.png')
                : require('../../assets/image/eye2.png')
            }
            style={styles.image}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
         style={{ backgroundColor: theme.colors.primary, padding:12,alignItems:"center",marginTop:20,borderRadius:6 }}
      onPress={() => navigation.navigate(DASHBOARD)}>
        <Text style={styles.LoginTest}>Login</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  textinput: {
    flexDirection: 'row',
    borderColor: 'black',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 6,
    padding: 1,
    shadowColor: 'black',
    elevation: 10,
  },
  image: {
    width: 40,
    maxHeight: 40,
    marginTop: 5,
  },
  input: {
    // flex: 1,
    width:"86%",
    // backgroundColor:"red"

  },
  touch: {
    height: 10,
    marginBottom: 40,
  },
  name: {
    borderColor: 'black',
    marginBottom: 20,
    fontSize: 15,
    borderRadius: 5,
    backgroundColor: 'white',
    padding: 2,
    paddingHorizontal: 12,
    shadowColor: 'black',
    elevation: 10,
  },
  LoginTest: {
    color: themes[0].colors.white,
    fontSize: 15,
    fontWeight: '700',
  },
});

export default Button1;
