import React from "react";
import { View, Text } from "react-native";
import styles from "./myVehicleStyle";

export default function myVehicle (){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>My Vehicle Screen Here</Text>
        </View>
    )
}