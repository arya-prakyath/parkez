import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,1)",
    },
    logoContainer: {
        height: "50%",
        width: "50%",
        alignItems: "center",
        // justifyContent: "center",
    },
    logoAnimatedContainer: {
        justifyContent: "flex-end"
    },
    textAnimatedContainer: {
        justifyContent: "flex-start"
    },
    logo: {
        flex: 0.45,
        aspectRatio: 2.84,
    },
    logoText: {
        flex: 0.45,
        aspectRatio: 2.23,
    }
})

export default styles;