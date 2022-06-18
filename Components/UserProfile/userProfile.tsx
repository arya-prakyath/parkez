import React from "react";
import { View, Text } from "react-native";
import styles from "./userProfileStyle";

export default function userProfile (){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>User Profile Screen Here</Text>
        </View>
    )
}