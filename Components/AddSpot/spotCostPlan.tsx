import React, { useState } from "react";
import { View, Text, TextInput, TouchableHighlight, Image, Button, TouchableOpacity, ScrollView, ToastAndroid } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import costIntervals from "../../Models/costIntervals";
import styles from "./addSpotStyle";

interface spotCostProps {
    id: number,
    cost: string,
    interval: string,
}

interface costIntervalsType{
    label: string,
    value: string,
}

interface spotCostPlanProps {
    spotCostPlans: spotCostProps[];
    setSpotCostPlans: React.Dispatch<React.SetStateAction<spotCostProps[]>>;
    setProgressTracker: React.Dispatch<React.SetStateAction<number>>;
}

export default function SpotCostPlan({
    spotCostPlans,
    setSpotCostPlans,
    setProgressTracker
}: spotCostPlanProps) {
    const [costListCount, setCostListCount] = useState(1);
    const [costList, setCostList] = useState<string[]>([]);
    const [intervalList, setItervalList] = useState<string[]>([]);
    const [isFocus, setIsFocus] = useState(false);

    const validate = () => {
        if (costList.length === 0)
            return true;
        if (intervalList.length === 0)
            return true;
        for (let i = 0; i < costListCount; i++) {
            if (!(costList[i] && intervalList[i]))
                return true;
        }
    }

    let intervals: costIntervalsType[] = costIntervals;

    let costPlans = [];
    for (let i = 0; i < costListCount; i++) {
        costPlans.push(
            <View style={styles.costContainer} key={i}>
                <TextInput
                    style={styles.costInput}
                    onChangeText={(value) => {
                        value = value.replace(' ', '');
                        value = value.replace('-', '');
                        value = value.replace(',', '');
                        costList[i] = value;
                        setCostList(costList);
                    }}
                    value={costList[i]}
                    placeholder="Enter Cost"
                    placeholderTextColor={"#bbb"}
                    keyboardType="number-pad"
                />
                <Text style={styles.perText}>Per</Text>
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'lightblue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    iconStyle={styles.iconStyle}
                    data={intervals}
                    maxHeight={250}
                    labelField="label"
                    valueField="value"
                    placeholder={intervalList[i] ? intervals[parseInt(intervalList[i])]?.label : 'Select Interval'}
                    value={intervals[parseInt(intervalList[i])]?.label}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        if (intervalList.includes(item.value)) {
                            ToastAndroid.showWithGravity(
                                "This Cost Plan is already selected",
                                ToastAndroid.SHORT,
                                ToastAndroid.CENTER,
                            );
                            return;
                        }
                        intervalList[i] = item.value;
                        setItervalList(intervalList);
                        setIsFocus(false);
                    }}
                />
                {costListCount > 1 &&
                    <TouchableOpacity style={styles.removeCostPlanButtonContainer} onPress={() => {
                        costList.splice(i, 1);
                        intervalList.splice(i, 1);
                        setCostList(costList);
                        setItervalList(intervalList);
                        setCostListCount(costListCount - 1);
                    }}>
                        <Image
                            source={require("../../assets/buttons/removeButton.png")}
                            style={styles.removeCostPlanButton}
                        />
                    </TouchableOpacity>
                }
            </View>
        )
    }

    return (
        <View style={[styles.credentialParentContainer, { justifyContent: "space-evenly" }]}>
            <TouchableOpacity style={styles.addCostPlanButtonConatiner} onPress={() => {
                if (costListCount === 9) {
                    ToastAndroid.showWithGravity(
                        "You can add atmost 8 Cost plans",
                        ToastAndroid.SHORT,
                        ToastAndroid.CENTER,
                    );
                    return;
                }
                setCostListCount(costListCount + 1);
            }}>
                <Image
                    source={require("../../assets/buttons/addButton.png")}
                    style={styles.addCostPlanButton}
                />
                <Text style={styles.addCostPlanButtonText}>Add Cost Plan</Text>
            </TouchableOpacity>

            <ScrollView>
                {costPlans}
            </ScrollView>

            <View style={styles.nextBackButtonContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => setProgressTracker(2)}>
                    <Image
                        source={require("../../assets/buttons/backButton.png")}
                        style={styles.backAndNextButtonIcon}
                    />
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.nextButton, validate() && { backgroundColor: "#888" }]} disabled={validate()}
                    onPress={() => {
                        spotCostPlans = [];
                        for (let i = 0; i < costList.length; i++) {
                            spotCostPlans.push({
                                id: i,
                                cost: costList[i],
                                interval: intervalList[i],
                            })
                        }
                        setSpotCostPlans(spotCostPlans);
                        setProgressTracker(4);
                    }}>
                    <Text style={styles.nextButtonText}>Next</Text>
                    <Image
                        source={require("../../assets/buttons/nextButton.png")}
                        style={styles.backAndNextButtonIcon}
                    />
                </TouchableOpacity>
            </View >
        </View>
    )
}