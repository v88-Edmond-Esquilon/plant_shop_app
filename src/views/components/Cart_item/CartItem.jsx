/** React Native */
import { View, Text, Image } from "react-native";
/** React */
import React from "react";
/** Plugin */
import { LinearGradient } from "expo-linear-gradient";
/** Styling */
import { cart_item_style } from "./cartitem.styles";
import { COLORS, FONT } from "../../../_constants/constants.styles";

const CartItem = ({ item_details, is_last_item }) => {
    const { cart_item_container, image_container, item_image, item_text_name, item_text_price } = cart_item_style;

    return (
        <View style={cart_item_container(is_last_item)}>
            <LinearGradient colors={[ "#CCDDF6", COLORS.white]} style={image_container}/>
            <Image source={item_details.img}  style={item_image}/>
            <View style={{ position: "relative", left: 90}}>
                <Text style={item_text_name}>{item_details.plant_name}</Text>
                <Text>{`${item_details.quantity} piece${item_details.quantity > 1 ? 's' : ''}`}</Text>
            </View>
            <View style={item_text_price}>
                <Text style={{ fontFamily: FONT.satoshi_bold, fontSize: 16}}>&#8369; {item_details.price}</Text>
            </View>
        </View>
    )
}

export default CartItem;