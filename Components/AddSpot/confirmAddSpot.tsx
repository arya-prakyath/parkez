import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, } from "react-native";
import showAlert from "../../Utils/alertBox";
import styles from "./addSpotStyle";

interface spotCostProps {
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
    spotCostPlans: spotCostProps[];
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
        <View style={[styles.credentialParentContainer, {paddingRight: "3%",}]}>
            <View style={[styles.scrollBarContainer, {height: "80%", width: 15,}]}></View>
            <ScrollView showsVerticalScrollIndicator={true} persistentScrollbar={true} contentContainerStyle={styles.detailsContainer}>
                <Text style={[styles.infoText, { fontSize: 16, }]}>
                    <Text style={{ fontStyle: "italic", fontWeight: "200" }}>Spot Name </Text>- {spotName}
                </Text>
                <Text style={[styles.infoText, { fontSize: 16, }]}>
                    <Text style={{ fontStyle: "italic", fontWeight: "200" }}>Spot Address </Text>- {spotAddress}
                </Text>
                <Text style={[styles.infoText, { fontSize: 16, }]}>
                    <Text style={{ fontStyle: "italic", fontWeight: "200" }}>Owner's Name </Text>- {spotOwnerName}
                </Text>
                <Text style={[styles.infoText, { fontSize: 16, }]}>
                    <Text style={{ fontStyle: "italic", fontWeight: "200" }}>Owner's Phone </Text>- {spotOwnerPhone}
                </Text>
                <Text style={[styles.infoText, { fontSize: 16, }]}>
                    <Text style={{ fontStyle: "italic", fontWeight: "200" }}>Incharge's Name </Text>- {spotInchargeName}
                </Text>
                <Text style={[styles.infoText, { fontSize: 16, }]}>
                    <Text style={{ fontStyle: "italic", fontWeight: "200" }}>Incharge's Phone </Text>- {spotInchargePhone}
                </Text>
                <Text style={[styles.infoText, { fontSize: 16, }]}>
                    <Text style={{ fontStyle: "italic", fontWeight: "200" }}>Cost Plans -{'\n'}</Text>{spotCostPlans.map(costPlan =>
                        `₹ ${costPlan.cost} /- ${getintervalName(parseInt(costPlan.interval))}\n`
                    )}
                </Text>
            </ScrollView>

            <View style={styles.nextBackButtonContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => setProgressTracker(4)}>
                    <Image
                        source={require("../../assets/buttons/backButton.png")}
                        style={styles.backAndNextButtonIcon}
                    />
                    <Text style={styles.backButtonText}>Back</Text>
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
                    <Text style={[styles.nextButtonText, { marginLeft: 10, }]}>Add Spot</Text>
                    <Image
                        source={require("../../assets/buttons/nextButton.png")}
                        style={styles.backAndNextButtonIcon}
                    />
                </TouchableOpacity>
            </View >
        </View>
    )
}