import { StyleSheet, Platform } from "react-native";
import { COLORS, FONT } from "../../../_constants/constants.styles";

export const cart_styles = StyleSheet.create({
    cart_container: {
        alignItems: "center",
        backgroundColor: COLORS.white,
        height: "100%",
        justifyContent: "center",
        position: "absolute",
        width: "100%",
        zIndex: 50,
    },
    cart_list_container: {
        height: "100%",
        marginTop: Platform.OS === "ios"? 210 : 240,
        width: "100%",
    },
    cart_list_item: {
        height: Platform.OS === "ios"? 405 : 350,
        margin: 24 ,
        marginTop: 25,
        width: Platform.OS === "ios"? 380 : 310,
    },
    cart_controls_container: {
        alignSelf: "center",
        height: Platform.OS === "ios"? 252: 205,
        width: Platform.OS === "ios"? 390 : 310,
    },
    cart_controls: {
        height: Platform.OS === "ios"? 252 : 210,
        width: Platform.OS === "ios"? 390 : 307,
    },
    delivery_fee_text: { 
        borderBottomColor: COLORS.white,
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between", 
        marginHorizontal: 24,
        marginTop: Platform.OS === "ios"? 54 : 44,
        paddingBottom: 20,
    },
    total_amount_text: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: Platform.OS === "ios"? 16 : 10,
        marginHorizontal: 24,
        marginTop: Platform.OS === "ios"? 20 : 15,
    },
    swipe_payment_button:{
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderColor: "black",
        borderRadius: 42,
        borderWidth: 1,
        flexDirection: "row",
        height: Platform.OS === "ios"? 60: 50,
        marginHorizontal: 24,
        paddingHorizontal: 10,
    },
    payment_swiper: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        borderRadius: 38,
        height: Platform.OS === "ios"? 45: 35,
        marginHorizontal: 10,
        overflow: "hidden",
        padding: 10,
        position: "absolute",
        width:  Platform.OS === "ios"? 110 : 80,
    },
    swiper_image: {
        height: "100%",
        resizeMode: "cover",
        width: "100%",
    },
    swiper_payment_text: (paid) => ({
        fontFamily: FONT.satoshi_bold,
        fontSize: 18,
        left: paid? 0 : Platform.OS === "android"? 120 : 195,
    }),
})