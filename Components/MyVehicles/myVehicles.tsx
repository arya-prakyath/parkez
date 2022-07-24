import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ToastAndroid, ScrollView, TouchableWithoutFeedback } from "react-native";
import AddEditVehicle from "./addEditVehicle";
import MyVehiclesList from "./myVehiclesList";
import vehiclesListData from "../../Models/vehiclesList";
import styles from "./myVehiclesStyle";

interface vehicleType {
    vehiclePlateNumber: string,
    vehicleName: string,
    vehicleType: string,
}

export default function myVehicle() {
    const [hasVehicles, setHasVehicles] = useState(true);
    const [addEditVehicle, setAddEditVehicle] = useState(false);
    const [selectedVehicle, setSelectedVehicle] = useState<vehicleType>();

    const vehiclesList: vehicleType[] = vehiclesListData;

    if (addEditVehicle)
        return <AddEditVehicle
            setAddEditVehicle={setAddEditVehicle}
            setSelectedVehicle={setSelectedVehicle}
            selectedVehicle={selectedVehicle}
        />

    return (
        <View style={styles.container}>
            {
                hasVehicles ? (
                    <View style={styles.MyVehiclesContainer}>
                        <TouchableOpacity style={styles.addNewVehicleButtonConatiner} onPress={() => {
                            setSelectedVehicle(undefined);
                            setAddEditVehicle(true);
                        }}>
                            <Image
                                source={require("../../assets/buttons/addButton.png")}
                                style={styles.addNewVehicleButton}
                            />
                            <Text style={styles.addNewVehicleButtonText}>Add New Vehicle</Text>
                        </TouchableOpacity>

                        <MyVehiclesList
                            vehiclesList={vehiclesList}
                            setSelectedVehicle={setSelectedVehicle}
                            setAddEditVehicle={setAddEditVehicle}
                        />
                    </View>
                ) : (
                    <View style={[styles.MyVehicleContainer, styles.addVehicleContainer]}>
                        <Text style={styles.infoText}>You have not added any vehicles yet!</Text>
                        <TouchableOpacity style={[styles.addNewVehicleButtonConatiner, styles.addVehicleButtonConatiner]} onPress={() => {
                            setSelectedVehicle(undefined);
                            setAddEditVehicle(true);
                        }}>
                            <Image
                                source={require("../../assets/buttons/addButton.png")}
                                style={styles.addVehicleButton}
                            />
                            <Text style={[styles.addNewVehicleButtonText, styles.addVehicleButtonText]}>Add vehicle</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        </View >
    )
}