import { Platform, StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    marginTop: Platform.OS === 'ios' ? "15%" : StatusBar.currentHeight + "10%",
  },

  profileImageContainer: {
    height: 100,
    width: 100,
    alignSelf: "center",
    borderRadius: 250,
    borderColor: "#555",
    borderWidth: 3,
  },
  profileImage: {
    borderRadius: 250,
    borderColor: "#eee",
    borderWidth: 3,
    flex: 1,
    aspectRatio: 1,
  },

  profileContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    height: "58%",
    width: "85%",
    marginTop: "1%",
    alignSelf: "center",
    paddingVertical: 20,
    borderColor: "#555",
    borderWidth: 1,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderRadius: 15,
  },

  profileDataContainer: {
    marginVertical: 8,
    marginHorizontal: 15,
  },
  profileHead: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "300",
    fontStyle: "italic",
  },
  profileData: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "400",
  },

  profileDataEditMode: {
    color: "#fff",
    width: "90%",
    fontSize: 16,
    borderColor: "#fff",
    borderBottomWidth: 1,
    paddingLeft: 3,
  },

  buttonContainer: {
    height: "15%",
    width: "100%",
    marginTop: 25,
    marginBottom: 5,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  homeButton: {
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "45%",
    height: "100%",
  },
  homeButtonText: {
    fontSize: 16,
    color: "#fff",
  },
  homeButtonIcon: {
    flex: 0.3,
    aspectRatio: 1,
    marginRight: 10,
  },
  editButton: {
    backgroundColor: "#fff",
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "45%",
    height: "100%",
  },
  editButtonIcon: {
    flex: 0.3,
    aspectRatio: 1,
    marginLeft: 10,
  },
  editButtonText: {
    fontSize: 16,
    color: "#000",
  },
})

export default styles;