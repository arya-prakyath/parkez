import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    logoContainer: {
        height: "15%",
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
    },
    logoAnimationContainer: {
        justifyContent: "flex-end",
        marginBottom: "3%",
    },
    logo: {
        flex: 0.5,
        aspectRatio: 2.84,
        marginRight: "1%",
    },
    logoText: {
        flex: 0.5,
        aspectRatio: 2.23,
    },
    registerContainer: {
        backgroundColor: "#000",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 70,
        borderBottomLeftRadius: 70,
        borderBottomRightRadius: 8,
        borderWidth: 3,
        borderColor: "#222",
        width: "90%",
        height: "75%",
        alignItems: "center",
        paddingTop: "3%",
    },
    registerHeadContainer: {
        alignItems: "flex-start",
        width: "90%",
        marginBottom: "3%",
    },
    registerHeadText: {
        color: "#fff",
        fontSize: 25,
        letterSpacing: 2,
        fontWeight: "300",
    },
    credentialContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        borderBottomWidth: 1,
        borderBottomColor: "#fff",
        height: "8%",
        width: "90%",
        paddingBottom: "1%",
    },
    credential: {
        color: "#fff",
        fontSize: 16,
        paddingLeft: 5,
        width: "85%"
    },
    vehicleNumber: {
        textTransform: "uppercase",
    },
    buttonContainer: {
        width: "15%",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "2%",
    },
    buttons: {
        flex: 0.6,
        aspectRatio: 1,
    },
    warningText: {
        color: "orange",
        fontSize: 13,
        marginTop: "1%",
        paddingLeft: 5,
        width: "92%",
    },
    registerButton: {
        backgroundColor: "#fff",
        borderRadius: 50,
        height: "8%",
        width: "85%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "3%",
    },
    registerButtonDisabled: {
        backgroundColor: "#888",
    },
    btnText: {
        color: "#000",
        fontSize: 15,
    },
});

export default styles;