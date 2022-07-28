import React from "react";
import { View, Text, TouchableOpacity, ToastAndroid, BackHandler } from "react-native";
import styles from "./walletStyle";

interface walletProps {
    onClickBackButton: (toScreen: string) => boolean;
}

export default function Wallet({onClickBackButton}: walletProps) {
    BackHandler.addEventListener("hardwareBackPress", () => onClickBackButton("Home"));
    return (
        <View style={styles.container}>
            <View style={styles.paymentMethodContainer}>
                <Text allowFontScaling={false} style={styles.paymentMethodNotAdded}>You have not added any UPI account</Text>
                <TouchableOpacity style={styles.addPaymentMethod} onPress={() =>
                    ToastAndroid.showWithGravity(
                        "TODO: Add UPI",
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM,
                    )}>
                    <Text allowFontScaling={false} style={styles.addPaymentMethodText}>Add UPI</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.paymentMethodContainer}>
                <Text allowFontScaling={false} style={styles.paymentMethodNotAdded}>You have not addded any Mobile Wallet</Text>
                <TouchableOpacity style={styles.addPaymentMethod} onPress={() =>
                    ToastAndroid.showWithGravity(
                        "TODO: Add Wallet",
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM,
                    )}>
                    <Text allowFontScaling={false} style={styles.addPaymentMethodText}>Add Wallet</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.paymentMethodContainer}>
                <Text allowFontScaling={false} style={styles.paymentMethodNotAdded}>You have not added any Net Banking account</Text>
                <TouchableOpacity style={styles.addPaymentMethod} onPress={() =>
                    ToastAndroid.showWithGravity(
                        "TODO: Add Net Banking",
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM,
                    )}>
                    <Text allowFontScaling={false} style={styles.addPaymentMethodText}>Add Net Banking</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}