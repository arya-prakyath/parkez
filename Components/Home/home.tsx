import React from "react";
import {
  BackHandler,
  Text,
  View,
} from "react-native";
import styles from "./homeStyle";

interface homeProps{
  onClickBackButton: (toScreen: string) => boolean;
}

export default function Home({onClickBackButton}: homeProps) {
  BackHandler.addEventListener("hardwareBackPress", () => onClickBackButton("Home"));
  return (
    <View style={styles.container}>
      <View style={styles.appGuide} >
        <Text allowFontScaling={false} style={styles.text}>App Guide</Text>
      </View>

      <View style={styles.buttonsContainer} >
        <View style={styles.topButtonContainer} >
          <View style={styles.bookParkingButton} >
            <Text allowFontScaling={false} style={styles.text}>Book Parking</Text>
          </View>
          <View style={styles.walletButton} >
            <Text allowFontScaling={false} style={styles.text}>Wallet</Text>
          </View>
        </View>

        <View style={styles.centerButtonContainer} >
          <View style={styles.leftCreateParkingButton} >
            <Text allowFontScaling={false} style={styles.text}>Create Parking</Text>
          </View>
          <View style={styles.centerHomeButton} >
            <Text allowFontScaling={false} style={styles.text}>Home</Text>
          </View>
          <View style={styles.rightRentParkingButton} >
            <Text allowFontScaling={false} style={styles.text}>Rent Parking</Text>
          </View>
        </View>
      </View>
    </View>
  );
}