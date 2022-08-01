import { Dimensions, Platform, StatusBar, StyleSheet } from "react-native";
import { marginFromHeader } from "../../Utils/dimentions";

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
    marginVertical: marginFromHeader,
  },

  addNewVehicleButtonConatiner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 150,
    width: "50%",
    height: 50,
    marginHorizontal: 20,
    marginVertical: 5,
  },
  addNewVehicleButton: {
    flex: 0.3,
    aspectRatio: 1,
  },
  addNewVehicleButtonText: {
    color: "#000",
    fontSize: 15,
    fontWeight: "400",
  },

  MyVehiclesContainer: {
    alignSelf: "center",
    width: "100%",
    height: Dimensions.get("screen").height - 30,
    paddingRight: 5,
  },
  MyVehiclesList: {
    alignSelf: "center",
    height: "70%",
    width: "100%",
  },
  MyVehicleContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    width: "92%",
    height: 110,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    alignSelf: "center",
    marginBottom: 12,
    paddingHorizontal: 15,
    borderColor: "#555",
    borderWidth: 1,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderRadius: 15,
  },
  infoText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 1,
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

  addVehicleContainer: {
    marginTop: 25,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 225,
    padding: 20,
  },
  addVehicleButtonConatiner: {
    width: "75%",
    alignSelf: "center",
  },
  addVehicleButton: {
    flex: 0.25,
    aspectRatio: 1,
  },
  addVehicleButtonText: {
    fontSize: 18,
  },

  addEditVehicleContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    marginTop: marginFromHeader + 10,
    height: "68%",
    width: "95%",
    alignSelf: "center",
    justifyContent: "center",
    borderColor: "#555",
    borderWidth: 3,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 0,
  },

  vehicleInfoItem: {
    marginHorizontal: 20,
    width: "85%",
  },
  vehicleInfoHeader: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "200",
    paddingLeft: 10,
    marginBottom: 3,
  },
  vehicleInfoData: {
    height: 40,
    color: "#fff",
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#888",
    marginBottom: 10,
    marginLeft: 10,
    paddingLeft: 5,
  },
  dropdown: {
    height: 45,
    borderColor: '#888',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 10,
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 10,
  },
  placeholderStyle: {
    color: "#fff",
    fontSize: 18,
  },
  selectedTextStyle: {
    fontSize: 18,
  },
  iconStyle: {
    width: 30,
    height: 30,
  },

  addCancelButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: "15%",
    paddingHorizontal: "5%",
  },
  cancelButton: {
    width: "45%",
    height: "85%",
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  addCancelButtonIcon: {
    flex: 0.25,
    aspectRatio: 1,
  },
  cancelButtonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "300",
    marginRight: 25,
  },
  addButton: {
    width: "45%",
    height: "85%",
    backgroundColor: "#fff",
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  addButtonText: {
    color: "#000",
    fontSize: 15,
    fontWeight: "300",
    marginLeft: 25,
  },
})

export default styles;