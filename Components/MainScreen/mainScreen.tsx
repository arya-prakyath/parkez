import React, { useState } from "react";
import { BackHandler, ImageBackground } from "react-native";
import HeaderBar from "../../Utils/headerBar";
import UserProfileScreen from "../UserProfile";
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
import showAlert from "../../Utils/alertBox";
import styles from "./mainScreenStyle";

interface mainScreenProps {
    navigation: any,
}

export default function Home({ navigation }: mainScreenProps) {
    const [screen, setScreen] = useState("Home");
    const [title, setTitle] = useState("Home");
    const [currentBlock, setCurrentBlock] = useState("bottom");

    const onClickBackButton = () => {
            if (screen === "Home" && title == "Home") {
                showAlert({
                    title: "",
                    message: "Do you want to close and exit this application?",
                    buttonText: "Exit",
                    onPressButton: () => BackHandler.exitApp(),
                    cancelButtonText: "Cancel",
                    onPressCancelButton: () => { },
                })
                return true;
            }
            setCurrentBlock("home");
            setScreen("Home");
            setTitle("Home");
            return true;
        }

    BackHandler.addEventListener("hardwareBackPress", onClickBackButton);

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
            {screen === "UserProfile" && <UserProfileScreen setTitle={setTitle} setScreen={setScreen} setCurrentBlock={setCurrentBlock} />}

            <HeaderBar
                navigation={navigation}
                title={title}
                setTitle={setTitle}
                setScreen={setScreen}
                currentBlock={currentBlock}
                setCurrentBlock={setCurrentBlock}
            />
        </ImageBackground>
    );
}