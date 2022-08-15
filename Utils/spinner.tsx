import React from "react";
import { ActivityIndicator } from "react-native";

interface spinnerProps {
    size?: "small" | "large";
}

const Spinner = ({ size }: spinnerProps) => {
    if (!size)
        size = "large";

    return (
        <ActivityIndicator size={size} color="#fff" style={{ alignSelf: "center", marginTop: 50, }} />
    )
}

export default Spinner;