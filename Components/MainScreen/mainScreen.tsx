import React, { useState } from "react";
import { ImageBackground } from "react-native";
import styles from "./mainScreenStyle";
import HeaderBar from "../../Utils/headerBar";
import HomeScreen from "../Home";
import FindSpotScreen from "../FindSpot";
import AddSpotScreen from "../AddSpot";
import WalletScreen from "../Wallet";
import MyVehicleScreen from "../MyVehicles";
import FavoriteSpotsScreen from "../FavoriteSpots";
import BookingHistoryScreen from "../BookingHistory";
import AboutUsScreen from "../AboutUs";
import SupportScreen from "../Support";
import SettingsScreen from "../Settings";
import UserProfileScreen from "../UserProfile";

interface mainScreenProps {
    navigation: any,
}

export default function Home({ navigation }: mainScreenProps) {
    const [screen, setScreen] = useState('Home');

    return (
        <ImageBackground
            source={require("../../assets/Home-Bg.png")}
            style={styles.container}
            imageStyle={{ opacity: 0.5 }}
            blurRadius={1}
        >
            {screen === "Home" && <HomeScreen />}
            {screen === "FindSpot" && <FindSpotScreen />}
            {screen === "AddSpot" && <AddSpotScreen />}
            {screen === "Wallet" && <WalletScreen />}
            {screen === "MyVehicles" && <MyVehicleScreen />}
            {screen === "FavoriteSpots" && <FavoriteSpotsScreen />}
            {screen === "BookingHistory" && <BookingHistoryScreen />}
            {screen === "Support" && <SupportScreen />}
            {screen === "AboutUs" && <AboutUsScreen />}
            {screen === "Settings" && <SettingsScreen />}
            {screen === "UserProfile" && <UserProfileScreen />}

            <HeaderBar navigation={navigation} setScreen={setScreen} />
        </ImageBackground>
    );
}