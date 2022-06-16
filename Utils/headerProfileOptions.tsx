import { StackActions } from "@react-navigation/native";
import { Animated, Text, Platform, StatusBar } from "react-native"

interface headerProfileOptions {
    navigation: any,
    profileOptionsOpacity: Animated.Value,
    profileOptionsSlide: Animated.Value,
}

export default function HeaderProfileOptions({ navigation, profileOptionsOpacity, profileOptionsSlide }: headerProfileOptions) {
    const logOut = () => {
        navigation.dispatch(
            StackActions.replace('Login', {
                navigation: navigation,
            })
        );
    }

    const openProfile = () => {
        navigation.navigate('Profile');
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
            <Text onPress={openProfile} style={{ color: "#ccc", borderBottomColor: "#ccc", borderBottomWidth: 1, width: "90%", fontSize: 18, marginLeft: 18, paddingBottom: 8 }}>Profile</Text>
            <Text onPress={logOut} style={{ color: "#ccc", borderBottomColor: "#acccaa", borderBottomWidth: 1, width: "90%", fontSize: 18, marginLeft: 18, paddingBottom: 8 }}>Logout</Text>
        </Animated.View>
    )
}