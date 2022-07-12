import React, { useState } from "react";
import { View, Text, ToastAndroid, TouchableWithoutFeedback, Image, TouchableOpacity } from "react-native";
import styles from "./myVehiclesStyle";

interface vehicleType {
    vehiclePlateNumber: string,
    vehicleName: string,
    vehicleType: string,
}
interface vehicleProps {
    vehicle: vehicleType,
    setSelectedVehicle: React.Dispatch<React.SetStateAction<vehicleType | undefined>>,
    setAddEditVehicle: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function MyVehiclesItem({ vehicle, setSelectedVehicle, setAddEditVehicle }: vehicleProps) {
    return (
        <TouchableWithoutFeedback onPress={() => {
            setSelectedVehicle(vehicle);
            setAddEditVehicle(true);
        }}>
            <View style={styles.MyVehicleContainer}>
                <Text style={styles.infoText}>
                    <Text style={{ fontStyle: "italic", fontWeight: "300" }}>Vehicle Name </Text>- {vehicle.vehicleName}
                </Text>
                <Text style={styles.infoText}>
                    <Text style={{ fontStyle: "italic", fontWeight: "300" }}>Vehicle Number </Text>- {vehicle.vehiclePlateNumber}
                </Text>
                <Text style={styles.infoText}>
                    <Text style={{ fontStyle: "italic", fontWeight: "300" }}>Vehicle Type </Text>- {vehicle.vehicleType}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    )
}