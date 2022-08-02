import AsyncStorage from "@react-native-async-storage/async-storage"
import { ToastAndroid } from "react-native"

export const getCache = (key: string) => {
    try {
        const value = AsyncStorage.getItem(key)
        if (value !== null) {
            return value;
        }
        return null;
    } catch (err) {
        ToastAndroid.show("Something went wrong!" + err, 1000)
    }
}

export const setCache = (key: string, value: string) => {
    try {
        AsyncStorage.setItem(key, value)
    } catch (err) {
        ToastAndroid.show("Something went wrong!" + err, 1000)
    }
}