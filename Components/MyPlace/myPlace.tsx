import React from "react";
import { View, Text, TouchableOpacity, ToastAndroid, BackHandler } from "react-native";
import styles from "./myPlaceStyle";

interface myPlaceProps {
    onClickBackButton: (toScreen: string) => boolean;
}

export default function Wallet({ onClickBackButton }: myPlaceProps) {
    BackHandler.addEventListener("hardwareBackPress", () => onClickBackButton("Home"));
    return (
        <View style={styles.container}>
            <Text allowFontScaling={false} style={styles.title}>My Apartments Screen Here</Text>
        </View>
    )
}