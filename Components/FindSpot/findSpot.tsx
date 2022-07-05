import React, { useState } from "react";
import { View, Image, TextInput, Text, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import FindSpotList from "./findSpotList";
import styles from "./findSpotStyle";

export default function FindSpot() {
    const [searchText, setSearchText] = useState("");

    const DATA = [
        {
            id: "10",
            title: "Orion Mall",
            address: "Dr Rajkumar Rd, Rajajinagar, Bengaluru, Karnataka 560055",
            cost: "25 INR/ Hour",
        },
        {
            id: "20",
            title: "Jetlag Restobar",
            address: "Industrial Suburb, 3, Dr Rajkumar Rd, opp. to Sherton Hotel, Rajajinagar, Bengaluru, Karnataka 560010",
            cost: "10 INR/ Hour",
        },
        {
            id: "30",
            title: "Iskcon Temple",
            address: "Hare Krishna Hill, Chord Rd, Rajajinagar, Bengaluru, Karnataka 560010",
            cost: "20 INR/ Hour",
        },
        {
            id: "40",
            title: "Rajajinagar Metro",
            address: "Chord Road West of Chord Road 2nd Stage Nagapura Bengaluru, Arisinakunte, Karnataka 560086",
            cost: "20 INR/ Hour",
        },
        {
            id: "50",
            title: "District 6 - Pub and Brewery",
            address: "G-03, G-04, G-05 26/1, Dr Rajkumar Road, Malleshwaram, Rajajinagar, Bengaluru, Karnataka 560055",
            cost: "30 INR/ Hour",
        },
        {
            id: "60",
            title: "Old Big Bazar",
            address: "5&6, Chord Rd, near Iskon Temple, Yeshwanthpur Industrial Suburb, Rajajinagar, Bengaluru, Karnataka 560086",
            cost: "30 INR/ Hour",
        },
        {
            id: "70",
            title: "Phoenix One Bangalore West",
            address: "1, Dr Rajkumar Rd, opp. Vivekananda College, Rajajinagar, Bengaluru, Karnataka 560010",
            cost: "20 INR/ Hour",
        },
        {
            id: "80",
            title: "Sheraton Grand Hotel",
            address: "26/1 Dr. Rajkumar Road Malleswaram, Rajajinagar, Bengaluru, Karnataka 560055",
            cost: "40 INR/ Hour",
        },
        {
            id: "90",
            title: "Balaji Residency",
            address: "15th Cross, 8th Main, Rajajinagar, 1st Block, Bangalore, Karnataka 5600055",
            cost: "10 INR/ Hour",
        },
        {
            id: "100",
            title: "18th Cross Road",
            address: "18th cross road, Matha Medicals Building, Rajajinagar, Bangalore, Karnataka 5600055",
            cost: "10 INR/ Hour",
        },
    ];

    let spotsList: ({ id: string; title: string; address: string; cost: string; } | undefined)[] = DATA;
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