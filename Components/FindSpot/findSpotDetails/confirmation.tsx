import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./findSpotDetailsStyle";

interface confirmationProps {
    setProgressTracker: React.Dispatch<React.SetStateAction<number>>;
    spotName: string;
    spotAddress: string;
    vehicleNumber: string;
    vehicleType: string;
    ownersPhone: string;
    fromDateTime: Date;
    toDateTime: Date;
}
export default function Confirmation({
    setProgressTracker,
    spotName,
    spotAddress,
    vehicleNumber,
    vehicleType,
    ownersPhone,
    fromDateTime,
    toDateTime,
}: confirmationProps) {
    return (
        <View style={styles.detailsContainer}>
            <Text style={styles.confirmationTitle}>Confirm to Book the Selected Spot </Text>
            <View style={styles.confirmationItem}>
                <Text style={styles.confirmationHead}>Spot Name</Text>
                <Text style={styles.confirmationData}>{spotName}</Text>
            </View>

            <View style={styles.confirmationItem}>
                <Text style={styles.confirmationHead}>Spot Address</Text>
                <Text style={styles.confirmationData}>{spotAddress}</Text>
            </View>
            <View style={styles.seperator}></View>

            <View style={styles.confirmationItem}>
                <Text style={styles.confirmationHead}>Vehicle Plate Number</Text>
                <Text style={styles.confirmationData}>{vehicleNumber}</Text>
            </View>

            <View style={styles.confirmationItem}>
                <Text style={styles.confirmationHead}>Vehicle Type</Text>
                <Text style={styles.confirmationData}>{vehicleType}</Text>
            </View>

            <View style={styles.confirmationItem}>
                <Text style={styles.confirmationHead}>Vehicle Owner's Phone</Text>
                <Text style={styles.confirmationData}>{ownersPhone}</Text>
            </View>
            <View style={styles.seperator}></View>

            <View style={styles.confirmationItem}>
                <Text style={styles.confirmationHead}>Spot Entry On</Text>
                <Text style={styles.confirmationData}>{fromDateTime.toString().split("GMT")[0]}</Text>
            </View>

            <View style={styles.confirmationItem}>
                <Text style={styles.confirmationHead}>Spot Exit On</Text>
                <Text style={styles.confirmationData}>{toDateTime.toString().split("GMT")[0]}</Text>
            </View>

            <View style={styles.nextBackButtonContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => setProgressTracker(2)}>
                    <Image
                        source={require("../../../assets/buttons/backButton.png")}
                        style={styles.backAndNextButtonIcon}
                    />
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.nextButton} onPress={() => { }}>
                    <Text style={styles.nextButtonText}>Book</Text>
                    <Image
                        source={require("../../../assets/buttons/nextButton.png")}
                        style={styles.backAndNextButtonIcon}
                    />
                </TouchableOpacity>
            </View >
        </View>
    )
}
