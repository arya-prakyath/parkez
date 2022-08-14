import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ToastAndroid, Image } from "react-native";
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

interface addVehicleItemProps {
    index: number;
    setVehiclesToBook: React.Dispatch<React.SetStateAction<vehicleType[]>>;
    vehiclesToBook: vehicleType[];
    onClickRemove: (index: number) => void;
}

export default function AddVehicleItem({
    index,
    setVehiclesToBook,
    vehiclesToBook,
    onClickRemove,
}: addVehicleItemProps) {
    const [isFocus, setIsFocus] = useState(false);
    const [isFocusChooseVehicle, setIsFocusChooseVehicle] = useState(false);

    const [savedVehicle, setSavedVehicle] = useState(true);

    const vehicleTypes: vehicleTypesType[] = vehicleTypesData;
    const vehiclesList: vehicleType[] = vehiclesListData;

    let vehiclesListLabelsAndValues: { label: string, value: vehicleType }[] = [];
    vehiclesList.map(item => {
        vehiclesListLabelsAndValues.push({ label: item.vehicleName, value: item });
    })

    let updateValues = (type: string, value: string) => {
        if (vehiclesToBook) {
            if (type === "plate") {
                vehiclesToBook[index].vehiclePlateNumber = value;
                setVehiclesToBook(vehiclesToBook);
            }
            if (type === "type") {
                vehiclesToBook[index].vehicleType = value;
                setVehiclesToBook(vehiclesToBook);
            }
            if (type === "phone") {
                vehiclesToBook[index].phoneNumber = value;
                setVehiclesToBook(vehiclesToBook);
            }
        }
    }

    return (
        <>
            <View style={styles.vehicleHeadContainer}>
                <TouchableOpacity style={styles.removeVehicleButton} onPress={() => onClickRemove(index)}>
                    <Image
                        source={require("../../../assets/buttons/removeButton.png")}
                        style={styles.removeVehicleIcon}
                    />
                </TouchableOpacity>
                <Text style={styles.vehicleCount}>Vehicle - {index + 1}</Text>
            </View>

            <View style={styles.savedOrNewContainer}>
                <TouchableOpacity style={savedVehicle ? [styles.savedOrNewButton, styles.savedOrNewButtonSelected] : styles.savedOrNewButton}
                    onPress={() => {
                        if (!savedVehicle) {
                            setSavedVehicle(true);
                            vehiclesToBook[index].vehicleName = "";
                            vehiclesToBook[index].vehicleType = "";
                            vehiclesToBook[index].vehiclePlateNumber = "";
                            vehiclesToBook[index].phoneNumber = "";
                            setVehiclesToBook(vehiclesToBook);
                        }
                    }}>
                    <Text style={savedVehicle ? [styles.savedOrNewButtonText, styles.savedOrNewButtonSelectedText] : styles.savedOrNewButtonText}>
                        Select Saved{'\n'}Vehicle Details
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={!savedVehicle ? [styles.savedOrNewButton, styles.savedOrNewButtonSelected] : styles.savedOrNewButton}
                    onPress={() => {
                        if (savedVehicle) {
                            setSavedVehicle(false);
                            vehiclesToBook[index].vehicleName = "";
                            vehiclesToBook[index].vehicleType = "";
                            vehiclesToBook[index].vehiclePlateNumber = "";
                            vehiclesToBook[index].phoneNumber = "";
                            setVehiclesToBook(vehiclesToBook);
                        }
                    }}>
                    <Text style={!savedVehicle ? [styles.savedOrNewButtonText, styles.savedOrNewButtonSelectedText] : styles.savedOrNewButtonText}>
                        Type Vehicle{'\n'}Details
                    </Text>
                </TouchableOpacity>
            </View>

            {savedVehicle ? (
                <View style={styles.vehicleInfoItem}>
                    <Dropdown
                        style={[styles.dropdown, isFocusChooseVehicle && { borderColor: 'lightblue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        iconStyle={styles.iconStyle}
                        data={vehiclesListLabelsAndValues}
                        maxHeight={250}
                        labelField="label"
                        valueField="value"
                        dropdownPosition="bottom"
                        placeholder={vehiclesToBook[index].vehicleName.length > 0 ? vehiclesToBook[index].vehicleName : 'Select Saved Vehicle'}
                        value={vehiclesToBook[index].vehicleName}
                        onFocus={() => setIsFocusChooseVehicle(true)}
                        onBlur={() => setIsFocusChooseVehicle(false)}
                        onChange={item => {
                            if (vehiclesToBook) {
                                vehiclesToBook[index].vehicleName = item.value.vehicleName;
                                vehiclesToBook[index].vehiclePlateNumber = item.value.vehiclePlateNumber;
                                vehiclesToBook[index].vehicleType = item.value.vehicleType;
                                vehiclesToBook[index].phoneNumber = item.value.phoneNumber;
                                setVehiclesToBook(vehiclesToBook);
                            }
                            else {
                                ToastAndroid.show("Some Error Occurred!", 1000);
                            }
                        }}
                    />

                    <Text allowFontScaling={false} style={styles.vehicleInfoDataReadOnly}>{vehiclesToBook[index].vehicleType && `Vehicle Type: ${vehiclesToBook[index].vehicleType}`}</Text>
                    <Text allowFontScaling={false} style={styles.vehicleInfoDataReadOnly}>{vehiclesToBook[index].vehiclePlateNumber && `Vehicle Plate: ${vehiclesToBook[index].vehiclePlateNumber}`}</Text>
                    <Text allowFontScaling={false} style={styles.vehicleInfoDataReadOnly}>{vehiclesToBook[index].phoneNumber && `Phone: ${vehiclesToBook[index].phoneNumber}`}</Text>
                </View>
            ) : (
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
                        placeholder={vehiclesToBook[index].vehicleType.length !== 0 ? vehiclesToBook[index].vehicleType : 'Select Vehicle Type'}
                        value={vehiclesToBook[index].vehicleType}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            updateValues("type", item.label)
                            setIsFocus(false);
                        }}
                    />

                    <TextInput allowFontScaling={false}
                        style={styles.vehicleInfoData}
                        placeholder="Enter Vehicle Plate Number"
                        placeholderTextColor={"#ccc"}
                        onChangeText={value => updateValues("plate", value)}
                        autoCorrect={false}
                        maxLength={13}
                    />

                    <TextInput allowFontScaling={false}
                        style={styles.vehicleInfoData}
                        placeholder="Enter Phone Number"
                        placeholderTextColor={"#ccc"}
                        maxLength={10}
                        keyboardType="number-pad"
                        onChangeText={value => updateValues("phone", value)}
                    />
                </View>
            )}

        </>
    )
}