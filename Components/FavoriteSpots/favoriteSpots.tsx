import React, { useState } from "react";
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import FindSpotList from "../FindSpot/findSpotList";
import spotsListData from "../../Models/spotsListData";
import styles from "./favoriteSpotsStyle";
import NoResults from "../../Utils/NoResults";
import FindSpotDetails from "../FindSpot/findSpotDetails";

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
  spotsTotalCount: number;
  spotsAvailableCount: number;
  spotsConsumedCount: number;
  extraNotes?: string | undefined;
  longitute: string;
  latitude: string;
  isFavorite: boolean;
}

interface favoriteSpotsProps {
  onClickBackButton: (toScreen: string) => boolean;
}

export default function favoriteSpots({
  onClickBackButton,
}: favoriteSpotsProps) {
  const [searchText, setSearchText] = useState("");

  const [openSpotDetails, setOpenSpotDetails] = useState(false);
  const [selectedSpot, setSelectedSpot] = useState<spotItemType>();

  if (openSpotDetails)
    return (
      <FindSpotDetails
        selectedSpot={selectedSpot}
        setOpenSpotDetails={setOpenSpotDetails}
        setSelectedSpot={setSelectedSpot}
        onClickConfirm={() => onClickBackButton("Home")}
      />
    );

  let spotsList: (spotItemType | undefined)[] = spotsListData.filter((spot) =>
    spot.isFavorite ? true : false
  );
  if (searchText.length > 0) {
    spotsList = spotsList.filter((spot) => {
      if (
        spot?.name.toLowerCase().includes(searchText.toLowerCase()) ||
        spot?.address.toLowerCase().includes(searchText.toLowerCase())
      )
        return true;
    });
  }

  BackHandler.addEventListener("hardwareBackPress", () =>
    onClickBackButton("Home")
  );
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          allowFontScaling={false}
          style={styles.searchText}
          onChangeText={(value) => {
            setSearchText(value);
          }}
          value={searchText}
          placeholder="Search Favorite Location"
          placeholderTextColor={"#666"}
        />
        {searchText.length === 0 ? (
          <Image
            source={require("../../assets/buttons/searchIcon.png")}
            style={styles.searchButton}
          />
        ) : (
          <TouchableOpacity onPress={() => setSearchText("")}>
            <Image
              style={styles.cancelButton}
              source={require("../../assets/buttons/cancelButtonDark.png")}
            />
          </TouchableOpacity>
        )}
      </View>

      {spotsList.length > 0 ? (
        <FindSpotList
          spotsList={spotsList}
          setOpenSpotDetails={setOpenSpotDetails}
          setSelectedSpot={setSelectedSpot}
        />
      ) : (
        <NoResults />
      )}
    </View>
  );
}
