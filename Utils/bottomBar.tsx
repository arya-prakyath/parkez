import React, { useState } from "react";
import { View, TouchableHighlight, Text, Image } from "react-native";

export default function bottomBar() {
    const [homeSelected, setHomeSelected] = useState(true);
    const [exploreSelected, setExploreSelected] = useState(false);
    const [addSpotSelected, setAddSpotSelected] = useState(false);
    const [walletSelected, setWalletSelected] = useState(false);

    const setSelected = (selected: number) => {
        switch (selected) {
            case 0: {
                setHomeSelected(true);
                exploreSelected && setExploreSelected(false);
                addSpotSelected && setAddSpotSelected(false);
                walletSelected && setWalletSelected(false);
                break;
            }
            case 1: {
                setExploreSelected(true);
                homeSelected && setHomeSelected(false);
                addSpotSelected && setAddSpotSelected(false);
                walletSelected && setWalletSelected(false);
                break;
            }
            case 2: {
                setAddSpotSelected(true);
                homeSelected && setHomeSelected(false);
                exploreSelected && setExploreSelected(false);
                walletSelected && setWalletSelected(false);
                break;
            }
            case 3: {
                setWalletSelected(true);
                homeSelected && setHomeSelected(false);
                exploreSelected && setExploreSelected(false);
                addSpotSelected && setAddSpotSelected(false);
                break;
            }
        }
    }
    return (
        <View style={{
            backgroundColor: "#000",
            opacity: 0.8,
            height: "9%",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            position: "absolute",
            bottom: 0,
            paddingVertical: 2,
        }}>
            <TouchableHighlight onPress={() => setSelected(0)} style={{ height: "100%", width: "20%", justifyContent: "space-evenly", alignItems: "center", }}>
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
            </TouchableHighlight>

            <TouchableHighlight onPress={() => setSelected(1)} style={{ height: "100%", width: "20%", justifyContent: "space-evenly", alignItems: "center", }}>
                {exploreSelected ?
                    (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image style={{ aspectRatio: 1, flex: 0.85 }} source={require("../assets/bottom-bar-icons/exploreSelected.png")} />
                            <Text style={{ color: "#fff", fontSize: 14, }}>Find Spot</Text>
                        </View>

                    ) : (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image style={{ aspectRatio: 1, flex: 0.85 }} source={require("../assets/bottom-bar-icons/explore.png")} />
                            <Text style={{ color: "#fff", fontSize: 14, }}>Find Spot</Text>
                        </View>
                    )
                }
            </TouchableHighlight>

            <TouchableHighlight onPress={() => setSelected(2)} style={{ height: "100%", width: "20%", justifyContent: "space-evenly", alignItems: "center", }}>
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
            </TouchableHighlight>

            <TouchableHighlight onPress={() => setSelected(3)} style={{ height: "100%", width: "20%", justifyContent: "space-evenly", alignItems: "center", }}>
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
            </TouchableHighlight>

        </View >
    )
}