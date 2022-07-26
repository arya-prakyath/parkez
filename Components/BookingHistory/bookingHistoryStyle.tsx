import { Platform, StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    marginTop: (Platform.OS === 'ios') ? 80 : (StatusBar.currentHeight ? (StatusBar.currentHeight + 80) : 80),
  },
  historyContainer: {
    width: "100%",
    height: "100%",
    paddingRight: 5,
  },

  historyList: {
    alignSelf: "center",
    height: "78%",
    width: "100%",
  },

  historyItemContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    width: "92%",
    alignSelf: "center",
    marginBottom: "5%",
    paddingLeft: 10,
    paddingVertical: 12,
    borderColor: "#555",
    borderWidth: 1,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderRadius: 15,
  },
  historyRowContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  historyRightSpaceContainer: {
    paddingRight: 15,
  },
  DateAndTimeContainer: {
    justifyContent: "space-between",
  },
  vehicleNameAndNumberConatiner: {
    width: "85%",
    flexDirection: "row",
  },

  seperator: {
    width: "98%",
    marginVertical: 8,
    borderBottomColor: "#fff",
    borderBottomWidth: 0.25,
  },

  infoText: {
    color: "#fff",
    letterSpacing: 0.5,
    fontSize: 13,
  },
  spotNameAndcost: {
    width: "50%",
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 10,
  },
  cost: {
    textAlign: "center",
  },
  address: {
    width: "100%",
    fontWeight: "200",
    fontStyle: "italic",
  },
  fromToDateTimeHead: {
    fontSize: 13,
    fontWeight: "200",
    fontStyle: "italic",
  },
  fromToDateTime: {
    fontWeight: "300",
  },
  toDateTime: {
    marginRight: 12,
  },
  vehicleNameAndNumber: {
    fontSize: 15,
    fontWeight: "400",
  },

  gotoItemContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
    width: "15%",
    height: 30,
  },
  gotoItemIcon: {
    flex: 1,
    aspectRatio: 1,
  },

  backButtonContainer: {
    width: "95%",
    height: "9%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#555",
    marginTop: 10,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  backButton: {
    width: "50%",
    height: 42,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 25,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "400",
    alignSelf: "center",
    marginLeft: 15,
  },
  backButtonIcon: {
    flex: 0.3,
    aspectRatio: 1,
    marginRight: 10,
  },

  histortDetailsContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    width: "95%",
    height: "62%",
    alignSelf: "center",
    paddingHorizontal: 20,
    padding: 20,
    borderColor: "#555",
    borderWidth: 1,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderRadius: 15,
  },
  historyDetailHead: {
    color: "#fff",
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: "200",
    textAlign: "left",
    marginBottom: 10,
  },
  historyDetailData:{
    color: "#fff",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
  },
  invoiceLinkContainer: {
    backgroundColor: "#555",
    width: "95%",
    height: 40,
    marginTop: 10,
    paddingRight: 5,
    borderRadius: 25,
    alignSelf: "center", 
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingLeft: 25,
  },
  invoiceLink: {
    fontSize: 16,
    color: "#ADD8E6",
    letterSpacing: 1,
    paddingBottom: 3,
    borderBottomColor: "#ADD8E6",
    borderBottomWidth: 0.5,
  },
  invoiceLinkLogo: {
    flex: 0.2,
    aspectRatio: 1,
  },
})

export default styles;