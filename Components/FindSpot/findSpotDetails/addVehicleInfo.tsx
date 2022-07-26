import React, { useState } from "react";
import { TouchableOpacity, View, Image, Text, TextInput } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import vehiclesListData from "../../../Models/vehiclesListData";
import vehicleTypesData from "../../../Models/vehicleTypesData";
import styles from "./findSpotDetailsStyle";

interface vehicleTypesType {
    label: string;
    value: string;
}

interface vehicleType {
    vehiclePlateNumber: string;
    vehicleName: string;
    vehicleType: string;
    phoneNumber: string;
}

interface addVehicleInfoProps {
    spotName: string;
    spotsTotalCount: number;
    spotsAvailableCount: number;
    spotsConsumedCount: number;
    setProgressTracker: React.Dispatch<React.SetStateAction<number>>;
    vehicleNumberToBook: string;
    setVehicleNumberToBook: React.Dispatch<React.SetStateAction<string>>;
    phoneNumberToBook: string;
    setPhoneNumberToBook: React.Dispatch<React.SetStateAction<string>>;
    vehicleTypeToBook: string;
    setVehicleTypeToBook: React.Dispatch<React.SetStateAction<string>>;
}

export default function AddVehicleInfo({
    spotName,
    spotsTotalCount,
    spotsAvailableCount,
    spotsConsumedCount,
    setProgressTracker,
    vehicleNumberToBook,
    setVehicleNumberToBook,
    phoneNumberToBook,
    setPhoneNumberToBook,
    vehicleTypeToBook,
    setVehicleTypeToBook,
}: addVehicleInfoProps) {
    const [isFocus, setIsFocus] = useState(false);
    const [isFocusChooseVehicle, setIsFocusChooseVehicle] = useState(false);
    const [selectedVehicle, setSelectedVehicle] = useState<string>();
    const vehicleTypes: vehicleTypesType[] = vehicleTypesData;
    const vehiclesList: vehicleType[] = vehiclesListData;
    let vehiclesListLabelsAndValues: {label: string, value: vehicleType}[] = [];
    vehiclesList.map(item => {
        vehiclesListLabelsAndValues.push({label: item.vehicleName, value: item});
    })

    return (
        <View style={styles.detailsContainer}>
            <View style={styles.spotNameAndAddressContainer}>
                <Text style={styles.spotName}>{spotName}</Text>
            </View>

            <View style={styles.spotCountContainer}>
                <View style={styles.spotCountItem}>
                    <View style={styles.spotCountBox}>
                        <Text style={styles.spotCountText}>{spotsTotalCount}</Text>
                    </View>
                    <Text style={styles.spotCountHeadText}>Total Number of Spots</Text>
                </View>

                <View style={styles.spotCountItem}>
                    <View style={[styles.spotCountBox, styles.availableBox]}>
                        <Text style={styles.spotCountTextDark}>{spotsAvailableCount}</Text>
                    </View>
                    <Text style={styles.spotCountHeadText}>Available{'\n'}Spots</Text>
                </View>

                <View style={styles.spotCountItem}>
                    <View style={[styles.spotCountBox, styles.consumedBox]}>
                        <Text style={styles.spotCountTextDark}>{spotsConsumedCount}</Text>
                    </View>
                    <Text style={styles.spotCountHeadText}>Consumed Spots</Text>
                </View>
            </View>
            <View style={styles.seperator}></View>


            <View style={styles.vehicleInfoContainer}>
                <Text style={styles.vehicleInfoHeader}>Enter Vehicle Details:</Text>

                <View style={styles.vehicleInfoItem}>
                    <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'lightblue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        iconStyle={styles.iconStyle}
                        data={vehicleTypes}
                        maxHeight={250}
                        labelField="label"
                        valueField="value"
                        dropdownPosition="bottom"
                        placeholder={vehicleTypeToBook.length !== 0 ? vehicleTypeToBook : 'Select Vehicle Type'}
                        value={vehicleTypeToBook}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setVehicleTypeToBook(item.label);
                            setIsFocus(false);
                        }}
                    />
                </View>

                <View style={styles.vehicleInfoItem}>
                    <TextInput
                        style={styles.vehicleInfoData}
                        placeholder="Enter Vehicle Plate Number"
                        placeholderTextColor={"#888"}
                        onChangeText={(value) => setVehicleNumberToBook(value)}
                        value={vehicleNumberToBook}
                        autoCorrect={false}
                        maxLength={12}
                    />
                </View>


                <View style={styles.vehicleInfoItem}>
                    <TextInput
                        style={styles.vehicleInfoData}
                        placeholder="Enter Phone Number"
                        placeholderTextColor={"#888"}
                        maxLength={10}
                        keyboardType="number-pad"
                        value={phoneNumberToBook}
                        onChangeText={(value) => setPhoneNumberToBook(value)}
                    />
                </View>
            </View>

            <View style={styles.halfSeperatorContainer}>
                <View style={[styles.seperator, styles.halfSeperator]}></View>
                <Text style={styles.halfSeperatorText}>OR</Text>
                <View style={[styles.seperator, styles.halfSeperator]}></View>
            </View>

            <View style={styles.vehicleInfoContainer}>
                <Dropdown
                    style={[styles.dropdown, isFocusChooseVehicle && { borderColor: 'lightblue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    iconStyle={styles.iconStyle}
                    data={vehiclesListLabelsAndValues}
                    maxHeight={250}
                    labelField="label"
                    valueField="value"
                    dropdownPosition="top"
                    placeholder={selectedVehicle ?? 'Select Saved Vehicle'}
                    value={selectedVehicle}
                    onFocus={() => setIsFocusChooseVehicle(true)}
                    onBlur={() => setIsFocusChooseVehicle(false)}
                    onChange={item => {
                        setSelectedVehicle(item.value.vehicleName);
                        setVehicleNumberToBook(item.value.vehiclePlateNumber);
                        setVehicleTypeToBook(item.value.vehicleType);
                        setPhoneNumberToBook(item.value.phoneNumber);
                        setIsFocusChooseVehicle(false);
                    }}
                />
            </View>

            <View style={styles.nextBackButtonContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => setProgressTracker(0)}>
                    <Image
                        source={require("../../../assets/buttons/backButton.png")}
                        style={styles.backAndNextButtonIcon}
                    />
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.nextButton} onPress={() => setProgressTracker(2)}>
                    <Text style={styles.nextButtonText}>Next</Text>
                    <Image
                        source={require("../../../assets/buttons/nextButton.png")}
                        style={styles.backAndNextButtonIcon}
                    />
                </TouchableOpacity>
            </View >
        </View>
    )
}