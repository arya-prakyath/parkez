import React from "react";
import {
  Text,
  ImageBackground,
  View,
} from "react-native";
import HeaderBar from "../../Utils/headerBar";
import styles from "./homeStyle";

interface homeProps {
  navigation: any,
}

export default function Home({ navigation }: homeProps) {
  return (
      <ImageBackground
        source={require("../../assets/Home-Bg.png")}
        style={styles.container}
        imageStyle={{ opacity: 0.5 }}
        blurRadius={1}
      >
        <View style={styles.appGuide} >
          <Text style={styles.text}>App Guide</Text>
        </View>

        <View style={styles.buttonsContainer} >
          <View style={styles.topButtonContainer} >
            <View style={styles.bookParkingButton} >
              <Text style={styles.text}>Book Parking</Text>
            </View>
            <View style={styles.walletButton} >
              <Text style={styles.text}>Wallet</Text>
            </View>
          </View>

          <View style={styles.centerButtonContainer} >
            <View style={styles.leftCreateParkingButton} >
              <Text style={styles.text}>Create Parking</Text>
            </View>
            <View style={styles.centerHomeButton} >
              <Text style={styles.text}>Home</Text>
            </View>
            <View style={styles.rightRentParkingButton} >
              <Text style={styles.text}>Rent Parking</Text>
            </View>
          </View>

        </View>
        
        <HeaderBar navigation={navigation} title="Home"/>
      </ImageBackground>
  );
}