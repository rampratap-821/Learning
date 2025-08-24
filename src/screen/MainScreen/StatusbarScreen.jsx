import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, StatusBar, Button } from 'react-native';

const StatusBarScreen = () => {
    const [showBarStyle, setShowBarStyle] = useState(false)
    const [press, setPress] = useState("lite-content")
    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <StatusBar
                backgroundColor={"green"}
                barStyle={press}
                hidden={showBarStyle}
            />
            <Button title="Toggle" onPress={() => setShowBarStyle(!showBarStyle)} />
            <Button title="press" onPress={() => setPress("dark-content")} />

        </View>
    )
}

export default StatusBarScreen;
