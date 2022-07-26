import React from "react";
import { View, FlatList } from "react-native";
import MyVehiclesItem from "./myVehiclesItem";
import styles from "./myVehiclesStyle";

interface vehicleType {
    vehiclePlateNumber: string,
    vehicleName: string,
    vehicleType: string,
    phoneNumber: string,
}
interface vehiclesListProps {
    vehiclesList: (vehicleType | undefined)[];
    setSelectedVehicle: React.Dispatch<React.SetStateAction<vehicleType | undefined>>,
    setAddEditVehicle: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function FindSpotList({ vehiclesList, setSelectedVehicle, setAddEditVehicle }: vehiclesListProps) {
    const renderItem = ({ item }: any) => (
        item && <MyVehiclesItem
            vehicle={item}
            setSelectedVehicle={setSelectedVehicle}
            setAddEditVehicle={setAddEditVehicle}
        />
    );

    return (
        <View style={styles.MyVehiclesList}>
            <FlatList
                data={vehiclesList}
                renderItem={renderItem}
            />
        </View>
    )
}
