import React, { useState } from "react";
import { View, Image, TextInput, TouchableOpacity, } from "react-native";
import FindSpotList from "../FindSpot/findSpotList";
import spotsListData from "../../Models/spotsListData";
import styles from "./favoriteSpotsStyle";

interface spotsListType {
    id: string;
    name: string;
    address: string;
    cost: string;
    spotsTotalCount: number,
    spotsAvaliableCount: number,
    spotsConsumedCount: number,
    extraNotes?: string | undefined,
    longitute: string,
    latitude: string,
    isFavorite: boolean;
}

export default function favoriteSpots() {
    const [searchText, setSearchText] = useState("");

    let spotsList: (spotsListType | undefined)[] = spotsListData.filter(spot => spot.isFavorite ? true : false);
    if (searchText.length > 0) {
        spotsList = spotsList.map((spot) => {
            if (spot?.title.toLowerCase().includes(searchText.toLowerCase()) || spot?.address.toLowerCase().includes(searchText.toLowerCase()))
                return spot;
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <TextInput
                    style={styles.searchText}
                    onChangeText={(value) => {
                        setSearchText(value);
                    }}
                    value={searchText}
                    placeholder="Search Favorite Location"
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

            <FindSpotList spotsList={spotsList} />
        </View>
    )
}