import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
} from "react-native";
import usersList from "../../Models/usersList";
import showAlert from "../../Utils/alertBox";
import PasswordReset from "./passwordReset";
import styles from "./emailLoginStyle";

interface forgotPasswordProps {
    parentMail: string,
    setResetPassword: (resetPassword: boolean) => void,
}

export default function ForgotPassword({
    parentMail,
    setResetPassword
}: forgotPasswordProps) {
    const [mail, setMail] = useState(parentMail);
    const [wrongMail, setWrongMail] = useState(false);
    const [generatedOtp, setGeneratedOtp] = useState<number>();
    const [otpGenerated, setOtpGenerated] = useState(false);
    const [otp, setOtp] = useState('');
    const [wrongOtp, setWrongOtp] = useState(false);
    const [passwordReset, setPasswordReset] = useState(false);

    const generateOtp = () => {
        for (let user of usersList) {
            if (mail === user.username) {
                const otp = Math.floor(Math.random() * 9000) + 1000;
                setGeneratedOtp(otp);
                showAlert({ title: "OTP", message: `Use the OTP ${otp} to verify and change your password`, buttonText: "Ok", onPressButton: () => { } })
                setWrongMail(false);
                setOtpGenerated(true);
                return;
            }
        }
        setWrongMail(true);
    }

    const verifyOtp = () => {
        if (otp.length === 4 && generatedOtp?.toString() === otp) {
            setGeneratedOtp(undefined);
            setOtp("");
            setWrongOtp(false);
            setPasswordReset(true);
        }
        else {
            setWrongOtp(true);
        }
    }


    return (
        !otpGenerated ?
            (
                <View style={[styles.container, { justifyContent: "center" }]}>
                    <Text style={styles.verifyText1}>Enter Your Email ID{'\n'}
                        <Text style={styles.verifyText2}>To generate the OTP</Text>
                    </Text>

                    <View style={[styles.credentialContainer, { height: "20%", marginTop: "3%" }]}>
                        <TextInput
                            style={styles.credential}
                            onChangeText={(value) => {
                                setMail(value);
                                if (wrongMail)
                                    setWrongMail(false);
                            }}
                            value={mail}
                            placeholder="Email ID"
                            placeholderTextColor={"#bbb"}
                            keyboardType="email-address"
                        />
                        {
                            mail.length > 0 && (
                                <TouchableHighlight onPress={() => {
                                    setMail("");
                                    if (wrongMail)
                                        setWrongMail(false);
                                }}
                                    style={styles.passwordButtonContainer}>
                                    <Image
                                        source={require("../../assets/buttons/cancelButton.png")}
                                        style={styles.buttons}
                                    />
                                </TouchableHighlight>
                            )
                        }
                    </View>

                    <Text style={[styles.warningText, { marginBottom: "3%" }]}>{wrongMail ? "This Email is not registered" : ""}</Text>

                    {(mail && /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) ?
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

                    <TouchableOpacity onPress={() => setResetPassword(false)} style={[styles.otpButton, styles.cancelButton]}>
                        <Text style={styles.btnText}>Cancel</Text>
                    </TouchableOpacity>
                </View >
            ) : !passwordReset ? (
                <View style={[styles.container, { justifyContent: "center" }]}>
                    <Text style={styles.verifyText1}>Verify the OTP</Text>
                    <Text style={styles.verifyText2}>Sent to {mail}</Text>
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
                            Change Mail
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
            ) : (
                <PasswordReset parentMail={mail} setResetPassword={setResetPassword} />
            )
    )
}