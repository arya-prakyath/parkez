import { Platform, StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      height: "100%",
      width: "100%",
      marginTop: (Platform.OS === 'ios') ? 80 : (StatusBar.currentHeight ? (StatusBar.currentHeight + 80) : 80),
    },
    title: {
        color: "#fff",
        fontSize: 15,
    },
});

export default styles;