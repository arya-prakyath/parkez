import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "rgba(0,2,20,0.8)",
    },
    header: {
      flex: 0.4,
      aspectRatio: 3.31,
      marginTop: 75,
      marginRight: 50,
    },
    loginContainer: {
      backgroundColor: "rgba(0,0,0,0.5)",
      borderTopLeftRadius: 15,
      borderTopRightRadius: 80,
      borderBottomLeftRadius: 80,
      borderBottomRightRadius: 15,
      width: "90%",
      height: "40%",
      shadowColor: "black",
      shadowRadius: 25,
      textShadowOffset: 25,
    },
    loginText: {
      color: "#fff",
      fontSize: 22,
      textShadowColor: "black",
      textShadowRadius: 25,
      padding: 20,
      paddingBottom: 0,
    },
    loginButtonsContainer: {
      display: "flex",
      flexDirection: "column",
      padding: 20,
    },
    loginButton: {
      display: "flex",
      flexDirection: "row",
      paddingBottom: 15,
    },
    loginButtonImage: {
      width: 70,
      height: 70,
    },
    loginButtonTextcontainer: {
      display: "flex",
      flexDirection: "column",
      alignContent: "center",
      justifyContent: "center"
    },
    loginButtonText: {
      color: "#fff",
      fontSize: 20,
      paddingLeft: 10,
      textShadowColor: "black",
      textShadowRadius: 25,
    },
    loginButtonSubText: {
      color: "#fff",
      fontSize: 12,
      fontStyle: "italic",
      paddingLeft: 10,
    },
    socialMediaContainer: {
      display: "flex",
      width: "50%",
      flexDirection: "row",
      alignContent: "center",
      justifyContent: "space-between",
      marginTop: 75,
    },
    socialMediaIcon: {
      width: 30,
      height: 30,
    },
    siteLinkContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
    },
    siteLinkIcon: {
      width: 20,
      height: 20,
      marginRight: 5,
    },
    siteLink: {
      color: "#ADD8E6",
      textDecorationLine: "underline",
    },
  });
  
  export default styles;