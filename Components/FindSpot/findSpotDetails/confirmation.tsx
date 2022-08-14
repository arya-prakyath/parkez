import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { setCache } from "../../../Models/getSetCache";
import showAlert from "../../../Utils/alertBox";
import getFomattedDateTime from "../../../Utils/dateTimeFormatter";
import styles from "./findSpotDetailsStyle";

interface spotCostType {
    id: number;
    cost: string;
    interval: string;
}

interface spotItemType {
    id: string;
    name: string;
    address: string;
    cost: spotCostType[];
    spotsTotalCount: number;
    spotsAvailableCount: number;
    spotsConsumedCount: number;
    extraNotes?: string | undefined;
    longitute: string;
    latitude: string;
    isFavorite: boolean;
}

interface vehicleType {
    vehiclePlateNumber: string;
    vehicleName: string;
    vehicleType: string;
    phoneNumber: string;
}

interface confirmationProps {
    setProgressTracker: React.Dispatch<React.SetStateAction<number>>;
    selectedSpot: spotItemType | undefined;
    vehiclesToBook: vehicleType[];
    fromDateTime: Date;
    toDateTime: Date;
    onClickConfirm: () => {};
}

export default function Confirmation({
    setProgressTracker,
    selectedSpot,
    vehiclesToBook,
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
                        <Text allowFontScaling={false} style={styles.confirmationData}>{selectedSpot?.name}</Text>
                    </View>

                    <View style={styles.confirmationItem}>
                        <Text allowFontScaling={false} style={styles.confirmationHead}>Spot Address</Text>
                        <Text allowFontScaling={false} style={styles.confirmationData}>{selectedSpot?.address}</Text>
                    </View>
                    <View style={styles.seperator}></View>

                    {vehiclesToBook.map((vehicles, index) => {
                        return (
                            <>
                                <View style={styles.confirmationItem}>
                                    <Text allowFontScaling={false} style={styles.confirmationHead}>Vehicle-{index + 1} Details</Text>
                                </View>

                                <View style={styles.confirmationItem}>
                                    <Text allowFontScaling={false} style={styles.confirmationData}>
                                        <Text allowFontScaling={false} style={styles.confirmationSubHead} >Type - </Text>
                                        {vehicles.vehicleType}
                                    </Text>
                                </View>

                                <View style={[styles.confirmationItem, styles.confirmationHeadRow]}>
                                    <Text allowFontScaling={false} style={styles.confirmationData}>
                                        <Text allowFontScaling={false} style={styles.confirmationSubHead} >Plate - </Text>
                                        {vehicles.vehiclePlateNumber}
                                    </Text>
                                </View>

                                <View style={[styles.confirmationItem, styles.confirmationHeadRow]}>
                                    <Text allowFontScaling={false} style={styles.confirmationData}>
                                        <Text allowFontScaling={false} style={styles.confirmationSubHead} >Phone - </Text>
                                        {vehicles.phoneNumber.substring(0, 5)} {vehicles.phoneNumber.substring(5,)}
                                    </Text>
                                </View>
                                <View style={styles.seperator}></View>
                            </>
                        )
                    })}

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
                        spotName: selectedSpot?.name,
                        spotAddress: selectedSpot?.address,
                        vehiclesToBook: vehiclesToBook,
                        fromDateTime: fromDateTime,
                        toDateTime: toDateTime,
                    };
                    setCache("bookingProgressCache", '1');
                    setCache("bookedSpot", JSON.stringify(spotDetails));
                    onClickConfirm();
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
