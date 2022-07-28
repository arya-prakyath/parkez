import React from "react";
import { View, Text, ToastAndroid } from "react-native";

export default function NoResults() {
    ToastAndroid.show("HERE", 100);
    return (
        <View style={{
            height: 100,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text allowFontScaling={false} style={{
                color: "#fff",
                fontSize: 25,
                fontWeight: "300",
                letterSpacing: 5
            }}>
                No Results
            </Text>
        </View>
    )
}