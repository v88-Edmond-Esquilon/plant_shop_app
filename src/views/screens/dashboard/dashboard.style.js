import { StyleSheet, Platform } from "react-native";
import { COLORS, FONT } from "../../../_constants/constants.styles";

export const dashboard_styles = StyleSheet.create({
    dashboard_container: {
        backgroundColor: COLORS.secondary,
        paddingTop: 25,
        flexDirection: "column",
    },
    chips_scroll_container: {
        paddingHorizontal: 24,
    },
    collections_text: {
        fontFamily: FONT.satoshi_regular,
        fontSize: 24,
        paddingLeft: 24,
        paddingVertical: Platform.OS === "ios"? 19 : 11,
    },
    plant_card_carousel_view:{
        paddingBottom: 25,
    },

});