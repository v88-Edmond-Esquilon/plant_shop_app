import { StatusBar, Platform } from "react-native";
const COLORS = {
    primary: "#44F1A6",
    secondary: "#E3F0FF",
    image_bg_color: "#E6ECF1",
    description_color: "#8B8B8B",
    black: "#000",
    white: "#FFF",
}

const FONT = {
    satoshi_regular: "Satoshi-Regular",
    satoshi_semi_bold: "Satoshi-Medium",
    satoshi_bold: "Satoshi-Bold",
    satoshi_italic: "Satoshi-Italic",
    config_regular: "Config-Regular",
    config_semibold: "Config-Semibold",
}

const SAFE_AREA_VIEW = {
    main_flex: {
        backgroundColor: "transparent",
        flex: 1,
        paddingTop: Platform.OS === "android"? StatusBar.currentHeight : 0,
    }
}

export {
    COLORS,
    SAFE_AREA_VIEW,
    FONT
}