import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, ToastAndroid } from "react-native";
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
    selectedHistory: historyType | undefined,
    setSelectedHistory: React.Dispatch<React.SetStateAction<historyType | undefined>>,
    setShowHistoryDetails: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function bookingHistoryDetails({ selectedHistory, setSelectedHistory, setShowHistoryDetails }: historyItemProps) {
    const ownerName = "Owner's Name";
    const inchargeName = "Incharge's Kumar";

    return (
        <View style={styles.container}>
            <View style={[styles.histortDetailsContainer, styles.backButtonContainer]}>
                <TouchableOpacity style={styles.backButton}
                    onPress={() => {
                        setSelectedHistory(undefined);
                        setShowHistoryDetails(false);
                    }}>
                    <Image
                        source={require("../../assets/buttons/backButton.png")}
                        style={styles.backButtonIcon}
                    />
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.histortDetailsContainer}>
                <ScrollView showsVerticalScrollIndicator={true} persistentScrollbar={true}>
                    <Text style={styles.historyDetailHead}>
                        Rented Spot Name {'\n'}
                        <Text style={styles.historyDetailData}>{selectedHistory?.spotName}</Text>
                    </Text>
                    <Text style={styles.historyDetailHead}>
                        Rented Spot Address {'\n'}
                        <Text style={styles.historyDetailData}>{selectedHistory?.spotAddress}</Text>
                    </Text>

                    <View style={styles.seperator} />

                    <Text style={styles.historyDetailHead}>
                        Spot Check In {'\n'}
                        <Text style={styles.historyDetailData}>{selectedHistory?.fromDateTime.split('T')[0]}{'\t'}</Text>
                        <Text style={styles.historyDetailData}>{'\t'}{selectedHistory?.fromDateTime.split('T')[1]}</Text>
                    </Text>
                    <Text style={styles.historyDetailHead}>
                        Spot Check Out {'\n'}
                        <Text style={styles.historyDetailData}>{selectedHistory?.toDateTime.split('T')[0]}{'\t'}</Text>
                        <Text style={styles.historyDetailData}>{'\t'}{selectedHistory?.toDateTime.split('T')[1]}</Text>
                    </Text>

                    <View style={styles.seperator} />

                    <Text style={styles.historyDetailHead}>
                        Total Cost Paid {'\n'}
                        <Text style={styles.historyDetailData}>₹{'\t'}{selectedHistory?.cost}</Text>
                    </Text>
                    <Text style={styles.historyDetailHead}>
                        Original Payment Method {'\n'}
                        <Text style={styles.historyDetailData}>{selectedHistory?.paymentMethod}</Text>
                    </Text>

                    <View style={styles.seperator} />

                    <Text style={styles.historyDetailHead}>
                        Parked Vehicle Number {'\n'}
                        <Text style={styles.historyDetailData}>{selectedHistory?.vehiclePlateNumber}</Text>
                    </Text>
                    <Text style={styles.historyDetailHead}>
                        Parked Vehicle Name {'\n'}
                        <Text style={styles.historyDetailData}>{selectedHistory?.vehicleName}</Text>
                    </Text>

                    <View style={styles.seperator} />

                    <Text style={styles.historyDetailHead}>
                        Parking Spot Owned by {'\n'}
                        <Text style={styles.historyDetailData}>{ownerName}</Text>
                    </Text>
                    <Text style={styles.historyDetailHead}>
                        Parking Spot Incharge {'\n'}
                        <Text style={styles.historyDetailData}>{inchargeName}</Text>
                    </Text>

                    <View style={styles.seperator} />

                    <TouchableOpacity style={styles.invoiceLinkContainer} onPress={() => ToastAndroid.showWithGravity('TODO: Automated Invoice Download', ToastAndroid.CENTER, ToastAndroid.SHORT)}>
                        <Text style={styles.invoiceLink}>Download Invoice</Text>
                        <Image
                            source={require("../../assets/buttons/downloadInvoice.png")}
                            style={styles.invoiceLinkLogo}
                        />
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View >
    )
}
