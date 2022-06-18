import React from "react";
import { View, Text } from "react-native";
import styles from "./settingsStyle";

export default function settings (){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Settings Screen Here</Text>
        </View>
    )
}