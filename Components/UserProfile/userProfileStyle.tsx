import { Platform, StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    marginTop: (Platform.OS === 'ios') ? 80 : (StatusBar.currentHeight ? (StatusBar.currentHeight + 80) : 80),
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

  editDeleteImageOptionsContainer: {
    backgroundColor: "#000",
    position: "absolute",
    right: "1%",
    top: "8%",
    width: "40%",
    height: 90,
    paddingVertical: 5,
    borderColor: "#555",
    borderWidth: 1,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 30,
  },
  editDeleteImageOptions: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "45%",
    marginLeft: 20,
  },
  editDeleteImageOptionsText: {
    color: "#fff",
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: "300",
    marginLeft: 15,
  },
  editDeleteImageOptionsIcon: {
    flex: 0.2,
    aspectRatio: 1,
  },
  deleteImageIcon: {
    flex: 0.25,
  },
  seperator: {
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    marginHorizontal: 10,
    marginVertical: 3,
  },
  
  profileContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    height: "52%",
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
  profileDetails: {
    height: "80%",
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

  profileDataEditModeContainer:{
    marginVertical: 5,
    marginHorizontal: 15,
  },
  profileDataEditMode: {
    color: "#fff",
    width: "90%",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#888",
    padding: 3,
    paddingLeft: 10,
  },

  buttonContainer: {
    height: "15%",
    width: "100%",
    marginTop: 5,
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
  editButtonText: {
    fontSize: 16,
    color: "#000",
  },
  editButtonIcon: {
    flex: 0.3,
    aspectRatio: 1,
    marginLeft: 10,
  },
})

export default styles;