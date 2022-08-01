import React, { useState } from "react";
import { View, Text, TextInput, TouchableHighlight, Image, TouchableOpacity, } from "react-native";
import styles from "./addSpotStyle";

interface spotDetailsProps {
    spotName: string,
    setSpotName: React.Dispatch<React.SetStateAction<string>>,
    setSpotAddress: (building: string, street: string, landmark: string, city: string, pincode: string) => void,
    building: string,
    setBuilding: React.Dispatch<React.SetStateAction<string>>,
    street: string,
    setStreet: React.Dispatch<React.SetStateAction<string>>,
    landmark: string,
    setLandmark: React.Dispatch<React.SetStateAction<string>>,
    city: string,
    setCity: React.Dispatch<React.SetStateAction<string>>,
    pincode: string,
    setPincode: React.Dispatch<React.SetStateAction<string>>,
    setProgressTracker: React.Dispatch<React.SetStateAction<number>>;
}

export default function SpotDetails({
    spotName,
    setSpotName,
    setSpotAddress,
    building,
    setBuilding,
    street,
    setStreet,
    landmark,
    setLandmark,
    city,
    setCity,
    pincode,
    setPincode,
    setProgressTracker,
}: spotDetailsProps) {
    const [pincodeError, setPincodeError] = useState(false);

    const validate = () => {
        if (spotName.length < 2)
            return true;
        if (building.length < 2)
            return true;
        if (street.length < 2)
            return true;
        if (landmark.length < 2)
            return true;
        if (city.length < 2)
            return true;
    }


    return (
        <View style={styles.credentialParentContainer}>
            <Text allowFontScaling={false} style={styles.headerText}>Enter the Name and Address of your Parking Spot to rent</Text>

            <View style={styles.credentialContainer}>
                <TextInput allowFontScaling={false}
                    style={styles.credential}
                    onChangeText={(value) => {
                        setSpotName(value);
                    }}
                    value={spotName}
                    placeholder="Spot Name"
                    placeholderTextColor={"#bbb"}
                    autoCorrect={false}
                />
                {
                    spotName.length > 1 && (
                        <TouchableHighlight onPress={() => setSpotName('')}
                            style={styles.buttonContainer}>
                            <Image
                                source={require("../../assets/buttons/cancelButton.png")}
                                style={styles.buttons}
                            />
                        </TouchableHighlight>
                    )
                }
            </View>

            <View style={styles.credentialContainer}>
                <TextInput allowFontScaling={false}
                    style={styles.credential}
                    onChangeText={(value) => {
                        setBuilding(value);
                    }}
                    value={building}
                    placeholder="Building Name/ No."
                    placeholderTextColor={"#bbb"}
                    autoCorrect={false}
                />
                {
                    building.length > 1 && (
                        <TouchableHighlight onPress={() => setBuilding('')}
                            style={styles.buttonContainer}>
                            <Image
                                source={require("../../assets/buttons/cancelButton.png")}
                                style={styles.buttons}
                            />
                        </TouchableHighlight>
                    )
                }
            </View>

            <View style={styles.credentialContainer}>
                <TextInput allowFontScaling={false}
                    style={styles.credential}
                    onChangeText={(value) => {
                        setStreet(value);
                    }}
                    value={street}
                    placeholder="Street/ Main/ Cross/ Locality"
                    placeholderTextColor={"#bbb"}
                    autoCorrect={false}
                />
                {
                    street.length > 1 && (
                        <TouchableHighlight onPress={() => setStreet('')}
                            style={styles.buttonContainer}>
                            <Image
                                source={require("../../assets/buttons/cancelButton.png")}
                                style={styles.buttons}
                            />
                        </TouchableHighlight>
                    )
                }
            </View>

            <View style={styles.credentialContainer}>
                <TextInput allowFontScaling={false}
                    style={styles.credential}
                    onChangeText={(value) => {
                        setLandmark(value);
                    }}
                    value={landmark}
                    placeholder="Landmark"
                    placeholderTextColor={"#bbb"}
                    autoCorrect={false}
                />
                {
                    landmark.length > 1 && (
                        <TouchableHighlight onPress={() => setLandmark('')}
                            style={styles.buttonContainer}>
                            <Image
                                source={require("../../assets/buttons/cancelButton.png")}
                                style={styles.buttons}
                            />
                        </TouchableHighlight>
                    )
                }
            </View>

            <View style={styles.credentialContainer}>
                <TextInput allowFontScaling={false}
                    style={[styles.credential, { color: "#888" }]}
                    value={city}
                    placeholder="City"
                    placeholderTextColor={"#bbb"}
                    editable={false}
                    autoCorrect={false}
                />
            </View>

            <View style={styles.credentialContainer}>
                <TextInput allowFontScaling={false}
                    style={styles.credential}
                    onChangeText={(value) => {
                        if (pincodeError)
                            setPincodeError(false);
                        value = value.replace(' ', '');
                        value = value.replace('-', '');
                        value = value.replace(',', '');
                        value = value.replace('.', '');
                        setPincode(value);
                    }}
                    value={pincode.length > 3 ? `${pincode.substring(0, 3)} ${pincode.substring(3,)}` : pincode}
                    placeholder="Pin Code"
                    placeholderTextColor={"#bbb"}
                    maxLength={7}
                    keyboardType="number-pad"
                    autoCorrect={false}
                />
                {
                    pincode.length > 1 && (
                        <TouchableHighlight onPress={() => {
                            if (pincodeError)
                                setPincodeError(false);
                            setPincode('');
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
            <Text allowFontScaling={false} style={styles.warningText}>{pincodeError ? "Enter a Valid 6 Digit Pincode" : ""}</Text>


            <View style={styles.nextBackButtonContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => setProgressTracker(0)}>
                    <Image
                        source={require("../../assets/buttons/backButton.png")}
                        style={styles.backAndNextButtonIcon}
                    />
                    <Text allowFontScaling={false} style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.nextButton, validate() && { backgroundColor: "#888" }]} disabled={validate()}
                    onPress={() => {
                        if (pincode.length < 6 || !pincode.match(/^[0-9]+$/)) {
                            setPincodeError(true);
                            return;
                        }
                        setSpotAddress(building, street, landmark, city, pincode);
                        setProgressTracker(2);
                    }}>
                    <Text allowFontScaling={false} style={styles.nextButtonText}>Next</Text>
                    <Image
                        source={require("../../assets/buttons/nextButton.png")}
                        style={styles.backAndNextButtonIcon}
                    />
                </TouchableOpacity>
            </View >
        </View >
    )
}