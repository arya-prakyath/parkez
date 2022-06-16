import React, { useState } from "react";
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
import phoneList from "../../Models/phoneList";
import showAlert from "../../Utils/alertBox";
import styles from "./otpLoginStyle";

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

    const generateOtp = () => {
        if (phoneList.includes(phone)) {
            setOtpGenerated(true);
            const otp = Math.floor(Math.random() * 9000) + 1000;
            setGeneratedOtp(otp);
            showAlert({ title: "OTP", message: `Use the OTP ${otp} to verify and login`, buttonText: "Ok", onPressButton: () => { } })
        }
        else {
            setWrongPhone(true);
        }
    }

    const verifyOtp = () => {
        if (otp.length === 4 && generatedOtp?.toString() === otp) {
            Keyboard.dismiss();
            animate(textOpacity, 0, 1000);
            animate(carPosition, 100, 1000, () => animate(carPosition, -width, 800, () => {
                navigation.dispatch(
                    StackActions.replace('Home', {
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
                <Text style={styles.verifyText1}>Enter Your Phone number{'\n'}
                    <Text style={styles.verifyText2}>To generate the OTP</Text>
                </Text>

                <View style={styles.phoneNumberContainer}>
                    <TextInput
                        style={styles.phone}
                        onChangeText={(value) => {
                            setPhone(value.replace(" ", ''));
                            if (wrongPhone)
                                setWrongPhone(false);
                        }}
                        value={phone.length > 5 ? phone.substring(0, 5) + " " + phone.substring(5,) : phone}
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

                {wrongPhone && <Text style={styles.warningText}>This number is not registered! {'\n'}Please check if the entered number is correct or Register if you are new to this app.</Text>}

                {(phone && phone.length === 10 && /^[0-9]+$/.test(phone)) ?
                    (
                        <TouchableOpacity onPress={generateOtp} style={styles.otpButton}>
                            <Text style={styles.btnText}>Get OTP</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={[styles.otpButton, styles.otpButtonDisabled]} disabled={true}>
                            <Text style={styles.btnText}>Get OTP</Text>
                        </TouchableOpacity>
                    )
                }
            </View>
            ) : (
                <View style={styles.container}>
                    <Text style={styles.verifyText1}>Verify the OTP</Text>
                    <Text style={styles.verifyText2}>Sent to {phone.substring(0, 5) + " " + phone.substring(5,)}</Text>
                    <TextInput
                        style={styles.otpTextField}
                        value={otp}
                        autoFocus={true}
                        onChangeText={(value) => {
                            if (value.indexOf(" ") === -1 && value.indexOf(",") === -1 && value.indexOf(".") === -1 && value.indexOf("-") === -1)
                                setOtp(value);
                            if (wrongOtp)
                                setWrongOtp(false);
                        }}
                        underlineColorAndroid={"#fff"}
                        maxLength={4}
                        keyboardType="number-pad"
                    />

                    {wrongOtp && <Text style={styles.warningText}>Entered OTP is wrong</Text>}

                    <View style={styles.resetLinksContainer}>
                        <Text style={styles.resetLinks} onPress={() => {
                            setOtp('');
                            setWrongOtp(false);
                            generateOtp();
                        }}>
                            Resend OTP
                        </Text>
                        <Text style={styles.resetLinks} onPress={() => {
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
                                <Text style={styles.btnText}>Verify</Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity style={[styles.verifyOtpBtn, styles.verifyOtpBtnDisabled]} disabled={true}>
                                <Text style={styles.btnText}>Verify</Text>
                            </TouchableOpacity>
                        )
                    }
                </View>
            )
    )
}