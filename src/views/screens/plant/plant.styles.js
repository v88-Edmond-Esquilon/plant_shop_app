import { StyleSheet, Platform } from "react-native";
import { COLORS, FONT } from "../../../_constants/constants.styles";


export const plant_styling = StyleSheet.create({
    content_container: {
        alignItems:"center",
        backgroundColor: COLORS.white,
        height: "100%",
        justifyContent: "center",
        position: "relative",
    },
    plant_type_text: {
        color: COLORS.primary,
        fontFamily: FONT.satoshi_bold,
        fontSize: 147,
        opacity: 0.3,
        position: "absolute",
        top: "5%",
        zIndex: -100,
    },
    image_container: {
        borderRadius: 100,
        height: 170,
        position: "absolute",
        top: "20%",
        width: 170,
    },
    plant_image: {
        height: 180,
        position: "absolute",
        resizeMode: "center",
        top: Platform.OS === "ios"? "20%" : "19%",
        width: 150,
    },
    item_description: {
        color: "#8B8B8B",
        fontFamily: FONT.satoshi_italic,
        marginTop: Platform.OS === "ios"? 130 : 0,
        position: "absolute",
        textAlign: "center",
        width: 300,
    },
    controls_container: {
        alignItems: "center",
        flexDirection: "row",
        height: Platform.OS === "ios"? 220 : 180,
        justifyContent: "space-between",
        marginTop: Platform.OS === "ios"? 250 : 250,
        width: "100%",
    },
    quantity_text: {
        fontFamily: FONT.satoshi_bold,
        fontSize: 102,
    },
    increment_container: {
        alignItems: "center",
        height: 220,
        justifyContent: "center",
        width: 96,
    },
    decrement_container: {
        alignItems: "center",
        height: 220,
        justifyContent: "center",
        width: 96,
    },
    decrement_btn: {
        alignItems: "center",
        borderRadius: 100,
        height: 50,
        justifyContent: "center",
        width: 50,
    },
    increment_btn: {
        alignItems: "center",
        borderRadius: 100,
        height: 50,
        justifyContent: "center",
        width: 50,
    },
    add_to_cart_btn: {
        alignItems: "center",
        backgroundColor: "black",
        borderRadius: 42,
        flexDirection: "row",
        height: 82, 
        padding: 10,
        width: Platform.OS === "ios"? 382 : 310,
    },
    cart_icon: {
        alignItems: "center",
        backgroundColor: COLORS.primary,
        borderRadius: 100,
        height: 60 ,
        justifyContent: "center",
        width: 60,
    },
    add_cart_btn_text: {
        color: COLORS.white,
        fontFamily: FONT.satoshi_bold,
        fontSize: 18,
        marginLeft: 10,
    },
    add_cart_btn_price: {
        color: COLORS.white,
        fontFamily: FONT.satoshi_bold,
        fontSize: 18,
        marginLeft: "auto",
        marginRight: 10,
    }
});