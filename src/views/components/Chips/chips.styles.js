import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../../_constants/constants.styles";
export const chip_styles = StyleSheet.create({
    chip: {
        width: 90,
        height: 46,
        borderRadius: 60,
        backgroundColor: COLORS.white,
        padding: 8,
        alignItems: "center",  
        justifyContent: "center",
    },
    active_chip: {
        backgroundColor: COLORS.primary,
        width: "100%",
        height: "100%",
        borderRadius: 24,
        alignItems: "center",  
        justifyContent: "center",
    },
    chip_text: {
        fontFamily: FONT.config_regular
    }
});