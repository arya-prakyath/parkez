import React, { useState } from "react";
import { View, Text, ToastAndroid, TouchableWithoutFeedback, Image, TouchableOpacity } from "react-native";
import styles from "./findSpotStyle";

interface spotProps {
    name: string;
    address: string;
    cost: string;
    isFavorite: boolean;
}

export default function FindSpotItem({ name, address, cost, isFavorite }: spotProps) {
    const [pressed, setPressed] = useState(false);
    const [favorite, setFavorite] = useState(isFavorite);

    return (
        <TouchableWithoutFeedback onPress={() => {
            setPressed(true);
            ToastAndroid.showWithGravity(
                name,
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
            )
        }}>
            <View style={pressed ? [styles.spots, styles.spotspressed] : styles.spots}>
                <View style={styles.spotsNameAndCost}>
                    <Text style={styles.spotName}>{name}</Text>
                    <Text style={styles.spotCost}>{cost}</Text>
                </View>
                <View style={styles.spotsAddressAndFavorite}>
                    <Text style={styles.spotAddress}>{address}</Text>
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