import React from "react";
import {
  Text,
  View,
} from "react-native";
import styles from "./homeStyle";

export default function Home() {
  return (
    <View style={styles.container}>
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
    </View>
  );
}