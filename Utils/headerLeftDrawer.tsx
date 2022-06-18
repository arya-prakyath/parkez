import React, { useState } from "react";
import { View, Text, Image, Animated, Platform, StatusBar, TouchableOpacity } from "react-native";

interface headerLeftDrawerOptions {
    navigation: any,
    drawerOpacity: Animated.Value,
    drawerSlide: Animated.Value,
}

export default function headerLeftDrawer({ navigation, drawerOpacity, drawerSlide }: headerLeftDrawerOptions) {
    const [myVehicle, SetMyVehicle] = useState(false);
    const [favoriteSpots, SetFavoriteSpots] = useState(false);
    const [bookingHistory, SetBookingHistory] = useState(false);
    const [support, setSupport] = useState(false);
    const [aboutUs, setAboutUs] = useState(false);
    const [settings, setSettings] = useState(false);

    const clearSelections = () => {
        if (myVehicle)
            SetMyVehicle(false);
        else if (favoriteSpots)
            SetFavoriteSpots(false);
        else if (bookingHistory)
            SetBookingHistory(false);
        else if (aboutUs)
            setAboutUs(false);
        else if (support)
            setSupport(false);
        else if (settings)
            setSettings(false);
    }

    return (
        <Animated.View style={{
            opacity: drawerOpacity,
            marginTop: Platform.OS === 'ios' ? "15%" : StatusBar.currentHeight + "5%",
            backgroundColor: "#111",
            borderTopRightRadius: 40,
            position: "absolute",
            marginBottom: 15,
            alignSelf: "flex-start",
            alignContent: "flex-start",
            width: "72%",
            height: "75%",
            transform: [{ translateX: drawerSlide }],
        }}>
            <View style={{ height: "15%", width: "100%", backgroundColor: "#555", padding: 5, alignSelf: "center" }}>
                <Image source={require("../assets/logo_car.png")} style={{ flex: 0.5, aspectRatio: 2.75, alignSelf: "center", }} />
                <Image source={require("../assets/logo_text.png")} style={{ flex: 0.5, aspectRatio: 2.2, alignSelf: "center", }} />
            </View>

            <View style={{ height: "35%", justifyContent: "space-evenly" }}>
                <TouchableOpacity onPress={() => { clearSelections(); SetMyVehicle(!myVehicle) }}
                    style={{ flexDirection: "row", width: "100%", justifyContent: "space-around", alignItems: "center", }}>
                    {
                        myVehicle ? (
                            <Image source={require("../assets/drawer-icons/myVehiclesSelected.png")} style={{ flex: 0.35, aspectRatio: 1, }} />
                        ) : (
                            <Image source={require("../assets/drawer-icons/myVehicles.png")} style={{ flex: 0.35, aspectRatio: 1, }} />
                        )
                    }
                    <Text style={{ color: "#ccc", width: "75%", fontSize: 18, }}>My Vehicle</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { clearSelections(); SetFavoriteSpots(!favoriteSpots) }}
                    style={{ flexDirection: "row", width: "100%", justifyContent: "space-around", alignItems: "center", }}>
                    {
                        favoriteSpots ? (
                            <Image source={require("../assets/drawer-icons/favoriteSelected.png")} style={{ flex: 0.35, aspectRatio: 1, }} />
                        ) : (
                            <Image source={require("../assets/drawer-icons/favorite.png")} style={{ flex: 0.35, aspectRatio: 1, }} />
                        )
                    }
                    <Text style={{ color: "#ccc", width: "75%", fontSize: 18, }}>Favorite Spots</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { clearSelections(); SetBookingHistory(!bookingHistory) }}
                    style={{ flexDirection: "row", width: "100%", justifyContent: "space-around", alignItems: "center", }}>
                    {
                        bookingHistory ? (
                            <Image source={require("../assets/drawer-icons/historySelected.png")} style={{ flex: 0.35, aspectRatio: 1, }} />
                        ) : (
                            <Image source={require("../assets/drawer-icons/history.png")} style={{ flex: 0.35, aspectRatio: 1, }} />
                        )
                    }
                    <Text style={{ color: "#ccc", width: "75%", fontSize: 18, }}>Booking History</Text>
                </TouchableOpacity>
            </View>

            <View style={{ height: "35%", marginTop: "20%", justifyContent: "space-evenly" }}>
                <TouchableOpacity onPress={() => { clearSelections(); setSupport(!support) }}
                    style={{ flexDirection: "row", width: "100%", justifyContent: "space-around", alignItems: "center", }}>
                    {
                        support ? (
                            <Image source={require("../assets/drawer-icons/supportSelected.png")} style={{ flex: 0.35, aspectRatio: 1, }} />
                        ) : (
                            <Image source={require("../assets/drawer-icons/support.png")} style={{ flex: 0.35, aspectRatio: 1, }} />
                        )
                    }
                    <Text style={{ color: "#ccc", width: "75%", fontSize: 18, }}>Support</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { clearSelections(); setAboutUs(!aboutUs) }}
                    style={{ flexDirection: "row", width: "100%", justifyContent: "space-around", alignItems: "center", }}>
                    {
                        aboutUs ? (
                            <Image source={require("../assets/drawer-icons/aboutSelected.png")} style={{ flex: 0.35, aspectRatio: 1, }} />
                        ) : (
                            <Image source={require("../assets/drawer-icons/about.png")} style={{ flex: 0.35, aspectRatio: 1, }} />
                        )
                    }
                    <Text style={{ color: "#ccc", width: "75%", fontSize: 18, }}>About Us</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { clearSelections(); setSettings(!settings) }}
                    style={{ flexDirection: "row", width: "100%", justifyContent: "space-around", alignItems: "center", }}>
                    {
                        settings ? (
                            <Image source={require("../assets/drawer-icons/settingsSelected.png")} style={{ flex: 0.35, aspectRatio: 1, }} />
                        ) : (
                            <Image source={require("../assets/drawer-icons/settings.png")} style={{ flex: 0.35, aspectRatio: 1, }} />
                        )
                    }
                    <Text style={{ color: "#ccc", width: "75%", fontSize: 18, }}>Settings</Text>
                </TouchableOpacity>
            </View>
        </Animated.View >
    )
}