import React, { useState } from "react";
import {
  View,
  BackHandler,
  ToastAndroid,
} from "react-native";
import AddVehicleInfo from "./addVehicleInfo";
import AddDateAndTime from "./addDateTime";``
import Confirmation from "./confirmation";
import styles from "./findSpotDetailsStyle";

interface spotCostType {
  id: number;
  cost: string;
  interval: string;
}

interface spotItemType {
  id: string;
  name: string;
  address: string;
  cost: spotCostType[];
  contact: string;
  spotsTotalCount: number;
  spotsAvailableCount: number;
  spotsConsumedCount: number;
  extraNotes?: string | undefined;
  longitute: string;
  latitude: string;
  isFavorite: boolean;
}

interface vehicleType {
  vehiclePlateNumber: string;
  vehicleName: string;
  vehicleType: string;
  phoneNumber: string;
}

interface findSpotDetailsProps {
  selectedSpot: spotItemType | undefined;
  setSelectedSpot: React.Dispatch<
    React.SetStateAction<spotItemType | undefined>
  >;
  setOpenSpotDetails: React.Dispatch<React.SetStateAction<boolean>>;
  onClickConfirm: () => {};
}

export default function FindSpotDetails({
  selectedSpot,
  setSelectedSpot,
  setOpenSpotDetails,
  onClickConfirm,
}: findSpotDetailsProps) {
  const [progressTracker, setProgressTracker] = useState(1);

  const [fromDateTime, setFromDateTime] = useState<Date>();
  const [toDateTime, setToDateTime] = useState<Date>();

  const [vehiclesToBook, setVehiclesToBook] = useState<vehicleType[]>([{
    vehiclePlateNumber: "",
    vehicleName: "",
    vehicleType: "",
    phoneNumber: "",
  }]);

  BackHandler.addEventListener("hardwareBackPress", () => {
    if (progressTracker === 1) {
      setOpenSpotDetails(false);
      setSelectedSpot(undefined);
    } else {
      setProgressTracker(progressTracker - 1);
      return true;
    }
  });

  return (
    <View style={styles.container}>
      {progressTracker === 1 && (
        <AddVehicleInfo
          setProgressTracker={setProgressTracker}
          selectedSpot={selectedSpot}
          setSelectedSpot={setSelectedSpot}
          setOpenSpotDetails={setOpenSpotDetails}
          setVehiclesToBook={setVehiclesToBook}
          vehiclesToBook={vehiclesToBook}
        />
      )}

      {progressTracker === 2 && (
        <AddDateAndTime
          spotName={selectedSpot ? selectedSpot.name : ""}
          spotsTotalCount={selectedSpot ? selectedSpot.spotsTotalCount : 0}
          spotsAvailableCount={
            selectedSpot ? selectedSpot.spotsAvailableCount : 0
          }
          spotsConsumedCount={
            selectedSpot ? selectedSpot.spotsConsumedCount : 0
          }
          setProgressTracker={setProgressTracker}
          fromDateTime={fromDateTime}
          setFromDateTime={setFromDateTime}
          toDateTime={toDateTime}
          setToDateTime={setToDateTime}
        />
      )}

      {progressTracker === 3 && (
        <Confirmation
          setProgressTracker={setProgressTracker}
          selectedSpot={selectedSpot}
          vehiclesToBook={vehiclesToBook}
          fromDateTime={fromDateTime ?? new Date()}
          toDateTime={toDateTime ?? new Date()}
          onClickConfirm={onClickConfirm}
        />
      )}
    </View>
  );
}
