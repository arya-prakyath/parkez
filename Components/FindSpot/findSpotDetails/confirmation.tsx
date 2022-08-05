import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { setCache } from "../../../Models/getSetCache";
import showAlert from "../../../Utils/alertBox";
import getFomattedDateTime from "../../../Utils/dateTimeFormatter";
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
    onClickConfirm: () => {};
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
    onClickConfirm,
}: confirmationProps) {
    return (
        <View style={styles.detailsContainer}>
            <Text allowFontScaling={false} style={styles.confirmationTitle}>Confirm to Book the Selected Spot </Text>
            <View style={styles.confirmationContainer}>
                <ScrollView showsVerticalScrollIndicator={true} persistentScrollbar={true}>
                    <View style={styles.seperator}></View>
                    <View style={styles.confirmationItem}>
                        <Text allowFontScaling={false} style={styles.confirmationHead}>Spot Name</Text>
                        <Text allowFontScaling={false} style={styles.confirmationData}>{spotName}</Text>
                    </View>

                    <View style={styles.confirmationItem}>
                        <Text allowFontScaling={false} style={styles.confirmationHead}>Spot Address</Text>
                        <Text allowFontScaling={false} style={styles.confirmationData}>{spotAddress}</Text>
                    </View>
                    <View style={styles.seperator}></View>

                    <View style={styles.confirmationItem}>
                        <Text allowFontScaling={false} style={styles.confirmationHead}>Vehicle Plate Number</Text>
                        <Text allowFontScaling={false} style={styles.confirmationData}>{vehicleNumber}</Text>
                    </View>

                    <View style={styles.confirmationItem}>
                        <Text allowFontScaling={false} style={styles.confirmationHead}>Vehicle Type</Text>
                        <Text allowFontScaling={false} style={styles.confirmationData}>{vehicleType}</Text>
                    </View>

                    <View style={styles.confirmationItem}>
                        <Text allowFontScaling={false} style={styles.confirmationHead}>Vehicle Owner's Phone</Text>
                        <Text allowFontScaling={false} style={styles.confirmationData}>{ownersPhone.substring(0, 5)} {ownersPhone.substring(5,)}</Text>
                    </View>
                    <View style={styles.seperator}></View>

                    <View style={styles.confirmationItem}>
                        <Text allowFontScaling={false} style={styles.confirmationHead}>Spot Entry On</Text>
                        <Text allowFontScaling={false} style={styles.confirmationData}>{getFomattedDateTime(fromDateTime.toString())}</Text>
                    </View>

                    <View style={styles.confirmationItem}>
                        <Text allowFontScaling={false} style={styles.confirmationHead}>Spot Exit On</Text>
                        <Text allowFontScaling={false} style={styles.confirmationData}>{getFomattedDateTime(toDateTime.toString())}</Text>
                    </View>
                    <View style={styles.seperator}></View>
                </ScrollView>
            </View>

            <View style={styles.nextBackButtonContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => setProgressTracker(2)}>
                    <Image
                        source={require("../../../assets/buttons/backButton.png")}
                        style={styles.backAndNextButtonIcon}
                    />
                    <Text allowFontScaling={false} style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.nextButton} onPress={() => {
                    const spotDetails = {
                        spotName: spotName,
                        spotAddress: spotAddress,
                        vehicleNumber: vehicleNumber,
                        vehicleType: vehicleType,
                        ownersPhone: ownersPhone,
                        fromDateTime: fromDateTime,
                        toDateTime: toDateTime,
                    };
                    setCache("bookingProgressCache", '1');
                    setCache("bookedSpot", JSON.stringify(spotDetails));
                    showAlert({
                        title: "Booking Successful !",
                        message: `The selected spot is booked for you\n\nFrom - ${getFomattedDateTime(fromDateTime.toString())}\n\nTo - ${getFomattedDateTime(toDateTime.toString())}\n\nGoto home page to generate the QR code for verification on arrival.`,
                        buttonText: "Goto Home",
                        onPressButton: () => { onClickConfirm() }
                    })
                }}>
                    <Text allowFontScaling={false} style={styles.nextButtonText}>Book</Text>
                    <Image
                        source={require("../../../assets/buttons/nextButton.png")}
                        style={styles.backAndNextButtonIcon}
                    />
                </TouchableOpacity>
            </View >
        </View >
    )
}
