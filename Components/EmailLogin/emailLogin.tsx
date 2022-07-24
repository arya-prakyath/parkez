import { StackActions } from "@react-navigation/native";
import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    TouchableHighlight,
    Animated,
    Dimensions,
    Keyboard,
} from "react-native";
import animate from "../../Animations/animate";
import usersList from "../../Models/usersList";
import ForgotPassword from "./forgotPassword";
import styles from "./emailLoginStyle";

interface loginProps {
    navigation: any,
    carPosition: Animated.Value,
    textOpacity: Animated.Value,
}

export default function Login({ navigation, carPosition, textOpacity }: loginProps) {
    const width = Dimensions.get('window').width;

    const [mail, setMail] = useState("");
    const [wrongMail, setWrongMail] = useState(false);
    const [password, setPassword] = useState("");
    const [wrongPassword, setWrongPassword] = useState(false);
    const [hidePassword, setHidePassword] = useState(true);
    const [resetPassword, setResetPassword] = useState(false);

    const login = () => {
        Keyboard.dismiss();
        for (let user of usersList) {
            if (mail === user.username && password !== user.password) {
                setWrongPassword(true);
                return;
            }

            if (mail === user.username && password === user.password) {
                animate(textOpacity, 0, 1000);
                animate(carPosition, 100, 1000, () => animate(carPosition, -width, 800, () => {
                    navigation.dispatch(
                        StackActions.replace('Main', {
                            navigation: navigation,
                        })
                    );
                }));
                return;
            }
        }

        setWrongMail(true);
    }

    const passwordReset = () => {
        setResetPassword(true);
        setPassword("");
        setWrongPassword(false);
        setWrongMail(false);
    };

    return (
        !resetPassword ?
            (
                <View style={styles.container}>
                    <View style={styles.credentialContainer}>
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

                    <Text style={styles.warningText}>{wrongMail ? "This Email is not registered" : ""}</Text>

                    <View style={styles.credentialContainer}>
                        <TextInput
                            style={styles.credential}
                            onChangeText={(value) => {
                                setPassword(value);
                                if (wrongPassword)
                                    setWrongPassword(false)
                            }}
                            value={password}
                            placeholder="Password"
                            placeholderTextColor={"#bbb"}
                            secureTextEntry={hidePassword}
                        />
                        <TouchableHighlight onPress={() => { setHidePassword(!hidePassword) }}
                            style={styles.passwordButtonContainer}>
                            {hidePassword ?
                                (<Image
                                    source={require("../../assets/buttons/hidePassword.png")}
                                    style={styles.buttons}
                                />
                                ) : (<Image
                                    source={require("../../assets/buttons/showPassword.png")}
                                    style={styles.buttons}
                                />)
                            }
                        </TouchableHighlight>
                    </View>

                    <Text style={styles.warningText}>{wrongPassword ? "The entered password is wrong" : ""}</Text>

                    <Text style={styles.forgotPasswordLink} onPress={passwordReset}>Forgot Password?</Text>

                    {
                        mail && password ?
                            (
                                <TouchableOpacity onPress={login} style={styles.loginButton}>
                                    <Text>Login</Text>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity style={[styles.loginButton, styles.loginButtonDisabled]} disabled={true}>
                                    <Text>Login</Text>
                                </TouchableOpacity>
                            )
                    }
                </View>
            ) : (
                <ForgotPassword
                    parentMail={mail}
                    setResetPassword={setResetPassword}
                />
            )
    )
}

