import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Linking,
  ToastAndroid,
} from "react-native";
import usersList from "../../Models/usersListData";
import styles from "./login2Style";

export default function Login({ navigation }: { navigation: any }) {

  const login = (userName: string, password: string) => {
    for (let user of usersList) {
      if (userName === user.username && password === user.password) {
        console.log("Into Home Screen");
        navigation.navigate('Home');
        return;
      }
    }

    ToastAndroid.showWithGravity(
      "Invalid Credentials",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
    console.log("Invalid Credentials");
  }

  const register = () => {
    ToastAndroid.showWithGravity(
      "TODO: Registraion Page",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
    console.log("Into Registration Page - TODO");
  };

  return (
    <ImageBackground
      source={require("../../assets/Home-Bg-2.jpg")}
      style={styles.container}
      imageStyle={{ opacity: 0.3 }}
      blurRadius={1}
    >
      <Image source={require("../../assets/logo.png")} style={styles.header} />

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Login As</Text>
        <View style={styles.loginButtonsContainer}>
          <TouchableOpacity onPress={() => login("arya", "123")} style={styles.loginButton}>
            <Image
              source={require("../../assets/icon-customer.png")}
              style={styles.loginButtonImage}
            />
            <View style={styles.loginButtonTextcontainer}>
              <Text style={styles.loginButtonText}>Customer</Text>
              <Text style={styles.loginButtonSubText}>
                Look & Book a parking spot!
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => login("arya", "111")} style={styles.loginButton}>
            <Image
              source={require("../../assets/icon-business.png")}
              style={styles.loginButtonImage}
            />
            <View style={styles.loginButtonTextcontainer}>
              <Text style={styles.loginButtonText}>Business</Text>
              <Text style={styles.loginButtonSubText}>
                Got space? List it as a parking spot!
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.socialMediaContainer}>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://linkedin.com")}
        >
          <Image
            source={require("../../assets/social-media-icons/linkedin.png")}
            style={styles.socialMediaIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://facebook.com")}
        >
          <Image
            source={require("../../assets/social-media-icons/facebook.png")}
            style={styles.socialMediaIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://instagram.com")}
        >
          <Image
            source={require("../../assets/social-media-icons/instagram.png")}
            style={styles.socialMediaIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL("mailto:support@sensitive.com")}
        >
          <Image
            source={require("../../assets/social-media-icons/mail.png")}
            style={styles.socialMediaIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.siteLinkContainer}>
        <Image
          source={require("../../assets/social-media-icons/link.png")}
          style={styles.siteLinkIcon}
        />
        <Text
          style={styles.siteLink}
          onPress={() => Linking.openURL("https://sensitiveapp.com")}
        >
          Click here to visit our page
        </Text>
      </View>

      {/* <StatusBar style="auto" /> */}
    </ImageBackground>
  );
}