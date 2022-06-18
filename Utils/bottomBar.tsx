import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

interface bottomBarProps {
    setScreen: React.Dispatch<React.SetStateAction<string>>,
    setTitle: React.Dispatch<React.SetStateAction<string>>,
    onClick: () => void;
}
export default function bottomBar({setScreen, setTitle, onClick}: bottomBarProps) {
    const [homeSelected, setHomeSelected] = useState(true);
    const [findSpotSelected, setFindSpotSelected] = useState(false);
    const [addSpotSelected, setAddSpotSelected] = useState(false);
    const [walletSelected, setWalletSelected] = useState(false);

    const setSelected = (selected: number) => {
        onClick();
        switch (selected) {
            case 0: {
                setScreen("Home");
                setTitle("Home");
                setHomeSelected(true);
                findSpotSelected && setFindSpotSelected(false);
                addSpotSelected && setAddSpotSelected(false);
                walletSelected && setWalletSelected(false);
                break;
            }
            case 1: {
                setScreen("FindSpot");
                setTitle("Find Spot");
                setFindSpotSelected(true);
                homeSelected && setHomeSelected(false);
                addSpotSelected && setAddSpotSelected(false);
                walletSelected && setWalletSelected(false);
                break;
            }
            case 2: {
                setScreen("AddSpot");
                setTitle("Add Spot");
                setAddSpotSelected(true);
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
                addSpotSelected && setAddSpotSelected(false);
                break;
            }
        }
    }
    return (
        <View style={{
            backgroundColor: "#111",
            height: "9%",
            width: "100%",
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
                            <Text style={{ color: "#fff", fontSize: 14, }}>Home</Text>
                        </View>

                    ) : (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image style={{ aspectRatio: 1, flex: 0.85 }} source={require("../assets/bottom-bar-icons/home.png")} />
                            <Text style={{ color: "#fff", fontSize: 14, }}>Home</Text>
                        </View>
                    )
                }
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSelected(1)} style={{ height: "100%", width: "20%", justifyContent: "space-evenly", alignItems: "center", }}>
                {findSpotSelected ?
                    (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image style={{ aspectRatio: 1, flex: 0.85 }} source={require("../assets/bottom-bar-icons/findSpotSelected.png")} />
                            <Text style={{ color: "#fff", fontSize: 14, }}>Find Spot</Text>
                        </View>

                    ) : (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image style={{ aspectRatio: 1, flex: 0.85 }} source={require("../assets/bottom-bar-icons/findSpot.png")} />
                            <Text style={{ color: "#fff", fontSize: 14, }}>Find Spot</Text>
                        </View>
                    )
                }
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSelected(2)} style={{ height: "100%", width: "20%", justifyContent: "space-evenly", alignItems: "center", }}>
                {addSpotSelected ?
                    (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image style={{ aspectRatio: 1, flex: 0.85 }} source={require("../assets/bottom-bar-icons/addSpotSelected.png")} />
                            <Text style={{ color: "#fff", fontSize: 14, }}>Add Spot</Text>
                        </View>

                    ) : (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image style={{ aspectRatio: 1, flex: 0.85 }} source={require("../assets/bottom-bar-icons/addSpot.png")} />
                            <Text style={{ color: "#fff", fontSize: 14, }}>Add Spot</Text>
                        </View>
                    )
                }
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSelected(3)} style={{ height: "100%", width: "20%", justifyContent: "space-evenly", alignItems: "center", }}>
                {walletSelected ?
                    (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image style={{ aspectRatio: 1, flex: 0.85 }} source={require("../assets/bottom-bar-icons/walletSelected.png")} />
                            <Text style={{ color: "#fff", fontSize: 14, }}>Wallet</Text>
                        </View>

                    ) : (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image style={{ aspectRatio: 1, flex: 0.85 }} source={require("../assets/bottom-bar-icons/wallet.png")} />
                            <Text style={{ color: "#fff", fontSize: 14, }}>Wallet</Text>
                        </View>
                    )
                }
            </TouchableOpacity>

        </View >
    )
}