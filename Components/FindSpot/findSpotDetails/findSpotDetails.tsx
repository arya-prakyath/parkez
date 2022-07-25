import React, { useState } from "react";
import { View, Text, ToastAndroid, TouchableWithoutFeedback, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./findSpotDetailsStyle";

interface spotCostType {
    id: number,
    cost: string,
    interval: string,
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

interface findSpotDetailsProps {
    selectedSpot: spotItemType | undefined;
    setSelectedSpot: React.Dispatch<React.SetStateAction<spotItemType | undefined>>;
    setOpenSpotDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FindSpotDetails({
    selectedSpot,
    setSelectedSpot,
    setOpenSpotDetails,
}: findSpotDetailsProps) {
    const [progressTracker, setProgressTracker] = useState(0);

    return (
        <View style={styles.container}>
            {progressTracker === 0 && (
                <View style={styles.detailsContainer}>
                    <View style={styles.spotNameAndAddressContainer}>
                        <Text style={styles.spotName}>{selectedSpot?.name}</Text>
                        <Text style={styles.spotAddress}>{selectedSpot?.address}</Text>
                    </View>
                    <View style={styles.seperator}></View>

                    <View style={styles.spotNotesContainer}>
                        <Text style={styles.spotNotes}>{selectedSpot?.extraNotes}</Text>
                    </View>
                    <View style={styles.seperator}></View>

                    <View style={styles.spotCountContainer}>
                        <View style={styles.spotCountItem}>
                            <View style={styles.spotCountBox}>
                                <Text style={styles.spotCountText}>{selectedSpot?.spotsTotalCount}</Text>
                            </View>
                            <Text style={styles.spotCountHeadText}>Total Spots Count</Text>
                        </View>

                        <View style={styles.spotCountItem}>
                            <View style={[styles.spotCountBox, styles.availableBox]}>
                                <Text style={styles.spotCountTextDark}>{selectedSpot?.spotsAvailableCount}</Text>
                            </View>
                            <Text style={styles.spotCountHeadText}>Available Spots Count</Text>
                        </View>

                        <View style={styles.spotCountItem}>
                            <View style={[styles.spotCountBox, styles.consumedBox]}>
                                <Text style={styles.spotCountTextDark}>{selectedSpot?.spotsConsumedCount}</Text>
                            </View>
                            <Text style={styles.spotCountHeadText}>Consumed Spots Count</Text>
                        </View>
                    </View>
                    <View style={styles.seperator}></View>

                    <View style={styles.costPlansContainer}>
                        <Text style={styles.costPlansHeader}>Available Cost Plans:</Text>
                        <ScrollView showsVerticalScrollIndicator={true} persistentScrollbar={true}>
                            {selectedSpot?.cost.map(costItem => (
                                <Text style={styles.costPlansText}>{`₹ ${costItem.cost} / ${costItem.interval}`}</Text>
                            ))}
                        </ScrollView>
                    </View>

                    <View style={styles.nextBackButtonContainer}>
                        <TouchableOpacity style={styles.backButton} onPress={() => {
                            setSelectedSpot(undefined);
                            setOpenSpotDetails(false);
                        }}>
                            <Image
                                source={require("../../../assets/buttons/backButton.png")}
                                style={styles.backAndNextButtonIcon}
                            />
                            <Text style={styles.backButtonText}>Back</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.nextButton} onPress={() => setProgressTracker(1)}>
                            <Text style={styles.nextButtonText}>Next</Text>
                            <Image
                                source={require("../../../assets/buttons/nextButton.png")}
                                style={styles.backAndNextButtonIcon}
                            />
                        </TouchableOpacity>
                    </View >
                </View >
            )}
        </View >
    )
}