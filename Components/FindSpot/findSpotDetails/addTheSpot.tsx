import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, BackHandler } from "react-native";
import styles from "./findSpotDetailsStyle";

interface addTheSpotProps {
    setProgressTracker: React.Dispatch<React.SetStateAction<number>>;
}

export default function AddTheSpot() {
    return (
        <View style={styles.detailsContainer}>
        </View>
    )
}