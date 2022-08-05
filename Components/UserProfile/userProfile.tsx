import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  ToastAndroid,
  BackHandler,
  ScrollView,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import styles from "./userProfileStyle";
import { getCache, setCache } from "../../Models/getSetCache";

const imageFileTypes: string[] = ["jpg", "jpeg", "png"];

interface userProfileProps {
  onClickBackButton: (toScreen: string) => boolean;
}

export default function userProfile({ onClickBackButton }: userProfileProps) {
  const [editMode, setEditMode] = useState(false);
  const [clickedOnImage, setClickedOnImage] = useState(false);
  const [previousValues, setPreviousValues] = useState<{ profileImageData: string, name: string, phone: string, email: string, address: string }>();

  const [profileImageData, setProfileImageData] = useState<string | undefined>();
  const [name, setName] = useState("Arya");
  const [phone, setPhone] = useState("9865246197");
  const [email, setEmail] = useState("arya@parkez.com");
  const [address, setAddress] = useState(
    "Rajajinagara, Bangalore, Karnataka, India - 560 079"
  );

  useEffect(() => {
    getCache("profilePicture")?.then(valuePromise => valuePromise).then(value => {
      setProfileImageData(value ?? "")
    })
  }, []);


  const uploadImage = () => {
    DocumentPicker.getDocumentAsync()
      .then((file) => file)
      .then((result) => {
        if (result.type === "success") {
          const fileType = result.name.split(".");
          if (imageFileTypes.includes(fileType[fileType.length - 1])) {
            setProfileImageData(result.uri);
            setCache("profilePicture", result.uri);
            ToastAndroid.show("Profile picture changed", 100);
          } else {
            ToastAndroid.show(
              "Please choose a valid image [JPG, JPEG, PNG]",
              100
            );
          }
        }
      });
  };

  {
    editMode
      ? BackHandler.addEventListener("hardwareBackPress", () => {
        setEditMode(false);
        return true;
      })
      : BackHandler.addEventListener("hardwareBackPress", () =>
        onClickBackButton("Home")
      );
  }
  return (
    <View style={styles.container}>
      {editMode ? (
        <TouchableOpacity
          style={styles.profileImageContainer}
          onPress={() => setClickedOnImage(!clickedOnImage)}
        >
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
        <TouchableOpacity
          style={styles.profileImageContainer}
          activeOpacity={1}
        >
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

      <View style={styles.profileContainer}>
        <View style={styles.profileDetails}>
          <ScrollView>
            {editMode ? (
              <View style={styles.profileDataContainer}>
                <Text allowFontScaling={false} style={styles.profileHead}>
                  UserName
                </Text>
                <TextInput
                  allowFontScaling={false}
                  style={styles.profileDataEditMode}
                  placeholderTextColor={"#555"}
                  onChangeText={(value) => setName(value)}
                  value={name}
                />
              </View>
            ) : (
              <View style={styles.profileDataContainer}>
                <Text allowFontScaling={false} style={styles.profileHead}>
                  UserName
                </Text>
                <Text allowFontScaling={false} style={styles.profileData}>
                  {name}
                </Text>
              </View>
            )}

            {editMode ? (
              <View style={styles.profileDataContainer}>
                <Text allowFontScaling={false} style={styles.profileHead}>
                  Phone
                </Text>
                <TextInput
                  allowFontScaling={false}
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
                <Text allowFontScaling={false} style={styles.profileHead}>
                  Phone
                </Text>
                <Text allowFontScaling={false} style={styles.profileData}>
                  {phone}
                </Text>
              </View>
            )}

            {editMode ? (
              <View style={styles.profileDataContainer}>
                <Text allowFontScaling={false} style={styles.profileHead}>
                  Email
                </Text>
                <TextInput
                  allowFontScaling={false}
                  style={styles.profileDataEditMode}
                  placeholderTextColor={"#555"}
                  onChangeText={(value) => setEmail(value)}
                  value={email}
                  keyboardType="email-address"
                />
              </View>
            ) : (
              <View style={styles.profileDataContainer}>
                <Text allowFontScaling={false} style={styles.profileHead}>
                  Email
                </Text>
                <Text allowFontScaling={false} style={styles.profileData}>
                  {email}
                </Text>
              </View>
            )}

            {editMode ? (
              <View style={styles.profileDataContainer}>
                <Text allowFontScaling={false} style={styles.profileHead}>
                  Address
                </Text>
                <TextInput
                  allowFontScaling={false}
                  style={styles.profileDataEditMode}
                  placeholderTextColor={"#555"}
                  onChangeText={(value) => setAddress(value)}
                  value={address}
                />
              </View>
            ) : (
              <View style={styles.profileDataContainer}>
                <Text allowFontScaling={false} style={styles.profileHead}>
                  Address
                </Text>
                <Text allowFontScaling={false} style={styles.profileData}>
                  {address}
                </Text>
              </View>
            )}
          </ScrollView>
        </View>

        {editMode ? (
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.homeButton}
              onPress={() => {
                setEditMode(false);
                clickedOnImage && setClickedOnImage(false);
                setProfileImageData(previousValues?.profileImageData);
                setCache("profilePicture", previousValues?.profileImageData ?? "");
                setName(previousValues?.name ?? "");
                setPhone(previousValues?.phone ?? "")
                setEmail(previousValues?.email ?? "");
                setAddress(previousValues?.address ?? "");
              }}
            >
              <Image
                source={require("../../assets/buttons/backButton.png")}
                style={styles.homeButtonIcon}
              />
              <Text allowFontScaling={false} style={styles.homeButtonText}>
                Cancel
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.editButton}
              onPress={() => {
                setEditMode(false);
                clickedOnImage && setClickedOnImage(false);
                ToastAndroid.showWithGravity(
                  "Changes to your profile are successful",
                  ToastAndroid.SHORT,
                  ToastAndroid.CENTER
                );
              }}
            >
              <Text allowFontScaling={false} style={styles.editButtonText}>
                Save
              </Text>
              <Image
                source={require("../../assets/buttons/nextButton.png")}
                style={styles.editButtonIcon}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.homeButton}
              onPress={() => onClickBackButton("Home")}
            >
              <Image
                source={require("../../assets/buttons/backButton.png")}
                style={styles.homeButtonIcon}
              />
              <Text allowFontScaling={false} style={styles.homeButtonText}>
                Home
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.editButton}
              onPress={() => {
                setEditMode(true);
                let tempObj = {
                  profileImageData: profileImageData ?? "",
                  name: name,
                  phone: phone,
                  email: email,
                  address: address,
                }
                setPreviousValues(tempObj);
              }}
            >
              <Text allowFontScaling={false} style={styles.editButtonText}>
                Edit
              </Text>
              <Image
                source={require("../../assets/buttons/nextButton.png")}
                style={styles.editButtonIcon}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>

      {clickedOnImage && (
        <View style={styles.editDeleteImageOptionsContainer}>
          <TouchableOpacity
            style={styles.editDeleteImageOptions}
            onPress={() => {
              setProfileImageData(undefined);
              setClickedOnImage(false);
              setCache("profilePicture", "");
              ToastAndroid.show("Profile picture removed", 100);
            }}
          >
            <Image
              source={require("../../assets/buttons/delete.png")}
              style={[
                styles.editDeleteImageOptionsIcon,
                styles.deleteImageIcon,
              ]}
            />
            <Text
              allowFontScaling={false}
              style={styles.editDeleteImageOptionsText}
            >
              Remove
            </Text>
          </TouchableOpacity>

          <View style={styles.seperator}></View>

          <TouchableOpacity
            style={styles.editDeleteImageOptions}
            onPress={() => {
              uploadImage();
              setClickedOnImage(false);
            }}
          >
            <Image
              source={require("../../assets/buttons/edit.png")}
              style={styles.editDeleteImageOptionsIcon}
            />
            <Text
              allowFontScaling={false}
              style={styles.editDeleteImageOptionsText}
            >
              Change
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
