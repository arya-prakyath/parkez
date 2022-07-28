import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, BackHandler, ToastAndroid } from "react-native";
import showAlert from "../../../Utils/alertBox";
import AddDateAndTime from "./addDateTime";
import AddTheSpot from "./addTheSpot";
import AddVehicleInfo from "./addVehicleInfo";
import Confirmation from "./confirmation";
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
    onClickConfirm: () => {};
}

export default function FindSpotDetails({
    selectedSpot,
    setSelectedSpot,
    setOpenSpotDetails,
    onClickConfirm,
}: findSpotDetailsProps) {
    const [progressTracker, setProgressTracker] = useState(0);

    const [vehicleNumberToBook, setVehicleNumberToBook] = useState("");
    const [phoneNumberToBook, setPhoneNumberToBook] = useState("");
    const [vehicleTypeToBook, setVehicleTypeToBook] = useState("");

    const [fromDateTime, setFromDateTime] = useState<Date>();
    const [toDateTime, setToDateTime] = useState<Date>();

    BackHandler.addEventListener("hardwareBackPress", () => {
        if (progressTracker === 0) {
            setOpenSpotDetails(false);
            setSelectedSpot(undefined);
        }
        else {
            setProgressTracker(progressTracker - 1);
            return true;
        }
    });
    return (
        <View style={styles.container}>
            {progressTracker === 0 && (
                <View style={styles.detailsContainer}>
                    <View style={styles.spotNameAndAddressContainer}>
                        <Text allowFontScaling={false} style={styles.spotName}>{selectedSpot?.name}</Text>
                        <Text allowFontScaling={false} style={styles.spotAddress}>{selectedSpot?.address}</Text>
                    </View>
                    <View style={styles.seperator}></View>

                    <View style={styles.spotNotesContainer}>
                        <Text allowFontScaling={false} style={styles.spotNotes}>{selectedSpot?.extraNotes}</Text>
                    </View>
                    <View style={styles.seperator}></View>

                    <View style={styles.spotCountContainer}>
                        <View style={styles.spotCountItem}>
                            <View style={styles.spotCountBox}>
                                <Text allowFontScaling={false} style={styles.spotCountText}>{selectedSpot?.spotsTotalCount}</Text>
                            </View>
                            <Text allowFontScaling={false} style={styles.spotCountHeadText}>Total Number of Spots</Text>
                        </View>

                        <View style={styles.spotCountItem}>
                            <View style={[styles.spotCountBox, styles.availableBox]}>
                                <Text allowFontScaling={false} style={styles.spotCountTextDark}>{selectedSpot?.spotsAvailableCount}</Text>
                            </View>
                            <Text allowFontScaling={false} style={styles.spotCountHeadText}>Available{'\n'}Spots</Text>
                        </View>

                        <View style={styles.spotCountItem}>
                            <View style={[styles.spotCountBox, styles.consumedBox]}>
                                <Text allowFontScaling={false} style={styles.spotCountTextDark}>{selectedSpot?.spotsConsumedCount}</Text>
                            </View>
                            <Text allowFontScaling={false} style={styles.spotCountHeadText}>Consumed Spots</Text>
                        </View>
                    </View>
                    <View style={styles.seperator}></View>

                    <View style={styles.costPlansContainer}>
                        <Text allowFontScaling={false} style={styles.costPlansHeader}>Available Cost Plans:</Text>
                        <ScrollView showsVerticalScrollIndicator={true} persistentScrollbar={true}>
                            {selectedSpot?.cost.map(costItem => (
                                <Text allowFontScaling={false} style={styles.costPlansText}>{`₹ ${costItem.cost} / ${costItem.interval}`}</Text>
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
                            <Text allowFontScaling={false} style={styles.backButtonText}>Back</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.nextButton} onPress={() => setProgressTracker(1)}>
                            <Text allowFontScaling={false} style={styles.nextButtonText}>Next</Text>
                            <Image
                                source={require("../../../assets/buttons/nextButton.png")}
                                style={styles.backAndNextButtonIcon}
                            />
                        </TouchableOpacity>
                    </View >
                </View >
            )}

            {progressTracker === 1 && (
                <AddVehicleInfo
                    spotName={selectedSpot ? selectedSpot.name : ""}
                    spotsTotalCount={selectedSpot ? selectedSpot.spotsTotalCount : 0}
                    spotsAvailableCount={selectedSpot ? selectedSpot.spotsAvailableCount : 0}
                    spotsConsumedCount={selectedSpot ? selectedSpot.spotsConsumedCount : 0}
                    setProgressTracker={setProgressTracker}
                    vehicleNumberToBook={vehicleNumberToBook}
                    setVehicleNumberToBook={setVehicleNumberToBook}
                    phoneNumberToBook={phoneNumberToBook}
                    setPhoneNumberToBook={setPhoneNumberToBook}
                    vehicleTypeToBook={vehicleTypeToBook}
                    setVehicleTypeToBook={setVehicleTypeToBook}
                />
            )}

            {progressTracker === 2 && (
                <AddDateAndTime
                    spotName={selectedSpot ? selectedSpot.name : ""}
                    spotsTotalCount={selectedSpot ? selectedSpot.spotsTotalCount : 0}
                    spotsAvailableCount={selectedSpot ? selectedSpot.spotsAvailableCount : 0}
                    spotsConsumedCount={selectedSpot ? selectedSpot.spotsConsumedCount : 0}
                    setProgressTracker={setProgressTracker}
                    fromDateTime={fromDateTime}
                    setFromDateTime={setFromDateTime}
                    toDateTime={toDateTime}
                    setToDateTime={setToDateTime}
                />
            )}

            {progressTracker === 3 &&
                <Confirmation 
                setProgressTracker={setProgressTracker}
                spotName={selectedSpot?.name ?? ""}
                spotAddress={selectedSpot?.address ?? ""}
                vehicleNumber={vehicleNumberToBook}
                vehicleType={vehicleTypeToBook}
                ownersPhone={phoneNumberToBook}
                fromDateTime={fromDateTime ?? new Date()}
                toDateTime={toDateTime ?? new Date()}
                onClickConfirm={onClickConfirm}
                />
            }

            {progressTracker === 4}
        </View >
    )
}