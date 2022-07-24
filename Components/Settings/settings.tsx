import React from "react";
import { View, Text, BackHandler } from "react-native";
import styles from "./settingsStyle";

interface settingsProps {
    onClickBackButton: (toScreen: string) => boolean;
}

export default function settings({ onClickBackButton }: settingsProps) {
    BackHandler.addEventListener("hardwareBackPress", () => onClickBackButton("Home"))
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Settings Screen Here</Text>
        </View>
    )
}