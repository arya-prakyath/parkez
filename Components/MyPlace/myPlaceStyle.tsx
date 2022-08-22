import { Platform, StatusBar, StyleSheet } from "react-native";
import { marginFromHeader } from "../../Utils/dimentions";

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
    padding: 25,
  },

  myPlaceHeaderContainer: {
    width: "100%",
    justifyContent: "space-around",
  },
  myPlaceHeaderNameAndEdit: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  editButton: {
    width: "25%",
    flexDirection: "row",
    alignItems: "center",
  },
  editButtonIcon: {
    flex: 0.3,
    aspectRatio: 1,
    marginRight: 5,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 12,
    letterSpacing: 1,
    fontWeight: "300",
  },

  myPlaceHeaderItem: {
    width: "80%",
    color: "#fff",
    fontSize: 15,
    fontWeight: "300",
    letterSpacing: 1.5,
    alignSelf: "flex-start",
    marginBottom: 3,
  },
  myPlaceHeaderAddress: {
    width: "90%",
    color: "#fff",
    fontSize: 13,
    fontWeight: "300",
    letterSpacing: 1,
    alignSelf: "flex-start",
    fontStyle: "italic",
  },

  vehicleInfoHeader: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "400",
    letterSpacing: 2,
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  vehicleListContainer: {
    width: "98%",
    height: 280,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    borderRadius: 15,
    paddingTop: 3,
  },

  addVehiclesButtonContainer: {
    backgroundColor: "#fff",
    borderRadius: 15,
    height: 35,
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

  seperator: {
    borderColor: "#fff",
    borderWidth: 0.5,
    marginVertical: 10,
  },
  seperatorThick: {
    borderColor: "#fff",
    borderWidth: 1,
    marginVertical: 5,
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

});

export default styles;