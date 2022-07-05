import React, { useState } from "react";
import { View, Text, ToastAndroid, TouchableWithoutFeedback } from "react-native";
import styles from "./findSpotStyle";

interface spotProps {
    name: string;
    address: string;
    cost: string;
}

export default function FindSpotItem({ name, address, cost }: spotProps) {
    const [pressed, setPressed] = useState(false);

    return (
        <TouchableWithoutFeedback onPress={() => {
            setPressed(true);
            ToastAndroid.showWithGravity(
                name,
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
            )
        }}>
            <View style={pressed ? [styles.spots, styles.spotspressed] : styles.spots}>
                <View style={styles.spotsNameAndCost}>
                    <Text style={styles.spotName}>{name}</Text>
                    <Text style={styles.spotCost}>{cost}</Text>
                </View>
                <Text style={styles.spotAddress}>{address}</Text>
            </View>
        </TouchableWithoutFeedback >
    )
}