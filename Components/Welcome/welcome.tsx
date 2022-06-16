import React, { useState } from "react";
import { Animated, Dimensions, Image, ImageBackground, View } from "react-native";
import { StackActions } from '@react-navigation/native';
import styles from "./welcomeStyle";
import animate from "../../Animations/animate";

export default function Welome({ navigation }: { navigation: any }) {
    const width = Dimensions.get('window').width;
    const [carPosition] = useState(new Animated.Value(width));
    const [textPosition] = useState(new Animated.Value(-width));

    const moveText = () => {
        animate(textPosition, 0, 800, () => animate(textPosition, -25, 1200, () => animate(textPosition, width, 1000)))
    }
    
    const moveCar = () => {
        animate(carPosition, 0, 800, () => animate(carPosition, 25, 1200, () => animate(carPosition, -width, 1000, () => {
            navigation.dispatch(
                StackActions.replace('Login', {
                    navigation: navigation,
                })
            );
        })))
    }


    return (
        <ImageBackground
            source={require("../../assets/Home-Bg.png")}
            style={styles.container}
            imageStyle={{ opacity: 0.2 }}
            blurRadius={1}
        >
            <View style={styles.logoContainer}>
                <Animated.View style={[styles.logoAnimatedContainer, { transform: [{ translateX: carPosition }] }]} >
                    <Image source={require("../../assets/logo_car.png")} style={styles.logo} onLoad={moveCar} />
                </Animated.View>

                <Animated.View style={[styles.textAnimatedContainer, { transform: [{ translateX: textPosition }] }]} >
                    <Image source={require("../../assets/logo_text.png")} style={styles.logoText} onLoad={moveText} />
                </Animated.View>
            </View>
        </ImageBackground>
    );
}