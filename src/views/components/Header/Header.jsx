import { View, Text, Pressable } from "react-native";
import React from "react";
import { header_styles } from "./header.styles";
import { COLORS } from "../../../_constants/constants.styles";
import { useFonts } from "expo-font";
import { Bars3Icon } from "react-native-heroicons/outline";


const Header = ({ title, higlighted_text }) => {
    const { header_container, header_title, header_bold, burger_btn} = header_styles;

    return (
        <View style={header_container}>
            <Text style={header_title}>
                {title}
                <Text style={header_bold}>
                    {higlighted_text}
                </Text>
            </Text>
            <Pressable android_ripple={{ color: COLORS.primary }} style={burger_btn}>
                <Bars3Icon width={24} height={24} color="#105D5C"/>
            </Pressable>
        </View>
    )
}

export default Header;