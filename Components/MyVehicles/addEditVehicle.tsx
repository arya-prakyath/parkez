import { validatePathConfig } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import showAlert from "../../Utils/alertBox";
import styles from "./myVehiclesStyle";

interface vehicleType {
    vehiclePlateNumber: string,
    vehicleName: string,
    vehicleType: string,
}

interface addEditVehicleProps {
    setAddEditVehicle: React.Dispatch<React.SetStateAction<boolean>>,
    setSelectedVehicle: React.Dispatch<React.SetStateAction<vehicleType | undefined>>,
    selectedVehicle: vehicleType | undefined,
}

export default function addEditVehicle({
    setAddEditVehicle,
    setSelectedVehicle,
    selectedVehicle,
}: addEditVehicleProps) {
    const [isFocus, setIsFocus] = useState(false);
    let vehicleTypes = [
        { label: '2 Wheeler', value: '1' },
        { label: '3 Wheeler', value: '2' },
        { label: '4 Wheeler', value: '3' },
        { label: 'Cycle', value: '4' },
        { label: 'Truck', value: '5' },
        { label: 'Multi Axle', value: '6' },
    ];

    const [vehicleName, setVehicleName] = useState(selectedVehicle?.vehicleName ?? '');
    const [vehiclePlateNumber, setVehiclePlateNumber] = useState(selectedVehicle?.vehiclePlateNumber ?? '');
    const [vehicleType, setVehicleType] = useState(selectedVehicle?.vehicleType ?? '');

    const validate = () => {
        if (vehicleName.length < 1)
            return true
        if (vehiclePlateNumber.length < 5)
            return true
        if (!vehicleType)
            return true
    }
    return (
        <View style={styles.addEditVehicleConatiner}>
            <View style={styles.vehicleInfoItem}>
                <Text style={styles.vehicleInfoHeader}>Vehicle Name</Text>
                <TextInput
                    style={styles.vehicleInfoData}
                    placeholder="Vehicle Name"
                    placeholderTextColor={"#555"}
                    value={vehicleName}
                    onChangeText={(value) => setVehicleName(value)}
                />
            </View>

            <View style={styles.vehicleInfoItem}>
                <Text style={styles.vehicleInfoHeader}>Vehicle Number</Text>
                <TextInput
                    style={styles.vehicleInfoData}
                    placeholder="Vehicle Number Plate"
                    placeholderTextColor={"#555"}
                    value={vehiclePlateNumber}
                    onChangeText={(value) => setVehiclePlateNumber(value)}
                />
            </View>

            <View style={styles.vehicleInfoItem}>
                <Text style={styles.vehicleInfoHeader}>Vehicle Type</Text>
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
                    placeholder={vehicleType.length !== 0 ? vehicleType : 'Select Vehicle Type'}
                    value={vehicleType}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setVehicleType(item.label);
                        setIsFocus(false);
                    }}
                />
            </View>

            <View style={styles.addCancelButtonContainer}>
                <TouchableOpacity style={styles.cancelButton} onPress={() => {
                    setSelectedVehicle(undefined);
                    setAddEditVehicle(false);
                }}>
                    <Image
                        source={require("../../assets/buttons/backButton.png")}
                        style={styles.addCancelButtonIcon}
                    />
                    <Text style={styles.cancelButtonText}>Back</Text>
                </TouchableOpacity>

                <TouchableOpacity disabled={validate()} style={[styles.addButton, validate() && { backgroundColor: "#888" }]}
                    onPress={() => {
                        showAlert({
                            title: selectedVehicle ? "Vehicle updated !" : "Vehicle Added !",
                            message: selectedVehicle ? "Your vehicle details has been updated successfully." : "Your vehicle details has been added successfully.\n\nYou can edit it at any time.",
                            buttonText: "Okay",
                            onPressButton: () => {
                                setSelectedVehicle(undefined);
                                setAddEditVehicle(false);
                            }
                        })
                    }}>
                    <Text style={[styles.addButtonText, { marginLeft: 10, }]}>{selectedVehicle ? "Update" : "Add Vehicle"}</Text>
                    <Image
                        source={require("../../assets/buttons/nextButton.png")}
                        style={styles.addCancelButtonIcon}
                    />
                </TouchableOpacity>
            </View >
        </View>
    )
}
