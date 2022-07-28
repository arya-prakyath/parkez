import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./myVehiclesStyle";

interface vehicleType {
    vehiclePlateNumber: string,
    vehicleName: string,
    vehicleType: string,
    phoneNumber: string,
}
interface vehicleProps {
    vehicle: vehicleType,
    setSelectedVehicle: React.Dispatch<React.SetStateAction<vehicleType | undefined>>,
    setAddEditVehicle: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function MyVehiclesItem({ vehicle, setSelectedVehicle, setAddEditVehicle }: vehicleProps) {
    return (
        <View style={styles.MyVehicleContainer}>
            <View>
                <Text allowFontScaling={false} style={styles.infoText}>
                    <Text allowFontScaling={false} style={{ fontStyle: "italic", fontWeight: "300" }}>Vehicle Name </Text>- {vehicle.vehicleName}
                </Text>
                <Text allowFontScaling={false} style={styles.infoText}>
                    <Text allowFontScaling={false} style={{ fontStyle: "italic", fontWeight: "300" }}>Vehicle Number </Text>- {vehicle.vehiclePlateNumber}
                </Text>
                <Text allowFontScaling={false} style={styles.infoText}>
                    <Text allowFontScaling={false} style={{ fontStyle: "italic", fontWeight: "300" }}>Vehicle Type </Text>- {vehicle.vehicleType}
                </Text>
            </View>

            <TouchableOpacity style={styles.gotoItemContainer} onPress={() => {
                setSelectedVehicle(vehicle);
                setAddEditVehicle(true);
            }}>
                <Image
                    source={require("../../assets/buttons/openItemButton.png")}
                    style={styles.gotoItemIcon}
                />
            </TouchableOpacity>
        </View >
    )
}