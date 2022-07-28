import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
} from "react-native";
import styles from "./emailLoginStyle";

interface passwordResetProps {
    parentMail: string,
    setResetPassword: (resetPassword: boolean) => void,
}

export default function PasswordReset({
    parentMail,
    setResetPassword,
}: passwordResetProps) {
    const [newPassword, setNewPassword] = useState("");
    const [hideNewPassword, setHideNewPassword] = useState(true);

    const [confirmPassword, setConfirmPassword] = useState("");
    const [hideConfirmPassword, setHideConfirmPassword] = useState(true);

    const [passwordValidationError, setPasswordValidationError] = useState("");
    const validationMessages = {
        lenghtError: "The password must be atleast six characters long",
        mismatchError: "The entered passwords do not match",
        numberError: "The password must contain atleast one number",
        alphaError: "The password must contain atleast one alphabet",
        specialCharError: "The password must contain atleast one special character",
    }

    const verifyPassword = () => {
        if (newPassword.length < 6)
            setPasswordValidationError(validationMessages.lenghtError);

        else if (newPassword !== confirmPassword)
            setPasswordValidationError(validationMessages.mismatchError);

        else if (! /\d/.test(newPassword))
            setPasswordValidationError(validationMessages.numberError);

        else if (! /[a-zA-Z]/.test(newPassword))
            setPasswordValidationError(validationMessages.alphaError);

        else if (! /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(newPassword))
            setPasswordValidationError(validationMessages.specialCharError);

        else {
            setResetPassword(false);
        }
    }

    return (
        <View style={styles.container}>
            <View style={[styles.credentialContainer, styles.passwordResetContainer]}>
                <Text allowFontScaling={false} style={[styles.credential, styles.emailDisabled]}>{parentMail}</Text>
            </View>

            <View style={styles.credentialContainer}>
                <TextInput allowFontScaling={false}
                    style={styles.credential}
                    onChangeText={(value) => {
                        setNewPassword(value);
                        if (passwordValidationError.length !== 0)
                            setPasswordValidationError("")
                    }}
                    value={newPassword}
                    placeholder="New Password"
                    placeholderTextColor={"#bbb"}
                    secureTextEntry={hideNewPassword}
                />
                <TouchableHighlight onPress={() => { setHideNewPassword(!hideNewPassword) }}
                    style={styles.passwordButtonContainer}>
                    {hideNewPassword ?
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

            <View style={styles.credentialContainer}>
                <TextInput allowFontScaling={false}
                    style={styles.credential}
                    onChangeText={(value) => {
                        setConfirmPassword(value);
                        if (passwordValidationError.length !== 0)
                            setPasswordValidationError("")
                    }}
                    value={confirmPassword}
                    placeholder="Confirm New Password"
                    placeholderTextColor={"#bbb"}
                    secureTextEntry={hideConfirmPassword}
                />
                <TouchableHighlight onPress={() => { setHideConfirmPassword(!hideConfirmPassword) }}
                    style={styles.passwordButtonContainer}>
                    {hideConfirmPassword ?
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

            <Text allowFontScaling={false} style={[styles.warningText, { marginBottom: "5%" }]}>{passwordValidationError}</Text>

            {(newPassword && confirmPassword) ?
                (
                    <TouchableOpacity onPress={verifyPassword} style={styles.otpButton}>
                        <Text allowFontScaling={false} style={styles.btnText}>Change Password</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={[styles.otpButton, styles.otpButtonDisabled]} disabled={true}>
                        <Text allowFontScaling={false} style={styles.btnText}>Change Password</Text>
                    </TouchableOpacity>
                )
            }

            <TouchableOpacity onPress={() => setResetPassword(false)} style={[styles.otpButton, styles.cancelButton]}>
                <Text allowFontScaling={false} style={styles.btnText}>Cancel</Text>
            </TouchableOpacity>

        </View>
    )
}