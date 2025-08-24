import React, { useState } from "react";
import { View, Button, StyleSheet, Text } from 'react-native';

const MakeCustomModal = () => {
  const [show, setShow] = useState(false)
  return (
    <View style={styles.main}>
      {
        show ?
          <View style={styles.modals}>
            <View style={styles.body}>
              <Text style={{ textAlign: "center" }}>CODE </Text>
              <Button title="Close Modal" onPress={() => setShow(false)} />

            </View>
          </View>
          : null}
      <Button title="Open modal" onPress={() => setShow(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modals: {
    flex: 1,
    backgroundColor: "rgba(200, 212, 33, 0.2)",
    justifyContent: "center",
    alignItems: "center"
  },
  body: {
    backgroundColor: "skyblue",
    width: 200,
    height: 200,
    borderRadius: 10,
    shadowColor: "black",
    elevation: 10,
    justifyContent: "flex-end",
  }
});

export default MakeCustomModal;

