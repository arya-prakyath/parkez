import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
    Linking,
    Animated,
    Dimensions,
} from "react-native";
import animate from "../../Animations/animate";
import EmailLogin from "../EmailLogin";
import OtpLogin from "../OtpLogin";
import Register from "../Register";
import styles from "./loginStyle";

export default function Login({ navigation }: { navigation: any }) {
    const width = Dimensions.get('window').width;
    const [carPosition] = useState(new Animated.Value(width));
    const [textOpacity] = useState(new Animated.Value(0));
    const moveCar = () => {
        animate(carPosition, -50, 1000, () => animate(carPosition, 0, 1500));
    }
    const moveText = () => {
        animate(textOpacity, 1, 3000);
    }
    const [fadeElement] = useState(new Animated.Value(0));

    const [phoneOrMail, setphoneOrMail] = useState("phone");
    const [registerNow, setRegisterNow] = useState(false);

    React.useEffect(() => {
        animate(fadeElement, 1, 1500);
    }, []);

    const register = async () => {
        animate(fadeElement, 0, 500);
        setTimeout(() => setRegisterNow(true), 500);
    };

    return (
        <ImageBackground
            source={require("../../assets/Home-Bg.png")}
            style={styles.container}
            imageStyle={{ opacity: 0.5 }}
            blurRadius={1}
        >
            {!registerNow ?
                (<Animated.View style={{
                    opacity: fadeElement,
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                >
                    <View style={styles.logoContainer}>
                        <Animated.View style={[styles.logoAnimationContainer, { transform: [{ translateX: carPosition }] }]} >
                            <Image source={require("../../assets/logo_car.png")} style={styles.logo} onLoad={moveCar} />
                        </Animated.View>

                        <Animated.View style={[styles.logoAnimationContainer, { opacity: textOpacity }]} >
                            <Image source={require("../../assets/logo_text.png")} style={styles.logoText} onLoad={moveText} />
                        </Animated.View>
                    </View>

                    <View style={styles.loginHeadsContainer}>
                        <TouchableOpacity onPress={() => { setphoneOrMail("phone") }} style={phoneOrMail === "phone" ? [styles.selectedLoginHead, styles.loginHead, styles.otpLoginHead] : styles.loginHead} >
                            <Text style={phoneOrMail === "phone" ? styles.selectedLoginHeadText : styles.loginHeadText}>Phone</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setphoneOrMail("email") }} style={phoneOrMail === "email" ? [styles.selectedLoginHead, styles.loginHead, styles.emailLoginHead] : styles.loginHead}>
                            <Text style={phoneOrMail === "email" ? styles.selectedLoginHeadText : styles.loginHeadText}>Email</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.loginContainer}>
                        {phoneOrMail === "phone" ?
                            (<OtpLogin navigation={navigation} carPosition={carPosition} textOpacity={textOpacity}/>) :
                            (<EmailLogin navigation={navigation} carPosition={carPosition} textOpacity={textOpacity}/>)
                        }
                    </View>

                    <Text style={styles.registerLink}>
                        New to the app?{'\t'}
                        <Text style={styles.siteLink} onPress={register}>Register Now</Text>
                    </Text>

                    <View style={styles.socialMediaContainer}>
                        <TouchableOpacity
                            onPress={() => Linking.openURL("https://linkedin.com")}
                        >
                            <Image
                                source={require("../../assets/social-media-icons/linkedin.png")}
                                style={styles.socialMediaIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => Linking.openURL("https://facebook.com")}
                        >
                            <Image
                                source={require("../../assets/social-media-icons/facebook.png")}
                                style={styles.socialMediaIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => Linking.openURL("https://instagram.com")}
                        >
                            <Image
                                source={require("../../assets/social-media-icons/instagram.png")}
                                style={styles.socialMediaIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => Linking.openURL("mailto:support@sensitive.com")}
                        >
                            <Image
                                source={require("../../assets/social-media-icons/mail.png")}
                                style={styles.socialMediaIcon}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.siteLinkContainer}>
                        <Image
                            source={require("../../assets/social-media-icons/link.png")}
                            style={styles.siteLinkIcon}
                        />
                        <Text
                            style={styles.siteLink}
                            onPress={() => Linking.openURL("https://sensitiveapp.com")}
                        >
                            Click here to visit our page
                        </Text>
                    </View>
                </Animated.View>
                ) : (
                    <Register setRegisterNow={setRegisterNow} parentElementFade={fadeElement} />
                )
            }
        </ImageBackground>
    );
}