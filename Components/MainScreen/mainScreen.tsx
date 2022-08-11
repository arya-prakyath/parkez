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
import MyPlace from "../MyPlace";

interface mainScreenProps {
    navigation: any,
}

export default function Home({ navigation }: mainScreenProps) {
    const [screen, setScreen] = useState("Home");
    const [title, setTitle] = useState("Home");
    const [currentBlock, setCurrentBlock] = useState("bottom");

    const onClickBackButton = (toScreen: string) => {
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
            else{
                setScreen(toScreen);
                setTitle(toScreen);
                toScreen === "Home" && setCurrentBlock("home");
                return true;
            }
        }

    return (
        <ImageBackground
            source={require("../../assets/Home-Bg.png")}
            style={styles.container}
            imageStyle={{ opacity: 0.5 }}
            blurRadius={1}
        >
            {screen === "Home" && <HomeScreen onClickBackButton={onClickBackButton} setScreen={setScreen} setTitle={setTitle} setCurrentBlock={setCurrentBlock}/>}
            {screen === "FindSpot" && <FindSpotScreen onClickBackButton={onClickBackButton}/>}
            {/* {screen === "AddSpot" && <AddSpotScreen onClickBackButton={onClickBackButton}/>} */}
            {screen === "MyPlace" && <MyPlace onClickBackButton={onClickBackButton}/>}
            {screen === "Wallet" && <WalletScreen onClickBackButton={onClickBackButton}/>}
            {screen === "MyVehicles" && <MyVehicleScreen onClickBackButton={onClickBackButton}/>}
            {screen === "FavoriteSpots" && <FavoriteSpotsScreen onClickBackButton={onClickBackButton}/>}
            {screen === "BookingHistory" && <BookingHistoryScreen onClickBackButton={onClickBackButton}/>}
            {screen === "Support" && <SupportScreen onClickBackButton={onClickBackButton}/>}
            {screen === "AboutUs" && <AboutUsScreen onClickBackButton={onClickBackButton}/>}
            {screen === "Settings" && <SettingsScreen onClickBackButton={onClickBackButton}/>}
            {screen === "UserProfile" && <UserProfileScreen onClickBackButton={onClickBackButton}/>}

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