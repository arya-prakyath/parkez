import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    TouchableHighlight,
    Animated,
    Dimensions,
    Keyboard,
} from "react-native";
import { StackActions } from '@react-navigation/native';
import animate from "../../Animations/animate";
import phoneList from "../../Models/phoneListData";
import showAlert from "../../Utils/alertBox";
import styles from "./otpLoginStyle";
import { getCache, setCache } from "../../Models/getSetCache";

interface loginProps {
    navigation: any,
    carPosition: Animated.Value,
    textOpacity: Animated.Value,
}

export default function Login({ navigation, carPosition, textOpacity }: loginProps) {
    const width = Dimensions.get('window').width;
    const [phone, setPhone] = useState("");
    const [otpgenerated, setOtpGenerated] = useState(false);
    const [generatedOtp, setGeneratedOtp] = useState<number>();
    const [otp, setOtp] = useState('');
    const [wrongPhone, setWrongPhone] = useState(false);
    const [wrongOtp, setWrongOtp] = useState(false);

    useEffect(() => {
        getCache("phoneCache")?.then(valuePromise => valuePromise).then(value => setPhone(value ?? ""))
    }, []);

    const generateOtp = () => {
        // if (phoneList.includes(phone)) {
        setCache("phoneCache", phone);
        setOtpGenerated(true);
        const otp = Math.floor(Math.random() * 9000) + 1000;
        setGeneratedOtp(otp);
        showAlert({ title: "OTP", message: `Use the OTP ${otp} to verify and login`, buttonText: "Ok", onPressButton: () => { } })
        // }
        // else {
        // setWrongPhone(true);
        // }
    }

    const verifyOtp = () => {
        if (otp.length === 4 && generatedOtp?.toString() === otp) {
            Keyboard.dismiss();
            animate(textOpacity, 0, 1000);
            animate(carPosition, 100, 1000, () => animate(carPosition, -width, 800, () => {
                setCache("login", "1");
                navigation.dispatch(
                    StackActions.replace('Main', {
                        navigation: navigation,
                    })
                );
            }));
        }
        else {
            setWrongOtp(true);
        }
    }

    return (
        !otpgenerated ?
            (<View style={styles.container}>
                <Text allowFontScaling={false} style={styles.verifyText1}>Enter Your Phone number{'\n'}
                    <Text allowFontScaling={false} style={styles.verifyText2}>To generate the OTP</Text>
                </Text>

                <View style={styles.phoneNumberContainer}>
                    <TextInput allowFontScaling={false}
                        style={styles.phone}
                        onChangeText={(value) => {
                            value = value.replace(' ', '');
                            value = value.replace('-', '');
                            value = value.replace(',', '');
                            value = value.replace('.', '');
                            setPhone(value);
                            if (wrongPhone)
                                setWrongPhone(false);
                        }}
                        value={phone.length > 5 ? `${phone.substring(0, 5)} ${phone.substring(5,)}` : phone}
                        placeholder="Phone"
                        placeholderTextColor={"#bbb"}
                        maxLength={11}
                        keyboardType="number-pad"
                    />
                    {
                        phone.length > 0 && (
                            <TouchableHighlight onPress={() => {
                                setPhone("");
                                if (wrongPhone)
                                    setWrongPhone(false);
                            }}
                                style={styles.clearButtonContainer}>
                                <Image
                                    source={require("../../assets/buttons/cancelButton.png")}
                                    style={styles.clearButton}
                                />
                            </TouchableHighlight>
                        )
                    }
                </View>

                {wrongPhone && <Text allowFontScaling={false} style={styles.warningText}>This number is not registered! {'\n'}Please check if the entered number is correct or Register if you are new to this app.</Text>}

                {(phone && phone.length === 10 && /^[0-9]+$/.test(phone)) ?
                    (
                        <TouchableOpacity onPress={generateOtp} style={styles.otpButton}>
                            <Text allowFontScaling={false} style={styles.btnText}>Get OTP</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={[styles.otpButton, styles.otpButtonDisabled]} disabled={true}>
                            <Text allowFontScaling={false} style={styles.btnText}>Get OTP</Text>
                        </TouchableOpacity>
                    )
                }
            </View>
            ) : (
                <View style={styles.container}>
                    <Text allowFontScaling={false} style={styles.verifyText1}>Verify the OTP</Text>
                    <Text allowFontScaling={false} style={styles.verifyText2}>Sent to {phone.substring(0, 5) + " " + phone.substring(5,)}</Text>
                    <TextInput allowFontScaling={false}
                        style={styles.otpTextField}
                        value={otp}
                        autoFocus={true}
                        onChangeText={(value: string) => {
                            if (value.indexOf(" ") === -1 && value.indexOf(",") === -1 && value.indexOf(".") === -1 && value.indexOf("-") === -1)
                                setOtp(value);
                            if (wrongOtp)
                                setWrongOtp(false);
                        }}
                        underlineColorAndroid={"#fff"}
                        maxLength={4}
                        keyboardType="number-pad"
                    />

                    {wrongOtp && <Text allowFontScaling={false} style={styles.warningText}>Entered OTP is wrong</Text>}

                    <View style={styles.resetLinksContainer}>
                        <Text allowFontScaling={false} style={styles.resetLinks} onPress={() => {
                            setOtp('');
                            setWrongOtp(false);
                            generateOtp();
                        }}>
                            Resend OTP
                        </Text>
                        <Text allowFontScaling={false} style={styles.resetLinks} onPress={() => {
                            setOtp('');
                            setWrongOtp(false);
                            setOtpGenerated(false);
                        }}>
                            Change Phone
                        </Text>
                    </View>

                    {otp && otp.length === 4 ?
                        (
                            <TouchableOpacity onPress={verifyOtp} style={styles.verifyOtpBtn}>
                                <Text allowFontScaling={false} style={styles.btnText}>Verify</Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity style={[styles.verifyOtpBtn, styles.verifyOtpBtnDisabled]} disabled={true}>
                                <Text allowFontScaling={false} style={styles.btnText}>Verify</Text>
                            </TouchableOpacity>
                        )
                    }
                </View>
            )
    )
}