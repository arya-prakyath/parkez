import { StackActions } from "@react-navigation/native";
import { Animated, Text, Platform, StatusBar, TouchableOpacity, Alert } from "react-native";
import showAlert from "./alertBox";

interface headerProfileOptions {
    navigation: any;
    onClickProfile: () => void;
    onClickLogout: () => void;
    profileOptionsOpacity: Animated.Value;
    profileOptionsSlide: Animated.Value;
}

export default function HeaderProfileOptions({ navigation, onClickProfile, onClickLogout, profileOptionsOpacity, profileOptionsSlide }: headerProfileOptions) {
    const logOut = () => {
        onClickLogout();
        showAlert({
            title: "",
            message: "Are you sure you want to logout?",
            buttonText: "Logout",
            onPressButton: () => navigation.dispatch(
                StackActions.replace('Login', {
                    navigation: navigation,
                })),
            cancelButtonText: "Cancel",
            onPressCancelButton: () => { },
        });
    }

    return (
        <Animated.View style={{
            opacity: profileOptionsOpacity,
            marginTop: (Platform.OS === 'ios') ? 80 : (StatusBar.currentHeight ? (StatusBar.currentHeight + 80) : 80),
            backgroundColor: "#111",
            borderColor: "#555",
            borderWidth: 1,
            borderTopLeftRadius: 45,
            position: "absolute",
            marginBottom: 15,
            alignSelf: "flex-end",
            justifyContent: "space-evenly",
            width: "50%",
            height: 125,
            transform: [{ translateX: profileOptionsSlide }],
        }}>
            <TouchableOpacity onPress={onClickProfile}>
                <Text allowFontScaling={false} style={{ color: "#ccc", borderBottomColor: "#ccc", borderBottomWidth: 1, width: "90%", fontSize: 18, marginLeft: 18, paddingBottom: 8 }}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={logOut}>
                <Text allowFontScaling={false} style={{ color: "#ccc", borderBottomColor: "#acccaa", borderBottomWidth: 1, width: "90%", fontSize: 18, marginLeft: 18, paddingBottom: 8 }}>Logout</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}