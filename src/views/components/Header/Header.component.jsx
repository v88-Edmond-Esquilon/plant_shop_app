/** React Native */
import { 
        View,
        Text, 
        TouchableOpacity
    } from "react-native";
/** React */
import React from "react";
/** Styling */
import { header_styles } from "./header.component.styles";
/** Plugin */
import { Bars3Icon } from "react-native-heroicons/outline";

const { 
        header_container,
        header_title,
        header_bold,
        burger_btn,
    } = header_styles;

const Header = ({ title, screen }) => {
  
    return (
        <View style={header_container(screen)}>
            <Text style={header_title}>
                {screen === "dashboard"? "Let's Make our\nlives" : "The Potted"} 
                <Text style={header_bold}>
                    {screen === "dashboard"? " Greener" : `\n${title}`} 
                </Text>
            </Text>
            <TouchableOpacity style={burger_btn}>
                <Bars3Icon width={24} height={24} color="#105D5C"/>
            </TouchableOpacity>
        </View>
    )
}

export default Header;