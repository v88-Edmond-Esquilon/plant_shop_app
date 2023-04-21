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
    footer_cart_slider:{
        width: "100%",
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: "row",
        justifyContent:"space-between",
    },
    footer_rounded_container_left:{
        backgroundColor: COLORS.primary,
        width: 140,
        height: 130,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 10,
    },
    middle_notch: {
        backgroundColor: COLORS.primary,
        width: 90,
        height: 70,
        marginTop: 40,
    },
    footer_rounded_container_right: {
        backgroundColor: COLORS.primary,
        width: 140,
        height: 130,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 50,
    }
});