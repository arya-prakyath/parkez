import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./findSpotDetailsStyle";
import DateTimePickerModal from "react-native-modal-datetime-picker";

interface addDateTimeProps {
    spotName: string;
    spotsTotalCount: number;
    spotsAvailableCount: number;
    spotsConsumedCount: number;   
    setProgressTracker: React.Dispatch<React.SetStateAction<number>>;
    fromDateTime: Date | undefined;
    setFromDateTime: React.Dispatch<React.SetStateAction<Date | undefined>>;
    toDateTime: Date | undefined;
    setToDateTime: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

export default function AddDateAndTime({
    spotName,
    spotsTotalCount,
    spotsAvailableCount,
    spotsConsumedCount,
    setProgressTracker,
    fromDateTime,
    setFromDateTime,
    toDateTime,
    setToDateTime,
}: addDateTimeProps) {
    const today = new Date();
    const [isPickerVisible, setPickerVisibility] = useState(false);
    const [pickerType, setPickerType] = useState<"date" | "time">("date");
    const [toOrFrom, setToOrFrom] = useState<"to" | "from">("from");

    const [fromDate, setFromDate] = useState(fromDateTime ? `${fromDateTime.getDate()} / ${fromDateTime.getMonth() + 1} / ${fromDateTime.getFullYear()}` : `${today.getDate()} / ${today.getMonth() + 1} / ${today.getFullYear()}`);
    const [fromTime, setFromTime] = useState(fromDateTime ? `${fromDateTime.getHours()} : ${fromDateTime.getMinutes()}` : `${today.getHours()} : ${today.getMinutes()}`);

    const [toDate, setToDate] = useState(toDateTime ? `${toDateTime.getDate()} / ${toDateTime.getMonth() + 1} / ${toDateTime.getFullYear()}` : `${today.getDate()} / ${today.getMonth() + 1} / ${today.getFullYear()}`);
    const [toTime, setToTime] = useState(toDateTime ? `${toDateTime.getHours()} : ${toDateTime.getMinutes()}` : `${today.getHours()} : ${today.getMinutes()}`);


    const showDatePicker = (type: string) => {
        type.includes("Date") ?
            setPickerType("date") :
            setPickerType("time");

        type.includes("to") ?
            setToOrFrom("to") :
            setToOrFrom("from");

        setPickerVisibility(true);
    };

    const hideDatePicker = () => {
        setPickerVisibility(false);
    };

    const handleConfirm = (date: Date) => {
        pickerType === "date" ? (
            toOrFrom === "from" ? setFromDate(`${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`) : setToDate(`${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`)
        ) : (
            toOrFrom === "from" ? setFromTime(`${date.getHours()} : ${date.getMinutes()}`) : setToTime(`${date.getHours()} : ${date.getMinutes()}`)
        )
        hideDatePicker();
    }

    return (
        <View style={styles.detailsContainer}>
            <DateTimePickerModal
                isVisible={isPickerVisible}
                mode={pickerType}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            <View style={styles.spotNameAndAddressContainer}>
                <Text allowFontScaling={false} style={styles.spotName}>{spotName}</Text>
            </View>

            <View style={styles.spotCountContainer}>
                <View style={styles.spotCountItem}>
                    <View style={styles.spotCountBox}>
                        <Text allowFontScaling={false} style={styles.spotCountText}>{spotsTotalCount}</Text>
                    </View>
                    <Text allowFontScaling={false} style={styles.spotCountHeadText}>Total Number of Spots</Text>
                </View>

                <View style={styles.spotCountItem}>
                    <View style={[styles.spotCountBox, styles.availableBox]}>
                        <Text allowFontScaling={false} style={styles.spotCountTextDark}>{spotsAvailableCount}</Text>
                    </View>
                    <Text allowFontScaling={false} style={styles.spotCountHeadText}>Available{'\n'}Spots</Text>
                </View>

                <View style={styles.spotCountItem}>
                    <View style={[styles.spotCountBox, styles.consumedBox]}>
                        <Text allowFontScaling={false} style={styles.spotCountTextDark}>{spotsConsumedCount}</Text>
                    </View>
                    <Text allowFontScaling={false} style={styles.spotCountHeadText}>Consumed Spots</Text>
                </View>
            </View>
            <View style={styles.seperator}></View>

            <View style={styles.dateTimeContainer}>
                <Text allowFontScaling={false} style={styles.dateTimeHead}>Pick From Date and Time:</Text>
                <View style={styles.dateTimeItem}>
                    <TouchableOpacity style={[styles.dateTimeBox, styles.leftBox]} onPress={() => showDatePicker("fromDate")}>
                        <Text allowFontScaling={false} style={styles.dateTimeText}>{fromDate}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.dateTimeBox, styles.rightBox]} onPress={() => showDatePicker("fromTime")}>
                        <Text allowFontScaling={false} style={styles.dateTimeText}>{fromTime}</Text>
                    </TouchableOpacity>
                </View>

                <Text allowFontScaling={false} style={styles.dateTimeHead}>Pick To Date and Time:</Text>
                <View style={styles.dateTimeItem}>
                    <TouchableOpacity style={[styles.dateTimeBox, styles.leftBox]} onPress={() => showDatePicker("toDate")}>
                        <Text allowFontScaling={false} style={styles.dateTimeText}>{toDate}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.dateTimeBox, styles.rightBox]} onPress={() => showDatePicker("toTime")}>
                        <Text allowFontScaling={false} style={styles.dateTimeText}>{toTime}</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.nextBackButtonContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => setProgressTracker(1)}>
                    <Image
                        source={require("../../../assets/buttons/backButton.png")}
                        style={styles.backAndNextButtonIcon}
                    />
                    <Text allowFontScaling={false} style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.nextButton} onPress={() => {
                    setFromDateTime(new Date(
                        parseInt(fromDate.split('/')[2].trim()),
                        parseInt(fromDate.split('/')[1].trim()) - 1,
                        parseInt(fromDate.split('/')[0].trim()),
                        parseInt(fromTime.split(':')[0].trim()),
                        parseInt(fromTime.split(':')[1].trim()),
                    ));
                    setToDateTime(new Date(
                        parseInt(toDate.split('/')[2].trim()),
                        parseInt(toDate.split('/')[1].trim()) - 1,
                        parseInt(toDate.split('/')[0].trim()),
                        parseInt(toTime.split(':')[0].trim()),
                        parseInt(toTime.split(':')[1].trim()),
                    ));
                    setProgressTracker(3);
                }}>
                    <Text allowFontScaling={false} style={styles.nextButtonText}>Next</Text>
                    <Image
                        source={require("../../../assets/buttons/nextButton.png")}
                        style={styles.backAndNextButtonIcon}
                    />
                </TouchableOpacity>
            </View >
        </View>
    )
}