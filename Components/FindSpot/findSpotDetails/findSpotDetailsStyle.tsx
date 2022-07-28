import { Platform, StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        width: "100%",
        height: "100%",
        marginTop: (Platform.OS === 'ios') ? 80 : (StatusBar.currentHeight ? (StatusBar.currentHeight + 80) : 80),
    },
    detailsContainer: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        maxHeight: "75%",
        minHeight: "60%",
        width: "95%",
        alignItems: "center",
        paddingVertical: 15,
        alignSelf: "center",
        borderColor: "#555",
        borderWidth: 3,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 0,
    },

    spotNameAndAddressContainer: {
        width: "90%",
        justifyContent: "space-around",
    },
    spotName: {
        color: "#fff",
        fontSize: 18,
        alignSelf: "flex-start",
        marginBottom: 3,
    },
    spotAddress: {
        color: "#fff",
        fontSize: 13,
        fontStyle: "italic",
        fontWeight: "300",
        alignSelf: "flex-start",
    },
    spotNotesContainer: {
        width: "90%",
    },
    spotNotes: {
        color: "#fff",
        fontSize: 13,
        fontWeight: "300",
        alignSelf: "flex-start",
    },

    seperator: {
        borderColor: "#fff",
        borderWidth: 0.5,
        width: "95%",
        marginVertical: 10,
    },
    halfSeperatorContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 5,
    },
    halfSeperator: {
        width: "45%",
    },
    halfSeperatorText: {
        color: "#fff",
        fontWeight: "300",
        letterSpacing: 1,
        marginHorizontal: 5,
    },

    spotCountContainer: {
        width: "90%",
        height: 75,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    spotCountItem: {
        width: "30%",
        height: "80%",
        alignItems: "center",
    },
    spotCountBox: {
        width: "100%",
        height: "80%",
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    availableBox: {
        backgroundColor: "#fff",
    },
    consumedBox: {
        backgroundColor: "orange",
    },
    spotCountText: {
        color: "#fff",
        fontSize: 18,
        letterSpacing: 1,
        fontWeight: "300",
    },
    spotCountTextDark: {
        color: "#000",
        fontSize: 18,
        letterSpacing: 1,
        fontWeight: "400",
    },
    spotCountHeadText: {
        color: "#fff",
        fontSize: 12,
        letterSpacing: 0.5,
        fontWeight: "300",
        textAlign: "center",
        marginTop: 3,
    },

    costPlansContainer: {
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: 15,
        maxHeight: "35%",
        width: "90%",
        padding: 15,
        paddingTop: 0,
    },
    costPlansHeader: {
        color: "#000",
        fontSize: 18,
        marginTop: 5,
    },
    costPlansText: {
        color: "#000",
        fontSize: 15,
        fontWeight: "400",
        fontStyle: "italic",
        margin: 3,
    },

    vehicleInfoContainer: {
        width: "90%",
    },
    vehicleInfoHeader: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "400",
        letterSpacing: 0.5,
    },
    vehicleInfoItem: {
        alignSelf: "center",
        width: "95%",
        marginVertical: 5,
    },
    vehicleInfoData: {
        height: 42,
        borderColor: "#888",
        borderWidth: 1,
        borderRadius: 5,
        color: "#fff",
        fontSize: 18,
        fontWeight: "300",
        letterSpacing: 1,
        paddingLeft: 10,
    },
    dropdown: {
        height: 48,
        borderColor: '#888',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 3,
        paddingLeft: 10,
    },
    placeholderStyle: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "300",
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 30,
        height: 30,
    },

    dateTimeContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    dateTimeHead: {
        color: "#fff",
        alignSelf: "flex-start",
        fontSize: 18,
        fontWeight: "300",
        marginHorizontal: 15,
    },
    dateTimeItem: {
        flexDirection: "row",
        marginVertical: 15,
    },
    dateTimeBox: {
        backgroundColor: "#333",
        width: 150,
        height: 50,
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 3,
    },
    dateTimeText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "300",
        textAlign: "center",
        width: 125,
        borderBottomColor: "#fff",
        borderBottomWidth: 1,
        padding: 3,
    },
    leftBox: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    rightBox: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
    },

    confirmationTitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "300",
        width: "90%",
    },
    confirmationContainer: {
        width: "90%",
        height: "75%",
        alignSelf: "center",
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 15,
        borderColor: "#555",
        borderWidth: 1,
        borderRadius: 15,
    },
    confirmationItem: {
        marginVertical: 5,
    },
    confirmationHead: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "200",
        letterSpacing: 0.5,
        fontStyle: "italic",
        marginBottom: 1.5,
    },
    confirmationData: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "400",
    },

    nextBackButtonContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        height: 60,
        paddingHorizontal: "5%",
        marginTop: 15,
    },
    backButton: {
        width: "45%",
        height: "100%",
        borderColor: "#fff",
        borderWidth: 2,
        borderRadius: 25,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    backAndNextButtonIcon: {
        flex: 0.25,
        aspectRatio: 1,
    },
    backButtonText: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "300",
        marginRight: 25,
    },
    nextButton: {
        width: "45%",
        height: "100%",
        backgroundColor: "#fff",
        borderRadius: 25,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    nextButtonText: {
        color: "#000",
        fontSize: 15,
        fontWeight: "300",
        marginLeft: 25,
    },

})

export default styles;