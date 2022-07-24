import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text, TextInput, ToastAndroid, BackHandler } from "react-native";
import * as DocumentPicker from 'expo-document-picker';
import styles from "./userProfileStyle";

const imageFileTypes: string[] = ['jpg', 'jpeg', 'png'];

interface userProfileProps {
    onClickBackButton: (toScreen: string) => boolean;
}

export default function userProfile({ onClickBackButton }: userProfileProps) {
    const [editMode, setEditMode] = useState(false);
    const [clickedOnImage, setClickedOnImage] = useState(false);

    const [profileImageData, setProfileImageData] = useState<string | undefined>("data:image/jpeg;base64,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");;
    const [name, setName] = useState('Arya');
    const [phone, setPhone] = useState('9865246197');
    const [email, setEmail] = useState('arya@parkez.com');
    const [address, setAddress] = useState('Rajajinagara, Bangalore, Karnataka, India - 560 079');

    const uploadImage = () => {
        DocumentPicker.getDocumentAsync().then(file => file).then(result => {
            if (result.type === "success") {
                const fileType = result.name.split('.');
                if (imageFileTypes.includes(fileType[fileType.length - 1])) {
                    setProfileImageData(result.uri);
                    ToastAndroid.show("Profile picture changed", 100);
                }
                else {
                    ToastAndroid.show("Please choose a valid image [JPG, JPEG, PNG]", 100);
                }
            }
        });
    }

    {
        editMode ? BackHandler.addEventListener("hardwareBackPress", () => {
            setEditMode(false); return true;
        }) : BackHandler.addEventListener("hardwareBackPress", () => onClickBackButton("Home"))
    }
    return (
        <View style={styles.container}>
            {editMode ? (
                <TouchableOpacity style={styles.profileImageContainer} onPress={() => setClickedOnImage(!clickedOnImage)}>
                    {profileImageData ? (
                        <Image
                            source={{ uri: profileImageData }}
                            style={styles.profileImage}
                        />
                    ) : (
                        <Image
                            source={require("../../assets/buttons/profile.png")}
                            style={styles.profileImage}
                        />
                    )}
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.profileImageContainer} activeOpacity={1}>
                    {profileImageData ? (
                        <Image
                            source={{ uri: profileImageData }}
                            style={styles.profileImage}
                        />
                    ) : (
                        <Image
                            source={require("../../assets/buttons/profile.png")}
                            style={styles.profileImage}
                        />
                    )}
                </TouchableOpacity>
            )}

            < View style={styles.profileContainer}>
                {editMode ? (
                    <View style={styles.profileDataContainer}>
                        <Text style={styles.profileHead}>UserName</Text>
                        <TextInput
                            style={styles.profileDataEditMode}
                            placeholderTextColor={"#555"}
                            onChangeText={(value) => setName(value)}
                            value={name}
                        />
                    </View>
                ) : (
                    <View style={styles.profileDataContainer}>
                        <Text style={styles.profileHead}>UserName</Text>
                        <Text style={styles.profileData}>{name}</Text>
                    </View>
                )}

                {editMode ? (
                    <View style={styles.profileDataContainer}>
                        <Text style={styles.profileHead}>Phone</Text>
                        <TextInput
                            style={styles.profileDataEditMode}
                            placeholderTextColor={"#555"}
                            onChangeText={(value) => setPhone(value)}
                            value={phone}
                            maxLength={10}
                            keyboardType="number-pad"
                        />
                    </View>
                ) : (
                    <View style={styles.profileDataContainer}>
                        <Text style={styles.profileHead}>Phone</Text>
                        <Text style={styles.profileData}>{phone}</Text>
                    </View>
                )}

                {editMode ? (
                    <View style={styles.profileDataContainer}>
                        <Text style={styles.profileHead}>Email</Text>
                        <TextInput
                            style={styles.profileDataEditMode}
                            placeholderTextColor={"#555"}
                            onChangeText={(value) => setEmail(value)}
                            value={email}
                            keyboardType="email-address"
                        />
                    </View>
                ) : (
                    <View style={styles.profileDataContainer}>
                        <Text style={styles.profileHead}>Email</Text>
                        <Text style={styles.profileData}>{email}</Text>
                    </View>
                )}

                {editMode ? (
                    <View style={styles.profileDataContainer}>
                        <Text style={styles.profileHead}>Address</Text>
                        <TextInput
                            style={styles.profileDataEditMode}
                            placeholderTextColor={"#555"}
                            onChangeText={(value) => setAddress(value)}
                            value={address}
                        />
                    </View>
                ) : (
                    <View style={styles.profileDataContainer}>
                        <Text style={styles.profileHead}>Address</Text>
                        <Text style={styles.profileData}>{address}</Text>
                    </View>
                )}

                {
                    editMode ? (
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.homeButton}
                                onPress={() => {
                                    setEditMode(false);
                                    clickedOnImage && setClickedOnImage(false);
                                }}>
                                <Image
                                    source={require("../../assets/buttons/backButton.png")}
                                    style={styles.homeButtonIcon}
                                />
                                <Text style={styles.homeButtonText}>Cancel</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.editButton}
                                onPress={() => {
                                    setEditMode(false);
                                    clickedOnImage && setClickedOnImage(false);
                                    ToastAndroid.showWithGravity("Changes to your profile are successful", ToastAndroid.SHORT, ToastAndroid.CENTER);
                                }}>
                                <Text style={styles.editButtonText}>Save</Text>
                                <Image
                                    source={require("../../assets/buttons/nextButton.png")}
                                    style={styles.editButtonIcon}
                                />
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.homeButton} onPress={() => onClickBackButton("Home")}>
                                <Image
                                    source={require("../../assets/buttons/backButton.png")}
                                    style={styles.homeButtonIcon}
                                />
                                <Text style={styles.homeButtonText}>Home</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.editButton} onPress={() => setEditMode(true)}>
                                <Text style={styles.editButtonText}>Edit</Text>
                                <Image
                                    source={require("../../assets/buttons/nextButton.png")}
                                    style={styles.editButtonIcon}
                                />
                            </TouchableOpacity>
                        </View>
                    )
                }
            </View>

            {clickedOnImage &&
                <View style={styles.editDeleteImageOptionsContainer}>
                    <TouchableOpacity style={styles.editDeleteImageOptions}
                        onPress={() => {
                            setProfileImageData(undefined);
                            setClickedOnImage(false);
                            ToastAndroid.show("Profile picture removed", 100);
                        }}>
                        <Image
                            source={require("../../assets/buttons/delete.png")}
                            style={[styles.editDeleteImageOptionsIcon, styles.deleteImageIcon]}
                        />
                        <Text style={styles.editDeleteImageOptionsText}>Remove</Text>
                    </TouchableOpacity>
                    <View style={styles.seperator}></View>
                    <TouchableOpacity style={styles.editDeleteImageOptions}
                        onPress={() => {
                            uploadImage();
                            setClickedOnImage(false);
                        }}>
                        <Image
                            source={require("../../assets/buttons/edit.png")}
                            style={styles.editDeleteImageOptionsIcon}
                        />
                        <Text style={styles.editDeleteImageOptionsText}>Change</Text>
                    </TouchableOpacity>
                </View>
            }

        </View >
    )
}