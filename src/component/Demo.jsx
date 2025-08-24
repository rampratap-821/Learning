


import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

const Demo  = () => {
  const [inputValue, setInputValue] = useState('');

  const handleButtonPress = () => {
    alert(`You entered: ${inputValue}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Upendra Singh</Text>
      <TextInput
        style={styles.input}
        placeholder="number"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <TouchableOpacity
        onPress={handleButtonPress}
        style={styles.innercontaner}
      >
        <Text style={{ color: "#fff" }}>Submit now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 6,
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 10,
  },
  innercontaner: {
    backgroundColor: "blue",
    padding: 10,
    paddingHorizontal: 110,
    borderRadius: 6
  }
});

export default Demo;