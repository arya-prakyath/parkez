import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./bookingHistoryStyle";

interface historyType {
    vehiclePlateNumber: string,
    vehicleName: string,
    vehicleType: string,
    spotName: string,
    spotAddress: string,
    cost: string,
    paymentMethod: string,
    fromDateTime: string,
    toDateTime: string,
}
interface historyItemProps {
    history: historyType,
    setSelectedHistory: React.Dispatch<React.SetStateAction<historyType | undefined>>,
    setShowHistoryDetails: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function BookingHistoryItem({ history, setSelectedHistory, setShowHistoryDetails}: historyItemProps) {
    return (
        <View style={styles.historyItemContainer}>
            <View style={styles.historyRowContainer}>
                <Text style={[styles.infoText, styles.spotNameAndcost]}>{history.spotName}</Text>
                <Text style={[styles.infoText, styles.spotNameAndcost, styles.cost]}>₹ {history.cost}</Text>
            </View>

            <View style={[styles.historyRowContainer, styles.historyRightSpaceContainer]}>
                <Text style={[styles.infoText, styles.address]}>{history.spotAddress}</Text>
            </View>

            <View style={styles.seperator} />

            <View style={[styles.historyRowContainer, styles.DateAndTimeContainer]}>
                <View>
                    <Text style={[styles.infoText, styles.fromToDateTimeHead]}>From:</Text>
                    <Text style={[styles.infoText, styles.fromToDateTime]}>{history.fromDateTime.split('T')[0]}</Text>
                    <Text style={[styles.infoText, styles.fromToDateTime]}>{history.fromDateTime.split('T')[1]}</Text>
                </View>
                <View style={styles.toDateTime}>
                    <Text style={[styles.infoText, styles.fromToDateTimeHead]}>To:</Text>
                    <Text style={[styles.infoText, styles.fromToDateTime]}>{history.toDateTime.split('T')[0]}</Text>
                    <Text style={[styles.infoText, styles.fromToDateTime]}>{history.toDateTime.split('T')[1]}</Text>
                </View>
            </View>

            <View style={styles.seperator} />

            <View style={[styles.historyRowContainer, styles.historyRightSpaceContainer]}>
                <View style={styles.vehicleNameAndNumberConatiner}>
                    <Text style={[styles.infoText, styles.vehicleNameAndNumber]}>{history.vehicleName} </Text>
                    <Text style={[styles.infoText, styles.vehicleNameAndNumber]}> - </Text>
                    <Text style={[styles.infoText, styles.vehicleNameAndNumber]}> {history.vehiclePlateNumber}</Text>
                </View>
                <TouchableOpacity style={styles.gotoItemContainer}
                    onPress={() => {
                        setSelectedHistory(history);
                        setShowHistoryDetails(true);
                    }}>
                    <Image
                        source={require("../../assets/buttons/openItemButton.png")}
                        style={styles.gotoItemIcon}
                    />
                </TouchableOpacity>
            </View>
        </View >
    )
}