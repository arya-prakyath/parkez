import React from "react";
import { View, FlatList } from "react-native";
import NoResults from "../../Utils/NoResults";
import BookingHistoryItem from "./bookingHistoryItem";
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

interface historyTypeProps {
    bookingHistoryList: historyType[];
    setSelectedHistory: React.Dispatch<React.SetStateAction<historyType | undefined>>;
    setShowHistoryDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BookingHistoryList({ bookingHistoryList, setSelectedHistory, setShowHistoryDetails }: historyTypeProps) {
    const renderItem = ({ item }: any) => (
        item && <BookingHistoryItem
            history={item}
            setSelectedHistory={setSelectedHistory}
            setShowHistoryDetails={setShowHistoryDetails}
        />
    );

    return (

        <View style={styles.historyList}>
            <FlatList
                ListEmptyComponent={NoResults}
                data={bookingHistoryList}
                renderItem={renderItem}
            />
        </View>
    )
}
