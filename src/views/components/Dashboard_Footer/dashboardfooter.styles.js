import { StyleSheet, Platform } from "react-native";
import { COLORS, FONT } from "../../../_constants/constants.styles";


export const dashboard_footer_styles = StyleSheet.create({
    background_footer_image: {
        width: "100%",
        height: Platform.OS === "ios" ? 110 : 100,
        resizeMode: "contain",
        marginTop: 5,
        alignItems: "center",
        flexDirection: "row"
    },
    cart_counter_container: {
        width: 50,
        height: 50,
        borderRadius: 200,
        backgroundColor: COLORS.black,
        justifyContent: "center",
        marginLeft: 24,
    },
    cart_counter_text: {
        color: COLORS.white,
        textAlign: "center",
        fontFamily: FONT.satoshi_regular,
        fontSize: 24,
    },
    image_plant_stack: {
        resizeMode: "cover",
        borderWidth: 2,
        backgroundColor: "#D9FCED",
        borderColor: COLORS.primary, 
        width: 50,
        height: 50,
        borderRadius: 200,
        position: "relative",
    }
});