import { Dimensions, Platform, StatusBar, StyleSheet } from "react-native";
const btnColor: string = "#ddd";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,1)",
  },
  appGuide: {
    alignItems: "center",
    justifyContent: "center",
    width: "75%",
    height: 50,
    backgroundColor: btnColor,
    marginTop:"35%",
    marginBottom: 50,
  },
  text: {
    color: "#000",
    alignSelf: "center",
  },
  buttonsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  centerButtonContainer:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  leftCreateParkingButton: {
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get('window').width * 0.25,
    height: Dimensions.get('window').width * 0.25,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    backgroundColor: btnColor,
    marginRight: 20,
    marginTop: 50,
  },
  centerHomeButton: {
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').width * 0.3,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    backgroundColor: btnColor,
  },
  rightRentParkingButton: {
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get('window').width * 0.25,
    height: Dimensions.get('window').width * 0.25,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    backgroundColor: btnColor,
    marginLeft: 20,
    marginTop: 50,
  },
  topButtonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  bookParkingButton: {
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get('window').width * 0.25,
    height: Dimensions.get('window').width * 0.25,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    backgroundColor: btnColor,
    marginTop: 20,
    marginRight: 15,
  },
  walletButton: {
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get('window').width * 0.25,
    height: Dimensions.get('window').width * 0.25,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    backgroundColor: btnColor,
    marginTop: 20,
    marginLeft: 15,
  },
})

export default styles;