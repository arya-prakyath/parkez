import React, { useState } from "react";
import { View, Text, ToastAndroid, TouchableWithoutFeedback, Image, TouchableOpacity } from "react-native";
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

interface findSpotItemProps {
    spotItem: spotItemType;
    setSelectedSpot: React.Dispatch<React.SetStateAction<spotItemType | undefined>>;
    setOpenSpotDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FindSpotItem({
    spotItem,
    setSelectedSpot,
    setOpenSpotDetails,
}: findSpotItemProps) {
    const [favorite, setFavorite] = useState(spotItem.isFavorite);

    return (
        <TouchableWithoutFeedback onPress={() => {
            setSelectedSpot(spotItem);
            setOpenSpotDetails(true);
        }}>
            <View style={styles.spots}>
                <View style={styles.spotsNameAndCost}>
                    <Text allowFontScaling={false} style={styles.spotName}>{spotItem.name}</Text>
                    <Text allowFontScaling={false} style={styles.spotCost}>{`₹ ${spotItem.cost[0].cost} / ${spotItem.cost[0].interval}`}</Text>
                </View>
                <View style={styles.spotsAddressAndFavorite}>
                    <Text allowFontScaling={false} style={styles.spotAddress}>{spotItem.address}</Text>
                    <TouchableOpacity style={styles.favoriteButtonContainer} onPress={() => {
                        setFavorite(!favorite);
                        ToastAndroid.showWithGravity(
                            favorite ? "Removed this spot from Favorites" : "Added this spot to Favorites",
                            ToastAndroid.SHORT,
                            ToastAndroid.CENTER,
                        )
                    }}>
                        {favorite ? (
                            <Image
                                source={require("../../assets/drawer-icons/favoriteSelected.png")}
                                style={styles.favoriteButton}
                            />

                        ) : (
                            <Image
                                source={require("../../assets/drawer-icons/favorite.png")}
                                style={styles.favoriteButton}
                            />
                        )}
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback >
    )
}