import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,1)",
    },
    logoContainer: {
        height: "15%",
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
    },
    logoAnimationContainer: {
        justifyContent: "flex-end",
        marginBottom:"3%",
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
    loginHeadsContainer: {
        backgroundColor: "#000",
        borderWidth: 3,
        borderColor: "#222",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        width: "85%",
        height: "10%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    loginHead: {
        height: "70%",
        width: "45%",
        alignContent: "center",
        justifyContent: "center",
    },
    selectedLoginHead: {
        backgroundColor: "#fff",
    },
    otpLoginHead: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 25,
    },
    emailLoginHead: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 5,
    },
    selectedLoginHeadText: {
        color: "#000",
        fontSize: 15,
        alignSelf: "center",
    },
    loginHeadText: {
        color: "#fff",
        fontSize: 15,
        alignSelf: "center",
    },
    loginContainer: {
        backgroundColor: "#000",
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderWidth: 3,
        borderColor: "#222",
        width: "85%",
        height: "40%",
        marginTop: "2%",
        alignItems: "center",
        justifyContent: "center",
    },
    registerLink: {
        color: "#ADD8E6",
        fontSize: 15,
        marginTop: 10,
    },
    socialMediaContainer: {
        display: "flex",
        width: "50%",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-between",
        marginTop: 50,
    },
    socialMediaIcon: {
        width: 30,
        height: 30,
    },
    siteLinkContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    siteLinkIcon: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    siteLink: {
        color: "#ADD8E6",
        textDecorationLine: "underline",
    },
});

export default styles;