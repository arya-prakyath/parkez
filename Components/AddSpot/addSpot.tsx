import React, { useState } from "react";
import { View, Text, TouchableOpacity, BackHandler } from "react-native";
import ConfirmAddSpot from "./confirmAddSpot";
import SpotCostPlan from "./spotCostPlan";
import SpotDetails from "./spotDetails";
import SpotOwner from "./spotOwner";
import SpotTermsAndConditions from "./spotTermsAndConditions";
import styles from "./addSpotStyle";

interface spotCostType {
    id: number,
    cost: string,
    interval: string,
}

interface addSpotProps {
    onClickBackButton: (toScreen: string) => boolean;
}

export default function AddSpot({ onClickBackButton }: addSpotProps) {
    const [hasSpots, setHasSpots] = useState(false);

    const [progressTracker, setProgressTracker] = useState(0);

    const [spotName, setSpotName] = useState('');
    const [spotAddress, setSpotAddress] = useState('');
    const [building, setBuilding] = useState('');
    const [street, setStreet] = useState('');
    const [landmark, setLandmark] = useState('');
    const [city, setCity] = useState('Bengaluru');
    const [pincode, setPincode] = useState('');

    const [spotOwnerName, setSpotOwnerName] = useState('');
    const [spotOwnerPhone, setSpotOwnerPhone] = useState('');
    const [ownerAndInchargeSame, setOwnerAndInchargeSame] = useState(false);
    const [spotInchargeName, setSpotInchargeName] = useState('');
    const [spotInchargePhone, setSpotInchargePhone] = useState('');

    const [spotCostPlans, setSpotCostPlans] = useState<spotCostType[]>([{ id: 0, cost: '', interval: '' }]);

    const [termsAgreed, setTermsAgreed] = useState(false);

    const handleOnSetAddress = (building: string, street: string, landmark: string, city: string, pincode: string): void => {
        const address = `${building.replace(/,*$/, '')}, ${street.replace(/,*$/, '')}, ${landmark.replace(/,*$/, '')}, ${city.replace(/,*$/, '')}, Karnataka, India - ${pincode}`;
        setSpotAddress(address);
    }

    BackHandler.addEventListener("hardwareBackPress", () => {
        if (progressTracker === 0)
            onClickBackButton("Home");
        else{
            setProgressTracker(progressTracker - 1);
            return true;
        }
    });
    return (
        hasSpots ? (
            <View>
                <Text allowFontScaling={false}>TODO: Has Spots</Text>
            </View >
        ) : (
            <View style={styles.container}>
                {progressTracker === 0 && (
                    <View style={[styles.credentialParentContainer, styles.infoTextContainer]}>
                        <Text allowFontScaling={false} style={styles.infoText}>
                            <Text allowFontScaling={false} style={{ fontStyle: "italic", fontWeight: "200" }}>Step 1 </Text>- Fill In The Spot Details
                        </Text>
                        <Text allowFontScaling={false} style={styles.infoText}>
                            <Text allowFontScaling={false} style={{ fontStyle: "italic", fontWeight: "200" }}>Step 2 </Text>- Fill In The Spot Owner Details
                        </Text>
                        <Text allowFontScaling={false} style={styles.infoText}>
                            <Text allowFontScaling={false} style={{ fontStyle: "italic", fontWeight: "200" }}>Step 3 </Text>- Choose Cost Plans
                        </Text>
                        <Text allowFontScaling={false} style={styles.infoText}>
                            <Text allowFontScaling={false} style={{ fontStyle: "italic", fontWeight: "200" }}>Step 4 </Text>- Agree To Terms & Conditions
                        </Text>
                        <Text allowFontScaling={false} style={styles.infoText}>
                            <Text allowFontScaling={false} style={{ fontStyle: "italic", fontWeight: "200" }}>Step 5 </Text>- Start Earning
                        </Text>
                        <View style={styles.nextBackButtonContainer}>
                            <TouchableOpacity style={styles.addSpotButton} onPress={() => setProgressTracker(1)}>
                                <Text allowFontScaling={false} style={styles.addSpotButtonText}>Add Spot</Text>
                            </TouchableOpacity>
                        </View >
                    </View>
                )
                }

                {progressTracker === 1 && (
                    <SpotDetails
                        spotName={spotName}
                        setSpotName={setSpotName}
                        setSpotAddress={handleOnSetAddress}
                        building={building}
                        setBuilding={setBuilding}
                        street={street}
                        setStreet={setStreet}
                        landmark={landmark}
                        setLandmark={setLandmark}
                        city={city}
                        setCity={setCity}
                        pincode={pincode}
                        setPincode={setPincode}
                        setProgressTracker={setProgressTracker}
                    />
                )
                }

                {progressTracker === 2 && (
                    <SpotOwner
                        spotOwnerName={spotOwnerName}
                        setSpotOwnerName={setSpotOwnerName}
                        spotOwnerPhone={spotOwnerPhone}
                        setSpotOwnerPhone={setSpotOwnerPhone}
                        setOwnerAndInchargeSame={setOwnerAndInchargeSame}
                        ownerAndInchargeSame={ownerAndInchargeSame}
                        spotInchargeName={spotInchargeName}
                        setSpotInchargeName={setSpotInchargeName}
                        spotInchargePhone={spotInchargePhone}
                        setSpotInchargePhone={setSpotInchargePhone}
                        setProgressTracker={setProgressTracker}
                    />
                )}

                {progressTracker === 3 && (
                    <SpotCostPlan
                        spotCostPlans={spotCostPlans}
                        setSpotCostPlans={setSpotCostPlans}
                        setProgressTracker={setProgressTracker}
                    />
                )}

                {progressTracker === 4 && (
                    <SpotTermsAndConditions
                        termsAgreed={termsAgreed}
                        setTermsAgreed={setTermsAgreed}
                        setProgressTracker={setProgressTracker}
                    />
                )}

                {progressTracker === 5 && (
                    <ConfirmAddSpot
                        spotName={spotName}
                        spotAddress={spotAddress}
                        spotOwnerName={spotOwnerName}
                        spotOwnerPhone={spotOwnerPhone}
                        spotInchargeName={spotInchargeName}
                        spotInchargePhone={spotInchargePhone}
                        spotCostPlans={spotCostPlans}
                        termsAgreed={termsAgreed}
                        setProgressTracker={setProgressTracker}
                    />
                )}
            </View >
        )
    )
}