import { StyleSheet, Platform } from "react-native";
import { COLORS, FONT } from "../../../_constants/constants.styles";

export const cart_item_style = StyleSheet.create({
    cart_item_container: (is_last_item) => ({
        alignItems: "center",
        borderBottomColor: "#105D5C4D",
        borderBottomWidth: is_last_item? 0 : 1,
        flexDirection: "row",
        height: Platform.OS === "ios"? 140 : 117,
    }),
    image_container: {
        borderRadius: 100,
        height: 80,
        position: "absolute",
        width: 80,
    },
    item_image: {
        height: 70,
        left: -5,
        position: "absolute",
        resizeMode: "cover",
        width: 80,
    },
    item_text_name: {
        fontFamily: FONT.satoshi_bold,
        fontSize: Platform.OS === "ios" ? 17 : 15,
    },
    item_text_price: {
        backgroundColor: COLORS.white,
        borderRadius: 24,
        left: Platform.OS === "ios" ? 180 : 150,
        paddingHorizontal: 18,
        paddingVertical: 10,
    }
});