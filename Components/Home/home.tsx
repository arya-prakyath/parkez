import React, { useEffect, useState } from "react";
import {
  BackHandler,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  ToastAndroid,
} from "react-native";
import { getCache, setCache } from "../../Models/getSetCache";
import QRCode from 'react-native-qrcode-svg';
import Spinner from "../../Utils/spinner";
import getFomattedDateTime from "../../Utils/dateTimeFormatter";
import styles from "./homeStyle";

interface vehicleType {
  vehiclePlateNumber: string;
  vehicleName: string;
  vehicleType: string;
  phoneNumber: string;
}

interface bookedSpotType {
  spotName: string;
  spotAddress: string;
  vehiclesToBook: vehicleType[];
  spotContact: string;
  fromDateTime: string;
  toDateTime: string;
  spotEntryTime: Date;
  spotExitTime: Date;
  payment: boolean;
  duration: string;
  cost: string;
}

interface homeProps {
  onClickBackButton: (toScreen: string) => boolean;
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setCurrentBlock: React.Dispatch<React.SetStateAction<string>>
}

export default function Home({ onClickBackButton, setScreen, setTitle, setCurrentBlock }: homeProps) {
  BackHandler.addEventListener("hardwareBackPress", () => onClickBackButton("Home"));
  const [loading, setLoading] = useState(true);
  const [bookingProgress, setBookingprogress] = useState('');
  const [bookedSpot, setBookedSpot] = useState<bookedSpotType>();

  const [timer, setTimer] = useState("");

  // Use below line to reset HOME
  // setCache("bookingProgressCache", '0');

  useEffect(() => {
    getCache("bookingProgressCache")?.then(valuePromise => valuePromise).then(value => {
      if (value) {
        setBookingprogress(value);
        getCache("bookedSpot")?.then(valuePromise => valuePromise).then(value => {
          value && setBookedSpot(JSON.parse(value));
        })
      }
      else {
        setBookingprogress('0');
      }
    })
    setLoading(false);
  }, []);


  if (loading || bookingProgress.length === 0) {
    return (
      <View style={styles.container}>
        <View style={styles.bookedContainer}>
          <Spinner />
        </View>
      </View>
    )
  }

  const getQrValue = (qrIndex: number): string => {
    if (bookedSpot && qrIndex === 1) {
      let value = "";
      value += bookedSpot.spotName + '|';
      value += new Date(bookedSpot.fromDateTime) + '|';
      value += new Date(bookedSpot.toDateTime) + '|';
      let vehicleLists = "";
      bookedSpot.vehiclesToBook.map((vehicle, index) => {
        vehicleLists += `Vehicle ${index + 1}-${vehicle.vehiclePlateNumber}-${vehicle.vehicleType}-${vehicle.phoneNumber},`;
      })
      value += vehicleLists;
      return value;
    }

    if (bookedSpot && qrIndex === 2) {
      let value = getQrValue(1);
      value += new Date(bookedSpot.spotEntryTime) + '|';
      value += new Date(bookedSpot.spotExitTime) + '|';
      value += bookedSpot.cost + "|";
      value += bookedSpot.duration;
      return value;
    }

    return "No Value";
  }

  if (bookedSpot && bookingProgress === '2') {
    setInterval(() => {
      let millisec_diff = (new Date().getTime() - new Date(bookedSpot.spotEntryTime).getTime());
      let hh: (string | number) = Math.floor(millisec_diff / 1000 / 60 / 60)
      millisec_diff -= hh * 1000 * 60 * 60;

      let mm: (string | number) = Math.floor(millisec_diff / 1000 / 60)
      millisec_diff -= mm * 1000 * 60;

      let ss: (string | number) = Math.floor(millisec_diff / 1000)
      millisec_diff -= ss * 1000;

      setTimer(`${hh < 10 ? `0${hh}` : hh} : ${mm < 10 ? `0${mm}` : mm} : ${ss < 10 ? `0${ss}` : ss}`);
    }, 1000);
  }

  const getTimeAndCost = () => {
    if (bookedSpot) {
      let duration = "";
      let cost = 0;

      let millisec_diff = (new Date(bookedSpot.spotExitTime).getTime() - new Date(bookedSpot.spotEntryTime).getTime());
      let hh: (string | number) = Math.floor(millisec_diff / 1000 / 60 / 60)
      millisec_diff -= hh * 1000 * 60 * 60;

      let mm: (string | number) = Math.floor(millisec_diff / 1000 / 60)
      millisec_diff -= mm * 1000 * 60;

      if (hh === 0) {
        cost = 10;
      }
      else {
        mm > 0 ? (cost = 10 * (hh + 1)) : (cost = 10 * hh);
      }
      duration = `${hh < 10 ? `0${hh}` : hh} Hours, ${mm < 10 ? `0${mm}` : mm} Minutes`;

      bookedSpot.cost = cost.toString();
      bookedSpot.duration = duration;

      return (`₹ ${cost}\nFor - ${duration}`)
    }
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
              setCurrentBlock("findSpot");
            }}>
              <Text style={styles.addSpotButtonText}>Find and Book a Spot</Text>
            </TouchableOpacity>

            <View style={styles.doubleButtonsContainer}>
              <TouchableOpacity style={[styles.doubleButtons, styles.myApartmentButton]} onPress={() => {
                setTitle("My place");
                setScreen("MyPlace");
                setCurrentBlock("myPlace");
              }}>
                <Text style={styles.addSpotButtonText}>My Place</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.doubleButtons, styles.myWalletButton]} onPress={() => {
                setTitle("Wallet");
                setScreen("Wallet");
                setCurrentBlock("wallet");
              }}>
                <Text style={styles.addSpotButtonText}>Wallet</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      }

      {
        bookingProgress === '1' && (
          <View style={styles.bookedContainer}>
            <View style={styles.bookedDataContainer}>
              <Text style={styles.bookedHeader}>Parking Spot Booked</Text>
              <View style={styles.seperator}></View>

              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.bookedNameAndAddressContainer}>
                  <Text style={styles.bookedName}>{bookedSpot?.spotName}</Text>
                  <Text style={styles.bookedAddress}>{bookedSpot?.spotAddress}</Text>
                </View>
                <View style={styles.seperator}></View>

                <Text style={styles.qrCodeHeader}>Display the QR Code on Spot Entry</Text>
                <View style={styles.qrCodeContainer}>
                  <QRCode
                    value={getQrValue(1)}
                    logo={require("../../assets/qrCodeIcon.png")}
                    logoSize={60}
                    backgroundColor={"#fff"}
                    color={"#333333"}
                    size={170}
                  />
                </View>
                <View style={styles.seperator}></View>

                <View style={styles.bookedItemContainer}>
                  <Text style={styles.bookedItemHead}>Spot Available From</Text>
                  <Text style={styles.bookedItemData}>{bookedSpot?.fromDateTime && getFomattedDateTime(new Date(bookedSpot?.fromDateTime).toString())}</Text>
                </View>
                <View style={styles.bookedItemContainer}>
                  <Text style={styles.bookedItemHead}>Spot Available To</Text>
                  <Text style={styles.bookedItemData}>{bookedSpot?.toDateTime && getFomattedDateTime(new Date(bookedSpot?.toDateTime).toString())}</Text>
                </View>
                <View style={styles.seperator}></View>

                <View style={styles.bookedItemContainer}>
                  <Text style={styles.bookedItemHead}>Spot Contact</Text>
                  <Text style={styles.bookedItemData}>{`${bookedSpot?.spotContact.substring(0, 5)} ${bookedSpot?.spotContact.substring(5,)}`}</Text>
                </View>
                <View style={styles.seperator}></View>
              </ScrollView>
            </View>

            <View style={styles.proceedButtonContainer}>
              <TouchableOpacity style={styles.proceedButton} onPress={() => {
                bookedSpot && (bookedSpot.spotEntryTime = new Date())
                setCache("bookedSpot", JSON.stringify(bookedSpot));
                setCache("bookingProgressCache", '2');
                setBookingprogress('2');
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
        bookingProgress === '2' && (
          <View style={styles.bookedContainer}>
            <Text style={styles.bookedHeaderLg}>In the Spot!</Text>
            <View style={styles.seperator}></View>

            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.bookedNameAndAddressContainer}>
                <Text style={styles.bookedItemDataLg}>{bookedSpot?.spotName}</Text>
                <Text style={styles.bookedItemHeadLg}>{bookedSpot?.spotAddress}</Text>
              </View>
              <View style={styles.seperator}></View>

              <View style={styles.bookedItemContainer}>
                <Text style={styles.bookedItemHeadLg}>Spot Entered On</Text>
                <Text style={styles.bookedItemDataLg}>{bookedSpot?.spotEntryTime && getFomattedDateTime(new Date(bookedSpot?.spotEntryTime).toString())}</Text>
              </View>

              <View style={styles.bookedItemContainer}>
                <Text style={styles.bookedItemHeadLg}>Spot Available Till</Text>
                <Text style={styles.bookedItemDataLg}>{bookedSpot?.toDateTime && getFomattedDateTime(new Date(bookedSpot?.toDateTime).toString())}</Text>
              </View>
              <View style={styles.seperator}></View>

              <View style={styles.timerContainer}>
                <Text style={styles.timerHeader}>Time Since Spot Entry</Text>
                {timer === "" && <Text style={styles.timer}><Spinner size="small" /></Text>}
                <Text style={styles.timer}>{timer}</Text>
              </View>
              <View style={styles.seperator}></View>

              <View style={styles.bookedItemContainer}>
                <Text style={styles.bookedItemHeadLg}>Spot Contact</Text>
                <Text style={styles.bookedItemDataLg}>{`${bookedSpot?.spotContact.substring(0, 5)} ${bookedSpot?.spotContact.substring(5,)}`}</Text>
              </View>
              <View style={styles.seperator}></View>
            </ScrollView>

            <View style={styles.proceedButtonContainer}>
              <TouchableOpacity style={styles.proceedButton} onPress={() => {
                if (bookedSpot) {
                  bookedSpot.spotExitTime = new Date();
                  bookedSpot.payment = false;
                }
                setCache("bookedSpot", JSON.stringify(bookedSpot));
                setCache("bookingProgressCache", '3');
                setBookingprogress('3');
              }}>
                <Text style={styles.exitButtonText}>Exit</Text>
                <Image
                  source={require("../../assets/buttons/nextButton.png")}
                  style={styles.exitButtonLogo}
                />
              </TouchableOpacity>
            </View>
          </View>
        )
      }

      {
        bookingProgress === '3' && (
          <View style={styles.bookedContainer}>
            <Text style={styles.bookedHeader}>Pay to generate Exit QR Code</Text>
            <View style={styles.seperator}></View>

            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.bookedNameAndAddressContainer}>
                <Text style={styles.bookedItemDataLg}>{bookedSpot?.spotName}</Text>
                <Text style={styles.bookedAddress}>{bookedSpot?.spotAddress}</Text>
              </View>
              <View style={styles.seperator}></View>

              <View style={styles.bookedItemContainer}>
                <Text style={styles.bookedItemHeadLg}>Spot Entry On</Text>
                <Text style={styles.bookedItemDataLg}>{bookedSpot?.spotEntryTime && getFomattedDateTime(new Date(bookedSpot?.spotEntryTime).toString())}</Text>
              </View>

              <View style={styles.bookedItemContainer}>
                <Text style={styles.bookedItemHeadLg}>Spot Exit Till</Text>
                <Text style={styles.bookedItemDataLg}>{bookedSpot?.spotExitTime && getFomattedDateTime(new Date(bookedSpot?.spotExitTime).toString())}</Text>
              </View>
              <View style={styles.seperator}></View>

              <View style={styles.bookedItemContainer}>
                <Text style={styles.bookedItemHeadLg}>To be Paid</Text>
                <Text style={styles.bookedItemDataLg}>{getTimeAndCost()}</Text>
              </View>
              <View style={styles.seperator}></View>

              <View style={styles.bookedItemContainer}>
                <Text style={styles.bookedItemHeadLg}>Spot Contact</Text>
                <Text style={styles.bookedItemDataLg}>{`${bookedSpot?.spotContact.substring(0, 5)} ${bookedSpot?.spotContact.substring(5,)}`}</Text>
              </View>
              <View style={styles.seperator}></View>
            </ScrollView>

            <View style={styles.proceedButtonContainer}>
              <TouchableOpacity style={styles.proceedButton} onPress={() => {
                setBookedSpot(bookedSpot);
                setCache("bookingProgressCache", '4');
                setBookingprogress('4');
              }}>
                <Text style={[styles.proceedButtonText, { letterSpacing: 1.5 }]}>Pay Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      }

      {
        bookingProgress === '4' && (
          <View style={styles.bookedContainer}>
            <View style={styles.bookedDataContainer}>
              <Text style={styles.bookedHeader}>Payment Pending</Text>
              <View style={styles.seperator}></View>

              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.bookedNameAndAddressContainer}>
                  <Text style={styles.bookedName}>{bookedSpot?.spotName}</Text>
                  <Text style={styles.bookedAddress}>{bookedSpot?.spotAddress}</Text>
                </View>
                <View style={styles.seperator}></View>

                <View style={styles.paymentButtonContainer}>
                  <Text style={styles.qrCodeHeader}>Pay using any of the below methods</Text>
                  <TouchableOpacity style={styles.paymentButton} onPress={() => {
                    if (bookedSpot) {
                      bookedSpot.payment = true;
                      setCache("bookedSpot", JSON.stringify(bookedSpot));
                      setCache("bookingProgressCache", '5');
                      setBookingprogress('5');
                    }
                  }}>
                    <Text style={styles.paymentButtonText}>Cash</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.paymentButton} onPress={() => {
                    if (bookedSpot) {
                      bookedSpot.payment = true;
                      setCache("bookedSpot", JSON.stringify(bookedSpot));
                      setCache("bookingProgressCache", '5');
                      setBookingprogress('5');
                    }
                  }}>
                    <Text style={styles.paymentButtonText}>PhonePe</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.paymentButton} onPress={() => {
                    if (bookedSpot) {
                      bookedSpot.payment = true;
                      setCache("bookedSpot", JSON.stringify(bookedSpot));
                      setCache("bookingProgressCache", '5');
                      setBookingprogress('5');
                    }
                  }}>
                    <Text style={styles.paymentButtonText}>Gpay</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.seperator}></View>

                <View style={styles.bookedItemContainer}>
                  <Text style={styles.bookedItemHeadLg}>To be Paid</Text>
                  <Text style={styles.bookedItemDataLg}>{`₹ ${bookedSpot?.cost}\nFor - ${bookedSpot?.duration}`}</Text>
                </View>
                <View style={styles.seperator}></View>

                <View style={styles.bookedItemContainer}>
                  <Text style={styles.bookedItemHead}>Spot Entry From</Text>
                  <Text style={styles.bookedItemData}>{bookedSpot?.fromDateTime && getFomattedDateTime(new Date(bookedSpot?.fromDateTime).toString())}</Text>
                </View>
                <View style={styles.bookedItemContainer}>
                  <Text style={styles.bookedItemHead}>Spot Exit On</Text>
                  <Text style={styles.bookedItemData}>{bookedSpot?.toDateTime && getFomattedDateTime(new Date(bookedSpot?.toDateTime).toString())}</Text>
                </View>
                <View style={styles.seperator}></View>

                <View style={styles.bookedItemContainer}>
                  <Text style={styles.bookedItemHead}>Spot Contact</Text>
                  <Text style={styles.bookedItemData}>{`${bookedSpot?.spotContact.substring(0, 5)} ${bookedSpot?.spotContact.substring(5,)}`}</Text>
                </View>
                <View style={styles.seperator}></View>
              </ScrollView>
            </View>
          </View>
        )
      }

      {bookingProgress === '5' && (
        <View style={styles.bookedContainer}>
          <Text style={styles.bookedHeader}>Display the QR Code to exit the Spot</Text>
          <View style={styles.seperator}></View>

          <View style={styles.qrCodeContainer}>
            <QRCode
              value={getQrValue(2)}
              logo={require("../../assets/qrCodeIcon.png")}
              logoSize={60}
              backgroundColor={"#fff"}
              color={"#333333"}
              size={170}
            />
          </View>
          <View style={styles.seperator}></View>

          <View style={styles.proceedButtonContainer}>
            <TouchableOpacity style={styles.proceedButton} onPress={() => {
              setCache("bookingProgressCache", '0');
              setBookingprogress('0');
              if (bookedSpot) {
                bookedSpot.spotName = "";
                bookedSpot.spotAddress = "";
                bookedSpot.vehiclesToBook = [];
                bookedSpot.spotContact = "";
                bookedSpot.fromDateTime = "";
                bookedSpot.toDateTime = "";
                bookedSpot.spotEntryTime = new Date("0/0/0 0:0:0");
                bookedSpot.spotExitTime = new Date("0/0/0 0:0:0");
                bookedSpot.payment = false;
                bookedSpot.cost = "";
                bookedSpot.duration = "";
                setBookedSpot(bookedSpot);
              }
            }}>
              <Text style={[styles.proceedButtonText, { letterSpacing: 1.5 }]}>Exit</Text>
              <Image
                source={require("../../assets/buttons/nextButton.png")}
                style={styles.proceedButtonLogo}
              />
            </TouchableOpacity>
          </View>
        </View >
      )}
    </View >
  );
}