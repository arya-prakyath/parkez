import React, { useEffect, useState } from "react";
import {
  BackHandler,
  Text,
  TouchableOpacity,
  View,
  Image,
  ToastAndroid,
  ScrollView,
} from "react-native";
import { getCache, setCache } from "../../Models/getSetCache";
import QRCode from 'react-native-qrcode-svg';
import styles from "./homeStyle";
import Spinner from "../../Utils/spinner";
import getFormattedTime from "../../Utils/timeFormatter";

interface bookedSpotType {
  spotName: string;
  spotAddress: string;
  vehicleNumber: string;
  vehicleType: string;
  ownersPhone: string;
  fromDateTime: string;
  toDateTime: string;
}

interface homeProps {
  onClickBackButton: (toScreen: string) => boolean;
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

export default function Home({ onClickBackButton, setScreen, setTitle }: homeProps) {
  BackHandler.addEventListener("hardwareBackPress", () => onClickBackButton("Home"));
  const [loading, setLoading] = useState(true);
  const [bookingProgress, setBookingprogress] = useState('0');
  const [bookedSpot, setBookedSpot] = useState<bookedSpotType>();

  useEffect(() => {
    getCache("bookingProgressCache")?.then(valuePromise => valuePromise).then(value => {
      if (value) {
        setBookingprogress(value);
        getCache("bookedSpot")?.then(valuePromise => valuePromise).then(value => {
          value && setBookedSpot(JSON.parse(value));
        });
      }
      setLoading(false);
    });
  }, []);


  if (loading) {
    return (
      <View style={styles.container}>
        <View style={styles.bookedContainer}>
          <Spinner />
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {
        bookingProgress === '0' && (
          <View style={styles.addSpotContainer}>
            <View style={styles.logoConatiner}>
              <Image
                source={require("../../assets/logo_car.png")}
                style={styles.logo}
              />
              <Image
                source={require("../../assets/logo_text.png")}
                style={styles.logoText}
              />
            </View>

            <Text style={styles.addSpotText}>{"Find And Book a Spot Now! For Hassel-Free Parking!"}</Text>

            <TouchableOpacity style={styles.addSpotButton} onPress={() => {
              setTitle("Find Spot");
              setScreen("FindSpot");
            }}>
              <Text style={styles.addSpotButtonText}>Find and Book a Spot</Text>
            </TouchableOpacity>

            <View style={styles.doubleButtonsContainer}>
              <TouchableOpacity style={[styles.doubleButtons, styles.myWalletButton]} onPress={() => {
                setTitle("Wallet");
                setScreen("Wallet");
              }}>
                <Text style={styles.addSpotButtonText}>Wallet</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.doubleButtons, styles.myVehiclesButton]} onPress={() => {
                setTitle("My Vehicles");
                setScreen("MyVehicles");
              }}>
                <Text style={styles.addSpotButtonText}>My Vehicles</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      }

      {
        bookingProgress === '1' && (
          <View style={styles.bookedContainer}>
            <View style={styles.bookedDataContainer}>
              <Text style={styles.bookedHeader}>You have booked the below parking Spot</Text>
              <View style={styles.seperator}></View>

              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.bookedNameAndAddressContainer}>
                  <Text style={styles.bookedName}>{bookedSpot?.spotName}</Text>
                  <Text style={styles.bookedAddress}>{bookedSpot?.spotAddress}</Text>
                </View>
                <View style={styles.seperator}></View>

                <View style={styles.bookedItemContainer}>
                  <Text style={styles.bookedItemHead}>Vehicle's Number</Text>
                  <Text style={styles.bookedItemData}>{bookedSpot?.vehicleNumber}</Text>
                </View>
                <View style={styles.bookedItemContainer}>
                  <Text style={styles.bookedItemHead}>Vehicle's Type</Text>
                  <Text style={styles.bookedItemData}>{bookedSpot?.vehicleType}</Text>
                </View>
                <View style={styles.seperator}></View>

                <View style={styles.bookedItemContainer}>
                  <Text style={styles.bookedItemHead}>Spot Available From</Text>
                  <Text style={styles.bookedItemData}>{`${bookedSpot?.fromDateTime.split('T')[0]}\n${getFormattedTime(bookedSpot?.fromDateTime.split('T')[1].split('.')[0])}`}</Text>
                </View>
                <View style={styles.bookedItemContainer}>
                  <Text style={styles.bookedItemHead}>Spot Available To</Text>
                  <Text style={styles.bookedItemData}>{`${bookedSpot?.toDateTime.split('T')[0]}\n${getFormattedTime(bookedSpot?.toDateTime.split('T')[1].split('.')[0])}`}</Text>
                </View>
                <View style={styles.seperator}></View>

                <View style={styles.bookedItemContainer}>
                  <Text style={styles.bookedItemHead}>Spot Owner's Phone</Text>
                  <Text style={styles.bookedItemData}>{bookedSpot?.ownersPhone}</Text>
                </View>
              </ScrollView>
              <View style={styles.seperator}></View>
            </View>

            <View style={styles.proceedButtonContainer}>
              <TouchableOpacity style={styles.proceedButton} onPress={() => {
                setCache("bookingProgressCache", '2');
                setBookingprogress('2');
              }}>
                <Text style={styles.proceedButtonText}>Arrived</Text>
                <Image
                  source={require("../../assets/buttons/nextButton.png")}
                  style={styles.proceedButtonLogo}
                />
              </TouchableOpacity>
            </View>
          </View>
        )
      }

      {
        bookingProgress === '2' && (
          <View style={styles.bookedContainer}>
            <Text style={styles.bookedHeader}>Display the below QR Code to the Spot Incharge</Text>
            <View style={styles.seperator}></View>
            <View style={styles.qrCodeContainer}>
              <QRCode
                value={`${bookedSpot?.spotName} ${bookedSpot?.vehicleNumber} ${bookedSpot?.fromDateTime} ${bookedSpot?.toDateTime}`}
                logo={require("../../assets/icon.png")}
                logoSize={80}
                backgroundColor={"#fff"}
                color={"#333333"}
                size={250}
              />
            </View>
            <View style={styles.proceedButtonContainer}>
              <TouchableOpacity style={styles.proceedButton} onPress={() => {
                setCache("bookingProgressCache", '3');
                setBookingprogress('3');
              }}>
                <Text style={styles.proceedButtonText}>QR Scanned</Text>
                <Image
                  source={require("../../assets/buttons/nextButton.png")}
                  style={styles.proceedButtonLogo}
                />
              </TouchableOpacity>
            </View>
          </View>
        )
      }

      {
        bookingProgress === '3' && (
          <View style={styles.bookedContainer}>
            <Text style={styles.bookedHeader}>{`Arrived! You have the Spot till ${bookedSpot?.toDateTime.split('T')[0]} ${getFormattedTime(bookedSpot?.toDateTime.split('T')[1].split('.')[0])}`}</Text>
            <View style={styles.seperator}></View>

            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.bookedNameAndAddressContainer}>
                <Text style={styles.bookedName}>{bookedSpot?.spotName}</Text>
                <Text style={styles.bookedAddress}>{bookedSpot?.spotAddress}</Text>
              </View>
              <View style={styles.seperator}></View>

              <View style={styles.bookedItemContainer}>
                <Text style={styles.bookedItemHead}>Vehicle's Number</Text>
                <Text style={styles.bookedItemData}>{bookedSpot?.vehicleNumber}</Text>
              </View>
              <View style={styles.seperator}></View>

              <View style={styles.bookedItemContainer}>
                <Text style={styles.bookedItemHead}>Spot Entry On</Text>
                <Text style={styles.bookedItemData}>{`${bookedSpot?.fromDateTime.split('T')[0]} ${getFormattedTime(bookedSpot?.fromDateTime.split('T')[1].split('.')[0])}`}</Text>
              </View>
              <View style={styles.seperator}></View>

              <View style={styles.bookedItemContainer}>
                <Text style={styles.bookedItemHead}>Spot Owner's Phone</Text>
                <Text style={styles.bookedItemData}>{bookedSpot?.ownersPhone}</Text>
              </View>
            </ScrollView>

            <View style={styles.proceedButtonContainer}>
              <TouchableOpacity style={styles.proceedButton} onPress={() => {
                setCache("bookingProgressCache", '4');
                setBookingprogress('4');
              }}>
                <Text style={[styles.proceedButtonText, { letterSpacing: 1.5 }]}>Exit to Pay</Text>
                <Image
                  source={require("../../assets/buttons/nextButton.png")}
                  style={styles.proceedButtonLogo}
                />
              </TouchableOpacity>
            </View>
          </View>
        )
      }

