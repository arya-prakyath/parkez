import { Platform, StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
    marginTop: (Platform.OS === 'ios') ? 80 : (StatusBar.currentHeight ? (StatusBar.currentHeight + 80) : 80),
  },

  searchBar: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 50,
    width: "92%",
    height: "7%",
    marginBottom: 10,
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

  spotsContainer: {
    alignSelf: "center",
    height: "70%",
    width: "100%",
    paddingRight: 5,
  },
  spots: {
    alignSelf: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    width: "92%",
    padding: "5%",
    marginBottom: "5%",
    borderColor: "#555",
    borderWidth: 1,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderRadius: 10,
  },
  spotsNameAndCost: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  spotName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
    maxWidth: "75%",
  },
  spotCost: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "800",
  },
  spotsAddressAndFavorite: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  spotAddress: {
    color: "#fff",
    width: "88%",
    alignSelf: "center",
    fontSize: 15,
    fontWeight: "300",
    fontStyle: "italic",
    marginTop: 10,
  },
  favoriteButtonContainer: {
    height: 50,
    width: 50,
    padding: 15,
    alignSelf: "center",
  },
  favoriteButton: {
    flex: 1,
    aspectRatio: 1,
  },
  noresults: {
    color: "#fff",
    fontSize: 15,
  },
})

export default styles;