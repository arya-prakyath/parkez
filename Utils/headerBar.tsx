import React, { useEffect, useState } from "react";
import { View, Image, Text, Platform, StatusBar, TouchableOpacity, Animated, Dimensions } from "react-native";
import animate from "../Animations/animate";
import { getCache, setCache } from "../Models/getSetCache";
import BottomBar from "./bottomBar";
import LeftDrawer from "./leftDrawer";
import ProfileBar from "./ProfileBar";
import profileDefaultPicture from "./profileDefaultPicture";

interface headerBarProps {
    navigation: any,
    title: string,
    setTitle: React.Dispatch<React.SetStateAction<string>>,
    setScreen: React.Dispatch<React.SetStateAction<string>>,
    currentBlock: string,
    setCurrentBlock: React.Dispatch<React.SetStateAction<string>>,
}

export default function HeaderBar({ navigation, title, setTitle, setScreen, currentBlock, setCurrentBlock }: headerBarProps) {
    
    const width = Dimensions.get('window').width;
    const [carPosition] = useState(new Animated.Value(width));
    const [titleOpacity] = useState(new Animated.Value(0));
    const onCarLoad = () => {
        animate(carPosition, -10, 800, () => {
            animate(carPosition, 50, 1000, () => {
                animate(carPosition, -width, 800, () => {
                    setAnimationCompleted(true);
                    animate(titleOpacity, 1, 1000)
                })
            })
        })
    }
    const [animationCompleted, setAnimationCompleted] = useState(false);

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [drawerOpacity] = useState(new Animated.Value(0));
    const [drawerSlide] = useState(new Animated.Value(-width));

    const [profileImageData, setProfileImageData] = useState("");
    const [profileOptions, setProfileOptions] = useState(false);
    const [profileOptionsOpacity] = useState(new Animated.Value(0));
    const [profileOptionsSlide] = useState(new Animated.Value(width));

    useEffect(() => {
        getCache("profilePicture")?.then(valuePromise => valuePromise).then(value => {
            setProfileImageData(value ?? profileDefaultPicture)
        })
    }, []);

    return (
        <>
            <View style={{
                position: "absolute",
                backgroundColor: "#000",
                opacity: 0.8,
                width: width,
                height: StatusBar.currentHeight ? StatusBar.currentHeight + 60 : 60,
                justifyContent: "space-evenly",
                paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
                flexDirection: "row",
            }}>
                <TouchableOpacity style={{ marginLeft: 10, justifyContent: "center", alignItems: "center" }}
                    onPress={() => {
                        if (drawerOpen) {
                            animate(drawerOpacity, 0, 200);
                            animate(drawerSlide, -width, 500);
                        }
                        else {
                            if (profileOptions) {
                                setProfileOptions(false);
                                animate(profileOptionsOpacity, 0, 200);
                                animate(profileOptionsSlide, width, 500);
                            }
                            animate(drawerOpacity, 1, 400);
                            animate(drawerSlide, 0, 300);
                        }
                        setDrawerOpen(!drawerOpen)
                    }}>

                    {!drawerOpen ?
                        (
                            <Image style={{ aspectRatio: 1, flex: 0.4 }} source={require("../assets/buttons/hamMenu.png")} />
                        ) : (
                            <Image style={{ aspectRatio: 1, flex: 0.4 }} source={require("../assets/buttons/hamMenuClose.png")} />
                        )
                    }
                </TouchableOpacity>

                <View style={{ width: "70%", height: "100%", flexDirection: "row", justifyContent: "center", }}>
                    {
                        animationCompleted ?
                            (
                                <Animated.View style={{ opacity: titleOpacity, alignSelf: "center" }}>
                                    <Text allowFontScaling={false} style={{ color: "#fff", fontSize: 25, fontWeight: "300", letterSpacing: 2.5, }}>{title}</Text>
                                </Animated.View>
                            ) : (
                                <Animated.View style={{ flexDirection: "row", justifyContent: "center", transform: [{ translateX: carPosition }] }} >
                                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                                        <Image style={{ flex: 0.5, aspectRatio: 3 }} source={require("../assets/logo_car.png")}
                                            onLoadEnd={onCarLoad} />
                                    </View>
                                </Animated.View>
                            )
                    }
                </View>

                <TouchableOpacity style={{ width: "10%", justifyContent: "center", alignItems: "center" }}
                    onPress={() => {
                        if (profileOptions) {
                            animate(profileOptionsOpacity, 0, 200);
                            animate(profileOptionsSlide, width, 500);
                        }
                        else {
                            if (drawerOpen) {
                                setDrawerOpen(false);
                                animate(drawerOpacity, 0, 200);
                                animate(drawerSlide, -width, 500);
                            }
                            animate(profileOptionsOpacity, 1, 400);
                            animate(profileOptionsSlide, 0, 300);
                        }
                        setProfileOptions(!profileOptions);
                    }}>
                    {profileImageData ? (
                        <Image
                            style={{ aspectRatio: 1, flex: 0.5, borderRadius: 25, }}
                            source={{ uri: profileImageData }}
                        />
                    ) : (
                        <Image
                            style={{ aspectRatio: 1, flex: 0.5, borderRadius: 25, }}
                            source={require("../assets/buttons/profile.png")}
                        />
                    )}
                </TouchableOpacity>
            </View >

            <ProfileBar
                navigation={navigation}
                onClickProfile={() => {
                    setScreen("UserProfile");
                    setTitle("User Profile");
                    animate(profileOptionsOpacity, 0, 200);
                    animate(profileOptionsSlide, width, 500);
                    setProfileOptions(false);
                    setCurrentBlock("profile");
                }}
                profileOptionsOpacity={profileOptionsOpacity}
                profileOptionsSlide={profileOptionsSlide}
                onClickLogout={() => {
                    animate(profileOptionsOpacity, 0, 200);
                    animate(profileOptionsSlide, width, 500);
                    setProfileOptions(false);
                    setCache("login", '0');
                }}
            />

            <LeftDrawer
                setScreen={setScreen}
                setTitle={setTitle}
                currentBlock={currentBlock}
                onClick={() => {
                    animate(drawerOpacity, 0, 200);
                    animate(drawerSlide, -width, 500);
                    setDrawerOpen(false);
                    setCurrentBlock("left");
                }}
                drawerOpacity={drawerOpacity}
                drawerSlide={drawerSlide}
            />

            <BottomBar
                setScreen={setScreen}
                setTitle={setTitle}
                currentBlock={currentBlock}
                onClick={() => {
                    if (profileOptions) {
                        animate(profileOptionsOpacity, 0, 200);
                        animate(profileOptionsSlide, width, 500);
                        setProfileOptions(false);
                    }
                    if (drawerOpen) {
                        animate(drawerOpacity, 0, 200);
                        animate(drawerSlide, -width, 500);
                        setDrawerOpen(false);
                    }
                    setCurrentBlock("bottom");
                }}
            />
        </>
    )
}