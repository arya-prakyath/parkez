import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ToastAndroid, ScrollView, TouchableWithoutFeedback } from "react-native";
import styles from "./bookingHistoryStyle";
import BookingHistoryList from "./bookingHistoryList";
import BookingHistoryDetails from "./bookingHistoryDetails";

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

    const bookingHistoryList: historyType[] = [
        {
            vehiclePlateNumber: "KA 02 JH 2354",
            vehicleName: "My VW",
            vehicleType: "4 Wheeler",
            spotName: "Orion Mall",
            spotAddress: "Dr Rajkumar Rd, Rajajinagar, Bengaluru, Karnataka 560055",
            cost: "25",
            fromDateTime: "10/07/2022T09:00 AM",
            toDateTime: "10/07/2022T10:00 AM",
            paymentMethod: "Paid by Cash",
        },
        {
            vehicleName: "Office Bike",
            vehiclePlateNumber: "KA 25 ER 8742",
            vehicleType: "2 Wheeler",
            spotName: "Iskcon Temple",
            spotAddress: "Hare Krishna Hill, Chord Rd, Rajajinagar, Bengaluru, Karnataka 560010",
            cost: "40",
            fromDateTime: "11/07/2022T07:30 PM",
            toDateTime: "11/07/2022T09:17 PM",
            paymentMethod: "Wallet - PayTm",
        },
        {
            vehicleName: "Wife's Car",
            vehiclePlateNumber: "AP 09 BH 5638",
            vehicleType: "4 Wheeler",
            spotName: "Phoenix One Bangalore West",
            spotAddress: "1, Dr Rajkumar Rd, opp. Vivekananda College, Rajajinagar, Bengaluru, Karnataka 560010",
            cost: "1200",
            fromDateTime: "12/07/2022T10:00 AM",
            toDateTime: "13/07/2022T10:00 AM",
            paymentMethod: "UPI - PhonePe",
        },
    ];

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