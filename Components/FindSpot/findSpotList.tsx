import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import FindSpotItem from "./findSpotItem";
import styles from "./findSpotStyle";

interface spotsListProps {
    id: string;
    title: string;
    address: string;
    cost: string;
}
interface spotsListPropsType {
    spotsList: (spotsListProps | undefined)[];
}

export default function FindSpotList({ spotsList }: spotsListPropsType) {
    const renderItem = ({ item }: any) => (
        item && <FindSpotItem
            name={item.title}
            address={item.address}
            cost={item.cost}
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
