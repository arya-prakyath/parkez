import { Platform, StatusBar, StyleSheet } from "react-native";
import { marginFromHeader } from "../../Utils/dimentions";

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
    marginTop: marginFromHeader,
  },

  searchBar: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 50,
    width: "92%",
    height: 50,
    marginVertical: 10,
  },
  searchText: {
    color: "#000",
    fontSize: 18,
    letterSpacing: 1,
    width: "80%",
    marginLeft: 20
  },
  searchButton: {
    flex: 0.75,
    width: "20%",
    aspectRatio: 1,
    marginRight: 20,
  },
  cancelButton: {
    flex: 0.5,
    width: "20%",
    aspectRatio: 1,
    marginRight: 20,
  },
})

export default styles;