import React, { useState } from "react";
import { View, Text, TextInput, TouchableHighlight, Image, TouchableOpacity } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import RNBounceable from "@freakycoder/react-native-bounceable";
import styles from "./addSpotStyle";

interface spotOwnerProps {
    spotOwnerName: string,
    setSpotOwnerName: React.Dispatch<React.SetStateAction<string>>,
    spotOwnerPhone: string,
    setSpotOwnerPhone: React.Dispatch<React.SetStateAction<string>>,
    ownerAndInchargeSame: boolean,
    setOwnerAndInchargeSame: React.Dispatch<React.SetStateAction<boolean>>,
    spotInchargeName: string,
    setSpotInchargeName: React.Dispatch<React.SetStateAction<string>>,
    spotInchargePhone: string,
    setSpotInchargePhone: React.Dispatch<React.SetStateAction<string>>,
    setProgressTracker: React.Dispatch<React.SetStateAction<number>>;
}

export default function SpotOwner({
    spotOwnerName,
    setSpotOwnerName,
    spotOwnerPhone,
    setSpotOwnerPhone,
    spotInchargeName,
    ownerAndInchargeSame,
    setOwnerAndInchargeSame,
    setSpotInchargeName,
    spotInchargePhone,
    setSpotInchargePhone,
    setProgressTracker,
}: spotOwnerProps) {
    let bouncyCheckboxRef: BouncyCheckbox | null = null;

    const [ownerNameError, setOwnerNameError] = useState(false);
    const [ownerPhoneError, setOwnerPhoneError] = useState(false);
    const [inchargeNameError, setInchargeNameError] = useState(false);
    const [inchargePhoneError, setInchargePhoneError] = useState(false);

    const validate = () => {
        if (ownerNameError || ownerPhoneError || inchargeNameError || inchargePhoneError)
            return true;
        if (spotOwnerName.length < 1)
            return true;
        if (!ownerAndInchargeSame && spotInchargeName.length < 1)
            return true;
    }

    return (
        <View style={styles.credentialParentContainer}>
            <Text style={styles.headerText}>Enter the Owner and Incharge information </Text>

            <View style={styles.credentialContainer}>
                <TextInput
                    style={styles.credential}
                    onChangeText={(value) => {
                        if (ownerNameError)
                            setOwnerNameError(false);
                        setSpotOwnerName(value);
                        ownerAndInchargeSame && setSpotInchargeName(value);
                    }}
                    value={spotOwnerName}
                    placeholder="Spot Owner's Name"
                    placeholderTextColor={"#bbb"}
                />
                {
                    spotOwnerName.length > 1 && (
                        <TouchableHighlight onPress={() => {
                            if (ownerNameError)
                                setOwnerNameError(false);
                            setSpotOwnerName('');
                        }}
                            style={styles.buttonContainer}>
                            <Image
                                source={require("../../assets/buttons/cancelButton.png")}
                                style={styles.buttons}
                            />
                        </TouchableHighlight>
                    )
                }
            </View>
            <Text style={styles.warningText}>{ownerNameError ? "Enter a Valid Name" : ""}</Text>

            <View style={styles.credentialContainer}>
                <TextInput
                    style={styles.credential}
                    onChangeText={(value) => {
                        if (ownerPhoneError)
                            setOwnerPhoneError(false);
                        value = value.replace(' ', '');
                        value = value.replace('-', '');
                        value = value.replace(',', '');
                        value = value.replace('.', '');
                        setSpotOwnerPhone(value);
                        ownerAndInchargeSame && setSpotInchargePhone(value);
                    }}
                    value={spotOwnerPhone.length > 5 ? `${spotOwnerPhone.substring(0, 5)} ${spotOwnerPhone.substring(5,)}` : spotOwnerPhone}
                    placeholder="Spot Owner's Phone"
                    placeholderTextColor={"#bbb"}
                    keyboardType="numeric"
                    maxLength={11}
                />
                {
                    spotOwnerPhone.length > 1 && (
                        <TouchableHighlight onPress={() => {
                            if (ownerPhoneError)
                                setOwnerPhoneError(false);
                            setSpotOwnerPhone('');
                        }}
                            style={styles.buttonContainer}>
                            <Image
                                source={require("../../assets/buttons/cancelButton.png")}
                                style={styles.buttons}
                            />
                        </TouchableHighlight>
                    )
                }
            </View>
            <Text style={styles.warningText}>{ownerPhoneError ? "Enter a Valid 10 Digit Phone Number " : ""}</Text>

            <View style={styles.checkBoxContainer}>
                <BouncyCheckbox
                    ref={(ref: any) => (bouncyCheckboxRef = ref)}
                    fillColor="#000"
                    unfillColor="#000"
                    iconStyle={{ borderColor: "#fff" }}
                    isChecked={ownerAndInchargeSame}
                    disableBuiltInState
                    onPress={() => {
                        setOwnerAndInchargeSame(!ownerAndInchargeSame);
                        if (inchargeNameError)
                            setInchargeNameError(false);
                        if (inchargePhoneError)
                            setInchargePhoneError(false);
                    }}
                />
                <RNBounceable onPress={() => bouncyCheckboxRef?.onPress()} style={styles.checkBox}>
                    <Text style={styles.checkBoxText}>Incharge same as Owner ?</Text>
                </RNBounceable>
            </View>

            {!ownerAndInchargeSame && (
                <View style={styles.credentialContainer}>
                    <TextInput
                        style={styles.credential}
                        onChangeText={(value) => {
                            if (inchargeNameError)
                                setInchargeNameError(false);
                            setSpotInchargeName(value);
                        }}
                        value={spotInchargeName}
                        placeholder="Spot Incharge's Name"
                        placeholderTextColor={"#bbb"}
                        editable={!ownerAndInchargeSame}
                    />
                    {
                        spotInchargeName.length > 1 && (
                            <TouchableHighlight onPress={() => {
                                if (inchargeNameError)
                                    setInchargeNameError(false);
                                setSpotInchargeName('');
                            }}
                                style={styles.buttonContainer}>
                                <Image
                                    source={require("../../assets/buttons/cancelButton.png")}
                                    style={styles.buttons}
                                />
                            </TouchableHighlight>
                        )
                    }
                </View>
            )}
            <Text style={styles.warningText}>{inchargeNameError ? "Enter a Valid Name" : ""}</Text>

            {!ownerAndInchargeSame && (
                <View style={styles.credentialContainer}>
                    <TextInput
                        style={styles.credential}
                        onChangeText={(value) => {
                            if (inchargePhoneError)
                                setInchargePhoneError(false);
                            value = value.replace(' ', '');
                            value = value.replace('-', '');
                            value = value.replace(',', '');
                            value = value.replace('.', '');
                            setSpotInchargePhone(value);
                        }}
                        value={spotInchargePhone.length > 5 ? `${spotInchargePhone.substring(0, 5)} ${spotInchargePhone.substring(5,)}` : spotInchargePhone}
                        placeholder="Spot Incharge's Phone"
                        placeholderTextColor={"#bbb"}
                        keyboardType="numeric"
                        maxLength={11}
                        editable={!ownerAndInchargeSame}
                    />
                    {
                        spotInchargePhone.length > 1 && (
                            <TouchableHighlight onPress={() => {
                                if (inchargePhoneError)
                                    setInchargePhoneError(false);
                                setSpotInchargePhone('');
                            }}
                                style={styles.buttonContainer}>
                                <Image
                                    source={require("../../assets/buttons/cancelButton.png")}
                                    style={styles.buttons}
                                />
                            </TouchableHighlight>
                        )
                    }
                </View>
            )}
            <Text style={styles.warningText}>{inchargePhoneError ? "Enter a Valid 10 Digit Phone Number " : ""}</Text>

            <View style={styles.nextBackButtonContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => setProgressTracker(1)}>
                    <Image
                        source={require("../../assets/buttons/backButton.png")}
                        style={styles.backAndNextButtonIcon}
                    />
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.nextButton, validate() && { backgroundColor: "#888" }]} disabled={validate()}
                    onPress={() => {
                        if (ownerAndInchargeSame) {
                            setSpotInchargeName(spotOwnerName);
                            setSpotInchargePhone(spotOwnerPhone);
                        }
                        if (!spotOwnerName.match(/^[a-z A-Z]+$/)) {
                            setOwnerNameError(true);
                            return;
                        }
                        if (spotOwnerPhone.length !== 10 || !spotOwnerPhone.match(/^[0-9]+$/)) {
                            setOwnerPhoneError(true);
                            return;
                        }
                        if (!ownerAndInchargeSame && !spotInchargeName.match(/^[a-z A-Z]+$/)) {
                            setInchargeNameError(true);
                            return;
                        }
                        if (!ownerAndInchargeSame && (spotInchargePhone.length !== 10 || !spotInchargePhone.match(/^[0-9]+$/))) {
                            setInchargePhoneError(true);
                            return;
                        }
                        setProgressTracker(3);
                    }}>
                    <Text style={styles.nextButtonText}>Next</Text>
                    <Image
                        source={require("../../assets/buttons/nextButton.png")}
                        style={styles.backAndNextButtonIcon}
                    />
                </TouchableOpacity>
            </View >
        </View >
    )
}