      {
        bookingProgress === '4' && (
          <View style={styles.bookedContainer}>
            <Text style={styles.bookedHeader}>Thank you for booking the Spot!</Text>
            <View style={styles.seperator}></View>

            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.bookedNameAndAddressContainer}>
                <Text style={styles.bookedName}>{bookedSpot?.spotName}</Text>
                <Text style={styles.bookedAddress}>{bookedSpot?.spotAddress}</Text>
              </View>
              <View style={styles.seperator}></View>

              <View style={styles.bookedItemContainer}>
                <Text style={styles.bookedItemHead}>Vehicle's Number</Text>
                <Text style={styles.bookedItemData}>{bookedSpot?.vehicleNumber}</Text>
              </View>
              <View style={styles.seperator}></View>

              <View style={styles.bookedItemContainer}>
                <Text style={styles.bookedItemHead}>Spot Entry On</Text>
                <Text style={styles.bookedItemData}>{`${bookedSpot?.fromDateTime.split('T')[0]} ${getFormattedTime(bookedSpot?.fromDateTime.split('T')[1].split('.')[0])}`}</Text>
              </View>
              <View style={styles.bookedItemContainer}>
                <Text style={styles.bookedItemHead}>Spot Exit On</Text>
                <Text style={styles.bookedItemData}>{`${bookedSpot?.toDateTime.split('T')[0]} ${getFormattedTime(bookedSpot?.toDateTime.split('T')[1].split('.')[0])}`}</Text>
              </View>
              <View style={styles.seperator}></View>

              <View style={styles.bookedItemContainer}>
                <Text style={styles.bookedItemHead}>Amount To Pay</Text>
                <Text style={styles.bookedItemData}>{"{Calculated Amount Here}"}</Text>
              </View>
            </ScrollView>

            <View style={styles.proceedButtonContainer}>
              <TouchableOpacity style={styles.proceedButton} onPress={() => {
                setCache("bookingProgressCache", '0');
                setBookingprogress('0');
                setScreen("Wallet");
                setTitle("Wallet");
              }}>
                <Text style={[styles.proceedButtonText, { letterSpacing: 1.5 }]}>Proceed To Pay</Text>
                <Image
                  source={require("../../assets/buttons/nextButton.png")}
                  style={styles.proceedButtonLogo}
                />
              </TouchableOpacity>
            </View>

          </View>
        )
      }
    </View>
  );
}