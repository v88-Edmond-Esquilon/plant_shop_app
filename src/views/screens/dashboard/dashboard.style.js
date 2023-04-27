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
    footer_notch_top: {
        backgroundColor: COLORS.primary,
        borderRadius: 24,
        height: 4,
        position: "absolute",
        left: Platform.OS === "ios"? "42.5%" : "42%",
        top: Platform.OS === "ios"? "3%" : "4%",
        width: 60,
    },
    footer_notch_bottom:{
        backgroundColor: COLORS.black,
        borderRadius: 24,
        height: 4,
        position: "absolute",
        bottom: Platform.OS === "ios"? "-3%" : "-6%",
        width: 60,
    },
    footer: {
        alignItems: "center",
        alignSelf: "flex-start",
        height: Platform.OS === "ios"? 310 : 220,
        width: "100%"
    },
    cart_header: {
        width: "100%",
        marginTop: Platform.OS === "ios" ?  100 : 0,
        height: 120,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 24,
        justifyContent: "space-between"
    },
    cart_header_counter: {
        backgroundColor: COLORS.primary,
        width: 48,
        height: 48,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 200,
    }
});