import React from "react";
import { View, Text, FlatList } from "react-native";
import FindSpotItem from "./findSpotItem";
import styles from "./findSpotStyle";

interface spotsListType {
    id: string;
    title: string;
    address: string;
    cost: string;
    isFavorite: boolean;
}
interface spotsListProps {
    spotsList: (spotsListType | undefined)[];
}

export default function FindSpotList({ spotsList }: spotsListProps) {
    const renderItem = ({ item }: any) => (
        item && <FindSpotItem
            name={item.title}
            address={item.address}
            cost={item.cost}
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
