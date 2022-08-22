import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ToastAndroid, BackHandler, ScrollView } from "react-native";
import myPlaceData from "../../Models/myPlaceData";
import showAlert from "../../Utils/alertBox";
import AddVehicleItem from "../FindSpot/findSpotDetails/addVehicleItem";
import styles from "./myPlaceStyle";

interface vehicleType {
    vehiclePlateNumber: string;
    vehicleName: string;
    vehicleType: string;
    phoneNumber: string;
}

interface myPlaceProps {
    onClickBackButton: (toScreen: string) => boolean;
}

export default function Wallet({ onClickBackButton }: myPlaceProps) {
    BackHandler.addEventListener("hardwareBackPress", () => onClickBackButton("Home"));

    const [vehicleItemsCount, setVehicleItemsCount] = useState(1);
    const [vehiclesToBook, setVehiclesToBook] = useState<vehicleType[]>([{
        vehiclePlateNumber: "",
        vehicleName: "",
        vehicleType: "",
        phoneNumber: "",
    }]);

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
        <View style={styles.container}>
            <View style={styles.myPlaceHeaderContainer}>
                <View style={styles.myPlaceHeaderNameAndEdit}>
                    <Text allowFontScaling={false} style={styles.myPlaceHeaderItem}>
                        {myPlaceData?.name}
                    </Text>
                    <TouchableOpacity style={styles.editButton} onPress={() => ToastAndroid.show("TODO: Edit", 1000)}>
                        <Image
                            source={require("../../assets/buttons/edit.png")}
                            style={styles.editButtonIcon}
                        />
                        <Text allowFontScaling={false} style={styles.editButtonText}>Edit</Text>
                    </TouchableOpacity>
                </View>
                <Text allowFontScaling={false} style={styles.myPlaceHeaderItem}>
                    {myPlaceData?.phone}
                </Text>
                <Text allowFontScaling={false} style={styles.myPlaceHeaderAddress} lineBreakMode="tail">
                    Address: {myPlaceData?.address}
                </Text>
            </View>

            <View style={styles.seperator}></View>

            <Text allowFontScaling={false} style={styles.vehicleInfoHeader}>Enter Vehicle Details:</Text>
            <View style={styles.vehicleListContainer}>
                <ScrollView showsVerticalScrollIndicator={true} persistentScrollbar={true} style={{ margin: 1 }}>
                    {vehicleItems}
                </ScrollView>

                <TouchableOpacity style={styles.addVehiclesButtonContainer} onPress={() => {
                    if (vehicleItemsCount === 5)
                        ToastAndroid.showWithGravity("You can add maximum 5 vehicles", ToastAndroid.SHORT, ToastAndroid.CENTER);
                    else
                        setVehicleItemsCount(vehicleItemsCount + 1);
                }}>
                    <Text style={styles.addVehicleButton}>Add Vehicle</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.nextBackButtonContainer}>
                <TouchableOpacity style={styles.backButton}
                    onPress={() => onClickBackButton("Home")}>
                    <Image
                        source={require("../../assets/buttons/backButton.png")}
                        style={styles.backAndNextButtonIcon}
                    />
                    <Text allowFontScaling={false} style={styles.backButtonText}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.nextButton} onPress={() => {
                    let err = false;
                    vehiclesToBook.map((vehicle, index) => {
                        if (!err) {
                            if (vehicle.vehicleType === "" && vehicle.vehiclePlateNumber === "" && vehicle.phoneNumber === "") {
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
                    if (!err) {
                        showAlert({ title: "Vehicles Booked !", message: "", buttonText: "Ok", onPressButton: () => onClickBackButton("Home") })
                        // TODO
                    }
                }}>
                    <Text allowFontScaling={false} style={styles.nextButtonText}>Book</Text>
                    <Image
                        source={require("../../assets/buttons/nextButton.png")}
                        style={styles.backAndNextButtonIcon}
                    />
                </TouchableOpacity>
            </View >
        </View >
    )
}