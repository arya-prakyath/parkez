import { Alert } from "react-native";

interface alertBoxProps {
    title: string,
    message: string,
    buttonText: string,
    onPressButton: () => void,
}

const showAlert = ({ 
    title, 
    message, 
    buttonText,
    onPressButton 
}: alertBoxProps) => {
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