import React, { useRef, useState } from "react";
import { TouchableOpacity, View, Image, Text, ScrollView, ToastAndroid, } from "react-native";
import AddVehicleItem from "./addVehicleItem";
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
    contact: string;
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

interface addVehicleInfoProps {
    setProgressTracker: React.Dispatch<React.SetStateAction<number>>;
    selectedSpot: spotItemType | undefined;
    setSelectedSpot: React.Dispatch<React.SetStateAction<spotItemType | undefined>>;
    setOpenSpotDetails: React.Dispatch<React.SetStateAction<boolean>>;
    setVehiclesToBook: React.Dispatch<React.SetStateAction<vehicleType[]>>;
    vehiclesToBook: vehicleType[];
}

export default function AddVehicleInfo({
    selectedSpot,
    setProgressTracker,
    setSelectedSpot,
    setOpenSpotDetails,
    setVehiclesToBook,
    vehiclesToBook,
}: addVehicleInfoProps) {
    const scrollBar = useRef();
    const [vehicleItemsCount, setVehicleItemsCount] = useState(1);

    const removeVehicle = (index: number) => {
        const listLength = vehiclesToBook.length;

        if (listLength === 1) {
            setVehicleItemsCount(1);
            return;
        }

        for (let i = index; i < listLength - 1; i++) {
            vehiclesToBook[i] = vehiclesToBook[i + 1];
        }
        vehiclesToBook.splice(listLength - 1, 1);
        setVehicleItemsCount(vehicleItemsCount - 1);
        setVehiclesToBook(vehiclesToBook);
    }

    for (let i = 0; i < vehicleItemsCount; i++) {
        if (typeof vehiclesToBook[i] === "undefined") {
            vehiclesToBook.push({
                vehicleType: "",
                phoneNumber: "",
                vehicleName: "",
                vehiclePlateNumber: "",
            })
        }
    }

    let vehicleItems = [];
    for (let i = 0; i < vehicleItemsCount; i++) {
        vehicleItems.push(
            <>
                <AddVehicleItem index={i}
                    setVehiclesToBook={setVehiclesToBook}
                    vehiclesToBook={vehiclesToBook}
                    onClickRemove={(index: number) => removeVehicle(index)}
                />
                <View style={styles.seperatorThick}></View>
            </>
        );
    }

    return (
        <View style={styles.detailsContainer}>
            <View style={styles.spotNameAndAddressContainer}>
                <View style={styles.spotNameAndCostContainer}>
                    <Text allowFontScaling={false} style={styles.spotName}>
                        {selectedSpot?.name}
                    </Text>
                    <Text allowFontScaling={false} style={styles.spotCost}>
                        {`₹ ${selectedSpot?.cost[0].cost} / ${selectedSpot?.cost[0].interval}`}
                    </Text>
                </View>
                <Text allowFontScaling={false} style={styles.spotAddress} lineBreakMode="tail">
                    {selectedSpot?.address}
                </Text>
            </View>
            <View style={styles.seperator}></View>

            {/* <View style={styles.spotNotesContainer}>
                <Text allowFontScaling={false} style={styles.spotNotes}>
                    {selectedSpot?.extraNotes}
                </Text>
            </View>
            <View style={styles.seperator}></View> */}

            <View style={styles.spotCountContainer}>
                <View style={styles.spotCountItem}>
                    <View style={styles.spotCountBox}>
                        <Text allowFontScaling={false} style={styles.spotCountText}>
                            {selectedSpot?.spotsTotalCount}
                        </Text>
                    </View>
                    <Text
                        allowFontScaling={false}
                        style={styles.spotCountHeadText}
                    >
                        Total Spots
                    </Text>
                </View>

                <View style={styles.spotCountItem}>
                    <View style={[styles.spotCountBox, styles.availableBox]}>
                        <Text
                            allowFontScaling={false}
                            style={styles.spotCountTextDark}
                        >
                            {selectedSpot?.spotsAvailableCount}
                        </Text>
                    </View>
                    <Text
                        allowFontScaling={false}
                        style={styles.spotCountHeadText}
                    >
                        Available Spots
                    </Text>
                </View>

                <View style={styles.spotCountItem}>
                    <View style={[styles.spotCountBox, styles.consumedBox]}>
                        <Text
                            allowFontScaling={false}
                            style={styles.spotCountTextDark}
                        >
                            {selectedSpot?.spotsConsumedCount}
                        </Text>
                    </View>
                    <Text
                        allowFontScaling={false}
                        style={styles.spotCountHeadText}
                    >
                        Consumed Spots
                    </Text>
                </View>
            </View>
            <View style={styles.seperator}></View>

            <Text allowFontScaling={false} style={styles.vehicleInfoHeader}>Enter Vehicle Details:</Text>
            <View style={styles.vehicleListContainer}>
                <ScrollView showsVerticalScrollIndicator={true} persistentScrollbar={true} style={{ margin: 1 }}>
                    {vehicleItems}
                </ScrollView>

                <TouchableOpacity style={styles.addVehiclesButtonContainer} onPress={() => {
                    if (vehicleItemsCount === 3)
                        ToastAndroid.showWithGravity("You can add maximum 3 vehicles", ToastAndroid.SHORT, ToastAndroid.CENTER);
                    else
                        setVehicleItemsCount(vehicleItemsCount + 1);
                }}>
                    <Text style={styles.addVehicleButton}>Add Vehicle</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.nextBackButtonContainer}>
                <TouchableOpacity style={styles.backButton}
                    onPress={() => {
                        setSelectedSpot(undefined);
                        setOpenSpotDetails(false);
                    }}>
                    <Image
                        source={require("../../../assets/buttons/backButton.png")}
                        style={styles.backAndNextButtonIcon}
                    />
                    <Text allowFontScaling={false} style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.nextButton} onPress={() => {
                    let err = false;
                    vehiclesToBook.map((vehicle, index) => {
                        if (!err) {
                            if (vehicle.vehicleType === "" && vehicle.vehiclePlateNumber === "" && vehicle.phoneNumber === ""){
                                ToastAndroid.showWithGravity(`Please enter Vehicle-${index + 1} details`, ToastAndroid.SHORT, ToastAndroid.CENTER);
                                err = true;
                            }
                            else if (vehicle.vehicleType === "") {
                                ToastAndroid.showWithGravity(`Please specify the Type of Vehicle-${index + 1}`, ToastAndroid.SHORT, ToastAndroid.CENTER);
                                err = true;
                            }
                            else if (!vehicle.vehiclePlateNumber.match("^[A-Za-z]{2}[ -][0-9]{1,2}(?: [A-Za-z])?(?: [A-Za-z]*)? [0-9]{4}$")) {
                                ToastAndroid.showWithGravity(`Please enter a valid Plate Number for Vehicle-${index + 1}`, ToastAndroid.SHORT, ToastAndroid.CENTER);
                                err = true;
                            }
                            else if (vehicle.phoneNumber.length !== 10) {
                                ToastAndroid.showWithGravity(`Please enter a valid Phone Number for Vehicle-${index + 1}`, ToastAndroid.SHORT, ToastAndroid.CENTER);
                                err = true;
                            }
                        }
                    })

                    if (!err)
                        setProgressTracker(2)
                }}>
                    <Text allowFontScaling={false} style={styles.nextButtonText}>Next</Text>
                    <Image
                        source={require("../../../assets/buttons/nextButton.png")}
                        style={styles.backAndNextButtonIcon}
                    />
                </TouchableOpacity>
            </View >
        </View >
    )
}