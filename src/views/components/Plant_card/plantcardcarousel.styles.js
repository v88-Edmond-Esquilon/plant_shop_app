import { StyleSheet, Platform } from "react-native";
import { COLORS, FONT } from "../../../_constants/constants.styles";


export const plant_card_styling = StyleSheet.create({
    plant_card_container: {
        alignItems: "center",
        backgroundColor: COLORS.white,
        borderRadius: 42,
        elevation: 10, // for Android
        height: Platform.OS === "ios" ? 455 : 400,
        justifyContent: "space-between",
        padding: 20,
        shadowColor: "#000", // for iOS
        shadowOffset: { width: 0, height: 2 }, // for iOS
        shadowOpacity: 0.25, // for iOS
        width: Platform.OS === "ios" ? 275 : 250,
    },
    image_container:{
        alignItems: "center",
        backgroundColor: COLORS.image_bg_color,
        borderRadius: 23,
        height: Platform.OS === "ios" ? 250 : 210,
        justifyContent: "flex-end",
        width: Platform.OS === "ios" ? 240 : 210,
    },
    image: {
        height: Platform.OS === "ios" ? 240 : 210,   
        resizeMode: "center",
        width: 250,
    },
    item_name: {
        fontFamily: FONT.satoshi_regular,
        fontSize: 24,
    },
    item_description: {
        color: COLORS.description_color,
        fontFamily: FONT.satoshi_regular,
        fontSize: 14,
        textAlign: "center",
    },
    add_to_cart_btn: {
        alignItems: "center",
        alignSelf: "flex-end",
        backgroundColor: COLORS.black,
        borderRadius: 42,
        flexDirection: "row",
        height: 50,
        padding: 15,
        width: "100%",
    },
    add_cart_label_btn: {
        color: COLORS.white,
        fontFamily: FONT.satoshi_regular,
        fontSize: 18,
    },
    plant_card_carousel_view:{
        paddingBottom: 25,
    },

});
  