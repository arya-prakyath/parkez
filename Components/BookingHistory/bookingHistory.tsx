import React, { useState } from "react";
import { View, Text, } from "react-native";
import BookingHistoryList from "./bookingHistoryList";
import BookingHistoryDetails from "./bookingHistoryDetails";
import BookingHistoryListData from "../../Models/bookingHistoryListData";
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

export default function BookingHistory() {
    const [hasHistory, setHasHistory] = useState(true);
    const [selectedHistory, setSelectedHistory] = useState<historyType>();
    const [showHistoryDetails, setShowHistoryDetails] = useState(false);

    const bookingHistoryList: historyType[] = BookingHistoryListData;

    if (showHistoryDetails)
        return <BookingHistoryDetails
            selectedHistory={selectedHistory}
            setShowHistoryDetails={setShowHistoryDetails}
            setSelectedHistory={setSelectedHistory}
        />

    return (
        <View style={styles.container}>
            {
                hasHistory ? (
                    <View style={styles.historyContainer}>
                        <BookingHistoryList
                            bookingHistoryList={bookingHistoryList}
                            setSelectedHistory={setSelectedHistory}
                            setShowHistoryDetails={setShowHistoryDetails}
                        />
                    </View>
                ) : (
                    <View style={styles.historyContainer} >
                        <Text style={styles.infoText}>You have not booked any parking spot. Head to Find Spot screen to book a spot now!</Text>
                    </View>
                )
            }
        </View >
    )
}