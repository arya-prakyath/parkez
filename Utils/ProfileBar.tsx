import { StackActions } from "@react-navigation/native";
import { Animated, Text, Platform, StatusBar, TouchableOpacity, Dimensions, Alert } from "react-native"
import { Title } from "react-native-paper";
import animate from "../Animations/animate";
import showAlert from "./alertBox";
import alertBox from "./alertBox";

interface headerProfileOptions {
    navigation: any,
    onClickProfile: () => void;
    onClickLogout: () => void;
    profileOptionsOpacity: Animated.Value;
    profileOptionsSlide: Animated.Value;
}

export default function HeaderProfileOptions({ navigation, onClickProfile, onClickLogout, profileOptionsOpacity, profileOptionsSlide }: headerProfileOptions) {
    const logOut = () => {
        onClickLogout();
        Alert.alert(
            "",
            "Are you sure you want to logout?",
            [
                {
                    text: "Logout",
                    onPress: () => navigation.dispatch(
                            StackActions.replace('Login', {
                                navigation: navigation,
                            })),
                    style: "default",
                },
                {
                    text: "Cancel",
                    onPress: () => {},
                    style: "cancel",
                }
            ],
            {
                cancelable: true,
            }
        )
    }

    return (
        <Animated.View style={{
            opacity: profileOptionsOpacity,
            marginTop: Platform.OS === 'ios' ? "15%" : StatusBar.currentHeight + "5%",
            backgroundColor: "#111",
            borderTopLeftRadius: 45,
            position: "absolute",
            marginBottom: 15,
            alignSelf: "flex-end",
            justifyContent: "space-evenly",
            width: "50%",
            height: "12%",
            transform: [{ translateX: profileOptionsSlide }],
        }}>
            <TouchableOpacity onPress={onClickProfile}>
                <Text style={{ color: "#ccc", borderBottomColor: "#ccc", borderBottomWidth: 1, width: "90%", fontSize: 18, marginLeft: 18, paddingBottom: 8 }}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={logOut}>
                <Text style={{ color: "#ccc", borderBottomColor: "#acccaa", borderBottomWidth: 1, width: "90%", fontSize: 18, marginLeft: 18, paddingBottom: 8 }}>Logout</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}