import { Platform, StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === "ios" ? 50 : 50
    }
})