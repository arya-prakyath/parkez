import React from "react";
import { View, Text, Animated, Platform, StatusBar } from "react-native";

interface headerLeftDrawerOptions {
    navigation: any,
    drawerOpacity: Animated.Value,
    drawerSlide: Animated.Value,
}

export default function headerLeftDrawer({ navigation, drawerOpacity, drawerSlide }: headerLeftDrawerOptions) {
    return (
        <Animated.View style={{
            opacity: drawerOpacity,
            marginTop: Platform.OS === 'ios' ? "15%" : StatusBar.currentHeight + "5%",
            backgroundColor: "#111",
            borderTopRightRadius: 40,
            position: "absolute",
            marginBottom: 15,
            alignSelf: "flex-start",
            justifyContent: "center",
            alignContent: "center",
            width: "70%",
            height: "75%",
            transform: [{ translateX: drawerSlide }],
        }}>
            <Text style={{ color: "#fff", alignSelf: "center" }}>Drawer Here</Text>
        </Animated.View>
    )
}