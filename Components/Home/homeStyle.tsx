import { Dimensions, StyleSheet } from "react-native";
import { marginFromHeader } from "../../Utils/dimentions";
const btnColor: string = "#ddd";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: "100%",
    marginTop: marginFromHeader + 10,
  },
  addSpotContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    width: "90%",
    maxHeight: "90%",
    borderColor: "#555",
    borderWidth: 1,
    borderRadius: 50,
  },
  logoConatiner: {
    justifyContent: "center",
    alignItems: "center",
    height: "25%",
    marginTop: 25,
  },
  logo: {
    flex: 0.5,
    aspectRatio: 2.84,
  },
  logoText: {
    flex: 0.5,
    aspectRatio: 2.23,
  },
  addSpotText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "300",
    letterSpacing: 3,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 25,
    marginHorizontal: 25,
    fontVariant: ["small-caps"],
  },
  addSpotButton: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: "12%",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 5,
  },
  addSpotButtonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "400",
    letterSpacing: 1.5,
  },
  doubleButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "12%",
    width: "90%",
    alignSelf: "center",
  },
  doubleButtons: {
    backgroundColor: "#fff",
    width: "49.4%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  myApartmentButton: {
    borderBottomLeftRadius: 20,
  },
  myWalletButton: {
    borderBottomRightRadius: 20,
  },
  seperator: {
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    marginVertical: 5,
  },
  bookedContainer: {
    minHeight: "65%",
    maxHeight: "85%",
    width: "95%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    borderColor: "#555",
    borderWidth: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 0,
    borderRadius: 50,
    padding: 20,
  },
  bookedHeader: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "300",
    letterSpacing: 1,
  },
  bookedHeaderLg: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "300",
    letterSpacing: 1,
  },
  bookedDataContainer: {
    height: "90%",
  },

  bookedNameAndAddressContainer: {
    justifyContent: "center",
  },
  bookedName: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "300",
    letterSpacing: 1,
  },
  bookedAddress: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "200",
  },
  bookedItemContainer: {
    justifyContent: "center",
  },
  bookedItemHead: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "200",
  },
  bookedItemData: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "300",
    marginBottom: 3,
    letterSpacing: 1,
  },
  bookedItemHeadLg: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "300",
  },
  bookedItemDataLg: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 3,
    letterSpacing: 1,
  },

  timerContainer: {
    height: 50,
    marginVertical: 5,
  },
  timerHeader: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "200",
  },
  timer: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "300",
  },

  paymentButtonContainer: {
    height: 200,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  paymentButton: {
    height: 35,
    width: "98%",
    backgroundColor: "#fff",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  paymentButtonText: {
    textAlign: "center",
    color: "#000",
    fontSize: 18,
  },

  proceedButtonContainer: {
    height: "10%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  proceedButton: {
    backgroundColor: "#fff",
    width: "95%",
    height: "100%",
    flexDirection: "row",
    marginHorizontal: 25,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  proceedButtonText: {
    color: "#000",
    fontSize: 18,
    letterSpacing: 5,
    fontWeight: "400",
  },
  proceedButtonLogo: {
    marginLeft: 25,
    flex: 0.18,
    aspectRatio: 1,
  },
  exitButton: {
    backgroundColor: "#fff",
    width: "95%",
    height: "120%",
    flexDirection: "row",
    marginHorizontal: 25,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
  exitButtonText: {
    color: "#000",
    fontSize: 25,
    letterSpacing: 5,
    fontWeight: "300",
  },
  exitButtonLogo: {
    alignSelf: "center",
    marginLeft: 15,
    flex: 0.18,
    aspectRatio: 1,
  },

  qrCodeHeader: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "300",
    textAlign: "center",
    letterSpacing: 1,
    marginBottom: 5,
  },
  qrCodeContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 0,
    alignSelf: "center",
    height: 200,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    margin: 3,
  },








  appGuide: {
    alignItems: "center",
    justifyContent: "center",
    width: "75%",
    height: 50,
    backgroundColor: btnColor,
    marginTop: "35%",
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
  centerButtonContainer: {
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