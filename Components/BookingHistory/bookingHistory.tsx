import React, { useState } from "react";
import { View, Text, BackHandler, } from "react-native";
import BookingHistoryList from "./bookingHistoryList";
import BookingHistoryDetails from "./bookingHistoryDetails";
import BookingHistoryListData from "../../Models/bookingHistoryListData";
import styles from "./bookingHistoryStyle";
import NoResults from "../../Utils/NoResults";

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

interface bookinghistoryProps {
    onClickBackButton: (toScreen: string) => boolean;
}

export default function BookingHistory({ onClickBackButton }: bookinghistoryProps) {
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

    BackHandler.addEventListener("hardwareBackPress", () => onClickBackButton("Home"));
    return (
        <View style={styles.container}>
            {
                bookingHistoryList.length > 0 ? (
                    <View style={styles.historyContainer}>
                        <BookingHistoryList
                            bookingHistoryList={bookingHistoryList}
                            setSelectedHistory={setSelectedHistory}
                            setShowHistoryDetails={setShowHistoryDetails}
                        />
                    </View>
                ) : (
                    <NoResults />
                )
            }
        </View >
    )
}