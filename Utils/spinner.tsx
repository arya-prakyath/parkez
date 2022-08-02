import React from "react";
import { ActivityIndicator } from "react-native";

const Spinner = () => {
    return (
        <ActivityIndicator size="large" color="#fff" style={{alignSelf: "center", marginTop: 50,}}/>
    )
}

export default Spinner;