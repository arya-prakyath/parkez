import React from "react";
import { View, Text } from "react-native";
import styles from "./favoriteSpotsStyle";

export default function favoriteSpots (){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Favorite Spots Screen Here</Text>
        </View>
    )
}