import React, { useState } from "react";
import { View, Text, Image, Animated, Platform, StatusBar, TouchableOpacity } from "react-native";

interface headerLeftDrawerOptions {
    setScreen: React.Dispatch<React.SetStateAction<string>>,
    setTitle: React.Dispatch<React.SetStateAction<string>>,
    currentBlock: string,
    onClick: () => void;
    drawerOpacity: Animated.Value,
    drawerSlide: Animated.Value,
}

export default function headerLeftDrawer({ setScreen, setTitle, currentBlock, onClick, drawerOpacity, drawerSlide }: headerLeftDrawerOptions) {
    const [myVehicle, setMyVehicle] = useState(false);
    const [favoriteSpots, setFavoriteSpots] = useState(false);
    const [bookingHistory, setBookingHistory] = useState(false);
    const [support, setSupport] = useState(false);
    const [aboutUs, setAboutUs] = useState(false);
    const [settings, setSettings] = useState(false);

    if (currentBlock !== "left") {
        myVehicle && setMyVehicle(false);
        favoriteSpots && setFavoriteSpots(false);
        bookingHistory && setBookingHistory(false);
        support && setSupport(false);
        aboutUs && setAboutUs(false);
        settings && setSettings(false);
    }

    const setSelected = (selected: number) => {
        onClick();
        switch (selected) {
            case 0: {
                setScreen("MyVehicle");
                setTitle("My Vehicle");
                setMyVehicle(true);
                favoriteSpots && setFavoriteSpots(false);
                bookingHistory && setBookingHistory(false);
                support && setSupport(false);
                aboutUs && setAboutUs(false);
                settings && setSettings(false);
                break;
            }
            case 1: {
                setScreen("FavoriteSpots");
                setTitle("Favorite Spots");
                setFavoriteSpots(true);
                myVehicle && setMyVehicle(false);
                bookingHistory && setBookingHistory(false);
                support && setSupport(false);
                aboutUs && setAboutUs(false);
                settings && setSettings(false);
                break;
            }
            case 2: {
                setScreen("BookingHistory");
                setTitle("Booking History");
                setBookingHistory(true);
                myVehicle && setMyVehicle(false);
                favoriteSpots && setFavoriteSpots(false);
                support && setSupport(false);
                aboutUs && setAboutUs(false);
                settings && setSettings(false);
                break;
            }
            case 3: {
                setScreen("Support");
                setTitle("Support");
                setSupport(true);
                myVehicle && setMyVehicle(false);
                favoriteSpots && setFavoriteSpots(false);
                bookingHistory && setBookingHistory(false);
                aboutUs && setAboutUs(false);
                settings && setSettings(false);
                break;
            }
            case 4: {
                setScreen("AboutUs");
                setTitle("About Us");
                setAboutUs(true);
                myVehicle && setMyVehicle(false);
                favoriteSpots && setFavoriteSpots(false);
                bookingHistory && setBookingHistory(false);
                support && setSupport(false);
                settings && setSettings(false);
                break;
            }
            case 5: {
                setScreen("Settings");
                setTitle("Settings");
                setSettings(true);
                myVehicle && setMyVehicle(false);
                favoriteSpots && setFavoriteSpots(false);
                bookingHistory && setBookingHistory(false);
                support && setSupport(false);
                aboutUs && setAboutUs(false);
                break;
            }
        }
    }

    return (
        <Animated.View style={{
            opacity: drawerOpacity,
            marginTop: Platform.OS === 'ios' ? "15%" : StatusBar.currentHeight + "5%",
            backgroundColor: "#111",
            borderColor: "#555",
            borderRightWidth: 1,
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
                <TouchableOpacity onPress={() => setSelected(0)} style={{ flexDirection: "row", width: "100%", justifyContent: "space-around", alignItems: "center", }}>
                    {
                        myVehicle ? (
                            <Image source={require("../assets/drawer-icons/myVehiclesSelected.png")} style={{ flex: 0.35, aspectRatio: 1, }} />
                        ) : (
                            <Image source={require("../assets/drawer-icons/myVehicles.png")} style={{ flex: 0.35, aspectRatio: 1, }} />
                        )
                    }
                    <Text style={{ color: "#ccc", width: "75%", fontSize: 18, }}>My Vehicle</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setSelected(1)} style={{ flexDirection: "row", width: "100%", justifyContent: "space-around", alignItems: "center", }}>
                    {
                        favoriteSpots ? (
                            <Image source={require("../assets/drawer-icons/favoriteSelected.png")} style={{ flex: 0.35, aspectRatio: 1, }} />
                        ) : (
                            <Image source={require("../assets/drawer-icons/favorite.png")} style={{ flex: 0.35, aspectRatio: 1, }} />
                        )
                    }
                    <Text style={{ color: "#ccc", width: "75%", fontSize: 18, }}>Favorite Spots</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setSelected(2)} style={{ flexDirection: "row", width: "100%", justifyContent: "space-around", alignItems: "center", }}>
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
                <TouchableOpacity onPress={() => setSelected(3)} style={{ flexDirection: "row", width: "100%", justifyContent: "space-around", alignItems: "center", }}>
                    {
                        support ? (
                            <Image source={require("../assets/drawer-icons/supportSelected.png")} style={{ flex: 0.35, aspectRatio: 1, }} />
                        ) : (
                            <Image source={require("../assets/drawer-icons/support.png")} style={{ flex: 0.35, aspectRatio: 1, }} />
                        )
                    }
                    <Text style={{ color: "#ccc", width: "75%", fontSize: 18, }}>Support</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setSelected(4)} style={{ flexDirection: "row", width: "100%", justifyContent: "space-around", alignItems: "center", }}>
                    {
                        aboutUs ? (
                            <Image source={require("../assets/drawer-icons/aboutSelected.png")} style={{ flex: 0.35, aspectRatio: 1, }} />
                        ) : (
                            <Image source={require("../assets/drawer-icons/about.png")} style={{ flex: 0.35, aspectRatio: 1, }} />
                        )
                    }
                    <Text style={{ color: "#ccc", width: "75%", fontSize: 18, }}>About Us</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setSelected(5)} style={{ flexDirection: "row", width: "100%", justifyContent: "space-around", alignItems: "center", }}>
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