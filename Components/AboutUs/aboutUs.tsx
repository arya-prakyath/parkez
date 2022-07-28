import React from "react";
import { View, Text, BackHandler } from "react-native";
import styles from "./aboutUsStyle";

interface aboutUsProps {
    onClickBackButton: (toScreen: string) => boolean;
}

export default function aboutUs({ onClickBackButton }: aboutUsProps) {
    BackHandler.addEventListener("hardwareBackPress", () => onClickBackButton("Home"))
    return (
        <View style={styles.container}>
            <Text allowFontScaling={false} style={styles.text}>About Screen Here</Text>
        </View>
    )
}