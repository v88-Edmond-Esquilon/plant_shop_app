import { StyleSheet, Platform } from "react-native";
import { COLORS, FONT } from "../../../_constants/constants.styles";


export const plant_styling = StyleSheet.create({
    content_container: {
        height: "100%",

        backgroundColor: COLORS.white,
        position: "relative",
        justifyContent: "center",
        alignItems:"center"
    },
    plant_type_text: {
        fontSize: 147,
        position: "absolute",
        top: "5%",
        opacity: 0.3,
        color: COLORS.primary,
        fontFamily: FONT.satoshi_bold,
        zIndex: -100,
    },
    image_container: {
        width: 170,
        height: 170,
        borderRadius: 100,
        position: "absolute",
        top: "20%"

    },
    plant_image: {
        width: 280,
        height: 280,
        position: "absolute",
        top: "9%",
        resizeMode: "cover"
    },
    item_description: {
        textAlign: "center",
        width: 300,
        fontFamily: FONT.satoshi_italic,
        color: "#8B8B8B",
        marginTop: Platform.OS === "ios"? 130 : 150
    },
    controls_container: {
     
        borderWidth: 1,
        borderColor: "black",
     
        alignItems: "center",
        justifyContent: "space-between",
        height: 220
    },
    quantity_text: {

    }
});