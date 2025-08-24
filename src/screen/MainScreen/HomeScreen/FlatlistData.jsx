import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';


const FlatData = [
  { id: 1, name: "How are you" },
  { id: 2, name: "I am fine" },
  { id: 3, name: "And you" },
  { id: 4, name: "Also fine" },
];


const App = () => {
  return (
    <View style={{ marginTop: 50 }}>
      <Text style={styles.header}>Component With FlatList</Text>

      <FlatList
        data={FlatData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <FlatlistItem pala={item} />}
      />
    </View>
  );
};


const FlatlistItem = (props) => {
  const item = props.pala;

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.grid}>{item.name}</Text>
      <Text style={styles.grid}>{item.id}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "green",
    margin: 10,
    padding: 10,
  },
  grid: {
    flex: 1,
    color: "black",
    textAlign: "center",
  },
});

// ✅ Correct Export
export default App;
