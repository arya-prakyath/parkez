import { Dimensions, Platform, StatusBar, StyleSheet } from "react-native";
import { marginFromHeader } from "../../../Utils/dimentions";

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    minHeight: "50%",
    maxHeight: "95%",
    width: "95%",
    marginVertical: marginFromHeader + 3,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    borderColor: "#555",
    borderWidth: 3,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 0,
  },
  detailsContainer: {
    width: "95%",
    alignItems: "center",
    paddingVertical: 15,
    alignSelf: "center",
  },
  details: {
    height: "80%",
  },

  spotNameAndAddressContainer: {
    width: "90%",
    justifyContent: "space-around",
  },
  spotNameAndCostContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  spotName: {
    color: "#fff",
    fontSize: 17,
    alignSelf: "flex-start",
    marginBottom: 3,
    width: "70%",
  },
  spotCost: {
    color: "#fff",
    fontSize: 16,
    alignSelf: "flex-start",
    marginBottom: 3,
    width: "30%",
  },
  spotAddress: {
    color: "#fff",
    fontSize: 12,
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
    marginVertical: 3,
  },
  seperatorThick: {
    borderColor: "#fff",
    borderWidth: 1,
    marginVertical: 5,
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
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    margin: 3,
  },
  spotCountItem: {
    width: "30%",
    height: "70%",
    alignItems: "center",
  },
  spotCountBox: {
    width: "100%",
    height: "100%",
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
    fontSize: 15,
    letterSpacing: 1,
    fontWeight: "300",
  },
  spotCountTextDark: {
    color: "#000",
    fontSize: 15,
    letterSpacing: 1,
    fontWeight: "400",
  },
  spotCountHeadText: {
    color: "#fff",
    fontSize: 10,
    letterSpacing: 0.5,
    fontWeight: "300",
    textAlign: "center",
    marginTop: 3,
  },

  vehicleListContainer:{
    width: "98%",
    height: 280,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    borderRadius: 15,
    paddingTop: 3,
  },

  addVehiclesButtonContainer: {
    backgroundColor: "#fff",
    borderRadius: 15,
    height: 30,
    width: "50%",
    alignSelf: "flex-start",
    marginHorizontal: 10,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  addVehicleButton: {
    textAlign: "center",
  },

  vehicleInfoContainer: {
    width: "98%",
  },
  vehicleInfoHeader: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "400",
    letterSpacing: 2,
    alignSelf: "flex-start",
    marginHorizontal: 10,
    marginBottom: 3,
  },

  vehicleHeadContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 20,
    marginBottom: 5,
    marginHorizontal: 8,
  },
  removeVehicleButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  removeVehicleIcon: {
    flex: 0.8,
    aspectRatio: 1,
  },
  vehicleCount: {
    width: "75%",
    color: "#fff",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 2,
    marginHorizontal: 20,
  },

  savedOrNewContainer: {
    width: "95%",
    height: 45,
    flexDirection: "row",
    alignItems: "center",
  },
  savedOrNewButton: {
    height: "100%",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  savedOrNewButtonText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "300",
    letterSpacing: 2,
    textAlign: "center",
  },
  savedOrNewButtonSelected: {
    marginHorizontal: 5,
    backgroundColor: "#fff",
    borderColor: "#fff",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  savedOrNewButtonSelectedText:{
    color: "#000",
    fontSize: 13,
    fontWeight: "400",
  },

  vehicleInfoItem: {
    width: "95%",
    justifyContent: "space-between",
    borderColor: "#fff",
    borderWidth: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginHorizontal: 5,
    paddingVertical: 5, 
    paddingHorizontal: 10, 
  },
  vehicleInfoDataReadOnly:{
    height: 30,
    color: "#fff",
    fontSize: 14,
    fontWeight: "300",
    letterSpacing: 1,
    paddingLeft: 10,
  },
  vehicleInfoData: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    color: "#fff",
    fontSize: 14,
    fontWeight: "300",
    letterSpacing: 1,
    paddingLeft: 10,
    marginVertical: 3,
  },
  dropdown: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 3,
  },
  placeholderStyle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "300",
  },
  selectedTextStyle: {
    color: "#fff",
    fontSize: 14,
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
    marginVertical: 1,
  },
  confirmationHead: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "200",
    letterSpacing: 2,
    fontStyle: "italic",
    marginBottom: 1.5,
  },
  confirmationHeadRow: {
    flexDirection: "row",
  },
  confirmationSubHead: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "300",
    letterSpacing: 1.5,
  },
  confirmationData: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "300",
    letterSpacing: 1,
  },

  nextBackButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: 55,
    paddingHorizontal: "5%",
    marginTop: 5,
  },
  backButton: {
    width: "45%",
    height: 52,
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
    height: 52,
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
  disabled: {
    backgroundColor: "#888",
  },
});

export default styles;
