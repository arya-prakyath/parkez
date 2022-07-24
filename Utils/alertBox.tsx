import { Alert } from "react-native";

interface alertBoxProps {
    title: string,
    message: string,
    buttonText: string,
    onPressButton: () => void,
    cancelButtonText?: string,
    onPressCancelButton?: () => void,
}

const showAlert = ({
    title,
    message,
    buttonText,
    onPressButton,
    cancelButtonText,
    onPressCancelButton,
}: alertBoxProps) => {
    cancelButtonText ?
        Alert.alert(
            title,
            message,
            [
                {
                    text: buttonText,
                    onPress: onPressButton,
                    style: "default",
                },
                {
                    text: cancelButtonText,
                    onPress: onPressCancelButton,
                    style: "cancel",
                },
            ],
            {
                cancelable: true,
            }
        )
        :
        Alert.alert(
            title,
            message,
            [
                {
                    text: buttonText,
                    onPress: onPressButton,
                    style: "cancel",
                },
            ],
            {
                cancelable: true,
            }
        )
}

export default showAlert;