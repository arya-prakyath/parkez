import { Platform, StatusBar } from "react-native";

export const marginFromHeader =
  Platform.OS === "ios"
    ? 60
    : StatusBar.currentHeight
    ? StatusBar.currentHeight + 60
    : 60;

