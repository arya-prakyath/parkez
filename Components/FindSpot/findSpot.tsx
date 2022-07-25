import React, { useState } from "react";
import { View, Image, TextInput, TouchableOpacity, BackHandler, } from "react-native";
import FindSpotList from "./findSpotList";
import spotsListData from "../../Models/spotsListData";
import styles from "./findSpotStyle";
import FindSpotDetails from "./findSpotDetails";

interface spotCostType {
    id: number,
    cost: string,
    interval: string,
}

interface spotItemType {
    id: string;
    name: string;
    address: string;
    cost: spotCostType[];
    spotsTotalCount: number;
    spotsAvailableCount: number;
    spotsConsumedCount: number;
    extraNotes?: string | undefined;
    longitute: string;
    latitude: string;
    isFavorite: boolean;
}

interface findSpotProps {
    onClickBackButton: (toScreen: string) => boolean;
}

export default function FindSpot({ onClickBackButton }: findSpotProps) {
    const [searchText, setSearchText] = useState("");
    const [openSpotDetails, setOpenSpotDetails] = useState(false);
    const [selectedSpot, setSelectedSpot] = useState<spotItemType>();

    if (openSpotDetails)
        return <FindSpotDetails
            selectedSpot={selectedSpot}
            setOpenSpotDetails={setOpenSpotDetails}
            setSelectedSpot={setSelectedSpot}
        />

    let spotsList: (spotItemType | undefined)[] = spotsListData;
    if (searchText.length > 0) {
        spotsList = spotsList.map((spot) => {
            if (spot?.name.toLowerCase().includes(searchText.toLowerCase()) || spot?.address.toLowerCase().includes(searchText.toLowerCase()))
                return spot;
        });
    }

    BackHandler.addEventListener("hardwareBackPress", () => onClickBackButton("Home"));
    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <TextInput
                    style={styles.searchText}
                    onChangeText={(value) => {
                        setSearchText(value);
                    }}
                    value={searchText}
                    placeholder="Search location"
                    placeholderTextColor={"#666"}
                />
                {
                    searchText.length === 0 ?
                        (
                            <Image
                                source={require("../../assets/buttons/searchIcon.png")}
                                style={styles.searchButton}
                            />
                        ) : (
                            <TouchableOpacity onPress={() => setSearchText("")} >
                                <Image
                                    style={styles.cancelButton}
                                    source={require("../../assets/buttons/cancelButtonDark.png")}
                                />
                            </TouchableOpacity>
                        )
                }
            </View>

            <FindSpotList
                spotsList={spotsList}
                setOpenSpotDetails={setOpenSpotDetails}
                setSelectedSpot={setSelectedSpot}
            />
        </View>
    )
}