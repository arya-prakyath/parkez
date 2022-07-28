import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, ToastAndroid, BackHandler } from "react-native";
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

    const clearState = () => {
        setSelectedHistory(undefined);
        setShowHistoryDetails(false);
    }

    BackHandler.addEventListener("hardwareBackPress", () => {clearState(); return true});
    return (
        <View style={styles.container}>
            <View style={[styles.histortDetailsContainer, styles.backButtonContainer]}>
                <TouchableOpacity style={styles.backButton} onPress={() => clearState()}>
                    <Image
                        source={require("../../assets/buttons/backButton.png")}
                        style={styles.backButtonIcon}
                    />
                    <Text allowFontScaling={false} style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.histortDetailsContainer}>
                <ScrollView showsVerticalScrollIndicator={true} persistentScrollbar={true}>
                    <Text allowFontScaling={false} style={styles.historyDetailHead}>
                        Rented Spot Name {'\n'}
                        <Text allowFontScaling={false} style={styles.historyDetailData}>{selectedHistory?.spotName}</Text>
                    </Text>
                    <Text allowFontScaling={false} style={styles.historyDetailHead}>
                        Rented Spot Address {'\n'}
                        <Text allowFontScaling={false} style={styles.historyDetailData}>{selectedHistory?.spotAddress}</Text>
                    </Text>

                    <View style={styles.seperator} />

                    <Text allowFontScaling={false} style={styles.historyDetailHead}>
                        Spot Check In {'\n'}
                        <Text allowFontScaling={false} style={styles.historyDetailData}>{selectedHistory?.fromDateTime.split('T')[0]}{'\t'}</Text>
                        <Text allowFontScaling={false} style={styles.historyDetailData}>{'\t'}{selectedHistory?.fromDateTime.split('T')[1]}</Text>
                    </Text>
                    <Text allowFontScaling={false} style={styles.historyDetailHead}>
                        Spot Check Out {'\n'}
                        <Text allowFontScaling={false} style={styles.historyDetailData}>{selectedHistory?.toDateTime.split('T')[0]}{'\t'}</Text>
                        <Text allowFontScaling={false} style={styles.historyDetailData}>{'\t'}{selectedHistory?.toDateTime.split('T')[1]}</Text>
                    </Text>

                    <View style={styles.seperator} />

                    <Text allowFontScaling={false} style={styles.historyDetailHead}>
                        Total Cost Paid {'\n'}
                        <Text allowFontScaling={false} style={styles.historyDetailData}>₹{'\t'}{selectedHistory?.cost}</Text>
                    </Text>
                    <Text allowFontScaling={false} style={styles.historyDetailHead}>
                        Original Payment Method {'\n'}
                        <Text allowFontScaling={false} style={styles.historyDetailData}>{selectedHistory?.paymentMethod}</Text>
                    </Text>

                    <View style={styles.seperator} />

                    <Text allowFontScaling={false} style={styles.historyDetailHead}>
                        Parked Vehicle Number {'\n'}
                        <Text allowFontScaling={false} style={styles.historyDetailData}>{selectedHistory?.vehiclePlateNumber}</Text>
                    </Text>
                    <Text allowFontScaling={false} style={styles.historyDetailHead}>
                        Parked Vehicle Name {'\n'}
                        <Text allowFontScaling={false} style={styles.historyDetailData}>{selectedHistory?.vehicleName}</Text>
                    </Text>

                    <View style={styles.seperator} />

                    <Text allowFontScaling={false} style={styles.historyDetailHead}>
                        Parking Spot Owned by {'\n'}
                        <Text allowFontScaling={false} style={styles.historyDetailData}>{ownerName}</Text>
                    </Text>
                    <Text allowFontScaling={false} style={styles.historyDetailHead}>
                        Parking Spot Incharge {'\n'}
                        <Text allowFontScaling={false} style={styles.historyDetailData}>{inchargeName}</Text>
                    </Text>

                    <View style={styles.seperator} />

                    <TouchableOpacity style={styles.invoiceLinkContainer} onPress={() => ToastAndroid.showWithGravity('TODO: Automated Invoice Download', ToastAndroid.CENTER, ToastAndroid.SHORT)}>
                        <Text allowFontScaling={false} style={styles.invoiceLink}>Download Invoice</Text>
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
