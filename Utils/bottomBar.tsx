import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StatusBar } from "react-native";

interface bottomBarProps {
    setScreen: React.Dispatch<React.SetStateAction<string>>,
    setTitle: React.Dispatch<React.SetStateAction<string>>,
    currentBlock: string,
    onClick: () => void;
}
export default function bottomBar({ setScreen, setTitle, currentBlock, onClick }: bottomBarProps) {
    const [homeSelected, setHomeSelected] = useState(true);
    const [findSpotSelected, setFindSpotSelected] = useState(false);
    const [myPlaceSelected, setMyPlaceSelected] = useState(false);
    const [walletSelected, setWalletSelected] = useState(false);

    if (currentBlock === "home") {
        !homeSelected && setHomeSelected(true);
        findSpotSelected && setFindSpotSelected(false);
        myPlaceSelected && setMyPlaceSelected(false);
        walletSelected && setWalletSelected(false);
    }
    else if (currentBlock === "findSpot") {
        !findSpotSelected && setFindSpotSelected(true);
        homeSelected && setHomeSelected(false);
        myPlaceSelected && setMyPlaceSelected(false);
        walletSelected && setWalletSelected(false);
    }
    else if (currentBlock === "myPlace") {
        !myPlaceSelected && setMyPlaceSelected(true);
        findSpotSelected && setFindSpotSelected(false);
        homeSelected && setHomeSelected(false);
        walletSelected && setWalletSelected(false);
    }
    else if (currentBlock === "wallet") {
        homeSelected && setHomeSelected(false);
        findSpotSelected && setFindSpotSelected(false);
        myPlaceSelected && setMyPlaceSelected(false);
        !walletSelected && setWalletSelected(true);
    }
    else if (currentBlock !== "bottom") {
        homeSelected && setHomeSelected(false);
        findSpotSelected && setFindSpotSelected(false);
        myPlaceSelected && setMyPlaceSelected(false);
        walletSelected && setWalletSelected(false);
    }

    const setSelected = (selected: number) => {
        onClick();
        switch (selected) {
            case 0: {
                setScreen("Home");
                setTitle("Home");
                setHomeSelected(true);
                findSpotSelected && setFindSpotSelected(false);
                myPlaceSelected && setMyPlaceSelected(false);
                walletSelected && setWalletSelected(false);
                break;
            }
            case 1: {
                setScreen("FindSpot");
                setTitle("Find Spot");
                setFindSpotSelected(true);
                homeSelected && setHomeSelected(false);
                myPlaceSelected && setMyPlaceSelected(false);
                walletSelected && setWalletSelected(false);
                break;
            }
            case 2: {
                setScreen("MyPlace");
                setTitle("My Place");
                setMyPlaceSelected(true);
                homeSelected && setHomeSelected(false);
                findSpotSelected && setFindSpotSelected(false);
                walletSelected && setWalletSelected(false);
                break;
            }
            case 3: {
                setScreen("Wallet");
                setTitle("Wallet");
                setWalletSelected(true);
                homeSelected && setHomeSelected(false);
                findSpotSelected && setFindSpotSelected(false);
                myPlaceSelected && setMyPlaceSelected(false);
                break;
            }
        }
    }

    return (
        <View style={{
            backgroundColor: "#111",
            width: "100%",
            height: 60,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            position: "absolute",
            bottom: 0,
            paddingVertical: 2,
        }}>
            <TouchableOpacity onPress={() => setSelected(0)} style={{ height: "100%", width: "20%", justifyContent: "space-evenly", alignItems: "center", }}>
                {homeSelected ?
                    (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image style={{ aspectRatio: 1, flex: 0.85 }} source={require("../assets/bottom-bar-icons/homeSelected.png")} />
                            <Text allowFontScaling={false} style={{ color: "#fff", fontSize: 14, }}>Home</Text>
                        </View>

                    ) : (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image style={{ aspectRatio: 1, flex: 0.85 }} source={require("../assets/bottom-bar-icons/home.png")} />
                            <Text allowFontScaling={false} style={{ color: "#fff", fontSize: 14, }}>Home</Text>
                        </View>
                    )
                }
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSelected(1)} style={{ height: "100%", width: "20%", justifyContent: "space-evenly", alignItems: "center", }}>
                {findSpotSelected ?
                    (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image style={{ aspectRatio: 1, flex: 0.85 }} source={require("../assets/bottom-bar-icons/findSpotSelected.png")} />
                            <Text allowFontScaling={false} style={{ color: "#fff", fontSize: 14, }}>Find Spot</Text>
                        </View>

                    ) : (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image style={{ aspectRatio: 1, flex: 0.85 }} source={require("../assets/bottom-bar-icons/findSpot.png")} />
                            <Text allowFontScaling={false} style={{ color: "#fff", fontSize: 14, }}>Find Spot</Text>
                        </View>
                    )
                }
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSelected(2)} style={{ height: "100%", width: "20%", justifyContent: "space-evenly", alignItems: "center", }}>
                {myPlaceSelected ?
                    (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image style={{ aspectRatio: 1, flex: 0.85 }} source={require("../assets/bottom-bar-icons/myPlaceSelected.png")} />
                            <Text allowFontScaling={false} style={{ color: "#fff", fontSize: 14, }}>My Place</Text>
                        </View>

                    ) : (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image style={{ aspectRatio: 1, flex: 0.85 }} source={require("../assets/bottom-bar-icons/myPlace.png")} />
                            <Text allowFontScaling={false} style={{ color: "#fff", fontSize: 14, }}>My Place</Text>
                        </View>
                    )
                }
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSelected(3)} style={{ height: "100%", width: "20%", justifyContent: "space-evenly", alignItems: "center", }}>
                {walletSelected ?
                    (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image style={{ aspectRatio: 1, flex: 0.85 }} source={require("../assets/bottom-bar-icons/walletSelected.png")} />
                            <Text allowFontScaling={false} style={{ color: "#fff", fontSize: 14, }}>Wallet</Text>
                        </View>

                    ) : (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image style={{ aspectRatio: 1, flex: 0.85 }} source={require("../assets/bottom-bar-icons/wallet.png")} />
                            <Text allowFontScaling={false} style={{ color: "#fff", fontSize: 14, }}>Wallet</Text>
                        </View>
                    )
                }
            </TouchableOpacity>

        </View >
    )
}