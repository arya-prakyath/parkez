import { Animated } from "react-native";

const fadeInAndOut = (stateObjectValue: Animated.Value , toValue: number, duration: number, callback: () => void = () => {} ) => {
    Animated.timing(stateObjectValue, {
        toValue: toValue,
        duration: duration,
        useNativeDriver: true,
    }).start(callback);
}

export default fadeInAndOut;