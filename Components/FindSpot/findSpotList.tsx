import React from "react";
import { View, Text, FlatList } from "react-native";
import FindSpotItem from "./findSpotItem";
import styles from "./findSpotStyle";

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

interface spotsListProps {
    spotsList: (spotItemType | undefined)[];
    setSelectedSpot: React.Dispatch<React.SetStateAction<spotItemType | undefined>>;
    setOpenSpotDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FindSpotList({ spotsList, setSelectedSpot, setOpenSpotDetails }: spotsListProps) {
    const renderItem = ({ item }: any) => (
        item && <FindSpotItem
            spotItem={item}
            setOpenSpotDetails={setOpenSpotDetails}
            setSelectedSpot={setSelectedSpot}
        />
    );

    return (
        <View style={styles.spotsContainer}>
            {spotsList.length > 0 ?
                (
                    <FlatList
                        data={spotsList}
                        renderItem={renderItem}
                    />
                ) : (
                    <Text style={styles.noresults}>No Parking Spots Found</Text>
                )
            }
        </View>
    )
}
