/** React Native */
import { View, Text, Image, TouchableOpacity } from "react-native";
/** React */
import React from "react";
/** Plugin */
import { ShoppingCartIcon } from "react-native-heroicons/outline";
/** Styling */
import { plant_card_styling } from "./plantcard.styles";
import { COLORS } from "../../../_constants/constants.styles";

const PlantCard = ({ plant_details }) => {
    const { plant_card_container, image_container, image, item_name, item_description,
            add_to_cart_btn, add_cart_label_btn } = plant_card_styling;


    return (
        <View style={plant_card_container}>
            <View style={image_container}>
                <Image source={plant_details.img} style={ image }/>
            </View>
            <Text style={item_name}>{plant_details.item_name}</Text>
            <Text style={item_description}>{plant_details.description}</Text>
            <TouchableOpacity style={add_to_cart_btn}>
                <ShoppingCartIcon color={COLORS.primary} style={{ marginRight: 5}}/>
                <Text style={add_cart_label_btn}>Add to Cart</Text>
                <Text style={[add_cart_label_btn, {marginLeft: "auto"}]}> &#8369;{plant_details.price}</Text>
            </TouchableOpacity>
        </View>
    )
}


export default PlantCard;