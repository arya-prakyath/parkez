import React, { useState } from "react";
import { View, Image, TextInput, Text, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import FindSpotList from "../FindSpot/findSpotList";
import styles from "./favoriteSpotsStyle";

interface spotsListType {
    id: string;
    title: string;
    address: string;
    cost: string;
    isFavorite: boolean;
}

export default function favoriteSpots() {
    const [searchText, setSearchText] = useState("");

    const DATA = [
        {
            id: "20",
            title: "Jetlag Restobar",
            address: "Industrial Suburb, 3, Dr Rajkumar Rd, opp. to Sherton Hotel, Rajajinagar, Bengaluru, Karnataka 560010",
            cost: "10 INR/ Hour",
            isFavorite: true,
        },
        {
            id: "30",
            title: "Iskcon Temple",
            address: "Hare Krishna Hill, Chord Rd, Rajajinagar, Bengaluru, Karnataka 560010",
            cost: "20 INR/ Hour",
            isFavorite: true,
        },
        {
            id: "50",
            title: "District 6 - Pub and Brewery",
            address: "G-03, G-04, G-05 26/1, Dr Rajkumar Road, Malleshwaram, Rajajinagar, Bengaluru, Karnataka 560055",
            cost: "30 INR/ Hour",
            isFavorite: true,
        },
        {
            id: "100",
            title: "18th Cross Road",
            address: "18th cross road, Matha Medicals Building, Rajajinagar, Bangalore, Karnataka 5600055",
            cost: "10 INR/ Hour",
            isFavorite: true,
        },
    ];

    let spotsList: (spotsListType | undefined)[] = DATA;
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

            <FindSpotList spotsList={spotsList} />
        </View>
    )
}