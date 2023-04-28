import { StyleSheet, Platform } from "react-native";
import { COLORS, FONT } from "../../../_constants/constants.styles";


export const dashboard_footer_styles = StyleSheet.create({
    background_footer_image: {
        alignItems: "center",
        alignSelf: "flex-start",
        flexDirection: "row",
        height: Platform.OS === "ios" ? 110 : 100,
        marginTop: 5,
        resizeMode: "contain",
        width: "100%",
    },
    cart_counter_container: {
        backgroundColor: COLORS.black,
        borderRadius: 200,
        height: 50,
        justifyContent: "center",
        marginLeft: 24,
        width: 50,
    },
    cart_counter_text: {
        color: COLORS.white,
        fontFamily: FONT.satoshi_regular,
        fontSize: 24,
        textAlign: "center",
    },
    image_plant_stack: {
        backgroundColor: "#D9FCED",
        borderColor: COLORS.primary, 
        borderRadius: 200,
        borderWidth: 2,
        height: 50,
        position: "relative",
        resizeMode: "cover",
        width: 50,
    },
    image_stack_container: {
        flexDirection: "row",
        marginLeft: "auto",
        marginRight: 24,
        maxWidth: 155,
        overflow: "hidden",
        
    },
});