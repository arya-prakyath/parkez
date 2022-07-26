import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, BackHandler, } from "react-native";
import AddEditVehicle from "./addEditVehicle";
import MyVehiclesList from "./myVehiclesList";
import vehiclesListData from "../../Models/vehiclesListData";
import styles from "./myVehiclesStyle";

interface vehicleType {
    vehiclePlateNumber: string,
    vehicleName: string,
    vehicleType: string,
    phoneNumber: string,
}

interface myVehiclesProps {
    onClickBackButton: (toScreen: string) => boolean;
}

export default function myVehicle({ onClickBackButton }: myVehiclesProps) {
    const [addEditVehicle, setAddEditVehicle] = useState(false);
    const [selectedVehicle, setSelectedVehicle] = useState<vehicleType>();

    const vehiclesList: vehicleType[] = vehiclesListData;

    if (addEditVehicle)
        return <AddEditVehicle
            setAddEditVehicle={setAddEditVehicle}
            setSelectedVehicle={setSelectedVehicle}
            selectedVehicle={selectedVehicle}
        />

    BackHandler.addEventListener("hardwareBackPress", () => onClickBackButton("Home"));
    return (
        <View style={styles.container}>
            {
                vehiclesList.length > 0 ? (
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