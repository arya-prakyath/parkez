import React from "react";
import { View, Text, BackHandler } from "react-native";
import styles from "./supportStyles";

interface supportProps {
    onClickBackButton: (toScreen: string) => boolean;
}

export default function support({ onClickBackButton }: supportProps) {
    BackHandler.addEventListener("hardwareBackPress", () => onClickBackButton("Home"))
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Support Screen Here</Text>
        </View>
    )
}