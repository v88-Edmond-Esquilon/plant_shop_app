import { StyleSheet, Platform } from "react-native";
import { COLORS, FONT } from "../../../_constants/constants.styles";

export const header_styles = StyleSheet.create({
    header_container: (screen) => ( {
        alignItems: "center", 
        backgroundColor: screen === "dashboard"? COLORS.secondary : COLORS.white,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        paddingTop: 25,
    }), 
    header_title: {
        flexWrap: "wrap",
        fontFamily: FONT.satoshi_regular,
        fontSize: 32,
        width: Platform.OS === "ios"? 280 : 250,
    },
    header_bold: {
        fontFamily: FONT.satoshi_semi_bold,
    },
    burger_btn: {
        alignItems: "center",
        borderColor: "#105D5C",
        borderRadius: 12,
        borderWidth: 1,
        height: 64,
        justifyContent: "center",
        width: 40,
    }
});