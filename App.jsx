import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const App = () => {
  const [inputValue, setInputValue] = React.useState('');

  const handleButtonPress = () => {
    alert(`You entered: ${inputValue}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Upendra Singh</Text>
      <TextInput
        style={styles.input}
        placeholder="Type something..."
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button title="Submit" onPress={handleButtonPress} />
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
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 10,
  },
});

export default App;