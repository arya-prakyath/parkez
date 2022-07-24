import React from "react";
import { View, Text, FlatList } from "react-native";
import FindSpotItem from "./findSpotItem";
import styles from "./findSpotStyle";

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

interface spotsListProps {
    spotsList: (spotsListType | undefined)[];
}

export default function FindSpotList({ spotsList }: spotsListProps) {
    const renderItem = ({ item }: any) => (
        item && <FindSpotItem
            id={item.id}
            name={item.name}
            address={item.address}
            cost={item.cost}
            spotsTotalCount={item.spotsTotalCount}
            spotsAvaliableCount={item.spotsAvaliableCount}
            spotsConsumedCount={item.spotsConsumedCount}
            extraNotes={item.extraNotes}
            longitute={item.longitute}
            latitude={item.latitude}
            isFavorite={item.isFavorite}
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
