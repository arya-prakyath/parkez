import React, { useState } from "react";
import { Animated, Text, View, Image, TouchableOpacity, TextInput, TouchableHighlight } from "react-native";
import animate from "../../Animations/animate";
import phoneList from "../../Models/phoneListData";
import usersList from "../../Models/usersListData";
import showAlert from "../../Utils/alertBox";
import styles from "./registerStyle";

interface registerProps {
    setRegisterNow: React.Dispatch<React.SetStateAction<boolean>>;
    parentElementFade: Animated.Value;
}

export default function Register({ setRegisterNow, parentElementFade }: registerProps) {
    const [carPosition] = useState(new Animated.Value(-50));
    const [textOpacity] = useState(new Animated.Value(0.3));
    const moveCar = () => {
        animate(carPosition, 0, 1500);
    }
    const moveText = () => {
        animate(textOpacity, 1, 1000, () => animate(textOpacity, 0, 100, () => animate(textOpacity, 1, 100, () => animate(textOpacity, 0, 100, () => animate(textOpacity, 1, 100, () => animate(textOpacity, 0, 100, () => animate(textOpacity, 1, 100)))))));
    }
    const [fadeElement] = useState(new Animated.Value(0));
    React.useEffect(() => {
        animate(fadeElement, 1, 800, () => { });
    }, []);

    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");

    const [phone, setPhone] = useState("");
    const [phoneError, setPhoneError] = useState("");

    const [mail, setMail] = useState("");
    const [mailError, setMailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hidePassword, setHidePassword] = useState(true);

    const [vehicleNumber, setVehicleNumber] = useState("");
    const [vehicleNumberError, setVehicleNumberError] = useState("");

    const onSubmit = () => {
        let err = false;

        if (name.length < 3) {
            err = true;
            setNameError("The name must be atleast three characters long");
        }
        if (!/[a-zA-Z]*/.test(name)) {
            err = true;
            setNameError("The name must contain alphabets only");
        }

        if (phone.length !== 10 || ! /\d/.test(phone)) {
            err = true;
            setPhoneError("Enter a valid phone number");
        }
        else if (phoneList.includes(phone)) {
            setPhoneError("This phone is already registered");
            return;
        }

        if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
            err = true;
            setMailError("Enter a valid Email");
        }
        else {
            for (let user of usersList) {
                if (mail === user.username) {
                    setMailError("This email is already registered");
                    return;
                }
            }
        }

        if (password.length < 6) {
            err = true;
            setPasswordError("The password must be atleast six characters long");
        }
        else if (! /\d/.test(password)) {
            err = true;
            setPasswordError("The password must contain atleast one Number");
        }
        else if (! /[a-zA-Z]/.test(password)) {
            err = true;
            setPasswordError("The password must contain atleast one Alphabet");
        }
        else if (! /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)) {
            err = true;
            setPasswordError("The password must contain atleast one Special Character");
        }

        if (!err) {
            showAlert({
                title: "Registered!",
                message: "Your account is successfully registered.\n\nHappy Parking!",
                buttonText: "Goto Login",
                onPressButton: () => {
                    animate(parentElementFade, 1, 1000);
                    setRegisterNow(false);
                }
            })
        }
    }

    const onCancel = () => {
        animate(parentElementFade, 1, 1000);
        setRegisterNow(false);
        setMail("");
        setPhone("");
        setPassword("");
        setHidePassword(true);
        setVehicleNumber("");
    }

    return (
        <Animated.View style={{
            opacity: fadeElement,
            width: "100%",
            height: "100%",
            alignItems: "center",
            paddingTop: "15%",
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

            <View style={styles.registerContainer}>
                <View style={styles.registerHeadContainer}>
                    <Text allowFontScaling={false} style={styles.registerHeadText}>Welcome</Text>
                </View>

                <View style={styles.credentialContainer}>
                    <TextInput allowFontScaling={false}
                        style={styles.credential}
                        onChangeText={(value) => {
                            setName(value);
                            if (nameError)
                                setNameError("");
                        }}
                        value={name}
                        placeholder="Full Name"
                        placeholderTextColor={"#bbb"}
                    />
                    {
                        name.length > 3 && (
                            <TouchableHighlight onPress={() => {
                                setName("");
                                if (nameError)
                                    setNameError("");
                            }}
                                style={styles.buttonContainer}>
                                <Image
                                    source={require("../../assets/buttons/cancelButton.png")}
                                    style={styles.buttons}
                                />
                            </TouchableHighlight>
                        )
                    }
                </View>
                <Text allowFontScaling={false} style={[styles.warningText]}>{nameError}</Text>


                <View style={styles.credentialContainer}>
                    <TextInput allowFontScaling={false}
                        style={styles.credential}
                        onChangeText={(value) => {
                            value = value.replace(' ', '');
                            value = value.replace('-', '');
                            value = value.replace(',', '');
                            value = value.replace('.', '');
                            setPhone(value);
                            if (phoneError)
                                setPhoneError("");
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
                                if (phoneError)
                                    setPhoneError("");
                            }}
                                style={styles.buttonContainer}>
                                <Image
                                    source={require("../../assets/buttons/cancelButton.png")}
                                    style={styles.buttons}
                                />
                            </TouchableHighlight>
                        )
                    }
                </View>
                <Text allowFontScaling={false} style={[styles.warningText]}>{phoneError}</Text>


                <View style={styles.credentialContainer}>
                    <TextInput allowFontScaling={false}
                        style={styles.credential}
                        onChangeText={(value) => {
                            setMail(value);
                            if (mailError)
                                setMailError("");
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
                                if (mailError)
                                    setMailError("");
                            }}
                                style={styles.buttonContainer}>
                                <Image
                                    source={require("../../assets/buttons/cancelButton.png")}
                                    style={styles.buttons}
                                />
                            </TouchableHighlight>
                        )
                    }
                </View>
                <Text allowFontScaling={false} style={[styles.warningText]}>{mailError}</Text>


                <View style={styles.credentialContainer}>
                    <TextInput allowFontScaling={false}
                        style={styles.credential}
                        onChangeText={(value) => {
                            setPassword(value);
                            if (passwordError)
                                setPasswordError("");
                        }}
                        value={password}
                        placeholder="New Password"
                        placeholderTextColor={"#bbb"}
                        secureTextEntry={hidePassword}
                    />
                    <TouchableHighlight onPress={() => { setHidePassword(!hidePassword) }}
                        style={styles.buttonContainer}>
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
                <Text allowFontScaling={false} style={[styles.warningText]}>{passwordError}</Text>


                <View style={styles.credentialContainer}>
                    <TextInput allowFontScaling={false}
                        style={[styles.credential, styles.vehicleNumber]}
                        onChangeText={(value) => {
                            setVehicleNumber(value);
                            if (vehicleNumberError)
                                setVehicleNumberError("");
                        }}
                        value={vehicleNumber}
                        placeholder="Vehicle/ Plate Number"
                        placeholderTextColor={"#bbb"}
                        keyboardType="visible-password"

                    />
                    {
                        vehicleNumber.length > 0 && (
                            <TouchableHighlight onPress={() => {
                                setVehicleNumber("");
                                if (vehicleNumberError)
                                    setVehicleNumberError("");
                            }}
                                style={styles.buttonContainer}>
                                <Image
                                    source={require("../../assets/buttons/cancelButton.png")}
                                    style={styles.buttons}
                                />
                            </TouchableHighlight>
                        )
                    }
                </View>
                <Text allowFontScaling={false} style={[styles.warningText]}>{vehicleNumberError}</Text>


                {(name && phone && mail && password && vehicleNumber) ?
                    (
                        <TouchableOpacity onPress={onSubmit} style={styles.registerButton}>
                            <Text allowFontScaling={false} style={styles.btnText}>Verify & Register</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={[styles.registerButton, styles.registerButtonDisabled]} disabled={true}>
                            <Text allowFontScaling={false} style={styles.btnText}>Verify & Register</Text>
                        </TouchableOpacity>
                    )
                }

                <TouchableOpacity onPress={onCancel} style={styles.registerButton}>
                    <Text allowFontScaling={false} style={styles.btnText}>Cancel</Text>
                </TouchableOpacity>
            </View>


        </Animated.View>
    )
}