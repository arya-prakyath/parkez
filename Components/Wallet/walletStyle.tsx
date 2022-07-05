import { Platform, StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
    width: "100%",
    marginTop: Platform.OS === 'ios' ? "15%" : StatusBar.currentHeight + "10%",
  },
  paymentMethodContainer: {
    backgroundColor: "#000",
    width: "95%",
    height: "20%",
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: 15,
    padding: 10,
    borderColor: "#555",
    borderWidth: 1,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderRadius: 10,
  },
  paymentMethodNotAdded: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "300",
  },
  addPaymentMethod: {
    width: "75%",
    height: "30%",
    backgroundColor: "#fff",
    justifyContent: "center",
    borderRadius: 50,
  },
  addPaymentMethodText: {
    alignSelf: "center",
    color: "#000",
    fontSize: 16,
    fontWeight: "400",
  },
})

export default styles;