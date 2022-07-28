import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, } from "react-native";
import showAlert from "../../Utils/alertBox";
import styles from "./addSpotStyle";

interface spotCostType {
    id: number,
    cost: string,
    interval: string,
}

interface confirmAddSpotProps {
    spotName: string;
    spotAddress: string;
    spotOwnerName: string;
    spotOwnerPhone: string;
    spotInchargeName: string;
    spotInchargePhone: string;
    spotCostPlans: spotCostType[];
    termsAgreed: boolean;
    setProgressTracker: React.Dispatch<React.SetStateAction<number>>;
}

export default function ConfirmAddSpot({
    spotName,
    spotAddress,
    spotOwnerName,
    spotOwnerPhone,
    spotInchargeName,
    spotInchargePhone,
    spotCostPlans,
    termsAgreed,
    setProgressTracker,
}: confirmAddSpotProps) {
    const getintervalName = (index: number) => {
        switch (index) {
            case 0:
                return "Hour";
            case 1:
                return "3 Hours";
            case 2:
                return "5 Hours";
            case 3:
                return "10 Hours";
            case 4:
                return "15 Hours";
            case 5:
                return "Day";
            case 6:
                return "Week";
            case 7:
                return "Month";
            case 8:
                return "Year";
        }
        return '';
    }

    return (
        <View style={styles.credentialParentContainer}>
            <Text allowFontScaling={false} style={styles.headerText}>Confirm to Add the new Spot </Text>
            <View style={styles.confirmationContainer}>
                <ScrollView showsVerticalScrollIndicator={true} persistentScrollbar={true}>
                    <View style={styles.seperator}></View>
                    <View style={styles.confirmationItem}>
                        <Text allowFontScaling={false} style={styles.confirmationHead}>Spot Name</Text>
                        <Text allowFontScaling={false} style={styles.confirmationData}>{spotName}</Text>
                    </View>
                    <View style={styles.confirmationItem}>
                        <Text allowFontScaling={false} style={styles.confirmationHead}>Spot Address</Text>
                        <Text allowFontScaling={false} style={styles.confirmationData}>{spotAddress}</Text>
                    </View>
                    <View style={styles.seperator}></View>

                    <View style={styles.confirmationItem}>
                        <Text allowFontScaling={false} style={styles.confirmationHead}>Owner's Name</Text>
                        <Text allowFontScaling={false} style={styles.confirmationData}>{spotOwnerName}</Text>
                    </View>
                    <View style={styles.confirmationItem}>
                        <Text allowFontScaling={false} style={styles.confirmationHead}>Owner's Phone</Text>
                        <Text allowFontScaling={false} style={styles.confirmationData}>{spotOwnerPhone.substring(0, 5)} {spotOwnerPhone.substring(5,)}</Text>
                    </View>
                    <View style={styles.confirmationItem}>
                        <Text allowFontScaling={false} style={styles.confirmationHead}>Incharge's Name</Text>
                        <Text allowFontScaling={false} style={styles.confirmationData}>{spotInchargeName}</Text>
                    </View>
                    <View style={styles.confirmationItem}>
                        <Text allowFontScaling={false} style={styles.confirmationHead}>Incharge's phone</Text>
                        <Text allowFontScaling={false} style={styles.confirmationData}>{spotInchargePhone.substring(0, 5)} {spotInchargePhone.substring(5,)}</Text>
                    </View>
                    <View style={styles.seperator}></View>

                    <View style={styles.confirmationItem}>
                        <Text allowFontScaling={false} style={styles.confirmationHead}>Cost Plans</Text>
                        <Text allowFontScaling={false} style={styles.confirmationData}>
                            {spotCostPlans.map(costPlan =>
                                `₹ ${costPlan.cost}/-  Per  ${getintervalName(parseInt(costPlan.interval))}\n`
                            )}
                        </Text>
                    </View>
                    <View style={styles.seperator}></View>
                </ScrollView>
            </View>

            <View style={styles.nextBackButtonContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => setProgressTracker(4)}>
                    <Image
                        source={require("../../assets/buttons/backButton.png")}
                        style={styles.backAndNextButtonIcon}
                    />
                    <Text allowFontScaling={false} style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nextButton} onPress={() => {
                    showAlert({
                        title: "Spot Added!",
                        message: "Your Parking Spot was added successfully! \n\nYou will soon be contacted by our team to guide you through the next steps.",
                        buttonText: "Okay",
                        onPressButton: () => {
                            setProgressTracker(0);
                        }
                    })
                }}>
                    <Text allowFontScaling={false} style={[styles.nextButtonText, { marginLeft: 10, }]}>Add Spot</Text>
                    <Image
                        source={require("../../assets/buttons/nextButton.png")}
                        style={styles.backAndNextButtonIcon}
                    />
                </TouchableOpacity>
            </View >
        </View>
    )
}