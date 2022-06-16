import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "80%",
        height: "90%",
        justifyContent: "center",
    },
    phoneNumberContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: "30%",
        width: "100%",
        borderBottomWidth: 1,
        paddingTop: "10%",
        borderBottomColor: "#fff",
    },
    phone: {
        color: "#fff",
        fontSize: 18,
        width: "85%",
        paddingLeft: 5,
    },
    clearButtonContainer: {
        width: "15%",
        justifyContent: "center",
        alignItems: "center",
    },
    clearButton: {
        flex: 0.5,
        aspectRatio: 1,
    },
    otpButton: {
        backgroundColor: "#fff",
        borderRadius: 50,
        height: "18%",
        marginTop: "10%",
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
    warningText: {
        color: "orange",
        fontSize: 13,
        marginTop: "2%",
        paddingLeft: 5,
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
    otpItem: {
        backgroundColor: "#fff",
        fontSize: 15,
        height: "100%",
        width: "20%",
        borderRadius: 100,
        textAlign: "center",
    },
});

export default styles;