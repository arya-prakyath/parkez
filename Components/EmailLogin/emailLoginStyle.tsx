import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "80%",
        height: "90%",
    },
    credential: {
        color: "#fff",
        fontSize: 15,
        paddingLeft: 5,
        height: "100%",
        width: "85%"
    },
    credentialContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: "20%",
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: "#fff",
    },
    passwordButtonContainer: {
        width: "15%",
        justifyContent: "center",
        alignItems: "center",
    },
    buttons: {
        flex: 0.4,
        aspectRatio: 1,
    },
    warningText: {
        color: "orange",
        fontSize: 13,
        marginTop: "2%",
        paddingLeft: 5,
    },
    forgotPasswordLink: {
        alignSelf: "flex-end",
        fontSize: 12,
        color: "#ADD8E6",
        textDecorationLine: "underline",
        marginTop: "3%",
    },
    loginButton: {
        backgroundColor: "#fff",
        borderRadius: 50,
        height: "20%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "5%"
    },
    loginButtonDisabled: {
        backgroundColor: "#888",
    },
    otpButton: {
        backgroundColor: "#fff",
        borderRadius: 50,
        height: "15%",
        alignItems: "center",
        justifyContent: "center",
    },
    otpButtonDisabled: {
        backgroundColor: "#888",
    },
    btnText: {
        color: "#000",
        fontSize: 15,
    },
    cancelButton: {
        marginTop: "3%",
    },
    verifyText1: {
        color: "#fff",
        fontSize: 15,
        paddingLeft: 5,
        fontWeight: "500",
    },
    verifyText2: {
        color: "#fff",
        fontSize: 14,
        paddingLeft: 5,
        fontWeight: "300",
    },
    otpTextField: {
        height: "25%",
        color: "#fff",
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 10,
        marginTop: "8%",
        fontSize: 20,
        letterSpacing: 25,
        textAlign: "center",
    },
    resetLinksContainer:{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "baseline",
        marginTop: "5%",
    }, 
    resetLinks: {
        alignSelf: "flex-start",
        fontSize: 13,
        color: "#ADD8E6",
        textDecorationLine: "underline",
    },
    verifyOtpBtn: {
        backgroundColor: "#fff",
        borderRadius: 50,
        height: "15%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "5%",
    },
    verifyOtpBtnDisabled: {
        backgroundColor: "#888",
    },
    passwordResetContainer: {
        height: "10%",
        borderBottomWidth: 0,
        flexDirection: "column",
    },
    emailDisabled: {
        color: "#fff",
        letterSpacing: 1,
    }
});

export default styles;